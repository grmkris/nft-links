// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Space extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Space entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Space entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Space", id.toString(), this);
    }
  }

  static load(id: string): Space | null {
    return changetype<Space | null>(store.get("Space", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get comments(): Array<string> {
    let value = this.get("comments");
    return value!.toStringArray();
  }

  set comments(value: Array<string>) {
    this.set("comments", Value.fromStringArray(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class Comment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator", Value.fromString(""));
    this.set("space", Value.fromString(""));
    this.set("content", Value.fromString(""));
    this.set("postId", Value.fromString(""));
    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Comment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Comment entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Comment", id.toString(), this);
    }
  }

  static load(id: string): Comment | null {
    return changetype<Comment | null>(store.get("Comment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get space(): string {
    let value = this.get("space");
    return value!.toString();
  }

  set space(value: string) {
    this.set("space", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get postId(): string {
    let value = this.get("postId");
    return value!.toString();
  }

  set postId(value: string) {
    this.set("postId", Value.fromString(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get spacesOwner(): string | null {
    let value = this.get("spacesOwner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set spacesOwner(value: string | null) {
    if (!value) {
      this.unset("spacesOwner");
    } else {
      this.set("spacesOwner", Value.fromString(<string>value));
    }
  }

  get commentCreator(): Array<string> {
    let value = this.get("commentCreator");
    return value!.toStringArray();
  }

  set commentCreator(value: Array<string>) {
    this.set("commentCreator", Value.fromStringArray(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("metadata", Value.fromString(""));
    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Nft entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Nft", id.toString(), this);
    }
  }

  static load(id: string): Nft | null {
    return changetype<Nft | null>(store.get("Nft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get ownersHistory(): Array<string> {
    let value = this.get("ownersHistory");
    return value!.toStringArray();
  }

  set ownersHistory(value: Array<string>) {
    this.set("ownersHistory", Value.fromStringArray(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class UserNft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserNft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserNft entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserNft", id.toString(), this);
    }
  }

  static load(id: string): UserNft | null {
    return changetype<UserNft | null>(store.get("UserNft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftCreator(): Array<string> {
    let value = this.get("nftCreator");
    return value!.toStringArray();
  }

  set nftCreator(value: Array<string>) {
    this.set("nftCreator", Value.fromStringArray(value));
  }

  get nftOwner(): Array<string> {
    let value = this.get("nftOwner");
    return value!.toStringArray();
  }

  set nftOwner(value: Array<string>) {
    this.set("nftOwner", Value.fromStringArray(value));
  }

  get nftOwnersHistory(): Array<string> {
    let value = this.get("nftOwnersHistory");
    return value!.toStringArray();
  }

  set nftOwnersHistory(value: Array<string>) {
    this.set("nftOwnersHistory", Value.fromStringArray(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class NftOwnerMapping extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromString(""));
    this.set("nft", Value.fromString(""));
    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftOwnerMapping entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NftOwnerMapping entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NftOwnerMapping", id.toString(), this);
    }
  }

  static load(id: string): NftOwnerMapping | null {
    return changetype<NftOwnerMapping | null>(store.get("NftOwnerMapping", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get deployBlock(): BigInt {
    let value = this.get("deployBlock");
    return value!.toBigInt();
  }

  set deployBlock(value: BigInt) {
    this.set("deployBlock", Value.fromBigInt(value));
  }

  get deployTimestamp(): BigInt {
    let value = this.get("deployTimestamp");
    return value!.toBigInt();
  }

  set deployTimestamp(value: BigInt) {
    this.set("deployTimestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}
