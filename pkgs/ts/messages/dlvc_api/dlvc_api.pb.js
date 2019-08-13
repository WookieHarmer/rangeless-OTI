/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dlvc_api = $root.dlvc_api = (() => {

    /**
     * Namespace dlvc_api.
     * @exports dlvc_api
     * @namespace
     */
    const dlvc_api = {};

    dlvc_api.PushRawMessageRequest = (function() {

        /**
         * Properties of a PushRawMessageRequest.
         * @memberof dlvc_api
         * @interface IPushRawMessageRequest
         * @property {dlvc_api.IWrappedMessage|null} [message] PushRawMessageRequest message
         */

        /**
         * Constructs a new PushRawMessageRequest.
         * @memberof dlvc_api
         * @classdesc Represents a PushRawMessageRequest.
         * @implements IPushRawMessageRequest
         * @constructor
         * @param {dlvc_api.IPushRawMessageRequest=} [properties] Properties to set
         */
        function PushRawMessageRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRawMessageRequest message.
         * @member {dlvc_api.IWrappedMessage|null|undefined} message
         * @memberof dlvc_api.PushRawMessageRequest
         * @instance
         */
        PushRawMessageRequest.prototype.message = null;

        /**
         * Creates a new PushRawMessageRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {dlvc_api.IPushRawMessageRequest=} [properties] Properties to set
         * @returns {dlvc_api.PushRawMessageRequest} PushRawMessageRequest instance
         */
        PushRawMessageRequest.create = function create(properties) {
            return new PushRawMessageRequest(properties);
        };

        /**
         * Encodes the specified PushRawMessageRequest message. Does not implicitly {@link dlvc_api.PushRawMessageRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {dlvc_api.IPushRawMessageRequest} message PushRawMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.dlvc_api.WrappedMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushRawMessageRequest message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {dlvc_api.IPushRawMessageRequest} message PushRawMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRawMessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.PushRawMessageRequest} PushRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.PushRawMessageRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.message = $root.dlvc_api.WrappedMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRawMessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.PushRawMessageRequest} PushRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRawMessageRequest message.
         * @function verify
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRawMessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                let error = $root.dlvc_api.WrappedMessage.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a PushRawMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.PushRawMessageRequest} PushRawMessageRequest
         */
        PushRawMessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.PushRawMessageRequest)
                return object;
            let message = new $root.dlvc_api.PushRawMessageRequest();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".dlvc_api.PushRawMessageRequest.message: object expected");
                message.message = $root.dlvc_api.WrappedMessage.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushRawMessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.PushRawMessageRequest
         * @static
         * @param {dlvc_api.PushRawMessageRequest} message PushRawMessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRawMessageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.dlvc_api.WrappedMessage.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this PushRawMessageRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.PushRawMessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRawMessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PushRawMessageRequest;
    })();

    dlvc_api.PushRawMessageResponse = (function() {

        /**
         * Properties of a PushRawMessageResponse.
         * @memberof dlvc_api
         * @interface IPushRawMessageResponse
         * @property {dlvc_api.IDuplicateDetails|null} [duplicateDetails] PushRawMessageResponse duplicateDetails
         */

        /**
         * Constructs a new PushRawMessageResponse.
         * @memberof dlvc_api
         * @classdesc Represents a PushRawMessageResponse.
         * @implements IPushRawMessageResponse
         * @constructor
         * @param {dlvc_api.IPushRawMessageResponse=} [properties] Properties to set
         */
        function PushRawMessageResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRawMessageResponse duplicateDetails.
         * @member {dlvc_api.IDuplicateDetails|null|undefined} duplicateDetails
         * @memberof dlvc_api.PushRawMessageResponse
         * @instance
         */
        PushRawMessageResponse.prototype.duplicateDetails = null;

        /**
         * Creates a new PushRawMessageResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {dlvc_api.IPushRawMessageResponse=} [properties] Properties to set
         * @returns {dlvc_api.PushRawMessageResponse} PushRawMessageResponse instance
         */
        PushRawMessageResponse.create = function create(properties) {
            return new PushRawMessageResponse(properties);
        };

        /**
         * Encodes the specified PushRawMessageResponse message. Does not implicitly {@link dlvc_api.PushRawMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {dlvc_api.IPushRawMessageResponse} message PushRawMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duplicateDetails != null && Object.hasOwnProperty.call(message, "duplicateDetails"))
                $root.dlvc_api.DuplicateDetails.encode(message.duplicateDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushRawMessageResponse message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {dlvc_api.IPushRawMessageResponse} message PushRawMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRawMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.PushRawMessageResponse} PushRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.PushRawMessageResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.duplicateDetails = $root.dlvc_api.DuplicateDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRawMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.PushRawMessageResponse} PushRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRawMessageResponse message.
         * @function verify
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRawMessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.duplicateDetails != null && message.hasOwnProperty("duplicateDetails")) {
                let error = $root.dlvc_api.DuplicateDetails.verify(message.duplicateDetails);
                if (error)
                    return "duplicateDetails." + error;
            }
            return null;
        };

        /**
         * Creates a PushRawMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.PushRawMessageResponse} PushRawMessageResponse
         */
        PushRawMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.PushRawMessageResponse)
                return object;
            let message = new $root.dlvc_api.PushRawMessageResponse();
            if (object.duplicateDetails != null) {
                if (typeof object.duplicateDetails !== "object")
                    throw TypeError(".dlvc_api.PushRawMessageResponse.duplicateDetails: object expected");
                message.duplicateDetails = $root.dlvc_api.DuplicateDetails.fromObject(object.duplicateDetails);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushRawMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.PushRawMessageResponse
         * @static
         * @param {dlvc_api.PushRawMessageResponse} message PushRawMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRawMessageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.duplicateDetails = null;
            if (message.duplicateDetails != null && message.hasOwnProperty("duplicateDetails"))
                object.duplicateDetails = $root.dlvc_api.DuplicateDetails.toObject(message.duplicateDetails, options);
            return object;
        };

        /**
         * Converts this PushRawMessageResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.PushRawMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRawMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PushRawMessageResponse;
    })();

    dlvc_api.PushRawMessagesRequest = (function() {

        /**
         * Properties of a PushRawMessagesRequest.
         * @memberof dlvc_api
         * @interface IPushRawMessagesRequest
         * @property {dlvc_api.IMetadata|null} [metadata] PushRawMessagesRequest metadata
         * @property {Array.<dlvc_api.IUserDefinedMetadata>|null} [userMetadata] PushRawMessagesRequest userMetadata
         * @property {Array.<dlvc_api.IWrappedMessage>|null} [messages] PushRawMessagesRequest messages
         */

        /**
         * Constructs a new PushRawMessagesRequest.
         * @memberof dlvc_api
         * @classdesc Represents a PushRawMessagesRequest.
         * @implements IPushRawMessagesRequest
         * @constructor
         * @param {dlvc_api.IPushRawMessagesRequest=} [properties] Properties to set
         */
        function PushRawMessagesRequest(properties) {
            this.userMetadata = [];
            this.messages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRawMessagesRequest metadata.
         * @member {dlvc_api.IMetadata|null|undefined} metadata
         * @memberof dlvc_api.PushRawMessagesRequest
         * @instance
         */
        PushRawMessagesRequest.prototype.metadata = null;

        /**
         * PushRawMessagesRequest userMetadata.
         * @member {Array.<dlvc_api.IUserDefinedMetadata>} userMetadata
         * @memberof dlvc_api.PushRawMessagesRequest
         * @instance
         */
        PushRawMessagesRequest.prototype.userMetadata = $util.emptyArray;

        /**
         * PushRawMessagesRequest messages.
         * @member {Array.<dlvc_api.IWrappedMessage>} messages
         * @memberof dlvc_api.PushRawMessagesRequest
         * @instance
         */
        PushRawMessagesRequest.prototype.messages = $util.emptyArray;

        /**
         * Creates a new PushRawMessagesRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {dlvc_api.IPushRawMessagesRequest=} [properties] Properties to set
         * @returns {dlvc_api.PushRawMessagesRequest} PushRawMessagesRequest instance
         */
        PushRawMessagesRequest.create = function create(properties) {
            return new PushRawMessagesRequest(properties);
        };

        /**
         * Encodes the specified PushRawMessagesRequest message. Does not implicitly {@link dlvc_api.PushRawMessagesRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {dlvc_api.IPushRawMessagesRequest} message PushRawMessagesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessagesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.dlvc_api.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.userMetadata != null && message.userMetadata.length)
                for (let i = 0; i < message.userMetadata.length; ++i)
                    $root.dlvc_api.UserDefinedMetadata.encode(message.userMetadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.messages != null && message.messages.length)
                for (let i = 0; i < message.messages.length; ++i)
                    $root.dlvc_api.WrappedMessage.encode(message.messages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushRawMessagesRequest message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessagesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {dlvc_api.IPushRawMessagesRequest} message PushRawMessagesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessagesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRawMessagesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.PushRawMessagesRequest} PushRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessagesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.PushRawMessagesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.metadata = $root.dlvc_api.Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.userMetadata && message.userMetadata.length))
                        message.userMetadata = [];
                    message.userMetadata.push($root.dlvc_api.UserDefinedMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.dlvc_api.WrappedMessage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRawMessagesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.PushRawMessagesRequest} PushRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessagesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRawMessagesRequest message.
         * @function verify
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRawMessagesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                let error = $root.dlvc_api.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.userMetadata != null && message.hasOwnProperty("userMetadata")) {
                if (!Array.isArray(message.userMetadata))
                    return "userMetadata: array expected";
                for (let i = 0; i < message.userMetadata.length; ++i) {
                    let error = $root.dlvc_api.UserDefinedMetadata.verify(message.userMetadata[i]);
                    if (error)
                        return "userMetadata." + error;
                }
            }
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (let i = 0; i < message.messages.length; ++i) {
                    let error = $root.dlvc_api.WrappedMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PushRawMessagesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.PushRawMessagesRequest} PushRawMessagesRequest
         */
        PushRawMessagesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.PushRawMessagesRequest)
                return object;
            let message = new $root.dlvc_api.PushRawMessagesRequest();
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".dlvc_api.PushRawMessagesRequest.metadata: object expected");
                message.metadata = $root.dlvc_api.Metadata.fromObject(object.metadata);
            }
            if (object.userMetadata) {
                if (!Array.isArray(object.userMetadata))
                    throw TypeError(".dlvc_api.PushRawMessagesRequest.userMetadata: array expected");
                message.userMetadata = [];
                for (let i = 0; i < object.userMetadata.length; ++i) {
                    if (typeof object.userMetadata[i] !== "object")
                        throw TypeError(".dlvc_api.PushRawMessagesRequest.userMetadata: object expected");
                    message.userMetadata[i] = $root.dlvc_api.UserDefinedMetadata.fromObject(object.userMetadata[i]);
                }
            }
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".dlvc_api.PushRawMessagesRequest.messages: array expected");
                message.messages = [];
                for (let i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".dlvc_api.PushRawMessagesRequest.messages: object expected");
                    message.messages[i] = $root.dlvc_api.WrappedMessage.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PushRawMessagesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.PushRawMessagesRequest
         * @static
         * @param {dlvc_api.PushRawMessagesRequest} message PushRawMessagesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRawMessagesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.userMetadata = [];
                object.messages = [];
            }
            if (options.defaults)
                object.metadata = null;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.dlvc_api.Metadata.toObject(message.metadata, options);
            if (message.userMetadata && message.userMetadata.length) {
                object.userMetadata = [];
                for (let j = 0; j < message.userMetadata.length; ++j)
                    object.userMetadata[j] = $root.dlvc_api.UserDefinedMetadata.toObject(message.userMetadata[j], options);
            }
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (let j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.dlvc_api.WrappedMessage.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this PushRawMessagesRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.PushRawMessagesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRawMessagesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PushRawMessagesRequest;
    })();

    dlvc_api.PushRawMessagesResponse = (function() {

        /**
         * Properties of a PushRawMessagesResponse.
         * @memberof dlvc_api
         * @interface IPushRawMessagesResponse
         * @property {dlvc_api.IDuplicateDetails|null} [duplicateDetails] PushRawMessagesResponse duplicateDetails
         */

        /**
         * Constructs a new PushRawMessagesResponse.
         * @memberof dlvc_api
         * @classdesc Represents a PushRawMessagesResponse.
         * @implements IPushRawMessagesResponse
         * @constructor
         * @param {dlvc_api.IPushRawMessagesResponse=} [properties] Properties to set
         */
        function PushRawMessagesResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRawMessagesResponse duplicateDetails.
         * @member {dlvc_api.IDuplicateDetails|null|undefined} duplicateDetails
         * @memberof dlvc_api.PushRawMessagesResponse
         * @instance
         */
        PushRawMessagesResponse.prototype.duplicateDetails = null;

        /**
         * Creates a new PushRawMessagesResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {dlvc_api.IPushRawMessagesResponse=} [properties] Properties to set
         * @returns {dlvc_api.PushRawMessagesResponse} PushRawMessagesResponse instance
         */
        PushRawMessagesResponse.create = function create(properties) {
            return new PushRawMessagesResponse(properties);
        };

        /**
         * Encodes the specified PushRawMessagesResponse message. Does not implicitly {@link dlvc_api.PushRawMessagesResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {dlvc_api.IPushRawMessagesResponse} message PushRawMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessagesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duplicateDetails != null && Object.hasOwnProperty.call(message, "duplicateDetails"))
                $root.dlvc_api.DuplicateDetails.encode(message.duplicateDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushRawMessagesResponse message, length delimited. Does not implicitly {@link dlvc_api.PushRawMessagesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {dlvc_api.IPushRawMessagesResponse} message PushRawMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRawMessagesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRawMessagesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.PushRawMessagesResponse} PushRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessagesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.PushRawMessagesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.duplicateDetails = $root.dlvc_api.DuplicateDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRawMessagesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.PushRawMessagesResponse} PushRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRawMessagesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRawMessagesResponse message.
         * @function verify
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRawMessagesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.duplicateDetails != null && message.hasOwnProperty("duplicateDetails")) {
                let error = $root.dlvc_api.DuplicateDetails.verify(message.duplicateDetails);
                if (error)
                    return "duplicateDetails." + error;
            }
            return null;
        };

        /**
         * Creates a PushRawMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.PushRawMessagesResponse} PushRawMessagesResponse
         */
        PushRawMessagesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.PushRawMessagesResponse)
                return object;
            let message = new $root.dlvc_api.PushRawMessagesResponse();
            if (object.duplicateDetails != null) {
                if (typeof object.duplicateDetails !== "object")
                    throw TypeError(".dlvc_api.PushRawMessagesResponse.duplicateDetails: object expected");
                message.duplicateDetails = $root.dlvc_api.DuplicateDetails.fromObject(object.duplicateDetails);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushRawMessagesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.PushRawMessagesResponse
         * @static
         * @param {dlvc_api.PushRawMessagesResponse} message PushRawMessagesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRawMessagesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.duplicateDetails = null;
            if (message.duplicateDetails != null && message.hasOwnProperty("duplicateDetails"))
                object.duplicateDetails = $root.dlvc_api.DuplicateDetails.toObject(message.duplicateDetails, options);
            return object;
        };

        /**
         * Converts this PushRawMessagesResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.PushRawMessagesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRawMessagesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PushRawMessagesResponse;
    })();

    dlvc_api.DuplicateDetails = (function() {

        /**
         * Properties of a DuplicateDetails.
         * @memberof dlvc_api
         * @interface IDuplicateDetails
         * @property {boolean|null} [duplicates] DuplicateDetails duplicates
         * @property {Array.<string>|null} [idempotencyKeys] DuplicateDetails idempotencyKeys
         */

        /**
         * Constructs a new DuplicateDetails.
         * @memberof dlvc_api
         * @classdesc Represents a DuplicateDetails.
         * @implements IDuplicateDetails
         * @constructor
         * @param {dlvc_api.IDuplicateDetails=} [properties] Properties to set
         */
        function DuplicateDetails(properties) {
            this.idempotencyKeys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DuplicateDetails duplicates.
         * @member {boolean} duplicates
         * @memberof dlvc_api.DuplicateDetails
         * @instance
         */
        DuplicateDetails.prototype.duplicates = false;

        /**
         * DuplicateDetails idempotencyKeys.
         * @member {Array.<string>} idempotencyKeys
         * @memberof dlvc_api.DuplicateDetails
         * @instance
         */
        DuplicateDetails.prototype.idempotencyKeys = $util.emptyArray;

        /**
         * Creates a new DuplicateDetails instance using the specified properties.
         * @function create
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {dlvc_api.IDuplicateDetails=} [properties] Properties to set
         * @returns {dlvc_api.DuplicateDetails} DuplicateDetails instance
         */
        DuplicateDetails.create = function create(properties) {
            return new DuplicateDetails(properties);
        };

        /**
         * Encodes the specified DuplicateDetails message. Does not implicitly {@link dlvc_api.DuplicateDetails.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {dlvc_api.IDuplicateDetails} message DuplicateDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuplicateDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duplicates != null && Object.hasOwnProperty.call(message, "duplicates"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.duplicates);
            if (message.idempotencyKeys != null && message.idempotencyKeys.length)
                for (let i = 0; i < message.idempotencyKeys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.idempotencyKeys[i]);
            return writer;
        };

        /**
         * Encodes the specified DuplicateDetails message, length delimited. Does not implicitly {@link dlvc_api.DuplicateDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {dlvc_api.IDuplicateDetails} message DuplicateDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuplicateDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DuplicateDetails message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.DuplicateDetails} DuplicateDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuplicateDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.DuplicateDetails();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.duplicates = reader.bool();
                    break;
                case 3:
                    if (!(message.idempotencyKeys && message.idempotencyKeys.length))
                        message.idempotencyKeys = [];
                    message.idempotencyKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DuplicateDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.DuplicateDetails} DuplicateDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuplicateDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DuplicateDetails message.
         * @function verify
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DuplicateDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.duplicates != null && message.hasOwnProperty("duplicates"))
                if (typeof message.duplicates !== "boolean")
                    return "duplicates: boolean expected";
            if (message.idempotencyKeys != null && message.hasOwnProperty("idempotencyKeys")) {
                if (!Array.isArray(message.idempotencyKeys))
                    return "idempotencyKeys: array expected";
                for (let i = 0; i < message.idempotencyKeys.length; ++i)
                    if (!$util.isString(message.idempotencyKeys[i]))
                        return "idempotencyKeys: string[] expected";
            }
            return null;
        };

        /**
         * Creates a DuplicateDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.DuplicateDetails} DuplicateDetails
         */
        DuplicateDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.DuplicateDetails)
                return object;
            let message = new $root.dlvc_api.DuplicateDetails();
            if (object.duplicates != null)
                message.duplicates = Boolean(object.duplicates);
            if (object.idempotencyKeys) {
                if (!Array.isArray(object.idempotencyKeys))
                    throw TypeError(".dlvc_api.DuplicateDetails.idempotencyKeys: array expected");
                message.idempotencyKeys = [];
                for (let i = 0; i < object.idempotencyKeys.length; ++i)
                    message.idempotencyKeys[i] = String(object.idempotencyKeys[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DuplicateDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.DuplicateDetails
         * @static
         * @param {dlvc_api.DuplicateDetails} message DuplicateDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DuplicateDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.idempotencyKeys = [];
            if (options.defaults)
                object.duplicates = false;
            if (message.duplicates != null && message.hasOwnProperty("duplicates"))
                object.duplicates = message.duplicates;
            if (message.idempotencyKeys && message.idempotencyKeys.length) {
                object.idempotencyKeys = [];
                for (let j = 0; j < message.idempotencyKeys.length; ++j)
                    object.idempotencyKeys[j] = message.idempotencyKeys[j];
            }
            return object;
        };

        /**
         * Converts this DuplicateDetails to JSON.
         * @function toJSON
         * @memberof dlvc_api.DuplicateDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DuplicateDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DuplicateDetails;
    })();

    /**
     * MessageRetrievalType enum.
     * @name dlvc_api.MessageRetrievalType
     * @enum {string}
     * @property {number} UNSPECIFIED=0 UNSPECIFIED value
     * @property {number} INDEX=1 INDEX value
     * @property {number} TIME=2 TIME value
     * @property {number} MESSAGE_TYPE=3 MESSAGE_TYPE value
     * @property {number} ENCODING_TYPE=4 ENCODING_TYPE value
     * @property {number} METADATA=5 METADATA value
     * @property {number} USER_DEFINED_METADATA=6 USER_DEFINED_METADATA value
     * @property {number} POSITION_BOUNDING_BOX=7 POSITION_BOUNDING_BOX value
     */
    dlvc_api.MessageRetrievalType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED"] = 0;
        values[valuesById[1] = "INDEX"] = 1;
        values[valuesById[2] = "TIME"] = 2;
        values[valuesById[3] = "MESSAGE_TYPE"] = 3;
        values[valuesById[4] = "ENCODING_TYPE"] = 4;
        values[valuesById[5] = "METADATA"] = 5;
        values[valuesById[6] = "USER_DEFINED_METADATA"] = 6;
        values[valuesById[7] = "POSITION_BOUNDING_BOX"] = 7;
        return values;
    })();

    /**
     * ReturnedMetadataType enum.
     * @name dlvc_api.ReturnedMetadataType
     * @enum {string}
     * @property {number} RETURN_UNSPECIFIED=0 RETURN_UNSPECIFIED value
     * @property {number} RETURN_NONE=1 RETURN_NONE value
     * @property {number} RETURN_ALL=2 RETURN_ALL value
     * @property {number} RETURN_TIME=3 RETURN_TIME value
     * @property {number} RETURN_SOURCE_TYPE=4 RETURN_SOURCE_TYPE value
     * @property {number} RETURN_METADATA=5 RETURN_METADATA value
     * @property {number} RETURN_USER_DEFINED_METADATA=6 RETURN_USER_DEFINED_METADATA value
     * @property {number} RETURN_POSITION=7 RETURN_POSITION value
     */
    dlvc_api.ReturnedMetadataType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RETURN_UNSPECIFIED"] = 0;
        values[valuesById[1] = "RETURN_NONE"] = 1;
        values[valuesById[2] = "RETURN_ALL"] = 2;
        values[valuesById[3] = "RETURN_TIME"] = 3;
        values[valuesById[4] = "RETURN_SOURCE_TYPE"] = 4;
        values[valuesById[5] = "RETURN_METADATA"] = 5;
        values[valuesById[6] = "RETURN_USER_DEFINED_METADATA"] = 6;
        values[valuesById[7] = "RETURN_POSITION"] = 7;
        return values;
    })();

    dlvc_api.GetRawMessageRequest = (function() {

        /**
         * Properties of a GetRawMessageRequest.
         * @memberof dlvc_api
         * @interface IGetRawMessageRequest
         * @property {Array.<dlvc_api.MessageRetrievalType>|null} [retrievalTypes] GetRawMessageRequest retrievalTypes
         * @property {Array.<dlvc_api.ReturnedMetadataType>|null} [returnedMetadataTypes] GetRawMessageRequest returnedMetadataTypes
         * @property {dlvc_api.IMetadata|null} [metadata] GetRawMessageRequest metadata
         * @property {Array.<dlvc_api.IUserDefinedMetadata>|null} [userMetadata] GetRawMessageRequest userMetadata
         * @property {dlvc_api.ISourceType|null} [sourceType] GetRawMessageRequest sourceType
         * @property {dlvc_api.IPositionBoundingBox|null} [boundingBox] GetRawMessageRequest boundingBox
         * @property {dlvc_api.ITimeRange|null} [timeRange] GetRawMessageRequest timeRange
         * @property {number|Long|null} [nextIndex] GetRawMessageRequest nextIndex
         */

        /**
         * Constructs a new GetRawMessageRequest.
         * @memberof dlvc_api
         * @classdesc Represents a GetRawMessageRequest.
         * @implements IGetRawMessageRequest
         * @constructor
         * @param {dlvc_api.IGetRawMessageRequest=} [properties] Properties to set
         */
        function GetRawMessageRequest(properties) {
            this.retrievalTypes = [];
            this.returnedMetadataTypes = [];
            this.userMetadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRawMessageRequest retrievalTypes.
         * @member {Array.<dlvc_api.MessageRetrievalType>} retrievalTypes
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.retrievalTypes = $util.emptyArray;

        /**
         * GetRawMessageRequest returnedMetadataTypes.
         * @member {Array.<dlvc_api.ReturnedMetadataType>} returnedMetadataTypes
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.returnedMetadataTypes = $util.emptyArray;

        /**
         * GetRawMessageRequest metadata.
         * @member {dlvc_api.IMetadata|null|undefined} metadata
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.metadata = null;

        /**
         * GetRawMessageRequest userMetadata.
         * @member {Array.<dlvc_api.IUserDefinedMetadata>} userMetadata
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.userMetadata = $util.emptyArray;

        /**
         * GetRawMessageRequest sourceType.
         * @member {dlvc_api.ISourceType|null|undefined} sourceType
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.sourceType = null;

        /**
         * GetRawMessageRequest boundingBox.
         * @member {dlvc_api.IPositionBoundingBox|null|undefined} boundingBox
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.boundingBox = null;

        /**
         * GetRawMessageRequest timeRange.
         * @member {dlvc_api.ITimeRange|null|undefined} timeRange
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.timeRange = null;

        /**
         * GetRawMessageRequest nextIndex.
         * @member {number|Long} nextIndex
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         */
        GetRawMessageRequest.prototype.nextIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRawMessageRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {dlvc_api.IGetRawMessageRequest=} [properties] Properties to set
         * @returns {dlvc_api.GetRawMessageRequest} GetRawMessageRequest instance
         */
        GetRawMessageRequest.create = function create(properties) {
            return new GetRawMessageRequest(properties);
        };

        /**
         * Encodes the specified GetRawMessageRequest message. Does not implicitly {@link dlvc_api.GetRawMessageRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {dlvc_api.IGetRawMessageRequest} message GetRawMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retrievalTypes != null && message.retrievalTypes.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.retrievalTypes.length; ++i)
                    writer.int32(message.retrievalTypes[i]);
                writer.ldelim();
            }
            if (message.returnedMetadataTypes != null && message.returnedMetadataTypes.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.returnedMetadataTypes.length; ++i)
                    writer.int32(message.returnedMetadataTypes[i]);
                writer.ldelim();
            }
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.dlvc_api.Metadata.encode(message.metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.userMetadata != null && message.userMetadata.length)
                for (let i = 0; i < message.userMetadata.length; ++i)
                    $root.dlvc_api.UserDefinedMetadata.encode(message.userMetadata[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                $root.dlvc_api.SourceType.encode(message.sourceType, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.boundingBox != null && Object.hasOwnProperty.call(message, "boundingBox"))
                $root.dlvc_api.PositionBoundingBox.encode(message.boundingBox, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.timeRange != null && Object.hasOwnProperty.call(message, "timeRange"))
                $root.dlvc_api.TimeRange.encode(message.timeRange, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.nextIndex != null && Object.hasOwnProperty.call(message, "nextIndex"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.nextIndex);
            return writer;
        };

        /**
         * Encodes the specified GetRawMessageRequest message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {dlvc_api.IGetRawMessageRequest} message GetRawMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRawMessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.GetRawMessageRequest} GetRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.GetRawMessageRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.retrievalTypes && message.retrievalTypes.length))
                        message.retrievalTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.retrievalTypes.push(reader.int32());
                    } else
                        message.retrievalTypes.push(reader.int32());
                    break;
                case 3:
                    if (!(message.returnedMetadataTypes && message.returnedMetadataTypes.length))
                        message.returnedMetadataTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.returnedMetadataTypes.push(reader.int32());
                    } else
                        message.returnedMetadataTypes.push(reader.int32());
                    break;
                case 4:
                    message.metadata = $root.dlvc_api.Metadata.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.userMetadata && message.userMetadata.length))
                        message.userMetadata = [];
                    message.userMetadata.push($root.dlvc_api.UserDefinedMetadata.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sourceType = $root.dlvc_api.SourceType.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.boundingBox = $root.dlvc_api.PositionBoundingBox.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeRange = $root.dlvc_api.TimeRange.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.nextIndex = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRawMessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.GetRawMessageRequest} GetRawMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRawMessageRequest message.
         * @function verify
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRawMessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retrievalTypes != null && message.hasOwnProperty("retrievalTypes")) {
                if (!Array.isArray(message.retrievalTypes))
                    return "retrievalTypes: array expected";
                for (let i = 0; i < message.retrievalTypes.length; ++i)
                    switch (message.retrievalTypes[i]) {
                    default:
                        return "retrievalTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
            }
            if (message.returnedMetadataTypes != null && message.hasOwnProperty("returnedMetadataTypes")) {
                if (!Array.isArray(message.returnedMetadataTypes))
                    return "returnedMetadataTypes: array expected";
                for (let i = 0; i < message.returnedMetadataTypes.length; ++i)
                    switch (message.returnedMetadataTypes[i]) {
                    default:
                        return "returnedMetadataTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
            }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                let error = $root.dlvc_api.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.userMetadata != null && message.hasOwnProperty("userMetadata")) {
                if (!Array.isArray(message.userMetadata))
                    return "userMetadata: array expected";
                for (let i = 0; i < message.userMetadata.length; ++i) {
                    let error = $root.dlvc_api.UserDefinedMetadata.verify(message.userMetadata[i]);
                    if (error)
                        return "userMetadata." + error;
                }
            }
            if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                let error = $root.dlvc_api.SourceType.verify(message.sourceType);
                if (error)
                    return "sourceType." + error;
            }
            if (message.boundingBox != null && message.hasOwnProperty("boundingBox")) {
                let error = $root.dlvc_api.PositionBoundingBox.verify(message.boundingBox);
                if (error)
                    return "boundingBox." + error;
            }
            if (message.timeRange != null && message.hasOwnProperty("timeRange")) {
                let error = $root.dlvc_api.TimeRange.verify(message.timeRange);
                if (error)
                    return "timeRange." + error;
            }
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (!$util.isInteger(message.nextIndex) && !(message.nextIndex && $util.isInteger(message.nextIndex.low) && $util.isInteger(message.nextIndex.high)))
                    return "nextIndex: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRawMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.GetRawMessageRequest} GetRawMessageRequest
         */
        GetRawMessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.GetRawMessageRequest)
                return object;
            let message = new $root.dlvc_api.GetRawMessageRequest();
            if (object.retrievalTypes) {
                if (!Array.isArray(object.retrievalTypes))
                    throw TypeError(".dlvc_api.GetRawMessageRequest.retrievalTypes: array expected");
                message.retrievalTypes = [];
                for (let i = 0; i < object.retrievalTypes.length; ++i)
                    switch (object.retrievalTypes[i]) {
                    default:
                    case "UNSPECIFIED":
                    case 0:
                        message.retrievalTypes[i] = 0;
                        break;
                    case "INDEX":
                    case 1:
                        message.retrievalTypes[i] = 1;
                        break;
                    case "TIME":
                    case 2:
                        message.retrievalTypes[i] = 2;
                        break;
                    case "MESSAGE_TYPE":
                    case 3:
                        message.retrievalTypes[i] = 3;
                        break;
                    case "ENCODING_TYPE":
                    case 4:
                        message.retrievalTypes[i] = 4;
                        break;
                    case "METADATA":
                    case 5:
                        message.retrievalTypes[i] = 5;
                        break;
                    case "USER_DEFINED_METADATA":
                    case 6:
                        message.retrievalTypes[i] = 6;
                        break;
                    case "POSITION_BOUNDING_BOX":
                    case 7:
                        message.retrievalTypes[i] = 7;
                        break;
                    }
            }
            if (object.returnedMetadataTypes) {
                if (!Array.isArray(object.returnedMetadataTypes))
                    throw TypeError(".dlvc_api.GetRawMessageRequest.returnedMetadataTypes: array expected");
                message.returnedMetadataTypes = [];
                for (let i = 0; i < object.returnedMetadataTypes.length; ++i)
                    switch (object.returnedMetadataTypes[i]) {
                    default:
                    case "RETURN_UNSPECIFIED":
                    case 0:
                        message.returnedMetadataTypes[i] = 0;
                        break;
                    case "RETURN_NONE":
                    case 1:
                        message.returnedMetadataTypes[i] = 1;
                        break;
                    case "RETURN_ALL":
                    case 2:
                        message.returnedMetadataTypes[i] = 2;
                        break;
                    case "RETURN_TIME":
                    case 3:
                        message.returnedMetadataTypes[i] = 3;
                        break;
                    case "RETURN_SOURCE_TYPE":
                    case 4:
                        message.returnedMetadataTypes[i] = 4;
                        break;
                    case "RETURN_METADATA":
                    case 5:
                        message.returnedMetadataTypes[i] = 5;
                        break;
                    case "RETURN_USER_DEFINED_METADATA":
                    case 6:
                        message.returnedMetadataTypes[i] = 6;
                        break;
                    case "RETURN_POSITION":
                    case 7:
                        message.returnedMetadataTypes[i] = 7;
                        break;
                    }
            }
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".dlvc_api.GetRawMessageRequest.metadata: object expected");
                message.metadata = $root.dlvc_api.Metadata.fromObject(object.metadata);
            }
            if (object.userMetadata) {
                if (!Array.isArray(object.userMetadata))
                    throw TypeError(".dlvc_api.GetRawMessageRequest.userMetadata: array expected");
                message.userMetadata = [];
                for (let i = 0; i < object.userMetadata.length; ++i) {
                    if (typeof object.userMetadata[i] !== "object")
                        throw TypeError(".dlvc_api.GetRawMessageRequest.userMetadata: object expected");
                    message.userMetadata[i] = $root.dlvc_api.UserDefinedMetadata.fromObject(object.userMetadata[i]);
                }
            }
            if (object.sourceType != null) {
                if (typeof object.sourceType !== "object")
                    throw TypeError(".dlvc_api.GetRawMessageRequest.sourceType: object expected");
                message.sourceType = $root.dlvc_api.SourceType.fromObject(object.sourceType);
            }
            if (object.boundingBox != null) {
                if (typeof object.boundingBox !== "object")
                    throw TypeError(".dlvc_api.GetRawMessageRequest.boundingBox: object expected");
                message.boundingBox = $root.dlvc_api.PositionBoundingBox.fromObject(object.boundingBox);
            }
            if (object.timeRange != null) {
                if (typeof object.timeRange !== "object")
                    throw TypeError(".dlvc_api.GetRawMessageRequest.timeRange: object expected");
                message.timeRange = $root.dlvc_api.TimeRange.fromObject(object.timeRange);
            }
            if (object.nextIndex != null)
                if ($util.Long)
                    (message.nextIndex = $util.Long.fromValue(object.nextIndex)).unsigned = false;
                else if (typeof object.nextIndex === "string")
                    message.nextIndex = parseInt(object.nextIndex, 10);
                else if (typeof object.nextIndex === "number")
                    message.nextIndex = object.nextIndex;
                else if (typeof object.nextIndex === "object")
                    message.nextIndex = new $util.LongBits(object.nextIndex.low >>> 0, object.nextIndex.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRawMessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.GetRawMessageRequest
         * @static
         * @param {dlvc_api.GetRawMessageRequest} message GetRawMessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRawMessageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.retrievalTypes = [];
                object.returnedMetadataTypes = [];
                object.userMetadata = [];
            }
            if (options.defaults) {
                object.metadata = null;
                object.sourceType = null;
                object.boundingBox = null;
                object.timeRange = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nextIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextIndex = options.longs === String ? "0" : 0;
            }
            if (message.retrievalTypes && message.retrievalTypes.length) {
                object.retrievalTypes = [];
                for (let j = 0; j < message.retrievalTypes.length; ++j)
                    object.retrievalTypes[j] = options.enums === String ? $root.dlvc_api.MessageRetrievalType[message.retrievalTypes[j]] : message.retrievalTypes[j];
            }
            if (message.returnedMetadataTypes && message.returnedMetadataTypes.length) {
                object.returnedMetadataTypes = [];
                for (let j = 0; j < message.returnedMetadataTypes.length; ++j)
                    object.returnedMetadataTypes[j] = options.enums === String ? $root.dlvc_api.ReturnedMetadataType[message.returnedMetadataTypes[j]] : message.returnedMetadataTypes[j];
            }
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.dlvc_api.Metadata.toObject(message.metadata, options);
            if (message.userMetadata && message.userMetadata.length) {
                object.userMetadata = [];
                for (let j = 0; j < message.userMetadata.length; ++j)
                    object.userMetadata[j] = $root.dlvc_api.UserDefinedMetadata.toObject(message.userMetadata[j], options);
            }
            if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                object.sourceType = $root.dlvc_api.SourceType.toObject(message.sourceType, options);
            if (message.boundingBox != null && message.hasOwnProperty("boundingBox"))
                object.boundingBox = $root.dlvc_api.PositionBoundingBox.toObject(message.boundingBox, options);
            if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                object.timeRange = $root.dlvc_api.TimeRange.toObject(message.timeRange, options);
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (typeof message.nextIndex === "number")
                    object.nextIndex = options.longs === String ? String(message.nextIndex) : message.nextIndex;
                else
                    object.nextIndex = options.longs === String ? $util.Long.prototype.toString.call(message.nextIndex) : options.longs === Number ? new $util.LongBits(message.nextIndex.low >>> 0, message.nextIndex.high >>> 0).toNumber() : message.nextIndex;
            return object;
        };

        /**
         * Converts this GetRawMessageRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.GetRawMessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRawMessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRawMessageRequest;
    })();

    dlvc_api.GetRawMessageResponse = (function() {

        /**
         * Properties of a GetRawMessageResponse.
         * @memberof dlvc_api
         * @interface IGetRawMessageResponse
         * @property {dlvc_api.IWrappedMessage|null} [message] GetRawMessageResponse message
         * @property {number|Long|null} [nextIndex] GetRawMessageResponse nextIndex
         * @property {number|Long|null} [lenBytes] GetRawMessageResponse lenBytes
         */

        /**
         * Constructs a new GetRawMessageResponse.
         * @memberof dlvc_api
         * @classdesc Represents a GetRawMessageResponse.
         * @implements IGetRawMessageResponse
         * @constructor
         * @param {dlvc_api.IGetRawMessageResponse=} [properties] Properties to set
         */
        function GetRawMessageResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRawMessageResponse message.
         * @member {dlvc_api.IWrappedMessage|null|undefined} message
         * @memberof dlvc_api.GetRawMessageResponse
         * @instance
         */
        GetRawMessageResponse.prototype.message = null;

        /**
         * GetRawMessageResponse nextIndex.
         * @member {number|Long} nextIndex
         * @memberof dlvc_api.GetRawMessageResponse
         * @instance
         */
        GetRawMessageResponse.prototype.nextIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRawMessageResponse lenBytes.
         * @member {number|Long} lenBytes
         * @memberof dlvc_api.GetRawMessageResponse
         * @instance
         */
        GetRawMessageResponse.prototype.lenBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRawMessageResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {dlvc_api.IGetRawMessageResponse=} [properties] Properties to set
         * @returns {dlvc_api.GetRawMessageResponse} GetRawMessageResponse instance
         */
        GetRawMessageResponse.create = function create(properties) {
            return new GetRawMessageResponse(properties);
        };

        /**
         * Encodes the specified GetRawMessageResponse message. Does not implicitly {@link dlvc_api.GetRawMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {dlvc_api.IGetRawMessageResponse} message GetRawMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.dlvc_api.WrappedMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nextIndex != null && Object.hasOwnProperty.call(message, "nextIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextIndex);
            if (message.lenBytes != null && Object.hasOwnProperty.call(message, "lenBytes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lenBytes);
            return writer;
        };

        /**
         * Encodes the specified GetRawMessageResponse message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {dlvc_api.IGetRawMessageResponse} message GetRawMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRawMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.GetRawMessageResponse} GetRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.GetRawMessageResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.message = $root.dlvc_api.WrappedMessage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextIndex = reader.int64();
                    break;
                case 4:
                    message.lenBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRawMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.GetRawMessageResponse} GetRawMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRawMessageResponse message.
         * @function verify
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRawMessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                let error = $root.dlvc_api.WrappedMessage.verify(message.message);
                if (error)
                    return "message." + error;
            }
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (!$util.isInteger(message.nextIndex) && !(message.nextIndex && $util.isInteger(message.nextIndex.low) && $util.isInteger(message.nextIndex.high)))
                    return "nextIndex: integer|Long expected";
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (!$util.isInteger(message.lenBytes) && !(message.lenBytes && $util.isInteger(message.lenBytes.low) && $util.isInteger(message.lenBytes.high)))
                    return "lenBytes: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRawMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.GetRawMessageResponse} GetRawMessageResponse
         */
        GetRawMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.GetRawMessageResponse)
                return object;
            let message = new $root.dlvc_api.GetRawMessageResponse();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".dlvc_api.GetRawMessageResponse.message: object expected");
                message.message = $root.dlvc_api.WrappedMessage.fromObject(object.message);
            }
            if (object.nextIndex != null)
                if ($util.Long)
                    (message.nextIndex = $util.Long.fromValue(object.nextIndex)).unsigned = false;
                else if (typeof object.nextIndex === "string")
                    message.nextIndex = parseInt(object.nextIndex, 10);
                else if (typeof object.nextIndex === "number")
                    message.nextIndex = object.nextIndex;
                else if (typeof object.nextIndex === "object")
                    message.nextIndex = new $util.LongBits(object.nextIndex.low >>> 0, object.nextIndex.high >>> 0).toNumber();
            if (object.lenBytes != null)
                if ($util.Long)
                    (message.lenBytes = $util.Long.fromValue(object.lenBytes)).unsigned = false;
                else if (typeof object.lenBytes === "string")
                    message.lenBytes = parseInt(object.lenBytes, 10);
                else if (typeof object.lenBytes === "number")
                    message.lenBytes = object.lenBytes;
                else if (typeof object.lenBytes === "object")
                    message.lenBytes = new $util.LongBits(object.lenBytes.low >>> 0, object.lenBytes.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRawMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.GetRawMessageResponse
         * @static
         * @param {dlvc_api.GetRawMessageResponse} message GetRawMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRawMessageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.message = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nextIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextIndex = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lenBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lenBytes = options.longs === String ? "0" : 0;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.dlvc_api.WrappedMessage.toObject(message.message, options);
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (typeof message.nextIndex === "number")
                    object.nextIndex = options.longs === String ? String(message.nextIndex) : message.nextIndex;
                else
                    object.nextIndex = options.longs === String ? $util.Long.prototype.toString.call(message.nextIndex) : options.longs === Number ? new $util.LongBits(message.nextIndex.low >>> 0, message.nextIndex.high >>> 0).toNumber() : message.nextIndex;
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (typeof message.lenBytes === "number")
                    object.lenBytes = options.longs === String ? String(message.lenBytes) : message.lenBytes;
                else
                    object.lenBytes = options.longs === String ? $util.Long.prototype.toString.call(message.lenBytes) : options.longs === Number ? new $util.LongBits(message.lenBytes.low >>> 0, message.lenBytes.high >>> 0).toNumber() : message.lenBytes;
            return object;
        };

        /**
         * Converts this GetRawMessageResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.GetRawMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRawMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRawMessageResponse;
    })();

    dlvc_api.GetRawMessagesRequest = (function() {

        /**
         * Properties of a GetRawMessagesRequest.
         * @memberof dlvc_api
         * @interface IGetRawMessagesRequest
         * @property {Array.<dlvc_api.MessageRetrievalType>|null} [retrievalTypes] GetRawMessagesRequest retrievalTypes
         * @property {Array.<dlvc_api.ReturnedMetadataType>|null} [returnedMetadataTypes] GetRawMessagesRequest returnedMetadataTypes
         * @property {dlvc_api.IMetadata|null} [metadata] GetRawMessagesRequest metadata
         * @property {Array.<dlvc_api.IUserDefinedMetadata>|null} [userMetadata] GetRawMessagesRequest userMetadata
         * @property {dlvc_api.ISourceType|null} [sourceType] GetRawMessagesRequest sourceType
         * @property {dlvc_api.IPositionBoundingBox|null} [boundingBox] GetRawMessagesRequest boundingBox
         * @property {dlvc_api.ITimeRange|null} [timeRange] GetRawMessagesRequest timeRange
         * @property {number|Long|null} [nextIndex] GetRawMessagesRequest nextIndex
         * @property {number|Long|null} [limit] GetRawMessagesRequest limit
         * @property {number|Long|null} [lenBytes] GetRawMessagesRequest lenBytes
         */

        /**
         * Constructs a new GetRawMessagesRequest.
         * @memberof dlvc_api
         * @classdesc Represents a GetRawMessagesRequest.
         * @implements IGetRawMessagesRequest
         * @constructor
         * @param {dlvc_api.IGetRawMessagesRequest=} [properties] Properties to set
         */
        function GetRawMessagesRequest(properties) {
            this.retrievalTypes = [];
            this.returnedMetadataTypes = [];
            this.userMetadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRawMessagesRequest retrievalTypes.
         * @member {Array.<dlvc_api.MessageRetrievalType>} retrievalTypes
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.retrievalTypes = $util.emptyArray;

        /**
         * GetRawMessagesRequest returnedMetadataTypes.
         * @member {Array.<dlvc_api.ReturnedMetadataType>} returnedMetadataTypes
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.returnedMetadataTypes = $util.emptyArray;

        /**
         * GetRawMessagesRequest metadata.
         * @member {dlvc_api.IMetadata|null|undefined} metadata
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.metadata = null;

        /**
         * GetRawMessagesRequest userMetadata.
         * @member {Array.<dlvc_api.IUserDefinedMetadata>} userMetadata
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.userMetadata = $util.emptyArray;

        /**
         * GetRawMessagesRequest sourceType.
         * @member {dlvc_api.ISourceType|null|undefined} sourceType
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.sourceType = null;

        /**
         * GetRawMessagesRequest boundingBox.
         * @member {dlvc_api.IPositionBoundingBox|null|undefined} boundingBox
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.boundingBox = null;

        /**
         * GetRawMessagesRequest timeRange.
         * @member {dlvc_api.ITimeRange|null|undefined} timeRange
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.timeRange = null;

        /**
         * GetRawMessagesRequest nextIndex.
         * @member {number|Long} nextIndex
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.nextIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRawMessagesRequest limit.
         * @member {number|Long} limit
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRawMessagesRequest lenBytes.
         * @member {number|Long} lenBytes
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         */
        GetRawMessagesRequest.prototype.lenBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRawMessagesRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {dlvc_api.IGetRawMessagesRequest=} [properties] Properties to set
         * @returns {dlvc_api.GetRawMessagesRequest} GetRawMessagesRequest instance
         */
        GetRawMessagesRequest.create = function create(properties) {
            return new GetRawMessagesRequest(properties);
        };

        /**
         * Encodes the specified GetRawMessagesRequest message. Does not implicitly {@link dlvc_api.GetRawMessagesRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {dlvc_api.IGetRawMessagesRequest} message GetRawMessagesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessagesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.retrievalTypes != null && message.retrievalTypes.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.retrievalTypes.length; ++i)
                    writer.int32(message.retrievalTypes[i]);
                writer.ldelim();
            }
            if (message.returnedMetadataTypes != null && message.returnedMetadataTypes.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.returnedMetadataTypes.length; ++i)
                    writer.int32(message.returnedMetadataTypes[i]);
                writer.ldelim();
            }
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.dlvc_api.Metadata.encode(message.metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.userMetadata != null && message.userMetadata.length)
                for (let i = 0; i < message.userMetadata.length; ++i)
                    $root.dlvc_api.UserDefinedMetadata.encode(message.userMetadata[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                $root.dlvc_api.SourceType.encode(message.sourceType, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.boundingBox != null && Object.hasOwnProperty.call(message, "boundingBox"))
                $root.dlvc_api.PositionBoundingBox.encode(message.boundingBox, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.timeRange != null && Object.hasOwnProperty.call(message, "timeRange"))
                $root.dlvc_api.TimeRange.encode(message.timeRange, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.nextIndex != null && Object.hasOwnProperty.call(message, "nextIndex"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.nextIndex);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.limit);
            if (message.lenBytes != null && Object.hasOwnProperty.call(message, "lenBytes"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.lenBytes);
            return writer;
        };

        /**
         * Encodes the specified GetRawMessagesRequest message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessagesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {dlvc_api.IGetRawMessagesRequest} message GetRawMessagesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessagesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRawMessagesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.GetRawMessagesRequest} GetRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessagesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.GetRawMessagesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.retrievalTypes && message.retrievalTypes.length))
                        message.retrievalTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.retrievalTypes.push(reader.int32());
                    } else
                        message.retrievalTypes.push(reader.int32());
                    break;
                case 3:
                    if (!(message.returnedMetadataTypes && message.returnedMetadataTypes.length))
                        message.returnedMetadataTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.returnedMetadataTypes.push(reader.int32());
                    } else
                        message.returnedMetadataTypes.push(reader.int32());
                    break;
                case 4:
                    message.metadata = $root.dlvc_api.Metadata.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.userMetadata && message.userMetadata.length))
                        message.userMetadata = [];
                    message.userMetadata.push($root.dlvc_api.UserDefinedMetadata.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sourceType = $root.dlvc_api.SourceType.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.boundingBox = $root.dlvc_api.PositionBoundingBox.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeRange = $root.dlvc_api.TimeRange.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.nextIndex = reader.int64();
                    break;
                case 10:
                    message.limit = reader.int64();
                    break;
                case 11:
                    message.lenBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRawMessagesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.GetRawMessagesRequest} GetRawMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessagesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRawMessagesRequest message.
         * @function verify
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRawMessagesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.retrievalTypes != null && message.hasOwnProperty("retrievalTypes")) {
                if (!Array.isArray(message.retrievalTypes))
                    return "retrievalTypes: array expected";
                for (let i = 0; i < message.retrievalTypes.length; ++i)
                    switch (message.retrievalTypes[i]) {
                    default:
                        return "retrievalTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
            }
            if (message.returnedMetadataTypes != null && message.hasOwnProperty("returnedMetadataTypes")) {
                if (!Array.isArray(message.returnedMetadataTypes))
                    return "returnedMetadataTypes: array expected";
                for (let i = 0; i < message.returnedMetadataTypes.length; ++i)
                    switch (message.returnedMetadataTypes[i]) {
                    default:
                        return "returnedMetadataTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
            }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                let error = $root.dlvc_api.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.userMetadata != null && message.hasOwnProperty("userMetadata")) {
                if (!Array.isArray(message.userMetadata))
                    return "userMetadata: array expected";
                for (let i = 0; i < message.userMetadata.length; ++i) {
                    let error = $root.dlvc_api.UserDefinedMetadata.verify(message.userMetadata[i]);
                    if (error)
                        return "userMetadata." + error;
                }
            }
            if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                let error = $root.dlvc_api.SourceType.verify(message.sourceType);
                if (error)
                    return "sourceType." + error;
            }
            if (message.boundingBox != null && message.hasOwnProperty("boundingBox")) {
                let error = $root.dlvc_api.PositionBoundingBox.verify(message.boundingBox);
                if (error)
                    return "boundingBox." + error;
            }
            if (message.timeRange != null && message.hasOwnProperty("timeRange")) {
                let error = $root.dlvc_api.TimeRange.verify(message.timeRange);
                if (error)
                    return "timeRange." + error;
            }
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (!$util.isInteger(message.nextIndex) && !(message.nextIndex && $util.isInteger(message.nextIndex.low) && $util.isInteger(message.nextIndex.high)))
                    return "nextIndex: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (!$util.isInteger(message.lenBytes) && !(message.lenBytes && $util.isInteger(message.lenBytes.low) && $util.isInteger(message.lenBytes.high)))
                    return "lenBytes: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRawMessagesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.GetRawMessagesRequest} GetRawMessagesRequest
         */
        GetRawMessagesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.GetRawMessagesRequest)
                return object;
            let message = new $root.dlvc_api.GetRawMessagesRequest();
            if (object.retrievalTypes) {
                if (!Array.isArray(object.retrievalTypes))
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.retrievalTypes: array expected");
                message.retrievalTypes = [];
                for (let i = 0; i < object.retrievalTypes.length; ++i)
                    switch (object.retrievalTypes[i]) {
                    default:
                    case "UNSPECIFIED":
                    case 0:
                        message.retrievalTypes[i] = 0;
                        break;
                    case "INDEX":
                    case 1:
                        message.retrievalTypes[i] = 1;
                        break;
                    case "TIME":
                    case 2:
                        message.retrievalTypes[i] = 2;
                        break;
                    case "MESSAGE_TYPE":
                    case 3:
                        message.retrievalTypes[i] = 3;
                        break;
                    case "ENCODING_TYPE":
                    case 4:
                        message.retrievalTypes[i] = 4;
                        break;
                    case "METADATA":
                    case 5:
                        message.retrievalTypes[i] = 5;
                        break;
                    case "USER_DEFINED_METADATA":
                    case 6:
                        message.retrievalTypes[i] = 6;
                        break;
                    case "POSITION_BOUNDING_BOX":
                    case 7:
                        message.retrievalTypes[i] = 7;
                        break;
                    }
            }
            if (object.returnedMetadataTypes) {
                if (!Array.isArray(object.returnedMetadataTypes))
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.returnedMetadataTypes: array expected");
                message.returnedMetadataTypes = [];
                for (let i = 0; i < object.returnedMetadataTypes.length; ++i)
                    switch (object.returnedMetadataTypes[i]) {
                    default:
                    case "RETURN_UNSPECIFIED":
                    case 0:
                        message.returnedMetadataTypes[i] = 0;
                        break;
                    case "RETURN_NONE":
                    case 1:
                        message.returnedMetadataTypes[i] = 1;
                        break;
                    case "RETURN_ALL":
                    case 2:
                        message.returnedMetadataTypes[i] = 2;
                        break;
                    case "RETURN_TIME":
                    case 3:
                        message.returnedMetadataTypes[i] = 3;
                        break;
                    case "RETURN_SOURCE_TYPE":
                    case 4:
                        message.returnedMetadataTypes[i] = 4;
                        break;
                    case "RETURN_METADATA":
                    case 5:
                        message.returnedMetadataTypes[i] = 5;
                        break;
                    case "RETURN_USER_DEFINED_METADATA":
                    case 6:
                        message.returnedMetadataTypes[i] = 6;
                        break;
                    case "RETURN_POSITION":
                    case 7:
                        message.returnedMetadataTypes[i] = 7;
                        break;
                    }
            }
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.metadata: object expected");
                message.metadata = $root.dlvc_api.Metadata.fromObject(object.metadata);
            }
            if (object.userMetadata) {
                if (!Array.isArray(object.userMetadata))
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.userMetadata: array expected");
                message.userMetadata = [];
                for (let i = 0; i < object.userMetadata.length; ++i) {
                    if (typeof object.userMetadata[i] !== "object")
                        throw TypeError(".dlvc_api.GetRawMessagesRequest.userMetadata: object expected");
                    message.userMetadata[i] = $root.dlvc_api.UserDefinedMetadata.fromObject(object.userMetadata[i]);
                }
            }
            if (object.sourceType != null) {
                if (typeof object.sourceType !== "object")
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.sourceType: object expected");
                message.sourceType = $root.dlvc_api.SourceType.fromObject(object.sourceType);
            }
            if (object.boundingBox != null) {
                if (typeof object.boundingBox !== "object")
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.boundingBox: object expected");
                message.boundingBox = $root.dlvc_api.PositionBoundingBox.fromObject(object.boundingBox);
            }
            if (object.timeRange != null) {
                if (typeof object.timeRange !== "object")
                    throw TypeError(".dlvc_api.GetRawMessagesRequest.timeRange: object expected");
                message.timeRange = $root.dlvc_api.TimeRange.fromObject(object.timeRange);
            }
            if (object.nextIndex != null)
                if ($util.Long)
                    (message.nextIndex = $util.Long.fromValue(object.nextIndex)).unsigned = false;
                else if (typeof object.nextIndex === "string")
                    message.nextIndex = parseInt(object.nextIndex, 10);
                else if (typeof object.nextIndex === "number")
                    message.nextIndex = object.nextIndex;
                else if (typeof object.nextIndex === "object")
                    message.nextIndex = new $util.LongBits(object.nextIndex.low >>> 0, object.nextIndex.high >>> 0).toNumber();
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = false;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber();
            if (object.lenBytes != null)
                if ($util.Long)
                    (message.lenBytes = $util.Long.fromValue(object.lenBytes)).unsigned = false;
                else if (typeof object.lenBytes === "string")
                    message.lenBytes = parseInt(object.lenBytes, 10);
                else if (typeof object.lenBytes === "number")
                    message.lenBytes = object.lenBytes;
                else if (typeof object.lenBytes === "object")
                    message.lenBytes = new $util.LongBits(object.lenBytes.low >>> 0, object.lenBytes.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRawMessagesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.GetRawMessagesRequest
         * @static
         * @param {dlvc_api.GetRawMessagesRequest} message GetRawMessagesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRawMessagesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.retrievalTypes = [];
                object.returnedMetadataTypes = [];
                object.userMetadata = [];
            }
            if (options.defaults) {
                object.metadata = null;
                object.sourceType = null;
                object.boundingBox = null;
                object.timeRange = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nextIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextIndex = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lenBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lenBytes = options.longs === String ? "0" : 0;
            }
            if (message.retrievalTypes && message.retrievalTypes.length) {
                object.retrievalTypes = [];
                for (let j = 0; j < message.retrievalTypes.length; ++j)
                    object.retrievalTypes[j] = options.enums === String ? $root.dlvc_api.MessageRetrievalType[message.retrievalTypes[j]] : message.retrievalTypes[j];
            }
            if (message.returnedMetadataTypes && message.returnedMetadataTypes.length) {
                object.returnedMetadataTypes = [];
                for (let j = 0; j < message.returnedMetadataTypes.length; ++j)
                    object.returnedMetadataTypes[j] = options.enums === String ? $root.dlvc_api.ReturnedMetadataType[message.returnedMetadataTypes[j]] : message.returnedMetadataTypes[j];
            }
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.dlvc_api.Metadata.toObject(message.metadata, options);
            if (message.userMetadata && message.userMetadata.length) {
                object.userMetadata = [];
                for (let j = 0; j < message.userMetadata.length; ++j)
                    object.userMetadata[j] = $root.dlvc_api.UserDefinedMetadata.toObject(message.userMetadata[j], options);
            }
            if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                object.sourceType = $root.dlvc_api.SourceType.toObject(message.sourceType, options);
            if (message.boundingBox != null && message.hasOwnProperty("boundingBox"))
                object.boundingBox = $root.dlvc_api.PositionBoundingBox.toObject(message.boundingBox, options);
            if (message.timeRange != null && message.hasOwnProperty("timeRange"))
                object.timeRange = $root.dlvc_api.TimeRange.toObject(message.timeRange, options);
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (typeof message.nextIndex === "number")
                    object.nextIndex = options.longs === String ? String(message.nextIndex) : message.nextIndex;
                else
                    object.nextIndex = options.longs === String ? $util.Long.prototype.toString.call(message.nextIndex) : options.longs === Number ? new $util.LongBits(message.nextIndex.low >>> 0, message.nextIndex.high >>> 0).toNumber() : message.nextIndex;
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber() : message.limit;
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (typeof message.lenBytes === "number")
                    object.lenBytes = options.longs === String ? String(message.lenBytes) : message.lenBytes;
                else
                    object.lenBytes = options.longs === String ? $util.Long.prototype.toString.call(message.lenBytes) : options.longs === Number ? new $util.LongBits(message.lenBytes.low >>> 0, message.lenBytes.high >>> 0).toNumber() : message.lenBytes;
            return object;
        };

        /**
         * Converts this GetRawMessagesRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.GetRawMessagesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRawMessagesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRawMessagesRequest;
    })();

    dlvc_api.GetRawMessagesResponse = (function() {

        /**
         * Properties of a GetRawMessagesResponse.
         * @memberof dlvc_api
         * @interface IGetRawMessagesResponse
         * @property {Array.<dlvc_api.IWrappedMessage>|null} [messages] GetRawMessagesResponse messages
         * @property {number|Long|null} [nextIndex] GetRawMessagesResponse nextIndex
         * @property {number|Long|null} [lenBytes] GetRawMessagesResponse lenBytes
         * @property {number|Long|null} [count] GetRawMessagesResponse count
         */

        /**
         * Constructs a new GetRawMessagesResponse.
         * @memberof dlvc_api
         * @classdesc Represents a GetRawMessagesResponse.
         * @implements IGetRawMessagesResponse
         * @constructor
         * @param {dlvc_api.IGetRawMessagesResponse=} [properties] Properties to set
         */
        function GetRawMessagesResponse(properties) {
            this.messages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRawMessagesResponse messages.
         * @member {Array.<dlvc_api.IWrappedMessage>} messages
         * @memberof dlvc_api.GetRawMessagesResponse
         * @instance
         */
        GetRawMessagesResponse.prototype.messages = $util.emptyArray;

        /**
         * GetRawMessagesResponse nextIndex.
         * @member {number|Long} nextIndex
         * @memberof dlvc_api.GetRawMessagesResponse
         * @instance
         */
        GetRawMessagesResponse.prototype.nextIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRawMessagesResponse lenBytes.
         * @member {number|Long} lenBytes
         * @memberof dlvc_api.GetRawMessagesResponse
         * @instance
         */
        GetRawMessagesResponse.prototype.lenBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRawMessagesResponse count.
         * @member {number|Long} count
         * @memberof dlvc_api.GetRawMessagesResponse
         * @instance
         */
        GetRawMessagesResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRawMessagesResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {dlvc_api.IGetRawMessagesResponse=} [properties] Properties to set
         * @returns {dlvc_api.GetRawMessagesResponse} GetRawMessagesResponse instance
         */
        GetRawMessagesResponse.create = function create(properties) {
            return new GetRawMessagesResponse(properties);
        };

        /**
         * Encodes the specified GetRawMessagesResponse message. Does not implicitly {@link dlvc_api.GetRawMessagesResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {dlvc_api.IGetRawMessagesResponse} message GetRawMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessagesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (let i = 0; i < message.messages.length; ++i)
                    $root.dlvc_api.WrappedMessage.encode(message.messages[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nextIndex != null && Object.hasOwnProperty.call(message, "nextIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextIndex);
            if (message.lenBytes != null && Object.hasOwnProperty.call(message, "lenBytes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lenBytes);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified GetRawMessagesResponse message, length delimited. Does not implicitly {@link dlvc_api.GetRawMessagesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {dlvc_api.IGetRawMessagesResponse} message GetRawMessagesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRawMessagesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRawMessagesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.GetRawMessagesResponse} GetRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessagesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.GetRawMessagesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.dlvc_api.WrappedMessage.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextIndex = reader.int64();
                    break;
                case 4:
                    message.lenBytes = reader.int64();
                    break;
                case 5:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRawMessagesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.GetRawMessagesResponse} GetRawMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRawMessagesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRawMessagesResponse message.
         * @function verify
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRawMessagesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (let i = 0; i < message.messages.length; ++i) {
                    let error = $root.dlvc_api.WrappedMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (!$util.isInteger(message.nextIndex) && !(message.nextIndex && $util.isInteger(message.nextIndex.low) && $util.isInteger(message.nextIndex.high)))
                    return "nextIndex: integer|Long expected";
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (!$util.isInteger(message.lenBytes) && !(message.lenBytes && $util.isInteger(message.lenBytes.low) && $util.isInteger(message.lenBytes.high)))
                    return "lenBytes: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetRawMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.GetRawMessagesResponse} GetRawMessagesResponse
         */
        GetRawMessagesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.GetRawMessagesResponse)
                return object;
            let message = new $root.dlvc_api.GetRawMessagesResponse();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".dlvc_api.GetRawMessagesResponse.messages: array expected");
                message.messages = [];
                for (let i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".dlvc_api.GetRawMessagesResponse.messages: object expected");
                    message.messages[i] = $root.dlvc_api.WrappedMessage.fromObject(object.messages[i]);
                }
            }
            if (object.nextIndex != null)
                if ($util.Long)
                    (message.nextIndex = $util.Long.fromValue(object.nextIndex)).unsigned = false;
                else if (typeof object.nextIndex === "string")
                    message.nextIndex = parseInt(object.nextIndex, 10);
                else if (typeof object.nextIndex === "number")
                    message.nextIndex = object.nextIndex;
                else if (typeof object.nextIndex === "object")
                    message.nextIndex = new $util.LongBits(object.nextIndex.low >>> 0, object.nextIndex.high >>> 0).toNumber();
            if (object.lenBytes != null)
                if ($util.Long)
                    (message.lenBytes = $util.Long.fromValue(object.lenBytes)).unsigned = false;
                else if (typeof object.lenBytes === "string")
                    message.lenBytes = parseInt(object.lenBytes, 10);
                else if (typeof object.lenBytes === "number")
                    message.lenBytes = object.lenBytes;
                else if (typeof object.lenBytes === "object")
                    message.lenBytes = new $util.LongBits(object.lenBytes.low >>> 0, object.lenBytes.high >>> 0).toNumber();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetRawMessagesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.GetRawMessagesResponse
         * @static
         * @param {dlvc_api.GetRawMessagesResponse} message GetRawMessagesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRawMessagesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nextIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextIndex = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lenBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lenBytes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            }
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (let j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.dlvc_api.WrappedMessage.toObject(message.messages[j], options);
            }
            if (message.nextIndex != null && message.hasOwnProperty("nextIndex"))
                if (typeof message.nextIndex === "number")
                    object.nextIndex = options.longs === String ? String(message.nextIndex) : message.nextIndex;
                else
                    object.nextIndex = options.longs === String ? $util.Long.prototype.toString.call(message.nextIndex) : options.longs === Number ? new $util.LongBits(message.nextIndex.low >>> 0, message.nextIndex.high >>> 0).toNumber() : message.nextIndex;
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (typeof message.lenBytes === "number")
                    object.lenBytes = options.longs === String ? String(message.lenBytes) : message.lenBytes;
                else
                    object.lenBytes = options.longs === String ? $util.Long.prototype.toString.call(message.lenBytes) : options.longs === Number ? new $util.LongBits(message.lenBytes.low >>> 0, message.lenBytes.high >>> 0).toNumber() : message.lenBytes;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this GetRawMessagesResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.GetRawMessagesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRawMessagesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRawMessagesResponse;
    })();

    dlvc_api.SourceType = (function() {

        /**
         * Properties of a SourceType.
         * @memberof dlvc_api
         * @interface ISourceType
         * @property {dlvc_api.WrappedMessage.MessageType|null} [messageType] SourceType messageType
         * @property {dlvc_api.MessageEncoding.EncodingType|null} [encodingType] SourceType encodingType
         * @property {string|null} [customEncodingType] SourceType customEncodingType
         */

        /**
         * Constructs a new SourceType.
         * @memberof dlvc_api
         * @classdesc Represents a SourceType.
         * @implements ISourceType
         * @constructor
         * @param {dlvc_api.ISourceType=} [properties] Properties to set
         */
        function SourceType(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceType messageType.
         * @member {dlvc_api.WrappedMessage.MessageType} messageType
         * @memberof dlvc_api.SourceType
         * @instance
         */
        SourceType.prototype.messageType = 0;

        /**
         * SourceType encodingType.
         * @member {dlvc_api.MessageEncoding.EncodingType} encodingType
         * @memberof dlvc_api.SourceType
         * @instance
         */
        SourceType.prototype.encodingType = 0;

        /**
         * SourceType customEncodingType.
         * @member {string} customEncodingType
         * @memberof dlvc_api.SourceType
         * @instance
         */
        SourceType.prototype.customEncodingType = "";

        /**
         * Creates a new SourceType instance using the specified properties.
         * @function create
         * @memberof dlvc_api.SourceType
         * @static
         * @param {dlvc_api.ISourceType=} [properties] Properties to set
         * @returns {dlvc_api.SourceType} SourceType instance
         */
        SourceType.create = function create(properties) {
            return new SourceType(properties);
        };

        /**
         * Encodes the specified SourceType message. Does not implicitly {@link dlvc_api.SourceType.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.SourceType
         * @static
         * @param {dlvc_api.ISourceType} message SourceType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.messageType);
            if (message.encodingType != null && Object.hasOwnProperty.call(message, "encodingType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.encodingType);
            if (message.customEncodingType != null && Object.hasOwnProperty.call(message, "customEncodingType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.customEncodingType);
            return writer;
        };

        /**
         * Encodes the specified SourceType message, length delimited. Does not implicitly {@link dlvc_api.SourceType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.SourceType
         * @static
         * @param {dlvc_api.ISourceType} message SourceType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceType message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.SourceType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.SourceType} SourceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.SourceType();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.messageType = reader.int32();
                    break;
                case 3:
                    message.encodingType = reader.int32();
                    break;
                case 4:
                    message.customEncodingType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.SourceType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.SourceType} SourceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceType message.
         * @function verify
         * @memberof dlvc_api.SourceType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                switch (message.encodingType) {
                default:
                    return "encodingType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.customEncodingType != null && message.hasOwnProperty("customEncodingType"))
                if (!$util.isString(message.customEncodingType))
                    return "customEncodingType: string expected";
            return null;
        };

        /**
         * Creates a SourceType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.SourceType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.SourceType} SourceType
         */
        SourceType.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.SourceType)
                return object;
            let message = new $root.dlvc_api.SourceType();
            switch (object.messageType) {
            case "UNSPECIFIED":
            case 0:
                message.messageType = 0;
                break;
            case "CUSTOM":
            case 1:
                message.messageType = 1;
                break;
            case "DIS7":
            case 2:
                message.messageType = 2;
                break;
            case "COT":
            case 3:
                message.messageType = 3;
                break;
            case "LINK16":
            case 4:
                message.messageType = 4;
                break;
            case "JREAP":
            case 5:
                message.messageType = 5;
                break;
            case "INSTRUCTOR_COMMENT":
            case 6:
                message.messageType = 6;
                break;
            }
            switch (object.encodingType) {
            case "UNSPECIFIED":
            case 0:
                message.encodingType = 0;
                break;
            case "CUSTOM":
            case 1:
                message.encodingType = 1;
                break;
            case "TEXT":
            case 2:
                message.encodingType = 2;
                break;
            case "JSON":
            case 3:
                message.encodingType = 3;
                break;
            case "XML":
            case 4:
                message.encodingType = 4;
                break;
            case "CSV":
            case 5:
                message.encodingType = 5;
                break;
            }
            if (object.customEncodingType != null)
                message.customEncodingType = String(object.customEncodingType);
            return message;
        };

        /**
         * Creates a plain object from a SourceType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.SourceType
         * @static
         * @param {dlvc_api.SourceType} message SourceType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.messageType = options.enums === String ? "UNSPECIFIED" : 0;
                object.encodingType = options.enums === String ? "UNSPECIFIED" : 0;
                object.customEncodingType = "";
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.dlvc_api.WrappedMessage.MessageType[message.messageType] : message.messageType;
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                object.encodingType = options.enums === String ? $root.dlvc_api.MessageEncoding.EncodingType[message.encodingType] : message.encodingType;
            if (message.customEncodingType != null && message.hasOwnProperty("customEncodingType"))
                object.customEncodingType = message.customEncodingType;
            return object;
        };

        /**
         * Converts this SourceType to JSON.
         * @function toJSON
         * @memberof dlvc_api.SourceType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SourceType;
    })();

    dlvc_api.TimeRange = (function() {

        /**
         * Properties of a TimeRange.
         * @memberof dlvc_api
         * @interface ITimeRange
         * @property {google.protobuf.ITimestamp|null} [startTime] TimeRange startTime
         * @property {google.protobuf.ITimestamp|null} [endTime] TimeRange endTime
         */

        /**
         * Constructs a new TimeRange.
         * @memberof dlvc_api
         * @classdesc Represents a TimeRange.
         * @implements ITimeRange
         * @constructor
         * @param {dlvc_api.ITimeRange=} [properties] Properties to set
         */
        function TimeRange(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeRange startTime.
         * @member {google.protobuf.ITimestamp|null|undefined} startTime
         * @memberof dlvc_api.TimeRange
         * @instance
         */
        TimeRange.prototype.startTime = null;

        /**
         * TimeRange endTime.
         * @member {google.protobuf.ITimestamp|null|undefined} endTime
         * @memberof dlvc_api.TimeRange
         * @instance
         */
        TimeRange.prototype.endTime = null;

        /**
         * Creates a new TimeRange instance using the specified properties.
         * @function create
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {dlvc_api.ITimeRange=} [properties] Properties to set
         * @returns {dlvc_api.TimeRange} TimeRange instance
         */
        TimeRange.create = function create(properties) {
            return new TimeRange(properties);
        };

        /**
         * Encodes the specified TimeRange message. Does not implicitly {@link dlvc_api.TimeRange.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {dlvc_api.ITimeRange} message TimeRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeRange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                $root.google.protobuf.Timestamp.encode(message.startTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link dlvc_api.TimeRange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {dlvc_api.ITimeRange} message TimeRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeRange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeRange message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.TimeRange} TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeRange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.TimeRange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.startTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeRange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.TimeRange} TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeRange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeRange message.
         * @function verify
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeRange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTime != null && message.hasOwnProperty("startTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.startTime);
                if (error)
                    return "startTime." + error;
            }
            if (message.endTime != null && message.hasOwnProperty("endTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.endTime);
                if (error)
                    return "endTime." + error;
            }
            return null;
        };

        /**
         * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.TimeRange} TimeRange
         */
        TimeRange.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.TimeRange)
                return object;
            let message = new $root.dlvc_api.TimeRange();
            if (object.startTime != null) {
                if (typeof object.startTime !== "object")
                    throw TypeError(".dlvc_api.TimeRange.startTime: object expected");
                message.startTime = $root.google.protobuf.Timestamp.fromObject(object.startTime);
            }
            if (object.endTime != null) {
                if (typeof object.endTime !== "object")
                    throw TypeError(".dlvc_api.TimeRange.endTime: object expected");
                message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
            }
            return message;
        };

        /**
         * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.TimeRange
         * @static
         * @param {dlvc_api.TimeRange} message TimeRange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeRange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.startTime = null;
                object.endTime = null;
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = $root.google.protobuf.Timestamp.toObject(message.startTime, options);
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
            return object;
        };

        /**
         * Converts this TimeRange to JSON.
         * @function toJSON
         * @memberof dlvc_api.TimeRange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeRange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeRange;
    })();

    dlvc_api.SummarizeRequest = (function() {

        /**
         * Properties of a SummarizeRequest.
         * @memberof dlvc_api
         * @interface ISummarizeRequest
         */

        /**
         * Constructs a new SummarizeRequest.
         * @memberof dlvc_api
         * @classdesc Represents a SummarizeRequest.
         * @implements ISummarizeRequest
         * @constructor
         * @param {dlvc_api.ISummarizeRequest=} [properties] Properties to set
         */
        function SummarizeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SummarizeRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {dlvc_api.ISummarizeRequest=} [properties] Properties to set
         * @returns {dlvc_api.SummarizeRequest} SummarizeRequest instance
         */
        SummarizeRequest.create = function create(properties) {
            return new SummarizeRequest(properties);
        };

        /**
         * Encodes the specified SummarizeRequest message. Does not implicitly {@link dlvc_api.SummarizeRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {dlvc_api.ISummarizeRequest} message SummarizeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummarizeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SummarizeRequest message, length delimited. Does not implicitly {@link dlvc_api.SummarizeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {dlvc_api.ISummarizeRequest} message SummarizeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummarizeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SummarizeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.SummarizeRequest} SummarizeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummarizeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.SummarizeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SummarizeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.SummarizeRequest} SummarizeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummarizeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SummarizeRequest message.
         * @function verify
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SummarizeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SummarizeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.SummarizeRequest} SummarizeRequest
         */
        SummarizeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.SummarizeRequest)
                return object;
            return new $root.dlvc_api.SummarizeRequest();
        };

        /**
         * Creates a plain object from a SummarizeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.SummarizeRequest
         * @static
         * @param {dlvc_api.SummarizeRequest} message SummarizeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SummarizeRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SummarizeRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.SummarizeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SummarizeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SummarizeRequest;
    })();

    dlvc_api.SummarizeResponse = (function() {

        /**
         * Properties of a SummarizeResponse.
         * @memberof dlvc_api
         * @interface ISummarizeResponse
         * @property {Array.<string>|null} [metadataKeys] SummarizeResponse metadataKeys
         * @property {Array.<string>|null} [userMetadataKeys] SummarizeResponse userMetadataKeys
         * @property {Array.<dlvc_api.WrappedMessage.MessageType>|null} [messageTypes] SummarizeResponse messageTypes
         * @property {Array.<dlvc_api.MessageEncoding.EncodingType>|null} [encodingTypes] SummarizeResponse encodingTypes
         * @property {number|Long|null} [lenBytes] SummarizeResponse lenBytes
         * @property {number|Long|null} [count] SummarizeResponse count
         */

        /**
         * Constructs a new SummarizeResponse.
         * @memberof dlvc_api
         * @classdesc Represents a SummarizeResponse.
         * @implements ISummarizeResponse
         * @constructor
         * @param {dlvc_api.ISummarizeResponse=} [properties] Properties to set
         */
        function SummarizeResponse(properties) {
            this.metadataKeys = [];
            this.userMetadataKeys = [];
            this.messageTypes = [];
            this.encodingTypes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SummarizeResponse metadataKeys.
         * @member {Array.<string>} metadataKeys
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.metadataKeys = $util.emptyArray;

        /**
         * SummarizeResponse userMetadataKeys.
         * @member {Array.<string>} userMetadataKeys
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.userMetadataKeys = $util.emptyArray;

        /**
         * SummarizeResponse messageTypes.
         * @member {Array.<dlvc_api.WrappedMessage.MessageType>} messageTypes
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.messageTypes = $util.emptyArray;

        /**
         * SummarizeResponse encodingTypes.
         * @member {Array.<dlvc_api.MessageEncoding.EncodingType>} encodingTypes
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.encodingTypes = $util.emptyArray;

        /**
         * SummarizeResponse lenBytes.
         * @member {number|Long} lenBytes
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.lenBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SummarizeResponse count.
         * @member {number|Long} count
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         */
        SummarizeResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SummarizeResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {dlvc_api.ISummarizeResponse=} [properties] Properties to set
         * @returns {dlvc_api.SummarizeResponse} SummarizeResponse instance
         */
        SummarizeResponse.create = function create(properties) {
            return new SummarizeResponse(properties);
        };

        /**
         * Encodes the specified SummarizeResponse message. Does not implicitly {@link dlvc_api.SummarizeResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {dlvc_api.ISummarizeResponse} message SummarizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummarizeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadataKeys != null && message.metadataKeys.length)
                for (let i = 0; i < message.metadataKeys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.metadataKeys[i]);
            if (message.userMetadataKeys != null && message.userMetadataKeys.length)
                for (let i = 0; i < message.userMetadataKeys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userMetadataKeys[i]);
            if (message.messageTypes != null && message.messageTypes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.messageTypes.length; ++i)
                    writer.int32(message.messageTypes[i]);
                writer.ldelim();
            }
            if (message.encodingTypes != null && message.encodingTypes.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.encodingTypes.length; ++i)
                    writer.int32(message.encodingTypes[i]);
                writer.ldelim();
            }
            if (message.lenBytes != null && Object.hasOwnProperty.call(message, "lenBytes"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lenBytes);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified SummarizeResponse message, length delimited. Does not implicitly {@link dlvc_api.SummarizeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {dlvc_api.ISummarizeResponse} message SummarizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummarizeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SummarizeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.SummarizeResponse} SummarizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummarizeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.SummarizeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.metadataKeys && message.metadataKeys.length))
                        message.metadataKeys = [];
                    message.metadataKeys.push(reader.string());
                    break;
                case 3:
                    if (!(message.userMetadataKeys && message.userMetadataKeys.length))
                        message.userMetadataKeys = [];
                    message.userMetadataKeys.push(reader.string());
                    break;
                case 4:
                    if (!(message.messageTypes && message.messageTypes.length))
                        message.messageTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.messageTypes.push(reader.int32());
                    } else
                        message.messageTypes.push(reader.int32());
                    break;
                case 5:
                    if (!(message.encodingTypes && message.encodingTypes.length))
                        message.encodingTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.encodingTypes.push(reader.int32());
                    } else
                        message.encodingTypes.push(reader.int32());
                    break;
                case 6:
                    message.lenBytes = reader.int64();
                    break;
                case 7:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SummarizeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.SummarizeResponse} SummarizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummarizeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SummarizeResponse message.
         * @function verify
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SummarizeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadataKeys != null && message.hasOwnProperty("metadataKeys")) {
                if (!Array.isArray(message.metadataKeys))
                    return "metadataKeys: array expected";
                for (let i = 0; i < message.metadataKeys.length; ++i)
                    if (!$util.isString(message.metadataKeys[i]))
                        return "metadataKeys: string[] expected";
            }
            if (message.userMetadataKeys != null && message.hasOwnProperty("userMetadataKeys")) {
                if (!Array.isArray(message.userMetadataKeys))
                    return "userMetadataKeys: array expected";
                for (let i = 0; i < message.userMetadataKeys.length; ++i)
                    if (!$util.isString(message.userMetadataKeys[i]))
                        return "userMetadataKeys: string[] expected";
            }
            if (message.messageTypes != null && message.hasOwnProperty("messageTypes")) {
                if (!Array.isArray(message.messageTypes))
                    return "messageTypes: array expected";
                for (let i = 0; i < message.messageTypes.length; ++i)
                    switch (message.messageTypes[i]) {
                    default:
                        return "messageTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
            }
            if (message.encodingTypes != null && message.hasOwnProperty("encodingTypes")) {
                if (!Array.isArray(message.encodingTypes))
                    return "encodingTypes: array expected";
                for (let i = 0; i < message.encodingTypes.length; ++i)
                    switch (message.encodingTypes[i]) {
                    default:
                        return "encodingTypes: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (!$util.isInteger(message.lenBytes) && !(message.lenBytes && $util.isInteger(message.lenBytes.low) && $util.isInteger(message.lenBytes.high)))
                    return "lenBytes: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a SummarizeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.SummarizeResponse} SummarizeResponse
         */
        SummarizeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.SummarizeResponse)
                return object;
            let message = new $root.dlvc_api.SummarizeResponse();
            if (object.metadataKeys) {
                if (!Array.isArray(object.metadataKeys))
                    throw TypeError(".dlvc_api.SummarizeResponse.metadataKeys: array expected");
                message.metadataKeys = [];
                for (let i = 0; i < object.metadataKeys.length; ++i)
                    message.metadataKeys[i] = String(object.metadataKeys[i]);
            }
            if (object.userMetadataKeys) {
                if (!Array.isArray(object.userMetadataKeys))
                    throw TypeError(".dlvc_api.SummarizeResponse.userMetadataKeys: array expected");
                message.userMetadataKeys = [];
                for (let i = 0; i < object.userMetadataKeys.length; ++i)
                    message.userMetadataKeys[i] = String(object.userMetadataKeys[i]);
            }
            if (object.messageTypes) {
                if (!Array.isArray(object.messageTypes))
                    throw TypeError(".dlvc_api.SummarizeResponse.messageTypes: array expected");
                message.messageTypes = [];
                for (let i = 0; i < object.messageTypes.length; ++i)
                    switch (object.messageTypes[i]) {
                    default:
                    case "UNSPECIFIED":
                    case 0:
                        message.messageTypes[i] = 0;
                        break;
                    case "CUSTOM":
                    case 1:
                        message.messageTypes[i] = 1;
                        break;
                    case "DIS7":
                    case 2:
                        message.messageTypes[i] = 2;
                        break;
                    case "COT":
                    case 3:
                        message.messageTypes[i] = 3;
                        break;
                    case "LINK16":
                    case 4:
                        message.messageTypes[i] = 4;
                        break;
                    case "JREAP":
                    case 5:
                        message.messageTypes[i] = 5;
                        break;
                    case "INSTRUCTOR_COMMENT":
                    case 6:
                        message.messageTypes[i] = 6;
                        break;
                    }
            }
            if (object.encodingTypes) {
                if (!Array.isArray(object.encodingTypes))
                    throw TypeError(".dlvc_api.SummarizeResponse.encodingTypes: array expected");
                message.encodingTypes = [];
                for (let i = 0; i < object.encodingTypes.length; ++i)
                    switch (object.encodingTypes[i]) {
                    default:
                    case "UNSPECIFIED":
                    case 0:
                        message.encodingTypes[i] = 0;
                        break;
                    case "CUSTOM":
                    case 1:
                        message.encodingTypes[i] = 1;
                        break;
                    case "TEXT":
                    case 2:
                        message.encodingTypes[i] = 2;
                        break;
                    case "JSON":
                    case 3:
                        message.encodingTypes[i] = 3;
                        break;
                    case "XML":
                    case 4:
                        message.encodingTypes[i] = 4;
                        break;
                    case "CSV":
                    case 5:
                        message.encodingTypes[i] = 5;
                        break;
                    }
            }
            if (object.lenBytes != null)
                if ($util.Long)
                    (message.lenBytes = $util.Long.fromValue(object.lenBytes)).unsigned = false;
                else if (typeof object.lenBytes === "string")
                    message.lenBytes = parseInt(object.lenBytes, 10);
                else if (typeof object.lenBytes === "number")
                    message.lenBytes = object.lenBytes;
                else if (typeof object.lenBytes === "object")
                    message.lenBytes = new $util.LongBits(object.lenBytes.low >>> 0, object.lenBytes.high >>> 0).toNumber();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SummarizeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.SummarizeResponse
         * @static
         * @param {dlvc_api.SummarizeResponse} message SummarizeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SummarizeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.metadataKeys = [];
                object.userMetadataKeys = [];
                object.messageTypes = [];
                object.encodingTypes = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lenBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lenBytes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            }
            if (message.metadataKeys && message.metadataKeys.length) {
                object.metadataKeys = [];
                for (let j = 0; j < message.metadataKeys.length; ++j)
                    object.metadataKeys[j] = message.metadataKeys[j];
            }
            if (message.userMetadataKeys && message.userMetadataKeys.length) {
                object.userMetadataKeys = [];
                for (let j = 0; j < message.userMetadataKeys.length; ++j)
                    object.userMetadataKeys[j] = message.userMetadataKeys[j];
            }
            if (message.messageTypes && message.messageTypes.length) {
                object.messageTypes = [];
                for (let j = 0; j < message.messageTypes.length; ++j)
                    object.messageTypes[j] = options.enums === String ? $root.dlvc_api.WrappedMessage.MessageType[message.messageTypes[j]] : message.messageTypes[j];
            }
            if (message.encodingTypes && message.encodingTypes.length) {
                object.encodingTypes = [];
                for (let j = 0; j < message.encodingTypes.length; ++j)
                    object.encodingTypes[j] = options.enums === String ? $root.dlvc_api.MessageEncoding.EncodingType[message.encodingTypes[j]] : message.encodingTypes[j];
            }
            if (message.lenBytes != null && message.hasOwnProperty("lenBytes"))
                if (typeof message.lenBytes === "number")
                    object.lenBytes = options.longs === String ? String(message.lenBytes) : message.lenBytes;
                else
                    object.lenBytes = options.longs === String ? $util.Long.prototype.toString.call(message.lenBytes) : options.longs === Number ? new $util.LongBits(message.lenBytes.low >>> 0, message.lenBytes.high >>> 0).toNumber() : message.lenBytes;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this SummarizeResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.SummarizeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SummarizeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SummarizeResponse;
    })();

    dlvc_api.ListMetadataValuesRequest = (function() {

        /**
         * Properties of a ListMetadataValuesRequest.
         * @memberof dlvc_api
         * @interface IListMetadataValuesRequest
         * @property {string|null} [key] ListMetadataValuesRequest key
         */

        /**
         * Constructs a new ListMetadataValuesRequest.
         * @memberof dlvc_api
         * @classdesc Represents a ListMetadataValuesRequest.
         * @implements IListMetadataValuesRequest
         * @constructor
         * @param {dlvc_api.IListMetadataValuesRequest=} [properties] Properties to set
         */
        function ListMetadataValuesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMetadataValuesRequest key.
         * @member {string} key
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @instance
         */
        ListMetadataValuesRequest.prototype.key = "";

        /**
         * Creates a new ListMetadataValuesRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {dlvc_api.IListMetadataValuesRequest=} [properties] Properties to set
         * @returns {dlvc_api.ListMetadataValuesRequest} ListMetadataValuesRequest instance
         */
        ListMetadataValuesRequest.create = function create(properties) {
            return new ListMetadataValuesRequest(properties);
        };

        /**
         * Encodes the specified ListMetadataValuesRequest message. Does not implicitly {@link dlvc_api.ListMetadataValuesRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {dlvc_api.IListMetadataValuesRequest} message ListMetadataValuesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMetadataValuesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified ListMetadataValuesRequest message, length delimited. Does not implicitly {@link dlvc_api.ListMetadataValuesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {dlvc_api.IListMetadataValuesRequest} message ListMetadataValuesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMetadataValuesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMetadataValuesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.ListMetadataValuesRequest} ListMetadataValuesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMetadataValuesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.ListMetadataValuesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMetadataValuesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.ListMetadataValuesRequest} ListMetadataValuesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMetadataValuesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMetadataValuesRequest message.
         * @function verify
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMetadataValuesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a ListMetadataValuesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.ListMetadataValuesRequest} ListMetadataValuesRequest
         */
        ListMetadataValuesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.ListMetadataValuesRequest)
                return object;
            let message = new $root.dlvc_api.ListMetadataValuesRequest();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a ListMetadataValuesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @static
         * @param {dlvc_api.ListMetadataValuesRequest} message ListMetadataValuesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMetadataValuesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this ListMetadataValuesRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.ListMetadataValuesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMetadataValuesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListMetadataValuesRequest;
    })();

    dlvc_api.ListMetadataValuesResponse = (function() {

        /**
         * Properties of a ListMetadataValuesResponse.
         * @memberof dlvc_api
         * @interface IListMetadataValuesResponse
         * @property {string|null} [key] ListMetadataValuesResponse key
         * @property {Array.<string>|null} [values] ListMetadataValuesResponse values
         */

        /**
         * Constructs a new ListMetadataValuesResponse.
         * @memberof dlvc_api
         * @classdesc Represents a ListMetadataValuesResponse.
         * @implements IListMetadataValuesResponse
         * @constructor
         * @param {dlvc_api.IListMetadataValuesResponse=} [properties] Properties to set
         */
        function ListMetadataValuesResponse(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMetadataValuesResponse key.
         * @member {string} key
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @instance
         */
        ListMetadataValuesResponse.prototype.key = "";

        /**
         * ListMetadataValuesResponse values.
         * @member {Array.<string>} values
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @instance
         */
        ListMetadataValuesResponse.prototype.values = $util.emptyArray;

        /**
         * Creates a new ListMetadataValuesResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {dlvc_api.IListMetadataValuesResponse=} [properties] Properties to set
         * @returns {dlvc_api.ListMetadataValuesResponse} ListMetadataValuesResponse instance
         */
        ListMetadataValuesResponse.create = function create(properties) {
            return new ListMetadataValuesResponse(properties);
        };

        /**
         * Encodes the specified ListMetadataValuesResponse message. Does not implicitly {@link dlvc_api.ListMetadataValuesResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {dlvc_api.IListMetadataValuesResponse} message ListMetadataValuesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMetadataValuesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.values != null && message.values.length)
                for (let i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified ListMetadataValuesResponse message, length delimited. Does not implicitly {@link dlvc_api.ListMetadataValuesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {dlvc_api.IListMetadataValuesResponse} message ListMetadataValuesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMetadataValuesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMetadataValuesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.ListMetadataValuesResponse} ListMetadataValuesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMetadataValuesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.ListMetadataValuesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMetadataValuesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.ListMetadataValuesResponse} ListMetadataValuesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMetadataValuesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMetadataValuesResponse message.
         * @function verify
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMetadataValuesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (let i = 0; i < message.values.length; ++i)
                    if (!$util.isString(message.values[i]))
                        return "values: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ListMetadataValuesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.ListMetadataValuesResponse} ListMetadataValuesResponse
         */
        ListMetadataValuesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.ListMetadataValuesResponse)
                return object;
            let message = new $root.dlvc_api.ListMetadataValuesResponse();
            if (object.key != null)
                message.key = String(object.key);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".dlvc_api.ListMetadataValuesResponse.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = String(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListMetadataValuesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @static
         * @param {dlvc_api.ListMetadataValuesResponse} message ListMetadataValuesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMetadataValuesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this ListMetadataValuesResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.ListMetadataValuesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMetadataValuesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListMetadataValuesResponse;
    })();

    dlvc_api.ListExercisesRequest = (function() {

        /**
         * Properties of a ListExercisesRequest.
         * @memberof dlvc_api
         * @interface IListExercisesRequest
         */

        /**
         * Constructs a new ListExercisesRequest.
         * @memberof dlvc_api
         * @classdesc Represents a ListExercisesRequest.
         * @implements IListExercisesRequest
         * @constructor
         * @param {dlvc_api.IListExercisesRequest=} [properties] Properties to set
         */
        function ListExercisesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListExercisesRequest instance using the specified properties.
         * @function create
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {dlvc_api.IListExercisesRequest=} [properties] Properties to set
         * @returns {dlvc_api.ListExercisesRequest} ListExercisesRequest instance
         */
        ListExercisesRequest.create = function create(properties) {
            return new ListExercisesRequest(properties);
        };

        /**
         * Encodes the specified ListExercisesRequest message. Does not implicitly {@link dlvc_api.ListExercisesRequest.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {dlvc_api.IListExercisesRequest} message ListExercisesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListExercisesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListExercisesRequest message, length delimited. Does not implicitly {@link dlvc_api.ListExercisesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {dlvc_api.IListExercisesRequest} message ListExercisesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListExercisesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListExercisesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.ListExercisesRequest} ListExercisesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListExercisesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.ListExercisesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListExercisesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.ListExercisesRequest} ListExercisesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListExercisesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListExercisesRequest message.
         * @function verify
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListExercisesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListExercisesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.ListExercisesRequest} ListExercisesRequest
         */
        ListExercisesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.ListExercisesRequest)
                return object;
            return new $root.dlvc_api.ListExercisesRequest();
        };

        /**
         * Creates a plain object from a ListExercisesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.ListExercisesRequest
         * @static
         * @param {dlvc_api.ListExercisesRequest} message ListExercisesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListExercisesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListExercisesRequest to JSON.
         * @function toJSON
         * @memberof dlvc_api.ListExercisesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListExercisesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListExercisesRequest;
    })();

    dlvc_api.ListExercisesResponse = (function() {

        /**
         * Properties of a ListExercisesResponse.
         * @memberof dlvc_api
         * @interface IListExercisesResponse
         * @property {Array.<string>|null} [exerciseIds] ListExercisesResponse exerciseIds
         */

        /**
         * Constructs a new ListExercisesResponse.
         * @memberof dlvc_api
         * @classdesc Represents a ListExercisesResponse.
         * @implements IListExercisesResponse
         * @constructor
         * @param {dlvc_api.IListExercisesResponse=} [properties] Properties to set
         */
        function ListExercisesResponse(properties) {
            this.exerciseIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListExercisesResponse exerciseIds.
         * @member {Array.<string>} exerciseIds
         * @memberof dlvc_api.ListExercisesResponse
         * @instance
         */
        ListExercisesResponse.prototype.exerciseIds = $util.emptyArray;

        /**
         * Creates a new ListExercisesResponse instance using the specified properties.
         * @function create
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {dlvc_api.IListExercisesResponse=} [properties] Properties to set
         * @returns {dlvc_api.ListExercisesResponse} ListExercisesResponse instance
         */
        ListExercisesResponse.create = function create(properties) {
            return new ListExercisesResponse(properties);
        };

        /**
         * Encodes the specified ListExercisesResponse message. Does not implicitly {@link dlvc_api.ListExercisesResponse.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {dlvc_api.IListExercisesResponse} message ListExercisesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListExercisesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exerciseIds != null && message.exerciseIds.length)
                for (let i = 0; i < message.exerciseIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.exerciseIds[i]);
            return writer;
        };

        /**
         * Encodes the specified ListExercisesResponse message, length delimited. Does not implicitly {@link dlvc_api.ListExercisesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {dlvc_api.IListExercisesResponse} message ListExercisesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListExercisesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListExercisesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.ListExercisesResponse} ListExercisesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListExercisesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.ListExercisesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    if (!(message.exerciseIds && message.exerciseIds.length))
                        message.exerciseIds = [];
                    message.exerciseIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListExercisesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.ListExercisesResponse} ListExercisesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListExercisesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListExercisesResponse message.
         * @function verify
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListExercisesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exerciseIds != null && message.hasOwnProperty("exerciseIds")) {
                if (!Array.isArray(message.exerciseIds))
                    return "exerciseIds: array expected";
                for (let i = 0; i < message.exerciseIds.length; ++i)
                    if (!$util.isString(message.exerciseIds[i]))
                        return "exerciseIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ListExercisesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.ListExercisesResponse} ListExercisesResponse
         */
        ListExercisesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.ListExercisesResponse)
                return object;
            let message = new $root.dlvc_api.ListExercisesResponse();
            if (object.exerciseIds) {
                if (!Array.isArray(object.exerciseIds))
                    throw TypeError(".dlvc_api.ListExercisesResponse.exerciseIds: array expected");
                message.exerciseIds = [];
                for (let i = 0; i < object.exerciseIds.length; ++i)
                    message.exerciseIds[i] = String(object.exerciseIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListExercisesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.ListExercisesResponse
         * @static
         * @param {dlvc_api.ListExercisesResponse} message ListExercisesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListExercisesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.exerciseIds = [];
            if (message.exerciseIds && message.exerciseIds.length) {
                object.exerciseIds = [];
                for (let j = 0; j < message.exerciseIds.length; ++j)
                    object.exerciseIds[j] = message.exerciseIds[j];
            }
            return object;
        };

        /**
         * Converts this ListExercisesResponse to JSON.
         * @function toJSON
         * @memberof dlvc_api.ListExercisesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListExercisesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListExercisesResponse;
    })();

    dlvc_api.WrappedMessage = (function() {

        /**
         * Properties of a WrappedMessage.
         * @memberof dlvc_api
         * @interface IWrappedMessage
         * @property {string|null} [idempotencyKey] WrappedMessage idempotencyKey
         * @property {dlvc_api.IMetadata|null} [metadata] WrappedMessage metadata
         * @property {Array.<dlvc_api.IUserDefinedMetadata>|null} [userMetadata] WrappedMessage userMetadata
         * @property {dlvc_api.WrappedMessage.MessageType|null} [messageType] WrappedMessage messageType
         * @property {dlvc_api.IMessageEncoding|null} [messageEncoding] WrappedMessage messageEncoding
         * @property {dlvc_api.IPosition|null} [position] WrappedMessage position
         * @property {google.protobuf.ITimestamp|null} [createdTime] WrappedMessage createdTime
         * @property {Uint8Array|null} [rawMessage] WrappedMessage rawMessage
         */

        /**
         * Constructs a new WrappedMessage.
         * @memberof dlvc_api
         * @classdesc Represents a WrappedMessage.
         * @implements IWrappedMessage
         * @constructor
         * @param {dlvc_api.IWrappedMessage=} [properties] Properties to set
         */
        function WrappedMessage(properties) {
            this.userMetadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WrappedMessage idempotencyKey.
         * @member {string} idempotencyKey
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.idempotencyKey = "";

        /**
         * WrappedMessage metadata.
         * @member {dlvc_api.IMetadata|null|undefined} metadata
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.metadata = null;

        /**
         * WrappedMessage userMetadata.
         * @member {Array.<dlvc_api.IUserDefinedMetadata>} userMetadata
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.userMetadata = $util.emptyArray;

        /**
         * WrappedMessage messageType.
         * @member {dlvc_api.WrappedMessage.MessageType} messageType
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.messageType = 0;

        /**
         * WrappedMessage messageEncoding.
         * @member {dlvc_api.IMessageEncoding|null|undefined} messageEncoding
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.messageEncoding = null;

        /**
         * WrappedMessage position.
         * @member {dlvc_api.IPosition|null|undefined} position
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.position = null;

        /**
         * WrappedMessage createdTime.
         * @member {google.protobuf.ITimestamp|null|undefined} createdTime
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.createdTime = null;

        /**
         * WrappedMessage rawMessage.
         * @member {Uint8Array} rawMessage
         * @memberof dlvc_api.WrappedMessage
         * @instance
         */
        WrappedMessage.prototype.rawMessage = $util.newBuffer([]);

        /**
         * Creates a new WrappedMessage instance using the specified properties.
         * @function create
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {dlvc_api.IWrappedMessage=} [properties] Properties to set
         * @returns {dlvc_api.WrappedMessage} WrappedMessage instance
         */
        WrappedMessage.create = function create(properties) {
            return new WrappedMessage(properties);
        };

        /**
         * Encodes the specified WrappedMessage message. Does not implicitly {@link dlvc_api.WrappedMessage.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {dlvc_api.IWrappedMessage} message WrappedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WrappedMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idempotencyKey != null && Object.hasOwnProperty.call(message, "idempotencyKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.idempotencyKey);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.dlvc_api.Metadata.encode(message.metadata, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userMetadata != null && message.userMetadata.length)
                for (let i = 0; i < message.userMetadata.length; ++i)
                    $root.dlvc_api.UserDefinedMetadata.encode(message.userMetadata[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageType);
            if (message.messageEncoding != null && Object.hasOwnProperty.call(message, "messageEncoding"))
                $root.dlvc_api.MessageEncoding.encode(message.messageEncoding, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.dlvc_api.Position.encode(message.position, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.createdTime != null && Object.hasOwnProperty.call(message, "createdTime"))
                $root.google.protobuf.Timestamp.encode(message.createdTime, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.rawMessage != null && Object.hasOwnProperty.call(message, "rawMessage"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.rawMessage);
            return writer;
        };

        /**
         * Encodes the specified WrappedMessage message, length delimited. Does not implicitly {@link dlvc_api.WrappedMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {dlvc_api.IWrappedMessage} message WrappedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WrappedMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WrappedMessage message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.WrappedMessage} WrappedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WrappedMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.WrappedMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.idempotencyKey = reader.string();
                    break;
                case 3:
                    message.metadata = $root.dlvc_api.Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.userMetadata && message.userMetadata.length))
                        message.userMetadata = [];
                    message.userMetadata.push($root.dlvc_api.UserDefinedMetadata.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.messageType = reader.int32();
                    break;
                case 6:
                    message.messageEncoding = $root.dlvc_api.MessageEncoding.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.position = $root.dlvc_api.Position.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.createdTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.rawMessage = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WrappedMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.WrappedMessage} WrappedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WrappedMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WrappedMessage message.
         * @function verify
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WrappedMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idempotencyKey != null && message.hasOwnProperty("idempotencyKey"))
                if (!$util.isString(message.idempotencyKey))
                    return "idempotencyKey: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                let error = $root.dlvc_api.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.userMetadata != null && message.hasOwnProperty("userMetadata")) {
                if (!Array.isArray(message.userMetadata))
                    return "userMetadata: array expected";
                for (let i = 0; i < message.userMetadata.length; ++i) {
                    let error = $root.dlvc_api.UserDefinedMetadata.verify(message.userMetadata[i]);
                    if (error)
                        return "userMetadata." + error;
                }
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.messageEncoding != null && message.hasOwnProperty("messageEncoding")) {
                let error = $root.dlvc_api.MessageEncoding.verify(message.messageEncoding);
                if (error)
                    return "messageEncoding." + error;
            }
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.dlvc_api.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.createdTime != null && message.hasOwnProperty("createdTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdTime);
                if (error)
                    return "createdTime." + error;
            }
            if (message.rawMessage != null && message.hasOwnProperty("rawMessage"))
                if (!(message.rawMessage && typeof message.rawMessage.length === "number" || $util.isString(message.rawMessage)))
                    return "rawMessage: buffer expected";
            return null;
        };

        /**
         * Creates a WrappedMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.WrappedMessage} WrappedMessage
         */
        WrappedMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.WrappedMessage)
                return object;
            let message = new $root.dlvc_api.WrappedMessage();
            if (object.idempotencyKey != null)
                message.idempotencyKey = String(object.idempotencyKey);
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".dlvc_api.WrappedMessage.metadata: object expected");
                message.metadata = $root.dlvc_api.Metadata.fromObject(object.metadata);
            }
            if (object.userMetadata) {
                if (!Array.isArray(object.userMetadata))
                    throw TypeError(".dlvc_api.WrappedMessage.userMetadata: array expected");
                message.userMetadata = [];
                for (let i = 0; i < object.userMetadata.length; ++i) {
                    if (typeof object.userMetadata[i] !== "object")
                        throw TypeError(".dlvc_api.WrappedMessage.userMetadata: object expected");
                    message.userMetadata[i] = $root.dlvc_api.UserDefinedMetadata.fromObject(object.userMetadata[i]);
                }
            }
            switch (object.messageType) {
            case "UNSPECIFIED":
            case 0:
                message.messageType = 0;
                break;
            case "CUSTOM":
            case 1:
                message.messageType = 1;
                break;
            case "DIS7":
            case 2:
                message.messageType = 2;
                break;
            case "COT":
            case 3:
                message.messageType = 3;
                break;
            case "LINK16":
            case 4:
                message.messageType = 4;
                break;
            case "JREAP":
            case 5:
                message.messageType = 5;
                break;
            case "INSTRUCTOR_COMMENT":
            case 6:
                message.messageType = 6;
                break;
            }
            if (object.messageEncoding != null) {
                if (typeof object.messageEncoding !== "object")
                    throw TypeError(".dlvc_api.WrappedMessage.messageEncoding: object expected");
                message.messageEncoding = $root.dlvc_api.MessageEncoding.fromObject(object.messageEncoding);
            }
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".dlvc_api.WrappedMessage.position: object expected");
                message.position = $root.dlvc_api.Position.fromObject(object.position);
            }
            if (object.createdTime != null) {
                if (typeof object.createdTime !== "object")
                    throw TypeError(".dlvc_api.WrappedMessage.createdTime: object expected");
                message.createdTime = $root.google.protobuf.Timestamp.fromObject(object.createdTime);
            }
            if (object.rawMessage != null)
                if (typeof object.rawMessage === "string")
                    $util.base64.decode(object.rawMessage, message.rawMessage = $util.newBuffer($util.base64.length(object.rawMessage)), 0);
                else if (object.rawMessage.length)
                    message.rawMessage = object.rawMessage;
            return message;
        };

        /**
         * Creates a plain object from a WrappedMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.WrappedMessage
         * @static
         * @param {dlvc_api.WrappedMessage} message WrappedMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WrappedMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userMetadata = [];
            if (options.defaults) {
                object.idempotencyKey = "";
                object.metadata = null;
                object.messageType = options.enums === String ? "UNSPECIFIED" : 0;
                object.messageEncoding = null;
                object.position = null;
                object.createdTime = null;
                if (options.bytes === String)
                    object.rawMessage = "";
                else {
                    object.rawMessage = [];
                    if (options.bytes !== Array)
                        object.rawMessage = $util.newBuffer(object.rawMessage);
                }
            }
            if (message.idempotencyKey != null && message.hasOwnProperty("idempotencyKey"))
                object.idempotencyKey = message.idempotencyKey;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.dlvc_api.Metadata.toObject(message.metadata, options);
            if (message.userMetadata && message.userMetadata.length) {
                object.userMetadata = [];
                for (let j = 0; j < message.userMetadata.length; ++j)
                    object.userMetadata[j] = $root.dlvc_api.UserDefinedMetadata.toObject(message.userMetadata[j], options);
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.dlvc_api.WrappedMessage.MessageType[message.messageType] : message.messageType;
            if (message.messageEncoding != null && message.hasOwnProperty("messageEncoding"))
                object.messageEncoding = $root.dlvc_api.MessageEncoding.toObject(message.messageEncoding, options);
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.dlvc_api.Position.toObject(message.position, options);
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                object.createdTime = $root.google.protobuf.Timestamp.toObject(message.createdTime, options);
            if (message.rawMessage != null && message.hasOwnProperty("rawMessage"))
                object.rawMessage = options.bytes === String ? $util.base64.encode(message.rawMessage, 0, message.rawMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawMessage) : message.rawMessage;
            return object;
        };

        /**
         * Converts this WrappedMessage to JSON.
         * @function toJSON
         * @memberof dlvc_api.WrappedMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WrappedMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MessageType enum.
         * @name dlvc_api.WrappedMessage.MessageType
         * @enum {string}
         * @property {number} UNSPECIFIED=0 UNSPECIFIED value
         * @property {number} CUSTOM=1 CUSTOM value
         * @property {number} DIS7=2 DIS7 value
         * @property {number} COT=3 COT value
         * @property {number} LINK16=4 LINK16 value
         * @property {number} JREAP=5 JREAP value
         * @property {number} INSTRUCTOR_COMMENT=6 INSTRUCTOR_COMMENT value
         */
        WrappedMessage.MessageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "CUSTOM"] = 1;
            values[valuesById[2] = "DIS7"] = 2;
            values[valuesById[3] = "COT"] = 3;
            values[valuesById[4] = "LINK16"] = 4;
            values[valuesById[5] = "JREAP"] = 5;
            values[valuesById[6] = "INSTRUCTOR_COMMENT"] = 6;
            return values;
        })();

        return WrappedMessage;
    })();

    dlvc_api.Metadata = (function() {

        /**
         * Properties of a Metadata.
         * @memberof dlvc_api
         * @interface IMetadata
         * @property {string|null} [partnerId] Metadata partnerId
         * @property {string|null} [partnerCertId] Metadata partnerCertId
         * @property {string|null} [sourceId] Metadata sourceId
         * @property {string|null} [exerciseId] Metadata exerciseId
         * @property {string|null} [exerciseName] Metadata exerciseName
         * @property {string|null} [entityStatePdu] Metadata entityStatePdu
         * @property {dlvc_api.Metadata.ForceColor|null} [forceColor] Metadata forceColor
         */

        /**
         * Constructs a new Metadata.
         * @memberof dlvc_api
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {dlvc_api.IMetadata=} [properties] Properties to set
         */
        function Metadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metadata partnerId.
         * @member {string} partnerId
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.partnerId = "";

        /**
         * Metadata partnerCertId.
         * @member {string} partnerCertId
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.partnerCertId = "";

        /**
         * Metadata sourceId.
         * @member {string} sourceId
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.sourceId = "";

        /**
         * Metadata exerciseId.
         * @member {string} exerciseId
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.exerciseId = "";

        /**
         * Metadata exerciseName.
         * @member {string} exerciseName
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.exerciseName = "";

        /**
         * Metadata entityStatePdu.
         * @member {string} entityStatePdu
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.entityStatePdu = "";

        /**
         * Metadata forceColor.
         * @member {dlvc_api.Metadata.ForceColor} forceColor
         * @memberof dlvc_api.Metadata
         * @instance
         */
        Metadata.prototype.forceColor = 0;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @function create
         * @memberof dlvc_api.Metadata
         * @static
         * @param {dlvc_api.IMetadata=} [properties] Properties to set
         * @returns {dlvc_api.Metadata} Metadata instance
         */
        Metadata.create = function create(properties) {
            return new Metadata(properties);
        };

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link dlvc_api.Metadata.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.Metadata
         * @static
         * @param {dlvc_api.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.partnerId != null && Object.hasOwnProperty.call(message, "partnerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.partnerId);
            if (message.partnerCertId != null && Object.hasOwnProperty.call(message, "partnerCertId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.partnerCertId);
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sourceId);
            if (message.exerciseId != null && Object.hasOwnProperty.call(message, "exerciseId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.exerciseId);
            if (message.exerciseName != null && Object.hasOwnProperty.call(message, "exerciseName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.exerciseName);
            if (message.entityStatePdu != null && Object.hasOwnProperty.call(message, "entityStatePdu"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.entityStatePdu);
            if (message.forceColor != null && Object.hasOwnProperty.call(message, "forceColor"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.forceColor);
            return writer;
        };

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link dlvc_api.Metadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.Metadata
         * @static
         * @param {dlvc_api.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.Metadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.partnerId = reader.string();
                    break;
                case 3:
                    message.partnerCertId = reader.string();
                    break;
                case 4:
                    message.sourceId = reader.string();
                    break;
                case 5:
                    message.exerciseId = reader.string();
                    break;
                case 6:
                    message.exerciseName = reader.string();
                    break;
                case 7:
                    message.entityStatePdu = reader.string();
                    break;
                case 8:
                    message.forceColor = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Metadata message.
         * @function verify
         * @memberof dlvc_api.Metadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Metadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.partnerId != null && message.hasOwnProperty("partnerId"))
                if (!$util.isString(message.partnerId))
                    return "partnerId: string expected";
            if (message.partnerCertId != null && message.hasOwnProperty("partnerCertId"))
                if (!$util.isString(message.partnerCertId))
                    return "partnerCertId: string expected";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (!$util.isString(message.sourceId))
                    return "sourceId: string expected";
            if (message.exerciseId != null && message.hasOwnProperty("exerciseId"))
                if (!$util.isString(message.exerciseId))
                    return "exerciseId: string expected";
            if (message.exerciseName != null && message.hasOwnProperty("exerciseName"))
                if (!$util.isString(message.exerciseName))
                    return "exerciseName: string expected";
            if (message.entityStatePdu != null && message.hasOwnProperty("entityStatePdu"))
                if (!$util.isString(message.entityStatePdu))
                    return "entityStatePdu: string expected";
            if (message.forceColor != null && message.hasOwnProperty("forceColor"))
                switch (message.forceColor) {
                default:
                    return "forceColor: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.Metadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.Metadata} Metadata
         */
        Metadata.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.Metadata)
                return object;
            let message = new $root.dlvc_api.Metadata();
            if (object.partnerId != null)
                message.partnerId = String(object.partnerId);
            if (object.partnerCertId != null)
                message.partnerCertId = String(object.partnerCertId);
            if (object.sourceId != null)
                message.sourceId = String(object.sourceId);
            if (object.exerciseId != null)
                message.exerciseId = String(object.exerciseId);
            if (object.exerciseName != null)
                message.exerciseName = String(object.exerciseName);
            if (object.entityStatePdu != null)
                message.entityStatePdu = String(object.entityStatePdu);
            switch (object.forceColor) {
            case "UNSPECIFIED":
            case 0:
                message.forceColor = 0;
                break;
            case "BLUE":
            case 1:
                message.forceColor = 1;
                break;
            case "RED":
            case 2:
                message.forceColor = 2;
                break;
            case "WHITE":
            case 3:
                message.forceColor = 3;
                break;
            case "GREEN":
            case 4:
                message.forceColor = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.Metadata
         * @static
         * @param {dlvc_api.Metadata} message Metadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Metadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.partnerId = "";
                object.partnerCertId = "";
                object.sourceId = "";
                object.exerciseId = "";
                object.exerciseName = "";
                object.entityStatePdu = "";
                object.forceColor = options.enums === String ? "UNSPECIFIED" : 0;
            }
            if (message.partnerId != null && message.hasOwnProperty("partnerId"))
                object.partnerId = message.partnerId;
            if (message.partnerCertId != null && message.hasOwnProperty("partnerCertId"))
                object.partnerCertId = message.partnerCertId;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.exerciseId != null && message.hasOwnProperty("exerciseId"))
                object.exerciseId = message.exerciseId;
            if (message.exerciseName != null && message.hasOwnProperty("exerciseName"))
                object.exerciseName = message.exerciseName;
            if (message.entityStatePdu != null && message.hasOwnProperty("entityStatePdu"))
                object.entityStatePdu = message.entityStatePdu;
            if (message.forceColor != null && message.hasOwnProperty("forceColor"))
                object.forceColor = options.enums === String ? $root.dlvc_api.Metadata.ForceColor[message.forceColor] : message.forceColor;
            return object;
        };

        /**
         * Converts this Metadata to JSON.
         * @function toJSON
         * @memberof dlvc_api.Metadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Metadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ForceColor enum.
         * @name dlvc_api.Metadata.ForceColor
         * @enum {string}
         * @property {number} UNSPECIFIED=0 UNSPECIFIED value
         * @property {number} BLUE=1 BLUE value
         * @property {number} RED=2 RED value
         * @property {number} WHITE=3 WHITE value
         * @property {number} GREEN=4 GREEN value
         */
        Metadata.ForceColor = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "BLUE"] = 1;
            values[valuesById[2] = "RED"] = 2;
            values[valuesById[3] = "WHITE"] = 3;
            values[valuesById[4] = "GREEN"] = 4;
            return values;
        })();

        return Metadata;
    })();

    dlvc_api.UserDefinedMetadata = (function() {

        /**
         * Properties of a UserDefinedMetadata.
         * @memberof dlvc_api
         * @interface IUserDefinedMetadata
         * @property {string|null} [key] UserDefinedMetadata key
         * @property {string|null} [value] UserDefinedMetadata value
         * @property {string|null} [valueType] UserDefinedMetadata valueType
         * @property {string|null} [unitType] UserDefinedMetadata unitType
         */

        /**
         * Constructs a new UserDefinedMetadata.
         * @memberof dlvc_api
         * @classdesc Represents a UserDefinedMetadata.
         * @implements IUserDefinedMetadata
         * @constructor
         * @param {dlvc_api.IUserDefinedMetadata=} [properties] Properties to set
         */
        function UserDefinedMetadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserDefinedMetadata key.
         * @member {string} key
         * @memberof dlvc_api.UserDefinedMetadata
         * @instance
         */
        UserDefinedMetadata.prototype.key = "";

        /**
         * UserDefinedMetadata value.
         * @member {string} value
         * @memberof dlvc_api.UserDefinedMetadata
         * @instance
         */
        UserDefinedMetadata.prototype.value = "";

        /**
         * UserDefinedMetadata valueType.
         * @member {string} valueType
         * @memberof dlvc_api.UserDefinedMetadata
         * @instance
         */
        UserDefinedMetadata.prototype.valueType = "";

        /**
         * UserDefinedMetadata unitType.
         * @member {string} unitType
         * @memberof dlvc_api.UserDefinedMetadata
         * @instance
         */
        UserDefinedMetadata.prototype.unitType = "";

        /**
         * Creates a new UserDefinedMetadata instance using the specified properties.
         * @function create
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {dlvc_api.IUserDefinedMetadata=} [properties] Properties to set
         * @returns {dlvc_api.UserDefinedMetadata} UserDefinedMetadata instance
         */
        UserDefinedMetadata.create = function create(properties) {
            return new UserDefinedMetadata(properties);
        };

        /**
         * Encodes the specified UserDefinedMetadata message. Does not implicitly {@link dlvc_api.UserDefinedMetadata.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {dlvc_api.IUserDefinedMetadata} message UserDefinedMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDefinedMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            if (message.valueType != null && Object.hasOwnProperty.call(message, "valueType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.valueType);
            if (message.unitType != null && Object.hasOwnProperty.call(message, "unitType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.unitType);
            return writer;
        };

        /**
         * Encodes the specified UserDefinedMetadata message, length delimited. Does not implicitly {@link dlvc_api.UserDefinedMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {dlvc_api.IUserDefinedMetadata} message UserDefinedMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDefinedMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserDefinedMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.UserDefinedMetadata} UserDefinedMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDefinedMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.UserDefinedMetadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                case 4:
                    message.valueType = reader.string();
                    break;
                case 5:
                    message.unitType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserDefinedMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.UserDefinedMetadata} UserDefinedMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDefinedMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserDefinedMetadata message.
         * @function verify
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserDefinedMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.valueType != null && message.hasOwnProperty("valueType"))
                if (!$util.isString(message.valueType))
                    return "valueType: string expected";
            if (message.unitType != null && message.hasOwnProperty("unitType"))
                if (!$util.isString(message.unitType))
                    return "unitType: string expected";
            return null;
        };

        /**
         * Creates a UserDefinedMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.UserDefinedMetadata} UserDefinedMetadata
         */
        UserDefinedMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.UserDefinedMetadata)
                return object;
            let message = new $root.dlvc_api.UserDefinedMetadata();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            if (object.valueType != null)
                message.valueType = String(object.valueType);
            if (object.unitType != null)
                message.unitType = String(object.unitType);
            return message;
        };

        /**
         * Creates a plain object from a UserDefinedMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.UserDefinedMetadata
         * @static
         * @param {dlvc_api.UserDefinedMetadata} message UserDefinedMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserDefinedMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
                object.valueType = "";
                object.unitType = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.valueType != null && message.hasOwnProperty("valueType"))
                object.valueType = message.valueType;
            if (message.unitType != null && message.hasOwnProperty("unitType"))
                object.unitType = message.unitType;
            return object;
        };

        /**
         * Converts this UserDefinedMetadata to JSON.
         * @function toJSON
         * @memberof dlvc_api.UserDefinedMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserDefinedMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserDefinedMetadata;
    })();

    dlvc_api.MessageEncoding = (function() {

        /**
         * Properties of a MessageEncoding.
         * @memberof dlvc_api
         * @interface IMessageEncoding
         * @property {dlvc_api.MessageEncoding.EncodingType|null} [encodingType] MessageEncoding encodingType
         * @property {string|null} [customEncodingType] MessageEncoding customEncodingType
         */

        /**
         * Constructs a new MessageEncoding.
         * @memberof dlvc_api
         * @classdesc Represents a MessageEncoding.
         * @implements IMessageEncoding
         * @constructor
         * @param {dlvc_api.IMessageEncoding=} [properties] Properties to set
         */
        function MessageEncoding(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageEncoding encodingType.
         * @member {dlvc_api.MessageEncoding.EncodingType} encodingType
         * @memberof dlvc_api.MessageEncoding
         * @instance
         */
        MessageEncoding.prototype.encodingType = 0;

        /**
         * MessageEncoding customEncodingType.
         * @member {string} customEncodingType
         * @memberof dlvc_api.MessageEncoding
         * @instance
         */
        MessageEncoding.prototype.customEncodingType = "";

        /**
         * Creates a new MessageEncoding instance using the specified properties.
         * @function create
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {dlvc_api.IMessageEncoding=} [properties] Properties to set
         * @returns {dlvc_api.MessageEncoding} MessageEncoding instance
         */
        MessageEncoding.create = function create(properties) {
            return new MessageEncoding(properties);
        };

        /**
         * Encodes the specified MessageEncoding message. Does not implicitly {@link dlvc_api.MessageEncoding.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {dlvc_api.IMessageEncoding} message MessageEncoding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageEncoding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encodingType != null && Object.hasOwnProperty.call(message, "encodingType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.encodingType);
            if (message.customEncodingType != null && Object.hasOwnProperty.call(message, "customEncodingType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.customEncodingType);
            return writer;
        };

        /**
         * Encodes the specified MessageEncoding message, length delimited. Does not implicitly {@link dlvc_api.MessageEncoding.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {dlvc_api.IMessageEncoding} message MessageEncoding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageEncoding.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageEncoding message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.MessageEncoding} MessageEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageEncoding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.MessageEncoding();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.encodingType = reader.int32();
                    break;
                case 3:
                    message.customEncodingType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageEncoding message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.MessageEncoding} MessageEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageEncoding.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageEncoding message.
         * @function verify
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageEncoding.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                switch (message.encodingType) {
                default:
                    return "encodingType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.customEncodingType != null && message.hasOwnProperty("customEncodingType"))
                if (!$util.isString(message.customEncodingType))
                    return "customEncodingType: string expected";
            return null;
        };

        /**
         * Creates a MessageEncoding message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.MessageEncoding} MessageEncoding
         */
        MessageEncoding.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.MessageEncoding)
                return object;
            let message = new $root.dlvc_api.MessageEncoding();
            switch (object.encodingType) {
            case "UNSPECIFIED":
            case 0:
                message.encodingType = 0;
                break;
            case "CUSTOM":
            case 1:
                message.encodingType = 1;
                break;
            case "TEXT":
            case 2:
                message.encodingType = 2;
                break;
            case "JSON":
            case 3:
                message.encodingType = 3;
                break;
            case "XML":
            case 4:
                message.encodingType = 4;
                break;
            case "CSV":
            case 5:
                message.encodingType = 5;
                break;
            }
            if (object.customEncodingType != null)
                message.customEncodingType = String(object.customEncodingType);
            return message;
        };

        /**
         * Creates a plain object from a MessageEncoding message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.MessageEncoding
         * @static
         * @param {dlvc_api.MessageEncoding} message MessageEncoding
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageEncoding.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.encodingType = options.enums === String ? "UNSPECIFIED" : 0;
                object.customEncodingType = "";
            }
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                object.encodingType = options.enums === String ? $root.dlvc_api.MessageEncoding.EncodingType[message.encodingType] : message.encodingType;
            if (message.customEncodingType != null && message.hasOwnProperty("customEncodingType"))
                object.customEncodingType = message.customEncodingType;
            return object;
        };

        /**
         * Converts this MessageEncoding to JSON.
         * @function toJSON
         * @memberof dlvc_api.MessageEncoding
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageEncoding.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EncodingType enum.
         * @name dlvc_api.MessageEncoding.EncodingType
         * @enum {string}
         * @property {number} UNSPECIFIED=0 UNSPECIFIED value
         * @property {number} CUSTOM=1 CUSTOM value
         * @property {number} TEXT=2 TEXT value
         * @property {number} JSON=3 JSON value
         * @property {number} XML=4 XML value
         * @property {number} CSV=5 CSV value
         */
        MessageEncoding.EncodingType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "CUSTOM"] = 1;
            values[valuesById[2] = "TEXT"] = 2;
            values[valuesById[3] = "JSON"] = 3;
            values[valuesById[4] = "XML"] = 4;
            values[valuesById[5] = "CSV"] = 5;
            return values;
        })();

        return MessageEncoding;
    })();

    dlvc_api.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof dlvc_api
         * @interface IPosition
         * @property {number|null} [latitude] Position latitude
         * @property {number|null} [longitude] Position longitude
         * @property {number|null} [pitch] Position pitch
         * @property {number|null} [yaw] Position yaw
         * @property {number|null} [roll] Position roll
         * @property {number|null} [radiusMeters] Position radiusMeters
         * @property {number|null} [resolutionMeters] Position resolutionMeters
         * @property {dlvc_api.Position.TFOM|null} [tfom] Position tfom
         */

        /**
         * Constructs a new Position.
         * @memberof dlvc_api
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {dlvc_api.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position latitude.
         * @member {number} latitude
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.latitude = 0;

        /**
         * Position longitude.
         * @member {number} longitude
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.longitude = 0;

        /**
         * Position pitch.
         * @member {number} pitch
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.pitch = 0;

        /**
         * Position yaw.
         * @member {number} yaw
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.yaw = 0;

        /**
         * Position roll.
         * @member {number} roll
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.roll = 0;

        /**
         * Position radiusMeters.
         * @member {number} radiusMeters
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.radiusMeters = 0;

        /**
         * Position resolutionMeters.
         * @member {number} resolutionMeters
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.resolutionMeters = 0;

        /**
         * Position tfom.
         * @member {dlvc_api.Position.TFOM} tfom
         * @memberof dlvc_api.Position
         * @instance
         */
        Position.prototype.tfom = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof dlvc_api.Position
         * @static
         * @param {dlvc_api.IPosition=} [properties] Properties to set
         * @returns {dlvc_api.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link dlvc_api.Position.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.Position
         * @static
         * @param {dlvc_api.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.longitude);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.pitch);
            if (message.yaw != null && Object.hasOwnProperty.call(message, "yaw"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.yaw);
            if (message.roll != null && Object.hasOwnProperty.call(message, "roll"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.roll);
            if (message.radiusMeters != null && Object.hasOwnProperty.call(message, "radiusMeters"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.radiusMeters);
            if (message.resolutionMeters != null && Object.hasOwnProperty.call(message, "resolutionMeters"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.resolutionMeters);
            if (message.tfom != null && Object.hasOwnProperty.call(message, "tfom"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.tfom);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link dlvc_api.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.Position
         * @static
         * @param {dlvc_api.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.latitude = reader.float();
                    break;
                case 3:
                    message.longitude = reader.float();
                    break;
                case 4:
                    message.pitch = reader.float();
                    break;
                case 5:
                    message.yaw = reader.float();
                    break;
                case 6:
                    message.roll = reader.float();
                    break;
                case 7:
                    message.radiusMeters = reader.float();
                    break;
                case 8:
                    message.resolutionMeters = reader.float();
                    break;
                case 9:
                    message.tfom = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof dlvc_api.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                if (typeof message.pitch !== "number")
                    return "pitch: number expected";
            if (message.yaw != null && message.hasOwnProperty("yaw"))
                if (typeof message.yaw !== "number")
                    return "yaw: number expected";
            if (message.roll != null && message.hasOwnProperty("roll"))
                if (typeof message.roll !== "number")
                    return "roll: number expected";
            if (message.radiusMeters != null && message.hasOwnProperty("radiusMeters"))
                if (typeof message.radiusMeters !== "number")
                    return "radiusMeters: number expected";
            if (message.resolutionMeters != null && message.hasOwnProperty("resolutionMeters"))
                if (typeof message.resolutionMeters !== "number")
                    return "resolutionMeters: number expected";
            if (message.tfom != null && message.hasOwnProperty("tfom"))
                switch (message.tfom) {
                default:
                    return "tfom: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    break;
                }
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.Position)
                return object;
            let message = new $root.dlvc_api.Position();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.pitch != null)
                message.pitch = Number(object.pitch);
            if (object.yaw != null)
                message.yaw = Number(object.yaw);
            if (object.roll != null)
                message.roll = Number(object.roll);
            if (object.radiusMeters != null)
                message.radiusMeters = Number(object.radiusMeters);
            if (object.resolutionMeters != null)
                message.resolutionMeters = Number(object.resolutionMeters);
            switch (object.tfom) {
            case "UNSPECIFIED":
            case 0:
                message.tfom = 0;
                break;
            case "LTE_1_NANOSECOND":
            case 1:
                message.tfom = 1;
                break;
            case "LTE_10_NANOSECONDS":
            case 2:
                message.tfom = 2;
                break;
            case "LTE_100_NANOSECONDS":
            case 3:
                message.tfom = 3;
                break;
            case "LTE_1_MICROSECOND":
            case 4:
                message.tfom = 4;
                break;
            case "LTE_10_MICROSECONDS":
            case 5:
                message.tfom = 5;
                break;
            case "LTE_100_MICROSECONDS":
            case 6:
                message.tfom = 6;
                break;
            case "LTE_1_MILLISECOND":
            case 7:
                message.tfom = 7;
                break;
            case "LTE_10_MILLISECONDS":
            case 8:
                message.tfom = 8;
                break;
            case "LTE_100_MILLISECONDS":
            case 9:
                message.tfom = 9;
                break;
            case "LTE_1_SECOND":
            case 10:
                message.tfom = 10;
                break;
            case "LTE_10_SECONDS":
            case 11:
                message.tfom = 11;
                break;
            case "LTE_100_SECONDS":
            case 12:
                message.tfom = 12;
                break;
            case "LTE_1000_SECONDS":
            case 13:
                message.tfom = 13;
                break;
            case "GT_1000_SECONDS":
            case 14:
                message.tfom = 14;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.Position
         * @static
         * @param {dlvc_api.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
                object.pitch = 0;
                object.yaw = 0;
                object.roll = 0;
                object.radiusMeters = 0;
                object.resolutionMeters = 0;
                object.tfom = options.enums === String ? "UNSPECIFIED" : 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
            if (message.yaw != null && message.hasOwnProperty("yaw"))
                object.yaw = options.json && !isFinite(message.yaw) ? String(message.yaw) : message.yaw;
            if (message.roll != null && message.hasOwnProperty("roll"))
                object.roll = options.json && !isFinite(message.roll) ? String(message.roll) : message.roll;
            if (message.radiusMeters != null && message.hasOwnProperty("radiusMeters"))
                object.radiusMeters = options.json && !isFinite(message.radiusMeters) ? String(message.radiusMeters) : message.radiusMeters;
            if (message.resolutionMeters != null && message.hasOwnProperty("resolutionMeters"))
                object.resolutionMeters = options.json && !isFinite(message.resolutionMeters) ? String(message.resolutionMeters) : message.resolutionMeters;
            if (message.tfom != null && message.hasOwnProperty("tfom"))
                object.tfom = options.enums === String ? $root.dlvc_api.Position.TFOM[message.tfom] : message.tfom;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof dlvc_api.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * TFOM enum.
         * @name dlvc_api.Position.TFOM
         * @enum {string}
         * @property {number} UNSPECIFIED=0 UNSPECIFIED value
         * @property {number} LTE_1_NANOSECOND=1 LTE_1_NANOSECOND value
         * @property {number} LTE_10_NANOSECONDS=2 LTE_10_NANOSECONDS value
         * @property {number} LTE_100_NANOSECONDS=3 LTE_100_NANOSECONDS value
         * @property {number} LTE_1_MICROSECOND=4 LTE_1_MICROSECOND value
         * @property {number} LTE_10_MICROSECONDS=5 LTE_10_MICROSECONDS value
         * @property {number} LTE_100_MICROSECONDS=6 LTE_100_MICROSECONDS value
         * @property {number} LTE_1_MILLISECOND=7 LTE_1_MILLISECOND value
         * @property {number} LTE_10_MILLISECONDS=8 LTE_10_MILLISECONDS value
         * @property {number} LTE_100_MILLISECONDS=9 LTE_100_MILLISECONDS value
         * @property {number} LTE_1_SECOND=10 LTE_1_SECOND value
         * @property {number} LTE_10_SECONDS=11 LTE_10_SECONDS value
         * @property {number} LTE_100_SECONDS=12 LTE_100_SECONDS value
         * @property {number} LTE_1000_SECONDS=13 LTE_1000_SECONDS value
         * @property {number} GT_1000_SECONDS=14 GT_1000_SECONDS value
         */
        Position.TFOM = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "LTE_1_NANOSECOND"] = 1;
            values[valuesById[2] = "LTE_10_NANOSECONDS"] = 2;
            values[valuesById[3] = "LTE_100_NANOSECONDS"] = 3;
            values[valuesById[4] = "LTE_1_MICROSECOND"] = 4;
            values[valuesById[5] = "LTE_10_MICROSECONDS"] = 5;
            values[valuesById[6] = "LTE_100_MICROSECONDS"] = 6;
            values[valuesById[7] = "LTE_1_MILLISECOND"] = 7;
            values[valuesById[8] = "LTE_10_MILLISECONDS"] = 8;
            values[valuesById[9] = "LTE_100_MILLISECONDS"] = 9;
            values[valuesById[10] = "LTE_1_SECOND"] = 10;
            values[valuesById[11] = "LTE_10_SECONDS"] = 11;
            values[valuesById[12] = "LTE_100_SECONDS"] = 12;
            values[valuesById[13] = "LTE_1000_SECONDS"] = 13;
            values[valuesById[14] = "GT_1000_SECONDS"] = 14;
            return values;
        })();

        return Position;
    })();

    dlvc_api.PositionBoundingBox = (function() {

        /**
         * Properties of a PositionBoundingBox.
         * @memberof dlvc_api
         * @interface IPositionBoundingBox
         * @property {number|null} [minLatitude] PositionBoundingBox minLatitude
         * @property {number|null} [maxLatitude] PositionBoundingBox maxLatitude
         * @property {number|null} [minLongitude] PositionBoundingBox minLongitude
         * @property {number|null} [maxLongitude] PositionBoundingBox maxLongitude
         */

        /**
         * Constructs a new PositionBoundingBox.
         * @memberof dlvc_api
         * @classdesc Represents a PositionBoundingBox.
         * @implements IPositionBoundingBox
         * @constructor
         * @param {dlvc_api.IPositionBoundingBox=} [properties] Properties to set
         */
        function PositionBoundingBox(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PositionBoundingBox minLatitude.
         * @member {number} minLatitude
         * @memberof dlvc_api.PositionBoundingBox
         * @instance
         */
        PositionBoundingBox.prototype.minLatitude = 0;

        /**
         * PositionBoundingBox maxLatitude.
         * @member {number} maxLatitude
         * @memberof dlvc_api.PositionBoundingBox
         * @instance
         */
        PositionBoundingBox.prototype.maxLatitude = 0;

        /**
         * PositionBoundingBox minLongitude.
         * @member {number} minLongitude
         * @memberof dlvc_api.PositionBoundingBox
         * @instance
         */
        PositionBoundingBox.prototype.minLongitude = 0;

        /**
         * PositionBoundingBox maxLongitude.
         * @member {number} maxLongitude
         * @memberof dlvc_api.PositionBoundingBox
         * @instance
         */
        PositionBoundingBox.prototype.maxLongitude = 0;

        /**
         * Creates a new PositionBoundingBox instance using the specified properties.
         * @function create
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {dlvc_api.IPositionBoundingBox=} [properties] Properties to set
         * @returns {dlvc_api.PositionBoundingBox} PositionBoundingBox instance
         */
        PositionBoundingBox.create = function create(properties) {
            return new PositionBoundingBox(properties);
        };

        /**
         * Encodes the specified PositionBoundingBox message. Does not implicitly {@link dlvc_api.PositionBoundingBox.verify|verify} messages.
         * @function encode
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {dlvc_api.IPositionBoundingBox} message PositionBoundingBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PositionBoundingBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minLatitude != null && Object.hasOwnProperty.call(message, "minLatitude"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.minLatitude);
            if (message.maxLatitude != null && Object.hasOwnProperty.call(message, "maxLatitude"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.maxLatitude);
            if (message.minLongitude != null && Object.hasOwnProperty.call(message, "minLongitude"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.minLongitude);
            if (message.maxLongitude != null && Object.hasOwnProperty.call(message, "maxLongitude"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.maxLongitude);
            return writer;
        };

        /**
         * Encodes the specified PositionBoundingBox message, length delimited. Does not implicitly {@link dlvc_api.PositionBoundingBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {dlvc_api.IPositionBoundingBox} message PositionBoundingBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PositionBoundingBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PositionBoundingBox message from the specified reader or buffer.
         * @function decode
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dlvc_api.PositionBoundingBox} PositionBoundingBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PositionBoundingBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dlvc_api.PositionBoundingBox();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.minLatitude = reader.float();
                    break;
                case 3:
                    message.maxLatitude = reader.float();
                    break;
                case 4:
                    message.minLongitude = reader.float();
                    break;
                case 5:
                    message.maxLongitude = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PositionBoundingBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dlvc_api.PositionBoundingBox} PositionBoundingBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PositionBoundingBox.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PositionBoundingBox message.
         * @function verify
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PositionBoundingBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minLatitude != null && message.hasOwnProperty("minLatitude"))
                if (typeof message.minLatitude !== "number")
                    return "minLatitude: number expected";
            if (message.maxLatitude != null && message.hasOwnProperty("maxLatitude"))
                if (typeof message.maxLatitude !== "number")
                    return "maxLatitude: number expected";
            if (message.minLongitude != null && message.hasOwnProperty("minLongitude"))
                if (typeof message.minLongitude !== "number")
                    return "minLongitude: number expected";
            if (message.maxLongitude != null && message.hasOwnProperty("maxLongitude"))
                if (typeof message.maxLongitude !== "number")
                    return "maxLongitude: number expected";
            return null;
        };

        /**
         * Creates a PositionBoundingBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dlvc_api.PositionBoundingBox} PositionBoundingBox
         */
        PositionBoundingBox.fromObject = function fromObject(object) {
            if (object instanceof $root.dlvc_api.PositionBoundingBox)
                return object;
            let message = new $root.dlvc_api.PositionBoundingBox();
            if (object.minLatitude != null)
                message.minLatitude = Number(object.minLatitude);
            if (object.maxLatitude != null)
                message.maxLatitude = Number(object.maxLatitude);
            if (object.minLongitude != null)
                message.minLongitude = Number(object.minLongitude);
            if (object.maxLongitude != null)
                message.maxLongitude = Number(object.maxLongitude);
            return message;
        };

        /**
         * Creates a plain object from a PositionBoundingBox message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dlvc_api.PositionBoundingBox
         * @static
         * @param {dlvc_api.PositionBoundingBox} message PositionBoundingBox
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PositionBoundingBox.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.minLatitude = 0;
                object.maxLatitude = 0;
                object.minLongitude = 0;
                object.maxLongitude = 0;
            }
            if (message.minLatitude != null && message.hasOwnProperty("minLatitude"))
                object.minLatitude = options.json && !isFinite(message.minLatitude) ? String(message.minLatitude) : message.minLatitude;
            if (message.maxLatitude != null && message.hasOwnProperty("maxLatitude"))
                object.maxLatitude = options.json && !isFinite(message.maxLatitude) ? String(message.maxLatitude) : message.maxLatitude;
            if (message.minLongitude != null && message.hasOwnProperty("minLongitude"))
                object.minLongitude = options.json && !isFinite(message.minLongitude) ? String(message.minLongitude) : message.minLongitude;
            if (message.maxLongitude != null && message.hasOwnProperty("maxLongitude"))
                object.maxLongitude = options.json && !isFinite(message.maxLongitude) ? String(message.maxLongitude) : message.maxLongitude;
            return object;
        };

        /**
         * Converts this PositionBoundingBox to JSON.
         * @function toJSON
         * @memberof dlvc_api.PositionBoundingBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PositionBoundingBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PositionBoundingBox;
    })();

    dlvc_api.DLVCService = (function() {

        /**
         * Constructs a new DLVCService service.
         * @memberof dlvc_api
         * @classdesc Represents a DLVCService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DLVCService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DLVCService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DLVCService;

        /**
         * Creates new DLVCService service using the specified rpc implementation.
         * @function create
         * @memberof dlvc_api.DLVCService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DLVCService} RPC service. Useful where requests and/or responses are streamed.
         */
        DLVCService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link dlvc_api.DLVCService#pushRawMessage}.
         * @memberof dlvc_api.DLVCService
         * @typedef PushRawMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.PushRawMessageResponse} [response] PushRawMessageResponse
         */

        /**
         * Calls PushRawMessage.
         * @function pushRawMessage
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IPushRawMessageRequest} request PushRawMessageRequest message or plain object
         * @param {dlvc_api.DLVCService.PushRawMessageCallback} callback Node-style callback called with the error, if any, and PushRawMessageResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.pushRawMessage = function pushRawMessage(request, callback) {
            return this.rpcCall(pushRawMessage, $root.dlvc_api.PushRawMessageRequest, $root.dlvc_api.PushRawMessageResponse, request, callback);
        }, "name", { value: "PushRawMessage" });

        /**
         * Calls PushRawMessage.
         * @function pushRawMessage
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IPushRawMessageRequest} request PushRawMessageRequest message or plain object
         * @returns {Promise<dlvc_api.PushRawMessageResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#pushRawMessages}.
         * @memberof dlvc_api.DLVCService
         * @typedef PushRawMessagesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.PushRawMessagesResponse} [response] PushRawMessagesResponse
         */

        /**
         * Calls PushRawMessages.
         * @function pushRawMessages
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IPushRawMessagesRequest} request PushRawMessagesRequest message or plain object
         * @param {dlvc_api.DLVCService.PushRawMessagesCallback} callback Node-style callback called with the error, if any, and PushRawMessagesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.pushRawMessages = function pushRawMessages(request, callback) {
            return this.rpcCall(pushRawMessages, $root.dlvc_api.PushRawMessagesRequest, $root.dlvc_api.PushRawMessagesResponse, request, callback);
        }, "name", { value: "PushRawMessages" });

        /**
         * Calls PushRawMessages.
         * @function pushRawMessages
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IPushRawMessagesRequest} request PushRawMessagesRequest message or plain object
         * @returns {Promise<dlvc_api.PushRawMessagesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#getRawMessage}.
         * @memberof dlvc_api.DLVCService
         * @typedef GetRawMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.GetRawMessageResponse} [response] GetRawMessageResponse
         */

        /**
         * Calls GetRawMessage.
         * @function getRawMessage
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IGetRawMessageRequest} request GetRawMessageRequest message or plain object
         * @param {dlvc_api.DLVCService.GetRawMessageCallback} callback Node-style callback called with the error, if any, and GetRawMessageResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.getRawMessage = function getRawMessage(request, callback) {
            return this.rpcCall(getRawMessage, $root.dlvc_api.GetRawMessageRequest, $root.dlvc_api.GetRawMessageResponse, request, callback);
        }, "name", { value: "GetRawMessage" });

        /**
         * Calls GetRawMessage.
         * @function getRawMessage
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IGetRawMessageRequest} request GetRawMessageRequest message or plain object
         * @returns {Promise<dlvc_api.GetRawMessageResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#getRawMessages}.
         * @memberof dlvc_api.DLVCService
         * @typedef GetRawMessagesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.GetRawMessagesResponse} [response] GetRawMessagesResponse
         */

        /**
         * Calls GetRawMessages.
         * @function getRawMessages
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IGetRawMessagesRequest} request GetRawMessagesRequest message or plain object
         * @param {dlvc_api.DLVCService.GetRawMessagesCallback} callback Node-style callback called with the error, if any, and GetRawMessagesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.getRawMessages = function getRawMessages(request, callback) {
            return this.rpcCall(getRawMessages, $root.dlvc_api.GetRawMessagesRequest, $root.dlvc_api.GetRawMessagesResponse, request, callback);
        }, "name", { value: "GetRawMessages" });

        /**
         * Calls GetRawMessages.
         * @function getRawMessages
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IGetRawMessagesRequest} request GetRawMessagesRequest message or plain object
         * @returns {Promise<dlvc_api.GetRawMessagesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#summarize}.
         * @memberof dlvc_api.DLVCService
         * @typedef SummarizeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.SummarizeResponse} [response] SummarizeResponse
         */

        /**
         * Calls Summarize.
         * @function summarize
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.ISummarizeRequest} request SummarizeRequest message or plain object
         * @param {dlvc_api.DLVCService.SummarizeCallback} callback Node-style callback called with the error, if any, and SummarizeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.summarize = function summarize(request, callback) {
            return this.rpcCall(summarize, $root.dlvc_api.SummarizeRequest, $root.dlvc_api.SummarizeResponse, request, callback);
        }, "name", { value: "Summarize" });

        /**
         * Calls Summarize.
         * @function summarize
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.ISummarizeRequest} request SummarizeRequest message or plain object
         * @returns {Promise<dlvc_api.SummarizeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#listMetadataValues}.
         * @memberof dlvc_api.DLVCService
         * @typedef ListMetadataValuesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.ListMetadataValuesResponse} [response] ListMetadataValuesResponse
         */

        /**
         * Calls ListMetadataValues.
         * @function listMetadataValues
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IListMetadataValuesRequest} request ListMetadataValuesRequest message or plain object
         * @param {dlvc_api.DLVCService.ListMetadataValuesCallback} callback Node-style callback called with the error, if any, and ListMetadataValuesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.listMetadataValues = function listMetadataValues(request, callback) {
            return this.rpcCall(listMetadataValues, $root.dlvc_api.ListMetadataValuesRequest, $root.dlvc_api.ListMetadataValuesResponse, request, callback);
        }, "name", { value: "ListMetadataValues" });

        /**
         * Calls ListMetadataValues.
         * @function listMetadataValues
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IListMetadataValuesRequest} request ListMetadataValuesRequest message or plain object
         * @returns {Promise<dlvc_api.ListMetadataValuesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dlvc_api.DLVCService#listExercises}.
         * @memberof dlvc_api.DLVCService
         * @typedef ListExercisesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dlvc_api.ListExercisesResponse} [response] ListExercisesResponse
         */

        /**
         * Calls ListExercises.
         * @function listExercises
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IListExercisesRequest} request ListExercisesRequest message or plain object
         * @param {dlvc_api.DLVCService.ListExercisesCallback} callback Node-style callback called with the error, if any, and ListExercisesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DLVCService.prototype.listExercises = function listExercises(request, callback) {
            return this.rpcCall(listExercises, $root.dlvc_api.ListExercisesRequest, $root.dlvc_api.ListExercisesResponse, request, callback);
        }, "name", { value: "ListExercises" });

        /**
         * Calls ListExercises.
         * @function listExercises
         * @memberof dlvc_api.DLVCService
         * @instance
         * @param {dlvc_api.IListExercisesRequest} request ListExercisesRequest message or plain object
         * @returns {Promise<dlvc_api.ListExercisesResponse>} Promise
         * @variation 2
         */

        return DLVCService;
    })();

    return dlvc_api;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
