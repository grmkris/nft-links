import { Bytes, log, BigInt, store } from '@graphprotocol/graph-ts'
import { StateChange } from '../../generated/CMS/CMS'
import {Comment, Post, Space, User} from "../../generated/schema";
import { encode } from 'as-base58'

export enum ACTION_ENUM {
  CREATE_SPACE = 1,
  CREATE_POST = 2,
  DELETE_POST = 3,
  NEW_COMMENT = 4,
  DELETE_COMMENT= 5,
}

export function getOrCreateUser(address: string) : User {
  let user = User.load(address)
  if (user == null) {
    user = new User(address)
    user.save()
  }
  return user
}

function initSpace(eventAuthor: string, spaceId: string, event: StateChange): void {
  let space = Space.load(spaceId)
  if (space != null) return
  space = new Space(spaceId)

  const user = getOrCreateUser(eventAuthor)

  space.owner = user.id
  space.deployBlock = event.block.number
  space.deployTimestamp = event.block.timestamp
  space.txHash = event.transaction.hash
  space.save()
}

function createPost(eventAuthor: string, spaceId: string, postId: string, content: string, event: StateChange) : void {
  log.debug("createPost, {} {} {} {}", [eventAuthor, spaceId, postId, content])
  let post = Post.load(postId)
  if (post != null) return
  let space = Space.load(spaceId)
  if (space == null) return
  if (space.owner != eventAuthor) return

  post = new Post(postId)
  const user = getOrCreateUser(eventAuthor)

  post.owner = user.id
  post.space = spaceId
  post.content = content
  post.deployBlock = event.block.number
  post.deployTimestamp = event.block.timestamp
  post.txHash = event.transaction.hash
  post.save()

}

function createComment(eventAuthor: string, postId: string, commentId : string, content: string, event: StateChange) : void {
  let comment = Comment.load(commentId)
  if (comment != null) return
  let post = Post.load(postId)
  if (post == null) return

  comment = new Comment(commentId)
  const user = getOrCreateUser(eventAuthor)

  comment.owner = user.id
  comment.post = postId
  comment.content = content
  comment.deployBlock = event.block.number
  comment.deployTimestamp = event.block.timestamp
  comment.txHash = event.transaction.hash
  comment.save()
  
}

function deleteComment(eventAuthor: string, commentId : string) : void{
  let comment = Comment.load(commentId)
  if (comment == null) return

  if (comment.owner != eventAuthor) return

  store.remove("Comment", comment.id)
}

function deletePost(eventAuthor: string, postId: string) : void{
  let post = Post.load(postId)
  if (post == null) return

  if (post.owner != eventAuthor) return

  store.remove("Post", post.id)
}

export function handleStateChange(event: StateChange): void {

  // event.params.seed_data has starting 0x and then header and body.
  // first 4 characters are header, rest is body
  log.info("handleStateChange {}", [event.params.data.toHexString()])
  const header = event.params.data.toHex().slice(2, 4)
  // header byte 1 is the action (space, project, platform, content) byte 2 is the verb (create, assign, unassign, approve, revoke)
  const action = header.slice(0, 2)
  const eventAuthor = event.params.author.toHexString()
  const body = event.params.data.toHex().slice(4)
  log.info('action: {} author: {}', [action.toString(), eventAuthor])
  if (action == ACTION_ENUM.CREATE_SPACE.toString().padStart(2, '0')) {
    const spaceId = buildEntityIdFromEvent(event)
    initSpace(eventAuthor, spaceId, event)
  }
  if(action == ACTION_ENUM.CREATE_POST.toString().padStart(2, '0')) {
    log.debug("create post", [])
    const spaceId = body.slice(0, 66)
    const postId = buildEntityIdFromEvent(event)
    const bytes = Bytes.fromHexString('0x1220' + body.slice(66))
    const content = encode(bytes)
    createPost(eventAuthor, spaceId, postId, content, event)
  }
  if (action == ACTION_ENUM.NEW_COMMENT.toString().padStart(2, '0')) {
    const postId = body.slice(0, 66)
    const commentId = buildEntityIdFromEvent(event)
    const bytes = Bytes.fromHexString('0x1220' + body.slice(66))
    const content = encode(bytes)
    createComment(eventAuthor, postId, commentId, content, event)
  }
  if (action == ACTION_ENUM.DELETE_COMMENT.toString().padStart(2, '0')) {
    const commentId = body.slice(0, 66)
    deleteComment(eventAuthor, commentId)
  }
  if (action == ACTION_ENUM.DELETE_POST.toString().padStart(2, '0')) {
    const postId = body.slice(0, 66)
    deletePost(eventAuthor, postId)
  }
}

export function buildEntityIdFromEvent(event: StateChange) : string {
  const noun = event.params.data.toHex().slice(3, 4)
  let txHash = event.transaction.hash.slice(0);
  const bigEndianTxHash = txHash.reverse()
  const txHashAsBigInt = BigInt.fromUnsignedBytes(Bytes.fromUint8Array(bigEndianTxHash))
  const entityIdAsBigInt = txHashAsBigInt.plus(event.logIndex)
  return noun + entityIdAsBigInt.toHex().slice(2).padStart(65, '0')
}