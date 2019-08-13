## Retrieval Service

The Retrieval service provides functions to retrieve indexed raw message data from data source connected to the node. Because the Retrieval service never reads or modifies the raw message data, search is limited to metadata such as position in stream, time range, message type, encoding type, etc. Additionally, metadata and user defined metadata provided by the Collection service will also be indexed for search. Two modes of retrieval are supported:
(1) `GetRawMessage` - retrieve a single message
(2) `GetRawMessages` - retrieve a batch of messages

---
#### `GetRawMessage`
`GetRawMessage` - retrieves single raw message that complies with the provided filters. It is recommended to be used when retrieving messages that are expected to be very large, or when retrieving messages infrequently. In most cases `GetRawMessages` will be the more efficient choice

```
rpc GetRawMessage (GetRawMessageRequest) returns (GetRawMessageResponse)
```

`GetRawMessageRequest`:
* `retrieval_types` - contains a list of `MessageRetrievalType` enum constants indicating which combination of search strategies should be used to filter messages. Supported `retrieval_types` are:
    * `UNSPECIFIED` - default value; return error if specified
    * `INDEX` - return next message from `next_index` position
    * `TIME` - return messages between `TimeRange`.`start_time` and `TimeRange`.`end_time`
    * `MESSAGE_TYPE` - filters messages by supplied `SourceType`.`message_Type`
    * `ENCODING_TYPE` - filters messages by supplied `SourceType`.`encoding_type` or `SourceType`.`custom_encoding_type`
    * `METADATA` - filters messages by supplied `metadata`
    * `USER_DEFINED_METADATA` - filters messages by supplied `user_metadata`
* `returned_metadata_types` - contains a list of `ReturnedMetadataType` enum constants indicating what metadata should be returned. (NOTE: `next_index`, `created_time`, and `raw_message` will be returned by default unless `RETURN_NONE` is set)
    * `UNSPECIFIED` - default value; return only default fields
    * `RETURN_NONE` - return only `raw_message`
    * `RETURN_ALL` - returns all metadata populated by origin request
    * `RETURN_TIME` - return `TimeRange`
    * `RETURN_SOURCE_TYPE` - return `SourceType` in response
    * `RETURN_METADATA` - include `TimeRange` in response
    * `RETURN_USER_DEFINED_METADATA` - include `UserDefinedMetadata` in response
    * `RETURN_POSITION` - include `Position` in response
* `metadata` - structured metadata included with every message
* `user_metadata` - optional list of custom key/value labels
* `source_type` - contains the `message_type` along with `encoding_type` / `custom_encoding_type`
* `time_range` - contains an `RFC3339` formatted `start_time` and `end_time` Timestamp with nanosecond resolution
* `next_index` - the `next_index` received by `GetRawMessageResponse` or `GetRawMessageResponses` (default: 0)

`MessageRetrievalType` precedence:
* (0) `UNSPECIFIED` - default value. When `UNSPECIFIED` is present on a request, processing will be short circuited, and an error will be returned
* (1) `INDEX` - applied first. Providing an explicit index implies you only care about messages after that position
* (2) `TIME` - applied after index. It is valid to set only `start_time`, only `end_ime`, or both. Only events within the time range will be returned
* (3) `MESSAGE_TYPE` / `ENCODING_TYPE` / `POSITION_BOUNDING_BOX` - applied after filtering by index and time
* (4) Remaining filters have equal precedence. Filters operate as inclusive (logical AND); Every message returned must contain all requested filters

```
enum MessageRetrievalType {
  UNSPECIFIED
  INDEX
  TIME
  MESSAGE_TYPE
  ENCODING_TYPE
  METADATA
  USER_DEFINED_METADATA
  POSITION_BOUNDING_BOX
}

enum ReturnedMetadataType {
  RETURN_UNSPECIFIED
  RETURN_NONE
  RETURN_ALL
  RETURN_TIME
  RETURN_SOURCE_TYPE
  RETURN_METADATA
  RETURN_USER_DEFINED_METADATA
  RETURN_POSITION
}

message GetRawMessageRequest {
  repeated MessageRetrievalType  retrieval_types
  repeated ReturnedMetadataType  returned_metadata_types
  Metadata                       metadata
  repeated UserDefinedMetadata   user_metadata
  SourceType                     source_type
  PositionBoundingBox            bounding_box
  TimeRange                      time_range
  int64                          next_index
}
```

---

`GetRawMessageResponse`:
* `message` - envelope that wraps the raw message
* `next_index` - index of the wrapped raw message, should be provided to `GetRawMessageRequest` when retrieving by offset is desired
* `len_bytes` - length in bytes used by raw message wrapped by `message`

```
message GetRawMessageResponse {
  WrappedMessage  message
  int64           next_index
  int64           len_bytes
}
```

---
#### `GetRawMessages`
`GetRawMessages` - retrieves a batch of messages that comply with the provided filters. It is recommended choice in most cases. In situations where messages known to be very large are being retrieved, or messages are being retrieved infrequently `GetRawMessage` should be used instead

```
rpc GetRawMessages (GetRawMessagesRequest) returns (GetRawMessagesResponse)
```

`GetRawMessagesRequest`:
* `retrieval_types` - contains a list of `MessageRetrievalType` enum constants indicating which combination of search strategies should be used to filter messages. Supported `retrieval_types` are:
    * `UNSPECIFIED` - default value; return error if specified
    * `INDEX` - return next message from `next_index` position
    * `TIME` - return messages between `TimeRange`.`start_time` and `TimeRange`.`end_time`
    * `MESSAGE_TYPE` - filters messages by supplied `SourceType`.`message_Type`
    * `ENCODING_TYPE` - filters messages by supplied `SourceType`.`encoding_type` or `SourceType`.`custom_encoding_type`
    * `METADATA` - filters messages by supplied `metadata`
    * `USER_DEFINED_METADATA` - filters messages by supplied `user_metadata`
* `returned_metadata_types` - contains a list of `ReturnedMetadataType` enum constants indicating what metadata should be returned. (NOTE: `next_index`, `created_time`, and `raw_message` will be returned by default unless `RETURN_NONE` is set)
    * `UNSPECIFIED` - default value; return only default fields
    * `RETURN_NONE` - return only `raw_message`
    * `RETURN_ALL` - returns all metadata populated by origin request
    * `RETURN_TIME` - return `TimeRange`
    * `RETURN_SOURCE_TYPE` - return `SourceType` in response
    * `RETURN_METADATA` - include `TimeRange` in response
    * `RETURN_USER_DEFINED_METADATA` - include `UserDefinedMetadata` in response
    * `RETURN_POSITION` - include `Position` in response
* `metadata` - structured metadata included with every message
* `user_metadata` - optional list of custom key/value labels
* `source_type` - contains the `message_type` along with `encoding_type` / `custom_encoding_type`
* `time_range` - contains an `RFC3339` formatted `start_time` and `end_time` Timestamp with nanosecond resolution
* `next_index` - the `next_index` received by `GetRawMessageResponse` or `GetRawMessageResponses` (default: 0)
* `count` - upper bound of messages to return
* `len_bytes` - the maximum numbers of bytes that may be returned by `messages` (note: this limit applies specifically to the raw messages themselves)

`MessageRetrievalType` precedence:
* (0) `UNSPECIFIED` - default value. When `UNSPECIFIED` is present on a request, processing will be short circuited, and an error will be returned
* (1) `INDEX` - applied first. Providing an explicit index implies you only care about messages after that position
* (2) `TIME` - applied after index. It is valid to set only `start_time`, only `end_ime`, or both. Only events within the time range will be returned
* (3) `MESSAGE_TYPE` / `ENCODING_TYPE` / `POSITION_BOUNDING_BOX` - applied after filtering by index and time
* (4) Remaining filters have equal precedence. Filters operate as inclusive (logical AND); Every message returned must contain all requested filters

`RetrievalType` precedence:
* (0) `UNSPECIFIED` - default value. When `UNSPECIFIED` is present on a request, processing will be short circuited, and an error will be returned
* (1) `INDEX` - applied first. Providing an explicit index implies you only care about messages after that position
* (2) `TEMPORAL` - applied after index. It is valid to set only `startTime`, only `endTime`, or both. Only events within the time range will be returned
* (3) `ENCODING_TYPE` / `METADATA` - filters applied to all remaining messages. Metadata filters operate as inclusive (logical AND); Every message returned must contain all requested metadata

```
enum MessageRetrievalType {
  UNSPECIFIED
  INDEX
  TIME
  MESSAGE_TYPE
  ENCODING_TYPE
  METADATA
  USER_DEFINED_METADATA
  POSITION_BOUNDING_BOX
}

enum ReturnedMetadataType {
  RETURN_UNSPECIFIED
  RETURN_NONE
  RETURN_ALL
  RETURN_TIME
  RETURN_SOURCE_TYPE
  RETURN_METADATA
  RETURN_USER_DEFINED_METADATA
  RETURN_POSITION
}

message GetRawMessagesRequest {
  repeated MessageRetrievalType  retrieval_types
  repeated ReturnedMetadataType  returned_metadata_types
  Metadata                       metadata
  repeated UserDefinedMetadata   user_metadata
  SourceType                     source_type
  PositionBoundingBox            bounding_box
  TimeRange                      time_range
  int64                          next_index
  int64                          limit
  int64                          len_bytes
}
```

---

`GetRawMessagesResponse`:
* `messages` - list of envelopes wrapping the raw messages
* `next_index` - index of the last message in `messages`, should be provided to `GetRawMessagesRequest` when retrieving by offset is desired
* `len_bytes` - length in bytes used by raw messages wrapped by `messages`
* `count` - number of raw messages wrapped by `messages`

```
message GetRawMessagesResponse {
  repeated WrappedMessage  messages
  int64                    next_index
  int64                    len_bytes
  int64                    count
}
```

---
