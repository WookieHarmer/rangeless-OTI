## Collection Service

The Collection service provides functions to wrap and push raw source data, along with metadata used for search indexing, to the nearest data collection node. Two modes of collection are supported:
(1) `PushRawMessage` - single message push
(2) `PushRawMessages` - batch message push

---

#### `PushRawMessage`
`PushRawMessage` - wraps and pushes single raw message. It is recommended to be used when a data source is producing few messages at a time, or very large messages. Data sources generating a large number of smaller messages, or messages in bursts should use `PushRawMessages` instead
```
rpc PushRawMessage (PushRawMessageRequest) returns (PushRawMessageResponse)
```

`PushRawMessageRequest`:
* `message` - envelope wrapping the raw message
```
message PushRawMessageRequest {
  WrappedMessage  message
}
```

`PushRawMessageResponse`:
* `duplicate_details` - contains details pertaining to duplicate raw messages when present
```
message PushRawMessageResponse {
  DuplicateDetails  duplicate_details
}
```

---
#### `PushRawMessages`
`PushRawMessages` - wraps and pushes a batch of raw messages. It is recommended to be used when a data source is producing a large number of smaller messages, or messages in bursts. Data sources generating a few messages at a time, or very large messages should use `PushRawMessage` instead
```
rpc PushRawMessages (PushRawMessagesRequest) returns (PushRawMessagesResponse)
```

`PushRawMessagesRequest`:
* `metadata` - fields that should be set on every request
* `user_metadata` - optional list of custom key/value labels
* `messages` - list of envelopes wrapping the raw messages

```
message PushRawMessagesRequest {
  Metadata                      metadata
  repeated UserDefinedMetadata  user_metadata
  repeated WrappedMessage       messages
}
```

The `PushRawMessageResponse` object:
* `duplicate_details` - contains details pertaining to duplicate raw messages when present

```
message PushRawMessagesResponse {
  DuplicateDetails  duplicate_details
}
```

---
##### `DuplicateDetails`
The duplicate details structure defines whether or not a `PushRawMessageResponse` or `PushRawMessagesResponse` contains one or more duplicate `idempotency_key`, and a list of those duplicate keys
* `duplicates` - true when request contained one or more duplicate `idempotency_key`
* `idempotency_keys` - list of duplicate keys

```
message DuplicateDetails {
  bool             duplicates
  repeated string  idempotency_keys
}
```
