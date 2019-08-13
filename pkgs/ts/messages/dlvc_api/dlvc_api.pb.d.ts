import * as Long from "long";

import * as $protobuf from "protobufjs";
/** Namespace dlvc_api. */
export namespace dlvc_api {

    /** Properties of a PushRawMessageRequest. */
    interface IPushRawMessageRequest {

        /** PushRawMessageRequest message */
        message?: (dlvc_api.IWrappedMessage|null);
    }

    /** Represents a PushRawMessageRequest. */
    class PushRawMessageRequest implements IPushRawMessageRequest {

        /**
         * Constructs a new PushRawMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPushRawMessageRequest);

        /** PushRawMessageRequest message. */
        public message?: (dlvc_api.IWrappedMessage|null);

        /**
         * Creates a new PushRawMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushRawMessageRequest instance
         */
        public static create(properties?: dlvc_api.IPushRawMessageRequest): dlvc_api.PushRawMessageRequest;

        /**
         * Encodes the specified PushRawMessageRequest message. Does not implicitly {@link dlvc_api.PushRawMessageRequest.verify|verify} messages.
         * @param message PushRawMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPushRawMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushRawMessageRequest message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessageRequest.verify|verify} messages.
         * @param message PushRawMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPushRawMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushRawMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.PushRawMessageRequest;

        /**
         * Decodes a PushRawMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.PushRawMessageRequest;

        /**
         * Verifies a PushRawMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushRawMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushRawMessageRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.PushRawMessageRequest;

        /**
         * Creates a plain object from a PushRawMessageRequest message. Also converts values to other types if specified.
         * @param message PushRawMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.PushRawMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushRawMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PushRawMessageResponse. */
    interface IPushRawMessageResponse {

        /** PushRawMessageResponse duplicateDetails */
        duplicateDetails?: (dlvc_api.IDuplicateDetails|null);
    }

    /** Represents a PushRawMessageResponse. */
    class PushRawMessageResponse implements IPushRawMessageResponse {

        /**
         * Constructs a new PushRawMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPushRawMessageResponse);

        /** PushRawMessageResponse duplicateDetails. */
        public duplicateDetails?: (dlvc_api.IDuplicateDetails|null);

        /**
         * Creates a new PushRawMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushRawMessageResponse instance
         */
        public static create(properties?: dlvc_api.IPushRawMessageResponse): dlvc_api.PushRawMessageResponse;

        /**
         * Encodes the specified PushRawMessageResponse message. Does not implicitly {@link dlvc_api.PushRawMessageResponse.verify|verify} messages.
         * @param message PushRawMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPushRawMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushRawMessageResponse message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessageResponse.verify|verify} messages.
         * @param message PushRawMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPushRawMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushRawMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.PushRawMessageResponse;

        /**
         * Decodes a PushRawMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.PushRawMessageResponse;

        /**
         * Verifies a PushRawMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushRawMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushRawMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.PushRawMessageResponse;

        /**
         * Creates a plain object from a PushRawMessageResponse message. Also converts values to other types if specified.
         * @param message PushRawMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.PushRawMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushRawMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PushRawMessagesRequest. */
    interface IPushRawMessagesRequest {

        /** PushRawMessagesRequest metadata */
        metadata?: (dlvc_api.IMetadata|null);

        /** PushRawMessagesRequest userMetadata */
        userMetadata?: (dlvc_api.IUserDefinedMetadata[]|null);

        /** PushRawMessagesRequest messages */
        messages?: (dlvc_api.IWrappedMessage[]|null);
    }

    /** Represents a PushRawMessagesRequest. */
    class PushRawMessagesRequest implements IPushRawMessagesRequest {

        /**
         * Constructs a new PushRawMessagesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPushRawMessagesRequest);

        /** PushRawMessagesRequest metadata. */
        public metadata?: (dlvc_api.IMetadata|null);

        /** PushRawMessagesRequest userMetadata. */
        public userMetadata: dlvc_api.IUserDefinedMetadata[];

        /** PushRawMessagesRequest messages. */
        public messages: dlvc_api.IWrappedMessage[];

        /**
         * Creates a new PushRawMessagesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushRawMessagesRequest instance
         */
        public static create(properties?: dlvc_api.IPushRawMessagesRequest): dlvc_api.PushRawMessagesRequest;

        /**
         * Encodes the specified PushRawMessagesRequest message. Does not implicitly {@link dlvc_api.PushRawMessagesRequest.verify|verify} messages.
         * @param message PushRawMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPushRawMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushRawMessagesRequest message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessagesRequest.verify|verify} messages.
         * @param message PushRawMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPushRawMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushRawMessagesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.PushRawMessagesRequest;

        /**
         * Decodes a PushRawMessagesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.PushRawMessagesRequest;

        /**
         * Verifies a PushRawMessagesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushRawMessagesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushRawMessagesRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.PushRawMessagesRequest;

        /**
         * Creates a plain object from a PushRawMessagesRequest message. Also converts values to other types if specified.
         * @param message PushRawMessagesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.PushRawMessagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushRawMessagesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PushRawMessagesResponse. */
    interface IPushRawMessagesResponse {

        /** PushRawMessagesResponse duplicateDetails */
        duplicateDetails?: (dlvc_api.IDuplicateDetails|null);
    }

    /** Represents a PushRawMessagesResponse. */
    class PushRawMessagesResponse implements IPushRawMessagesResponse {

        /**
         * Constructs a new PushRawMessagesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPushRawMessagesResponse);

        /** PushRawMessagesResponse duplicateDetails. */
        public duplicateDetails?: (dlvc_api.IDuplicateDetails|null);

        /**
         * Creates a new PushRawMessagesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushRawMessagesResponse instance
         */
        public static create(properties?: dlvc_api.IPushRawMessagesResponse): dlvc_api.PushRawMessagesResponse;

        /**
         * Encodes the specified PushRawMessagesResponse message. Does not implicitly {@link dlvc_api.PushRawMessagesResponse.verify|verify} messages.
         * @param message PushRawMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPushRawMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushRawMessagesResponse message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessagesResponse.verify|verify} messages.
         * @param message PushRawMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPushRawMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushRawMessagesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.PushRawMessagesResponse;

        /**
         * Decodes a PushRawMessagesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.PushRawMessagesResponse;

        /**
         * Verifies a PushRawMessagesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushRawMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushRawMessagesResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.PushRawMessagesResponse;

        /**
         * Creates a plain object from a PushRawMessagesResponse message. Also converts values to other types if specified.
         * @param message PushRawMessagesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.PushRawMessagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushRawMessagesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DuplicateDetails. */
    interface IDuplicateDetails {

        /** DuplicateDetails duplicates */
        duplicates?: (boolean|null);

        /** DuplicateDetails idempotencyKeys */
        idempotencyKeys?: (string[]|null);
    }

    /** Represents a DuplicateDetails. */
    class DuplicateDetails implements IDuplicateDetails {

        /**
         * Constructs a new DuplicateDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IDuplicateDetails);

        /** DuplicateDetails duplicates. */
        public duplicates: boolean;

        /** DuplicateDetails idempotencyKeys. */
        public idempotencyKeys: string[];

        /**
         * Creates a new DuplicateDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DuplicateDetails instance
         */
        public static create(properties?: dlvc_api.IDuplicateDetails): dlvc_api.DuplicateDetails;

        /**
         * Encodes the specified DuplicateDetails message. Does not implicitly {@link dlvc_api.DuplicateDetails.verify|verify} messages.
         * @param message DuplicateDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IDuplicateDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DuplicateDetails message, length delimited. Does not implicitly {@link dlvc_api.DuplicateDetails.verify|verify} messages.
         * @param message DuplicateDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IDuplicateDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DuplicateDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DuplicateDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.DuplicateDetails;

        /**
         * Decodes a DuplicateDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DuplicateDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.DuplicateDetails;

        /**
         * Verifies a DuplicateDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DuplicateDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DuplicateDetails
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.DuplicateDetails;

        /**
         * Creates a plain object from a DuplicateDetails message. Also converts values to other types if specified.
         * @param message DuplicateDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.DuplicateDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DuplicateDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MessageRetrievalType enum. */
    enum MessageRetrievalType {
        UNSPECIFIED = 0,
        INDEX = 1,
        TIME = 2,
        MESSAGE_TYPE = 3,
        ENCODING_TYPE = 4,
        METADATA = 5,
        USER_DEFINED_METADATA = 6,
        POSITION_BOUNDING_BOX = 7
    }

    /** ReturnedMetadataType enum. */
    enum ReturnedMetadataType {
        RETURN_UNSPECIFIED = 0,
        RETURN_NONE = 1,
        RETURN_ALL = 2,
        RETURN_TIME = 3,
        RETURN_SOURCE_TYPE = 4,
        RETURN_METADATA = 5,
        RETURN_USER_DEFINED_METADATA = 6,
        RETURN_POSITION = 7
    }

    /** Properties of a GetRawMessageRequest. */
    interface IGetRawMessageRequest {

        /** GetRawMessageRequest retrievalTypes */
        retrievalTypes?: (dlvc_api.MessageRetrievalType[]|null);

        /** GetRawMessageRequest returnedMetadataTypes */
        returnedMetadataTypes?: (dlvc_api.ReturnedMetadataType[]|null);

        /** GetRawMessageRequest metadata */
        metadata?: (dlvc_api.IMetadata|null);

        /** GetRawMessageRequest userMetadata */
        userMetadata?: (dlvc_api.IUserDefinedMetadata[]|null);

        /** GetRawMessageRequest sourceType */
        sourceType?: (dlvc_api.ISourceType|null);

        /** GetRawMessageRequest boundingBox */
        boundingBox?: (dlvc_api.IPositionBoundingBox|null);

        /** GetRawMessageRequest timeRange */
        timeRange?: (dlvc_api.ITimeRange|null);

        /** GetRawMessageRequest nextIndex */
        nextIndex?: (number|Long|null);
    }

    /** Represents a GetRawMessageRequest. */
    class GetRawMessageRequest implements IGetRawMessageRequest {

        /**
         * Constructs a new GetRawMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IGetRawMessageRequest);

        /** GetRawMessageRequest retrievalTypes. */
        public retrievalTypes: dlvc_api.MessageRetrievalType[];

        /** GetRawMessageRequest returnedMetadataTypes. */
        public returnedMetadataTypes: dlvc_api.ReturnedMetadataType[];

        /** GetRawMessageRequest metadata. */
        public metadata?: (dlvc_api.IMetadata|null);

        /** GetRawMessageRequest userMetadata. */
        public userMetadata: dlvc_api.IUserDefinedMetadata[];

        /** GetRawMessageRequest sourceType. */
        public sourceType?: (dlvc_api.ISourceType|null);

        /** GetRawMessageRequest boundingBox. */
        public boundingBox?: (dlvc_api.IPositionBoundingBox|null);

        /** GetRawMessageRequest timeRange. */
        public timeRange?: (dlvc_api.ITimeRange|null);

        /** GetRawMessageRequest nextIndex. */
        public nextIndex: (number|Long);

        /**
         * Creates a new GetRawMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRawMessageRequest instance
         */
        public static create(properties?: dlvc_api.IGetRawMessageRequest): dlvc_api.GetRawMessageRequest;

        /**
         * Encodes the specified GetRawMessageRequest message. Does not implicitly {@link dlvc_api.GetRawMessageRequest.verify|verify} messages.
         * @param message GetRawMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IGetRawMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRawMessageRequest message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessageRequest.verify|verify} messages.
         * @param message GetRawMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IGetRawMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRawMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.GetRawMessageRequest;

        /**
         * Decodes a GetRawMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.GetRawMessageRequest;

        /**
         * Verifies a GetRawMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRawMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRawMessageRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.GetRawMessageRequest;

        /**
         * Creates a plain object from a GetRawMessageRequest message. Also converts values to other types if specified.
         * @param message GetRawMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.GetRawMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRawMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRawMessageResponse. */
    interface IGetRawMessageResponse {

        /** GetRawMessageResponse message */
        message?: (dlvc_api.IWrappedMessage|null);

        /** GetRawMessageResponse nextIndex */
        nextIndex?: (number|Long|null);

        /** GetRawMessageResponse lenBytes */
        lenBytes?: (number|Long|null);
    }

    /** Represents a GetRawMessageResponse. */
    class GetRawMessageResponse implements IGetRawMessageResponse {

        /**
         * Constructs a new GetRawMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IGetRawMessageResponse);

        /** GetRawMessageResponse message. */
        public message?: (dlvc_api.IWrappedMessage|null);

        /** GetRawMessageResponse nextIndex. */
        public nextIndex: (number|Long);

        /** GetRawMessageResponse lenBytes. */
        public lenBytes: (number|Long);

        /**
         * Creates a new GetRawMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRawMessageResponse instance
         */
        public static create(properties?: dlvc_api.IGetRawMessageResponse): dlvc_api.GetRawMessageResponse;

        /**
         * Encodes the specified GetRawMessageResponse message. Does not implicitly {@link dlvc_api.GetRawMessageResponse.verify|verify} messages.
         * @param message GetRawMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IGetRawMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRawMessageResponse message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessageResponse.verify|verify} messages.
         * @param message GetRawMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IGetRawMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRawMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.GetRawMessageResponse;

        /**
         * Decodes a GetRawMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.GetRawMessageResponse;

        /**
         * Verifies a GetRawMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRawMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRawMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.GetRawMessageResponse;

        /**
         * Creates a plain object from a GetRawMessageResponse message. Also converts values to other types if specified.
         * @param message GetRawMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.GetRawMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRawMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRawMessagesRequest. */
    interface IGetRawMessagesRequest {

        /** GetRawMessagesRequest retrievalTypes */
        retrievalTypes?: (dlvc_api.MessageRetrievalType[]|null);

        /** GetRawMessagesRequest returnedMetadataTypes */
        returnedMetadataTypes?: (dlvc_api.ReturnedMetadataType[]|null);

        /** GetRawMessagesRequest metadata */
        metadata?: (dlvc_api.IMetadata|null);

        /** GetRawMessagesRequest userMetadata */
        userMetadata?: (dlvc_api.IUserDefinedMetadata[]|null);

        /** GetRawMessagesRequest sourceType */
        sourceType?: (dlvc_api.ISourceType|null);

        /** GetRawMessagesRequest boundingBox */
        boundingBox?: (dlvc_api.IPositionBoundingBox|null);

        /** GetRawMessagesRequest timeRange */
        timeRange?: (dlvc_api.ITimeRange|null);

        /** GetRawMessagesRequest nextIndex */
        nextIndex?: (number|Long|null);

        /** GetRawMessagesRequest limit */
        limit?: (number|Long|null);

        /** GetRawMessagesRequest lenBytes */
        lenBytes?: (number|Long|null);
    }

    /** Represents a GetRawMessagesRequest. */
    class GetRawMessagesRequest implements IGetRawMessagesRequest {

        /**
         * Constructs a new GetRawMessagesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IGetRawMessagesRequest);

        /** GetRawMessagesRequest retrievalTypes. */
        public retrievalTypes: dlvc_api.MessageRetrievalType[];

        /** GetRawMessagesRequest returnedMetadataTypes. */
        public returnedMetadataTypes: dlvc_api.ReturnedMetadataType[];

        /** GetRawMessagesRequest metadata. */
        public metadata?: (dlvc_api.IMetadata|null);

        /** GetRawMessagesRequest userMetadata. */
        public userMetadata: dlvc_api.IUserDefinedMetadata[];

        /** GetRawMessagesRequest sourceType. */
        public sourceType?: (dlvc_api.ISourceType|null);

        /** GetRawMessagesRequest boundingBox. */
        public boundingBox?: (dlvc_api.IPositionBoundingBox|null);

        /** GetRawMessagesRequest timeRange. */
        public timeRange?: (dlvc_api.ITimeRange|null);

        /** GetRawMessagesRequest nextIndex. */
        public nextIndex: (number|Long);

        /** GetRawMessagesRequest limit. */
        public limit: (number|Long);

        /** GetRawMessagesRequest lenBytes. */
        public lenBytes: (number|Long);

        /**
         * Creates a new GetRawMessagesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRawMessagesRequest instance
         */
        public static create(properties?: dlvc_api.IGetRawMessagesRequest): dlvc_api.GetRawMessagesRequest;

        /**
         * Encodes the specified GetRawMessagesRequest message. Does not implicitly {@link dlvc_api.GetRawMessagesRequest.verify|verify} messages.
         * @param message GetRawMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IGetRawMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRawMessagesRequest message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessagesRequest.verify|verify} messages.
         * @param message GetRawMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IGetRawMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRawMessagesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.GetRawMessagesRequest;

        /**
         * Decodes a GetRawMessagesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.GetRawMessagesRequest;

        /**
         * Verifies a GetRawMessagesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRawMessagesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRawMessagesRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.GetRawMessagesRequest;

        /**
         * Creates a plain object from a GetRawMessagesRequest message. Also converts values to other types if specified.
         * @param message GetRawMessagesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.GetRawMessagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRawMessagesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRawMessagesResponse. */
    interface IGetRawMessagesResponse {

        /** GetRawMessagesResponse messages */
        messages?: (dlvc_api.IWrappedMessage[]|null);

        /** GetRawMessagesResponse nextIndex */
        nextIndex?: (number|Long|null);

        /** GetRawMessagesResponse lenBytes */
        lenBytes?: (number|Long|null);

        /** GetRawMessagesResponse count */
        count?: (number|Long|null);
    }

    /** Represents a GetRawMessagesResponse. */
    class GetRawMessagesResponse implements IGetRawMessagesResponse {

        /**
         * Constructs a new GetRawMessagesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IGetRawMessagesResponse);

        /** GetRawMessagesResponse messages. */
        public messages: dlvc_api.IWrappedMessage[];

        /** GetRawMessagesResponse nextIndex. */
        public nextIndex: (number|Long);

        /** GetRawMessagesResponse lenBytes. */
        public lenBytes: (number|Long);

        /** GetRawMessagesResponse count. */
        public count: (number|Long);

        /**
         * Creates a new GetRawMessagesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRawMessagesResponse instance
         */
        public static create(properties?: dlvc_api.IGetRawMessagesResponse): dlvc_api.GetRawMessagesResponse;

        /**
         * Encodes the specified GetRawMessagesResponse message. Does not implicitly {@link dlvc_api.GetRawMessagesResponse.verify|verify} messages.
         * @param message GetRawMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IGetRawMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRawMessagesResponse message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessagesResponse.verify|verify} messages.
         * @param message GetRawMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IGetRawMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRawMessagesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.GetRawMessagesResponse;

        /**
         * Decodes a GetRawMessagesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.GetRawMessagesResponse;

        /**
         * Verifies a GetRawMessagesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRawMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRawMessagesResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.GetRawMessagesResponse;

        /**
         * Creates a plain object from a GetRawMessagesResponse message. Also converts values to other types if specified.
         * @param message GetRawMessagesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.GetRawMessagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRawMessagesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SourceType. */
    interface ISourceType {

        /** SourceType messageType */
        messageType?: (dlvc_api.WrappedMessage.MessageType|null);

        /** SourceType encodingType */
        encodingType?: (dlvc_api.MessageEncoding.EncodingType|null);

        /** SourceType customEncodingType */
        customEncodingType?: (string|null);
    }

    /** Represents a SourceType. */
    class SourceType implements ISourceType {

        /**
         * Constructs a new SourceType.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.ISourceType);

        /** SourceType messageType. */
        public messageType: dlvc_api.WrappedMessage.MessageType;

        /** SourceType encodingType. */
        public encodingType: dlvc_api.MessageEncoding.EncodingType;

        /** SourceType customEncodingType. */
        public customEncodingType: string;

        /**
         * Creates a new SourceType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceType instance
         */
        public static create(properties?: dlvc_api.ISourceType): dlvc_api.SourceType;

        /**
         * Encodes the specified SourceType message. Does not implicitly {@link dlvc_api.SourceType.verify|verify} messages.
         * @param message SourceType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.ISourceType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceType message, length delimited. Does not implicitly {@link dlvc_api.SourceType.verify|verify} messages.
         * @param message SourceType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.ISourceType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.SourceType;

        /**
         * Decodes a SourceType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.SourceType;

        /**
         * Verifies a SourceType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceType
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.SourceType;

        /**
         * Creates a plain object from a SourceType message. Also converts values to other types if specified.
         * @param message SourceType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.SourceType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeRange. */
    interface ITimeRange {

        /** TimeRange startTime */
        startTime?: (google.protobuf.ITimestamp|null);

        /** TimeRange endTime */
        endTime?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a TimeRange. */
    class TimeRange implements ITimeRange {

        /**
         * Constructs a new TimeRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.ITimeRange);

        /** TimeRange startTime. */
        public startTime?: (google.protobuf.ITimestamp|null);

        /** TimeRange endTime. */
        public endTime?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new TimeRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeRange instance
         */
        public static create(properties?: dlvc_api.ITimeRange): dlvc_api.TimeRange;

        /**
         * Encodes the specified TimeRange message. Does not implicitly {@link dlvc_api.TimeRange.verify|verify} messages.
         * @param message TimeRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.ITimeRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link dlvc_api.TimeRange.verify|verify} messages.
         * @param message TimeRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.ITimeRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.TimeRange;

        /**
         * Decodes a TimeRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.TimeRange;

        /**
         * Verifies a TimeRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeRange
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.TimeRange;

        /**
         * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
         * @param message TimeRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.TimeRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SummarizeRequest. */
    interface ISummarizeRequest {
    }

    /** Represents a SummarizeRequest. */
    class SummarizeRequest implements ISummarizeRequest {

        /**
         * Constructs a new SummarizeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.ISummarizeRequest);

        /**
         * Creates a new SummarizeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SummarizeRequest instance
         */
        public static create(properties?: dlvc_api.ISummarizeRequest): dlvc_api.SummarizeRequest;

        /**
         * Encodes the specified SummarizeRequest message. Does not implicitly {@link dlvc_api.SummarizeRequest.verify|verify} messages.
         * @param message SummarizeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.ISummarizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SummarizeRequest message, length delimited. Does not implicitly {@link dlvc_api.SummarizeRequest.verify|verify} messages.
         * @param message SummarizeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.ISummarizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SummarizeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SummarizeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.SummarizeRequest;

        /**
         * Decodes a SummarizeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SummarizeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.SummarizeRequest;

        /**
         * Verifies a SummarizeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SummarizeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SummarizeRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.SummarizeRequest;

        /**
         * Creates a plain object from a SummarizeRequest message. Also converts values to other types if specified.
         * @param message SummarizeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.SummarizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SummarizeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SummarizeResponse. */
    interface ISummarizeResponse {

        /** SummarizeResponse metadataKeys */
        metadataKeys?: (string[]|null);

        /** SummarizeResponse userMetadataKeys */
        userMetadataKeys?: (string[]|null);

        /** SummarizeResponse messageTypes */
        messageTypes?: (dlvc_api.WrappedMessage.MessageType[]|null);

        /** SummarizeResponse encodingTypes */
        encodingTypes?: (dlvc_api.MessageEncoding.EncodingType[]|null);

        /** SummarizeResponse customEncodingTypes */
        customEncodingTypes?: (string[]|null);

        /** SummarizeResponse lenBytes */
        lenBytes?: (number|Long|null);

        /** SummarizeResponse count */
        count?: (number|Long|null);
    }

    /** Represents a SummarizeResponse. */
    class SummarizeResponse implements ISummarizeResponse {

        /**
         * Constructs a new SummarizeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.ISummarizeResponse);

        /** SummarizeResponse metadataKeys. */
        public metadataKeys: string[];

        /** SummarizeResponse userMetadataKeys. */
        public userMetadataKeys: string[];

        /** SummarizeResponse messageTypes. */
        public messageTypes: dlvc_api.WrappedMessage.MessageType[];

        /** SummarizeResponse encodingTypes. */
        public encodingTypes: dlvc_api.MessageEncoding.EncodingType[];

        /** SummarizeResponse customEncodingTypes. */
        public customEncodingTypes: string[];

        /** SummarizeResponse lenBytes. */
        public lenBytes: (number|Long);

        /** SummarizeResponse count. */
        public count: (number|Long);

        /**
         * Creates a new SummarizeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SummarizeResponse instance
         */
        public static create(properties?: dlvc_api.ISummarizeResponse): dlvc_api.SummarizeResponse;

        /**
         * Encodes the specified SummarizeResponse message. Does not implicitly {@link dlvc_api.SummarizeResponse.verify|verify} messages.
         * @param message SummarizeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.ISummarizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SummarizeResponse message, length delimited. Does not implicitly {@link dlvc_api.SummarizeResponse.verify|verify} messages.
         * @param message SummarizeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.ISummarizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SummarizeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SummarizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.SummarizeResponse;

        /**
         * Decodes a SummarizeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SummarizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.SummarizeResponse;

        /**
         * Verifies a SummarizeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SummarizeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SummarizeResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.SummarizeResponse;

        /**
         * Creates a plain object from a SummarizeResponse message. Also converts values to other types if specified.
         * @param message SummarizeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.SummarizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SummarizeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListMetadataValuesRequest. */
    interface IListMetadataValuesRequest {

        /** ListMetadataValuesRequest key */
        key?: (string|null);
    }

    /** Represents a ListMetadataValuesRequest. */
    class ListMetadataValuesRequest implements IListMetadataValuesRequest {

        /**
         * Constructs a new ListMetadataValuesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IListMetadataValuesRequest);

        /** ListMetadataValuesRequest key. */
        public key: string;

        /**
         * Creates a new ListMetadataValuesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMetadataValuesRequest instance
         */
        public static create(properties?: dlvc_api.IListMetadataValuesRequest): dlvc_api.ListMetadataValuesRequest;

        /**
         * Encodes the specified ListMetadataValuesRequest message. Does not implicitly {@link dlvc_api.ListMetadataValuesRequest.verify|verify} messages.
         * @param message ListMetadataValuesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IListMetadataValuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMetadataValuesRequest message, length delimited. Does not implicitly {@link dlvc_api.ListMetadataValuesRequest.verify|verify} messages.
         * @param message ListMetadataValuesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IListMetadataValuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMetadataValuesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMetadataValuesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.ListMetadataValuesRequest;

        /**
         * Decodes a ListMetadataValuesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMetadataValuesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.ListMetadataValuesRequest;

        /**
         * Verifies a ListMetadataValuesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMetadataValuesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMetadataValuesRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.ListMetadataValuesRequest;

        /**
         * Creates a plain object from a ListMetadataValuesRequest message. Also converts values to other types if specified.
         * @param message ListMetadataValuesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.ListMetadataValuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMetadataValuesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListMetadataValuesResponse. */
    interface IListMetadataValuesResponse {

        /** ListMetadataValuesResponse key */
        key?: (string|null);

        /** ListMetadataValuesResponse values */
        values?: (string[]|null);
    }

    /** Represents a ListMetadataValuesResponse. */
    class ListMetadataValuesResponse implements IListMetadataValuesResponse {

        /**
         * Constructs a new ListMetadataValuesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IListMetadataValuesResponse);

        /** ListMetadataValuesResponse key. */
        public key: string;

        /** ListMetadataValuesResponse values. */
        public values: string[];

        /**
         * Creates a new ListMetadataValuesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMetadataValuesResponse instance
         */
        public static create(properties?: dlvc_api.IListMetadataValuesResponse): dlvc_api.ListMetadataValuesResponse;

        /**
         * Encodes the specified ListMetadataValuesResponse message. Does not implicitly {@link dlvc_api.ListMetadataValuesResponse.verify|verify} messages.
         * @param message ListMetadataValuesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IListMetadataValuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMetadataValuesResponse message, length delimited. Does not implicitly {@link dlvc_api.ListMetadataValuesResponse.verify|verify} messages.
         * @param message ListMetadataValuesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IListMetadataValuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMetadataValuesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMetadataValuesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.ListMetadataValuesResponse;

        /**
         * Decodes a ListMetadataValuesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMetadataValuesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.ListMetadataValuesResponse;

        /**
         * Verifies a ListMetadataValuesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMetadataValuesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMetadataValuesResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.ListMetadataValuesResponse;

        /**
         * Creates a plain object from a ListMetadataValuesResponse message. Also converts values to other types if specified.
         * @param message ListMetadataValuesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.ListMetadataValuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMetadataValuesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListExercisesRequest. */
    interface IListExercisesRequest {
    }

    /** Represents a ListExercisesRequest. */
    class ListExercisesRequest implements IListExercisesRequest {

        /**
         * Constructs a new ListExercisesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IListExercisesRequest);

        /**
         * Creates a new ListExercisesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListExercisesRequest instance
         */
        public static create(properties?: dlvc_api.IListExercisesRequest): dlvc_api.ListExercisesRequest;

        /**
         * Encodes the specified ListExercisesRequest message. Does not implicitly {@link dlvc_api.ListExercisesRequest.verify|verify} messages.
         * @param message ListExercisesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IListExercisesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListExercisesRequest message, length delimited. Does not implicitly {@link dlvc_api.ListExercisesRequest.verify|verify} messages.
         * @param message ListExercisesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IListExercisesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListExercisesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListExercisesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.ListExercisesRequest;

        /**
         * Decodes a ListExercisesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListExercisesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.ListExercisesRequest;

        /**
         * Verifies a ListExercisesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListExercisesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListExercisesRequest
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.ListExercisesRequest;

        /**
         * Creates a plain object from a ListExercisesRequest message. Also converts values to other types if specified.
         * @param message ListExercisesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.ListExercisesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListExercisesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListExercisesResponse. */
    interface IListExercisesResponse {

        /** ListExercisesResponse exerciseIds */
        exerciseIds?: (string[]|null);
    }

    /** Represents a ListExercisesResponse. */
    class ListExercisesResponse implements IListExercisesResponse {

        /**
         * Constructs a new ListExercisesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IListExercisesResponse);

        /** ListExercisesResponse exerciseIds. */
        public exerciseIds: string[];

        /**
         * Creates a new ListExercisesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListExercisesResponse instance
         */
        public static create(properties?: dlvc_api.IListExercisesResponse): dlvc_api.ListExercisesResponse;

        /**
         * Encodes the specified ListExercisesResponse message. Does not implicitly {@link dlvc_api.ListExercisesResponse.verify|verify} messages.
         * @param message ListExercisesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IListExercisesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListExercisesResponse message, length delimited. Does not implicitly {@link dlvc_api.ListExercisesResponse.verify|verify} messages.
         * @param message ListExercisesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IListExercisesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListExercisesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListExercisesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.ListExercisesResponse;

        /**
         * Decodes a ListExercisesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListExercisesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.ListExercisesResponse;

        /**
         * Verifies a ListExercisesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListExercisesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListExercisesResponse
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.ListExercisesResponse;

        /**
         * Creates a plain object from a ListExercisesResponse message. Also converts values to other types if specified.
         * @param message ListExercisesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.ListExercisesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListExercisesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WrappedMessage. */
    interface IWrappedMessage {

        /** WrappedMessage idempotencyKey */
        idempotencyKey?: (string|null);

        /** WrappedMessage metadata */
        metadata?: (dlvc_api.IMetadata|null);

        /** WrappedMessage userMetadata */
        userMetadata?: (dlvc_api.IUserDefinedMetadata[]|null);

        /** WrappedMessage messageType */
        messageType?: (dlvc_api.WrappedMessage.MessageType|null);

        /** WrappedMessage messageEncoding */
        messageEncoding?: (dlvc_api.IMessageEncoding|null);

        /** WrappedMessage position */
        position?: (dlvc_api.IPosition|null);

        /** WrappedMessage createdTime */
        createdTime?: (google.protobuf.ITimestamp|null);

        /** WrappedMessage rawMessage */
        rawMessage?: (Uint8Array|null);
    }

    /** Represents a WrappedMessage. */
    class WrappedMessage implements IWrappedMessage {

        /**
         * Constructs a new WrappedMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IWrappedMessage);

        /** WrappedMessage idempotencyKey. */
        public idempotencyKey: string;

        /** WrappedMessage metadata. */
        public metadata?: (dlvc_api.IMetadata|null);

        /** WrappedMessage userMetadata. */
        public userMetadata: dlvc_api.IUserDefinedMetadata[];

        /** WrappedMessage messageType. */
        public messageType: dlvc_api.WrappedMessage.MessageType;

        /** WrappedMessage messageEncoding. */
        public messageEncoding?: (dlvc_api.IMessageEncoding|null);

        /** WrappedMessage position. */
        public position?: (dlvc_api.IPosition|null);

        /** WrappedMessage createdTime. */
        public createdTime?: (google.protobuf.ITimestamp|null);

        /** WrappedMessage rawMessage. */
        public rawMessage: Uint8Array;

        /**
         * Creates a new WrappedMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WrappedMessage instance
         */
        public static create(properties?: dlvc_api.IWrappedMessage): dlvc_api.WrappedMessage;

        /**
         * Encodes the specified WrappedMessage message. Does not implicitly {@link dlvc_api.WrappedMessage.verify|verify} messages.
         * @param message WrappedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IWrappedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WrappedMessage message, length delimited. Does not implicitly {@link dlvc_api.WrappedMessage.verify|verify} messages.
         * @param message WrappedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IWrappedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WrappedMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WrappedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.WrappedMessage;

        /**
         * Decodes a WrappedMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WrappedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.WrappedMessage;

        /**
         * Verifies a WrappedMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WrappedMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WrappedMessage
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.WrappedMessage;

        /**
         * Creates a plain object from a WrappedMessage message. Also converts values to other types if specified.
         * @param message WrappedMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.WrappedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WrappedMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WrappedMessage {

        /** MessageType enum. */
        enum MessageType {
            UNSPECIFIED = 0,
            CUSTOM = 1,
            DIS7 = 2,
            COT = 3,
            LINK16 = 4,
            JREAP = 5,
            INSTRUCTOR_COMMENT = 6
        }
    }

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata partnerId */
        partnerId?: (string|null);

        /** Metadata partnerCertId */
        partnerCertId?: (string|null);

        /** Metadata sourceId */
        sourceId?: (string|null);

        /** Metadata exerciseId */
        exerciseId?: (string|null);

        /** Metadata exerciseName */
        exerciseName?: (string|null);

        /** Metadata entityStatePdu */
        entityStatePdu?: (string|null);

        /** Metadata forceColor */
        forceColor?: (dlvc_api.Metadata.ForceColor|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IMetadata);

        /** Metadata partnerId. */
        public partnerId: string;

        /** Metadata partnerCertId. */
        public partnerCertId: string;

        /** Metadata sourceId. */
        public sourceId: string;

        /** Metadata exerciseId. */
        public exerciseId: string;

        /** Metadata exerciseName. */
        public exerciseName: string;

        /** Metadata entityStatePdu. */
        public entityStatePdu: string;

        /** Metadata forceColor. */
        public forceColor: dlvc_api.Metadata.ForceColor;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: dlvc_api.IMetadata): dlvc_api.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link dlvc_api.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link dlvc_api.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Metadata {

        /** ForceColor enum. */
        enum ForceColor {
            UNSPECIFIED = 0,
            BLUE = 1,
            RED = 2,
            WHITE = 3,
            GREEN = 4
        }
    }

    /** Properties of a UserDefinedMetadata. */
    interface IUserDefinedMetadata {

        /** UserDefinedMetadata key */
        key?: (string|null);

        /** UserDefinedMetadata value */
        value?: (string|null);

        /** UserDefinedMetadata valueType */
        valueType?: (string|null);

        /** UserDefinedMetadata unitType */
        unitType?: (string|null);
    }

    /** Represents a UserDefinedMetadata. */
    class UserDefinedMetadata implements IUserDefinedMetadata {

        /**
         * Constructs a new UserDefinedMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IUserDefinedMetadata);

        /** UserDefinedMetadata key. */
        public key: string;

        /** UserDefinedMetadata value. */
        public value: string;

        /** UserDefinedMetadata valueType. */
        public valueType: string;

        /** UserDefinedMetadata unitType. */
        public unitType: string;

        /**
         * Creates a new UserDefinedMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserDefinedMetadata instance
         */
        public static create(properties?: dlvc_api.IUserDefinedMetadata): dlvc_api.UserDefinedMetadata;

        /**
         * Encodes the specified UserDefinedMetadata message. Does not implicitly {@link dlvc_api.UserDefinedMetadata.verify|verify} messages.
         * @param message UserDefinedMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IUserDefinedMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDefinedMetadata message, length delimited. Does not implicitly {@link dlvc_api.UserDefinedMetadata.verify|verify} messages.
         * @param message UserDefinedMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IUserDefinedMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDefinedMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserDefinedMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.UserDefinedMetadata;

        /**
         * Decodes a UserDefinedMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserDefinedMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.UserDefinedMetadata;

        /**
         * Verifies a UserDefinedMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDefinedMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDefinedMetadata
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.UserDefinedMetadata;

        /**
         * Creates a plain object from a UserDefinedMetadata message. Also converts values to other types if specified.
         * @param message UserDefinedMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.UserDefinedMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDefinedMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageEncoding. */
    interface IMessageEncoding {

        /** MessageEncoding encodingType */
        encodingType?: (dlvc_api.MessageEncoding.EncodingType|null);

        /** MessageEncoding customEncodingType */
        customEncodingType?: (string|null);
    }

    /** Represents a MessageEncoding. */
    class MessageEncoding implements IMessageEncoding {

        /**
         * Constructs a new MessageEncoding.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IMessageEncoding);

        /** MessageEncoding encodingType. */
        public encodingType: dlvc_api.MessageEncoding.EncodingType;

        /** MessageEncoding customEncodingType. */
        public customEncodingType: string;

        /**
         * Creates a new MessageEncoding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageEncoding instance
         */
        public static create(properties?: dlvc_api.IMessageEncoding): dlvc_api.MessageEncoding;

        /**
         * Encodes the specified MessageEncoding message. Does not implicitly {@link dlvc_api.MessageEncoding.verify|verify} messages.
         * @param message MessageEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IMessageEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageEncoding message, length delimited. Does not implicitly {@link dlvc_api.MessageEncoding.verify|verify} messages.
         * @param message MessageEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IMessageEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageEncoding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.MessageEncoding;

        /**
         * Decodes a MessageEncoding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.MessageEncoding;

        /**
         * Verifies a MessageEncoding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageEncoding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageEncoding
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.MessageEncoding;

        /**
         * Creates a plain object from a MessageEncoding message. Also converts values to other types if specified.
         * @param message MessageEncoding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.MessageEncoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageEncoding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MessageEncoding {

        /** EncodingType enum. */
        enum EncodingType {
            UNSPECIFIED = 0,
            CUSTOM = 1,
            TEXT = 2,
            JSON = 3,
            XML = 4,
            CSV = 5
        }
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position latitude */
        latitude?: (number|null);

        /** Position longitude */
        longitude?: (number|null);

        /** Position pitch */
        pitch?: (number|null);

        /** Position yaw */
        yaw?: (number|null);

        /** Position roll */
        roll?: (number|null);

        /** Position radiusMeters */
        radiusMeters?: (number|null);

        /** Position resolutionMeters */
        resolutionMeters?: (number|null);

        /** Position tfom */
        tfom?: (dlvc_api.Position.TFOM|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPosition);

        /** Position latitude. */
        public latitude: number;

        /** Position longitude. */
        public longitude: number;

        /** Position pitch. */
        public pitch: number;

        /** Position yaw. */
        public yaw: number;

        /** Position roll. */
        public roll: number;

        /** Position radiusMeters. */
        public radiusMeters: number;

        /** Position resolutionMeters. */
        public resolutionMeters: number;

        /** Position tfom. */
        public tfom: dlvc_api.Position.TFOM;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: dlvc_api.IPosition): dlvc_api.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link dlvc_api.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link dlvc_api.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Position {

        /** TFOM enum. */
        enum TFOM {
            UNSPECIFIED = 0,
            LTE_1_NANOSECOND = 1,
            LTE_10_NANOSECONDS = 2,
            LTE_100_NANOSECONDS = 3,
            LTE_1_MICROSECOND = 4,
            LTE_10_MICROSECONDS = 5,
            LTE_100_MICROSECONDS = 6,
            LTE_1_MILLISECOND = 7,
            LTE_10_MILLISECONDS = 8,
            LTE_100_MILLISECONDS = 9,
            LTE_1_SECOND = 10,
            LTE_10_SECONDS = 11,
            LTE_100_SECONDS = 12,
            LTE_1000_SECONDS = 13,
            GT_1000_SECONDS = 14
        }
    }

    /** Properties of a PositionBoundingBox. */
    interface IPositionBoundingBox {

        /** PositionBoundingBox minLatitude */
        minLatitude?: (number|null);

        /** PositionBoundingBox maxLatitude */
        maxLatitude?: (number|null);

        /** PositionBoundingBox minLongitude */
        minLongitude?: (number|null);

        /** PositionBoundingBox maxLongitude */
        maxLongitude?: (number|null);
    }

    /** Represents a PositionBoundingBox. */
    class PositionBoundingBox implements IPositionBoundingBox {

        /**
         * Constructs a new PositionBoundingBox.
         * @param [properties] Properties to set
         */
        constructor(properties?: dlvc_api.IPositionBoundingBox);

        /** PositionBoundingBox minLatitude. */
        public minLatitude: number;

        /** PositionBoundingBox maxLatitude. */
        public maxLatitude: number;

        /** PositionBoundingBox minLongitude. */
        public minLongitude: number;

        /** PositionBoundingBox maxLongitude. */
        public maxLongitude: number;

        /**
         * Creates a new PositionBoundingBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionBoundingBox instance
         */
        public static create(properties?: dlvc_api.IPositionBoundingBox): dlvc_api.PositionBoundingBox;

        /**
         * Encodes the specified PositionBoundingBox message. Does not implicitly {@link dlvc_api.PositionBoundingBox.verify|verify} messages.
         * @param message PositionBoundingBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dlvc_api.IPositionBoundingBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionBoundingBox message, length delimited. Does not implicitly {@link dlvc_api.PositionBoundingBox.verify|verify} messages.
         * @param message PositionBoundingBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dlvc_api.IPositionBoundingBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionBoundingBox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionBoundingBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dlvc_api.PositionBoundingBox;

        /**
         * Decodes a PositionBoundingBox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionBoundingBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dlvc_api.PositionBoundingBox;

        /**
         * Verifies a PositionBoundingBox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionBoundingBox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionBoundingBox
         */
        public static fromObject(object: { [k: string]: any }): dlvc_api.PositionBoundingBox;

        /**
         * Creates a plain object from a PositionBoundingBox message. Also converts values to other types if specified.
         * @param message PositionBoundingBox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dlvc_api.PositionBoundingBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionBoundingBox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a DLVCService */
    class DLVCService extends $protobuf.rpc.Service {

        /**
         * Constructs a new DLVCService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new DLVCService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DLVCService;

        /**
         * Calls PushRawMessage.
         * @param request PushRawMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PushRawMessageResponse
         */
        public pushRawMessage(request: dlvc_api.IPushRawMessageRequest, callback: dlvc_api.DLVCService.PushRawMessageCallback): void;

        /**
         * Calls PushRawMessage.
         * @param request PushRawMessageRequest message or plain object
         * @returns Promise
         */
        public pushRawMessage(request: dlvc_api.IPushRawMessageRequest): Promise<dlvc_api.PushRawMessageResponse>;

        /**
         * Calls PushRawMessages.
         * @param request PushRawMessagesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PushRawMessagesResponse
         */
        public pushRawMessages(request: dlvc_api.IPushRawMessagesRequest, callback: dlvc_api.DLVCService.PushRawMessagesCallback): void;

        /**
         * Calls PushRawMessages.
         * @param request PushRawMessagesRequest message or plain object
         * @returns Promise
         */
        public pushRawMessages(request: dlvc_api.IPushRawMessagesRequest): Promise<dlvc_api.PushRawMessagesResponse>;

        /**
         * Calls GetRawMessage.
         * @param request GetRawMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRawMessageResponse
         */
        public getRawMessage(request: dlvc_api.IGetRawMessageRequest, callback: dlvc_api.DLVCService.GetRawMessageCallback): void;

        /**
         * Calls GetRawMessage.
         * @param request GetRawMessageRequest message or plain object
         * @returns Promise
         */
        public getRawMessage(request: dlvc_api.IGetRawMessageRequest): Promise<dlvc_api.GetRawMessageResponse>;

        /**
         * Calls GetRawMessages.
         * @param request GetRawMessagesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRawMessagesResponse
         */
        public getRawMessages(request: dlvc_api.IGetRawMessagesRequest, callback: dlvc_api.DLVCService.GetRawMessagesCallback): void;

        /**
         * Calls GetRawMessages.
         * @param request GetRawMessagesRequest message or plain object
         * @returns Promise
         */
        public getRawMessages(request: dlvc_api.IGetRawMessagesRequest): Promise<dlvc_api.GetRawMessagesResponse>;

        /**
         * Calls Summarize.
         * @param request SummarizeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SummarizeResponse
         */
        public summarize(request: dlvc_api.ISummarizeRequest, callback: dlvc_api.DLVCService.SummarizeCallback): void;

        /**
         * Calls Summarize.
         * @param request SummarizeRequest message or plain object
         * @returns Promise
         */
        public summarize(request: dlvc_api.ISummarizeRequest): Promise<dlvc_api.SummarizeResponse>;

        /**
         * Calls ListMetadataValues.
         * @param request ListMetadataValuesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListMetadataValuesResponse
         */
        public listMetadataValues(request: dlvc_api.IListMetadataValuesRequest, callback: dlvc_api.DLVCService.ListMetadataValuesCallback): void;

        /**
         * Calls ListMetadataValues.
         * @param request ListMetadataValuesRequest message or plain object
         * @returns Promise
         */
        public listMetadataValues(request: dlvc_api.IListMetadataValuesRequest): Promise<dlvc_api.ListMetadataValuesResponse>;

        /**
         * Calls ListExercises.
         * @param request ListExercisesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListExercisesResponse
         */
        public listExercises(request: dlvc_api.IListExercisesRequest, callback: dlvc_api.DLVCService.ListExercisesCallback): void;

        /**
         * Calls ListExercises.
         * @param request ListExercisesRequest message or plain object
         * @returns Promise
         */
        public listExercises(request: dlvc_api.IListExercisesRequest): Promise<dlvc_api.ListExercisesResponse>;
    }

    namespace DLVCService {

        /**
         * Callback as used by {@link dlvc_api.DLVCService#pushRawMessage}.
         * @param error Error, if any
         * @param [response] PushRawMessageResponse
         */
        type PushRawMessageCallback = (error: (Error|null), response?: dlvc_api.PushRawMessageResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#pushRawMessages}.
         * @param error Error, if any
         * @param [response] PushRawMessagesResponse
         */
        type PushRawMessagesCallback = (error: (Error|null), response?: dlvc_api.PushRawMessagesResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#getRawMessage}.
         * @param error Error, if any
         * @param [response] GetRawMessageResponse
         */
        type GetRawMessageCallback = (error: (Error|null), response?: dlvc_api.GetRawMessageResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#getRawMessages}.
         * @param error Error, if any
         * @param [response] GetRawMessagesResponse
         */
        type GetRawMessagesCallback = (error: (Error|null), response?: dlvc_api.GetRawMessagesResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#summarize}.
         * @param error Error, if any
         * @param [response] SummarizeResponse
         */
        type SummarizeCallback = (error: (Error|null), response?: dlvc_api.SummarizeResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#listMetadataValues}.
         * @param error Error, if any
         * @param [response] ListMetadataValuesResponse
         */
        type ListMetadataValuesCallback = (error: (Error|null), response?: dlvc_api.ListMetadataValuesResponse) => void;

        /**
         * Callback as used by {@link dlvc_api.DLVCService#listExercises}.
         * @param error Error, if any
         * @param [response] ListExercisesResponse
         */
        type ListExercisesCallback = (error: (Error|null), response?: dlvc_api.ListExercisesResponse) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
