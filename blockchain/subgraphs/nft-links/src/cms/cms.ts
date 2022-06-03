import { Bytes, log, BigInt } from '@graphprotocol/graph-ts'
import { StateChange } from '../../generated/CMS/CMS'
import {Space, User} from "../../generated/schema";

export enum ACTION_ENUM {
  CREATE_SPACE=1,
  NEW_COMMENT=2,
  DELETE_COMMENT=3,
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

function createComment(eventAuthor: string, spaceId: string, comment: string, event: StateChange) : void {
  
}

function deleteComment(eventAuthor: string, projectId: string, contentId: string, event: StateChange) : void{
  
}

export function handleStateChange(event: StateChange): void {

  // event.params.seed_data has starting 0x and then header and body.
  // first 4 characters are header, rest is body
  log.info("handleStateChange {}", [event.params.data.toHexString()])
  const header = event.params.data.toHex().slice(2, 4)
  // header byte 1 is the action (space, project, platform, content) byte 2 is the verb (create, assign, unassign, approve, revoke)
  const action = header.slice(0, 2)
  const eventAuthor = event.params.author.toHexString()
  log.info('action: {} author: {}', [action.toString(), eventAuthor])

  if (action == ACTION_ENUM.CREATE_SPACE.toString().padStart(2, '0')) {
    const spaceId = buildEntityIdFromEvent(event)
    initSpace(eventAuthor, spaceId, event)
  }
  if (action == ACTION_ENUM.NEW_COMMENT.toString().padStart(2, '0')) {
    const body = event.params.data.toHex().slice(6)
    const spaceId = body.slice(0, 66)
    const comment = body.slice(66)
    createComment(eventAuthor, spaceId, comment, event)
  }
  if (action == ACTION_ENUM.DELETE_COMMENT.toString().padStart(2, '0')) {
    const body = event.params.data.toHex().slice(6)
    const contentId = body.slice(0, 66)
    const projectId = body.slice(66)
    deleteComment(eventAuthor, projectId, contentId, event)
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