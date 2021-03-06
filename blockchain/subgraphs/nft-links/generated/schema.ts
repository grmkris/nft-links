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

  get posts(): Array<string> {
    let value = this.get("posts");
    return value!.toStringArray();
  }

  set posts(value: Array<string>) {
    this.set("posts", Value.fromStringArray(value));
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

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("space", Value.fromString(""));
    this.set("content", Value.fromString(""));
    this.set("deployBlock", Value.fromBigInt(BigInt.zero()));
    this.set("deployTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Post entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
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

  get space(): string {
    let value = this.get("space");
    return value!.toString();
  }

  set space(value: string) {
    this.set("space", Value.fromString(value));
  }

  get comments(): Array<string> {
    let value = this.get("comments");
    return value!.toStringArray();
  }

  set comments(value: Array<string>) {
    this.set("comments", Value.fromStringArray(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
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

    this.set("owner", Value.fromString(""));
    this.set("post", Value.fromString(""));
    this.set("content", Value.fromString(""));
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

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get post(): string {
    let value = this.get("post");
    return value!.toString();
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
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

  get spaces(): string | null {
    let value = this.get("spaces");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set spaces(value: string | null) {
    if (!value) {
      this.unset("spaces");
    } else {
      this.set("spaces", Value.fromString(<string>value));
    }
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
