import { BigInt } from "@graphprotocol/graph-ts"
import {
  NftLink,
  Approval,
  ApprovalForAll,
  Minted,
  OwnershipTransferred,
  Transfer
} from "../generated/NftLink/NftLink"
import { Nft, NftOwnerMapping, User } from "../generated/schema";

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleMinted(event: Minted): void {
  const creatorId = event.params.sender.toHexString();
  const ownerId = event.params.to.toHexString();
  const tokenId = event.params.tokenId.toString();
  const metadata = event.params.tokenUri;
  const nftId = tokenId;

  let nft = Nft.load(nftId);
  if (nft != null) return
  nft = new Nft(nftId)

  // get or create owner
  let owner = User.load(ownerId);
  if (owner == null) {
    owner = new User(ownerId);
    owner.txHash = event.transaction.hash;
    owner.deployBlock = event.block.number;
    owner.deployTimestamp = event.block.timestamp;
    owner.save()
  }

  // get or create creator
  let creator = User.load(creatorId);
  if (creator == null) {
    creator = new User(creatorId);
    creator.txHash = event.transaction.hash;
    creator.deployBlock = event.block.number;
    creator.deployTimestamp = event.block.timestamp;
    creator.save()
  }


  nft.deployBlock = event.block.number
  nft.deployTimestamp = event.block.timestamp
  nft.txHash = event.transaction.hash
  nft.creator = creator.id
  nft.metadata = metadata
  nft.owner = owner.id
  nft.save()

  // create owner history mapping
  let ownerHistoryId = buildNftOwnerMappingTableId(owner.id, nft.id, "0");
  let ownerHistory = NftOwnerMapping.load(ownerHistoryId);
  if (ownerHistory == null) {
    ownerHistory = new NftOwnerMapping(ownerHistoryId);
    ownerHistory.nft = nft.id
    ownerHistory.user = owner.id
    ownerHistory.txHash = event.transaction.hash
    ownerHistory.deployBlock = event.block.number
    ownerHistory.deployTimestamp = event.block.timestamp
    ownerHistory.save()
  }

}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}

const buildNftOwnerMappingTableId = (nftId: string, userId: string, number: string) : string  => {
  return nftId + "-" + userId + "-" + number;
}