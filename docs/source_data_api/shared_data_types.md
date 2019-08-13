## Shared Data Types

Shared data types used by multiple services, request, or response types that componse the Source Data API are documented here. Available shared data types are:
* `WrappedMessage` - envelope structure used to wrap the raw messages
* `Metadata` - structured metadata included with every message
* `UserDefinedMetadata` - optional list of key/value labels
* `Position` - positioning information. lat/lon, euler angles, radius, resolution, and TFOM
* `PositionBoundingBox` - a bounding box specified by min/max lat/lon

---
#### `WrappedMessage`
The wrapped message structure is used as an envelope that wraps a raw message from a data source with a list of fields that describe the message contents

* `idempotency_key` - globally unique identifier generated for each message
* `metadata` - fields that should be set on every request
* `user_defined_metadata` - optional list of custom key/value labels
* `message_type` - `MessageType` enum constant describing the type of message being wrapped
* `message_encoding` - defines the message encoding `encoding_type` or `custom_encoding_type`
* `position` - defines position information such as lat/lon, euler angles, radius, resolution, and TFOM
* `created_time` - `RFC3339` formatted time at nanosecond resolution of when the raw message was created
* `raw_message` - raw message data

```
message WrappedMessage {
  enum MessageType {
    UNSPECIFIED
    CUSTOM
    DIS7
    COT
    LINK16
    JREAP
    INSTRUCTOR_COMMENT
  }

  string                        idempotency_key
  Metadata                      metadata
  repeated UserDefinedMetadata  user_metadata
  MessageType                   message_type
  MessageEncoding               message_encoding
  Position                      position
  google.protobuf.Timestamp     created_time
  bytes                         raw_message
}
```

---
#### `Metadata`
The metadata structure contains a list of fields that should be set on every `PushRawMessage` and `PushRawMessages` request made to the Collection service. Metadata may also then be applied as a filter for `GetRawMessage` and `GetRawMessages` requests to the Retrieval service

* `partner_id` - globally unique identifier provided to each parter
* `partner_cert_id` - globally unique identifier provided for each partner's data source collection node
* `source_id` - globally unique identifier generated for each data source (ex: serial number, MAC address, human name, etc.)
* `exercise_id` - globally unique identifier for the exercise data being collected
* `exercise_name` - friendly name for exerciseID to aid discovery and search
* `entity_state_pdu` - the entity state pdu value for the message
* `force_color` - indicates the visibility level of the data being collected (blue team/red team/etc.)

```
message Metadata {
  string  partner_id
  string  partner_cert_id
  string  source_id
  string  exercise_id
  string  exercise_name
  string  entity_state_pdu
  string  force_color
}
```

---
#### `UserDefinedMetadata`
The user defined metadata structure exposes a list of key/value labels that may optionally be set during `PushRawMessage` and `PushRawMessages` requests to the Collection service. User defined metadata may also be applied as a filter for `GetRawMessage` and `GetRawMessages` requests to the Retrieval service

* `key` - user defined key that will be indexed for search/retrieval
* `value` - user defined value that will be indexed for search/retrieval
* `value_type` - not indexed, provided as a convenience for consumers who may need to parse `value`
* `unit_type` - not indexed, the unit type `value` represents (ex: kilometers, seconds, etc.)
```
message UserDefinedMetadata {
  string  key
  string  value
  string  value_type
  string  unit_type
}
```

---

#### `Position`
The position structure defines the location characteristics for the data source and may optionally be set during `PushRawMessage` and `PushRawMessages` requests to the Collection service

* `latitude`/`longitude` - indexed, coordinates for generated message
* `pitch`/`yaw`/`roll` - not indexed, euler angles for object at coordinates
* `radius_meters` - not indexed, effective radius in meters for object at coordinates
* `resolution_meters` - not indexed, resolution quality in meters for object at coordinates
* `tfom` - not indexed, time figure-of-merit value for gps data
```
message Position {
  enum TFOM {
    UNSPECIFIED
    LTE_1_NANOSECOND
    LTE_10_NANOSECONDS
    LTE_100_NANOSECONDS
    LTE_1_MICROSECOND
    LTE_10_MICROSECONDS
    LTE_100_MICROSECONDS
    LTE_1_MILLISECOND
    LTE_10_MILLISECONDS
    LTE_100_MILLISECONDS
    LTE_1_SECOND
    LTE_10_SECONDS
    LTE_100_SECONDS
    LTE_1000_SECONDS
    GT_1000_SECONDS
  }

  float  latitude
  float  longitude
  float  pitch
  float  yaw
  float  roll
  float  radius_meters
  float  resolution_meters
  TFOM   tfom
}
```

---

#### `PositionBoundingBox`
The position bound box structure defines `Position` boundaries for returned messages based on `latitude` / `longitude`. It may also be applied as a filter for `GetRawMessage` and `GetRawMessages` requests to the Retrieval service

* `latitude`/`longitude` - indexed, coordinates for generated message
* `pitch`/`yaw`/`roll` - not indexed, euler angles for object at coordinates
* `radius_meters` - not indexed, effective radius in meters for object at coordinates
* `resolution_meters` - not indexed, resolution quality in meters for object at coordinates
* `tfom` - not indexed, time figure-of-merit value for gps data
```
message Position {
  enum TFOM {
    UNSPECIFIED
    LTE_1_NANOSECOND
    LTE_10_NANOSECONDS
    LTE_100_NANOSECONDS
    LTE_1_MICROSECOND
    LTE_10_MICROSECONDS
    LTE_100_MICROSECONDS
    LTE_1_MILLISECOND
    LTE_10_MILLISECONDS
    LTE_100_MILLISECONDS
    LTE_1_SECOND
    LTE_10_SECONDS
    LTE_100_SECONDS
    LTE_1000_SECONDS
    GT_1000_SECONDS
  }

  float  latitude
  float  longitude
  float  pitch
  float  yaw
  float  roll
  float  radius_meters
  float  resolution_meters
  TFOM   tfom
}
```

---
