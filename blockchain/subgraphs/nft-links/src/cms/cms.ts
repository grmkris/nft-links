import { Bytes, log } from '@graphprotocol/graph-ts'
import { StateChange } from '../../generated/CMS/CMS'
import {Space, User} from "../../generated/schema";

export const ACTION_ENUM = {
  CREATE_SPACE: '01',
  NEW_COMMENT: '02',
  DELETE_COMMENT: '03',
}

export function getOrCreateUser(address: string) : User {
  let user = User.load(address)
  if (user == null) {
    user = new User(address)
    user.save()
  }
  return user
}

function initSpace(eventAuthor: string, spaceId: string, event: StateChange) {
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

function createComment(eventAuthor: string, spaceId: string, comment: string, event: StateChange) {
  
}

function deleteComment(eventAuthor: string, projectId: string, contentId: string, event: StateChange) {
  
}

export function handleStateChange(event: StateChange): void {
  // event.params.seed_data has starting 0x and then header and body.
  // first 4 characters are header, rest is body
  const header = event.params.data.toHex().slice(2, 6)
  // header byte 1 is the noun (space, project, platform, content) byte 2 is the verb (create, assign, unassign, approve, revoke)
  const noun = header.slice(0, 2)
  const verb = header.slice(2, 4)
  const eventAuthor = event.params.author.toHexString()
  log.info('noun: {}, verb: {} author: {}', [noun.toString(), verb.toString(), eventAuthor])

  if (noun.toString() == ACTION_ENUM.CREATE_SPACE) {
    const spaceId = event.params.data.toHex().slice(6)
    initSpace(eventAuthor, spaceId, event)
  }
  if (noun.toString() == ACTION_ENUM.NEW_COMMENT) {
    const body = event.params.data.toHex().slice(6)
    const spaceId = body.slice(0, 66)
    const comment = body.slice(66)
    createComment(eventAuthor, spaceId, comment, event)
  }
  if (noun.toString() == ACTION_ENUM.DELETE_COMMENT) {
    const body = event.params.data.toHex().slice(6)
    const contentId = body.slice(0, 66)
    const projectId = body.slice(66)
    deleteComment(eventAuthor, projectId, contentId, event)
  }
}
