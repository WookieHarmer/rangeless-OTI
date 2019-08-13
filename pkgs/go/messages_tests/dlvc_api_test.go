// Copyright (c) 2019, RavenOps Inc., All Rights Reserved
/*
The files contained in the messages directory are all generated.

This file tests that the code builds in this native language as laid out in this language specific pkg directory.

Testing importing proto types across files and importing common ptypes are the objectives of these tests.

These tests also exist for the purposes of backwards compatibility. Any breakage of backwards compatibility will require
changing this test.

JSON test messages were used for ease of debugabilty.
 */

package messages_tests

import (
	"context"
	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/ptypes"
	"github.com/stretchr/testify/assert"
	"net/http"
	"os"
	"path/filepath"
	"raven.black/dlvc-api/messages/dlvc_api"
	"reflect"
	"strings"
	"testing"
	"github.com/stretchr/testify/require"
	"time"
)

// This tests the following:
// - the generated code compiles
// - the message types PushRawMessageRequest and PushRawMessageResponse were successfully imported from dlvc.proto
// - the timestamp ptype was successfully imported
// - the go field validation is more robust than the other languages because its checking backwards compatibility
func TestPushRawMessages(t *testing.T){
	// uncomment to recreate the JSON Example File
	//err := createJSONExampleFile()
	//require.NoError(t, err)

	prmF, err := os.OpenFile(filepath.Join("testdata", "push_raw_messages_request.json"),  os.O_RDONLY, os.ModePerm)
	require.NoError(t, err)
	defer func() {
		err = prmF.Close()
		assert.NoError(t, err)
	}()

	var prm dlvc_api.PushRawMessagesRequest
	jpb := jsonpb.Unmarshaler{AllowUnknownFields: false}
	err = jpb.Unmarshal(prmF, &prm)
	require.NoError(t, err)

	// Go only check, check for backwards compatibility. Removing fields from this tests should be a deliberate decision
	// verify expected Metadata fields
	validateFieldValues(t, prm)

	// Go only check, ensure new fields haven't been added to the proto without being included in the backwards
	// compatibility tests above
	validateStructFields(t, prm)

	// Go only check, ensure new enum values haven't been added to the proto without being included in the backwards
	// compatibility tests above
	validateEnumValues(t)

	// Test the client
	client := dlvc_api.NewDLVCServiceProtobufClient("", http.DefaultClient)
	_, err = client.PushRawMessages(context.TODO(), &prm)
	// if the client fails at establishing a connection,
	// then we've validated it successfully imported the proto message file
	// success is this error: https://golang.org/src/net/http/transport.go#L444
	require.Error(t, err)
	assert.True(t, strings.HasSuffix(err.Error(), "http: no Host in request URL"))
}

// Go only check, check for backwards compatibility. Removing fields from this tests should be a deliberate decision
// verify expected Metadata fields
func validateFieldValues(t *testing.T, prm dlvc_api.PushRawMessagesRequest) {
	assert.Equal(t, "test-partner-id", prm.Metadata.GetPartnerId())
	assert.Equal(t, "test-partner-cert-id", prm.Metadata.GetPartnerCertId())
	assert.Equal(t, "test-source-id", prm.Metadata.GetSourceId())
	assert.Equal(t, "test-exercise-id", prm.Metadata.GetExerciseId())
	assert.Equal(t, "test-exercise-name", prm.Metadata.GetExerciseName())
	assert.Equal(t, "test-entity-state-pdu", prm.Metadata.GetEntityStatePdu())
	assert.Equal(t, dlvc_api.Metadata_BLUE, prm.Metadata.GetForceColor())
	// verify expected User Metadata fields
	assert.Len(t, prm.UserMetadata, 1)
	um := prm.UserMetadata[0]
	assert.Equal(t, "test-key-1", um.GetKey())
	assert.Equal(t, "5000000", um.GetValue())
	assert.Equal(t, "INT", um.GetValueType())
	assert.Equal(t, "BYTES", um.GetUnitType())
	// verify expected Messages
	assert.Len(t, prm.Messages, 1)
	msg := prm.Messages[0]
	assert.Equal(t, "test-idempotency-key", msg.GetIdempotencyKey())
	assert.Equal(t, dlvc_api.Metadata_RED, msg.GetMetadata().GetForceColor())
	assert.Len(t, msg.GetUserMetadata(), 1)
	mum := msg.UserMetadata[0]
	assert.Equal(t, "test-key-2", mum.GetKey())
	assert.Equal(t, "test-value-2", mum.GetValue())
	assert.Equal(t, "STRING", mum.GetValueType())
	assert.Equal(t, dlvc_api.WrappedMessage_INSTRUCTOR_COMMENT, msg.GetMessageType())
	assert.Equal(t, dlvc_api.MessageEncoding_TEXT, msg.GetMessageEncoding().GetEncodingType())
	pos := msg.GetPosition()
	assert.Equal(t, float32(37.959315), pos.GetLatitude())
	assert.Equal(t, float32(-122.525800), pos.GetLongitude())
	assert.Equal(t, float32(2), pos.GetPitch())
	assert.Equal(t, float32(170), pos.GetYaw())
	assert.Equal(t, float32(1), pos.GetRoll())
	assert.Equal(t, float32(4000), pos.GetRadiusMeters())
	assert.Equal(t, float32(1), pos.GetResolutionMeters())
	assert.Equal(t, dlvc_api.Position_LTE_1_SECOND, pos.GetTfom())
	ct, err := time.Parse(time.RFC3339Nano, "2019-08-18T09:03:22.234123098Z")
	require.NoError(t, err)
	pct, err := ptypes.TimestampProto(ct)
	require.NoError(t, err)
	assert.Equal(t, pct, msg.GetCreatedTime())
	assert.Equal(t, "test-raw-message", string(msg.GetRawMessage()))
}

// Go only check, ensure new fields haven't been added to the proto without being included in the backwards
// compatibility tests above
func validateStructFields(t *testing.T, prm dlvc_api.PushRawMessagesRequest) {
	// add 3 because proto structs always include 3 extra fields
	assert.Equal(t, 3+3, reflect.ValueOf(prm).NumField()) // dlvc_api.PushRawMessagesRequest
	assert.Equal(t, 7+3, reflect.ValueOf(*prm.Metadata).NumField()) // dlvc_api.Metadata
	assert.Equal(t, 4+3, reflect.ValueOf(*prm.UserMetadata[0]).NumField()) // dlvc_api.UserDefinedMetadata
	assert.Equal(t, 8+3, reflect.ValueOf(*prm.Messages[0]).NumField()) // dlvc_api.WrappedMessage
	assert.Equal(t, 2+3, reflect.ValueOf(*prm.Messages[0].MessageEncoding).NumField()) // dlvc_api.MessageEncoding
	assert.Equal(t, 8+3, reflect.ValueOf(*prm.Messages[0].Position).NumField()) // dlvc_api.Position
}

// helper function to ensure proto enum values are equal to expected and in the correct order
func assertEqualEnumValues(t *testing.T, expected []string, actual map[int32]string) {
	assert.Equal(t, len(expected), len(actual))
	for i := range actual {
		assert.Equal(t, expected[i], actual[i])
	}
}

// Go only check, ensure new enum values haven't been added to the proto without being included in the backwards
// compatibility tests above
func validateEnumValues(t *testing.T) {
	// enum dlvc_api.MessageRetrievalType
	assertEqualEnumValues(t, []string{
		"UNSPECIFIED","INDEX","TIME","MESSAGE_TYPE","ENCODING_TYPE","METADATA",
		"USER_DEFINED_METADATA","POSITION_BOUNDING_BOX",
	}, dlvc_api.MessageRetrievalType_name)

	// enum dlvc_api.ReturnedMetadataType
	assertEqualEnumValues(t, []string{
		"RETURN_UNSPECIFIED","RETURN_NONE","RETURN_ALL","RETURN_TIME","RETURN_SOURCE_TYPE","RETURN_METADATA",
		"RETURN_USER_DEFINED_METADATA","RETURN_POSITION",
	}, dlvc_api.ReturnedMetadataType_name)

	// enum dlvc_api.WrappedMessage_MessageType
	assertEqualEnumValues(t, []string{
		"UNSPECIFIED","CUSTOM","DIS7","COT","LINK16","JREAP","INSTRUCTOR_COMMENT",
	}, dlvc_api.WrappedMessage_MessageType_name)

	// enum dlvc_api.Metadata_ForceColor
	assertEqualEnumValues(t, []string{
		"UNSPECIFIED","BLUE","RED","WHITE","GREEN",
	}, dlvc_api.Metadata_ForceColor_name)

	// enum dlvc_api.MessageEncoding_EncodingType
	assertEqualEnumValues(t, []string{
		"UNSPECIFIED","CUSTOM","TEXT","JSON","XML","CSV",
	}, dlvc_api.MessageEncoding_EncodingType_name)

	// enum dlvc_api.Position_TFOM
	assertEqualEnumValues(t, []string{
		"UNSPECIFIED","LTE_1_NANOSECOND","LTE_10_NANOSECONDS","LTE_100_NANOSECONDS","LTE_1_MICROSECOND",
		"LTE_10_MICROSECONDS","LTE_100_MICROSECONDS","LTE_1_MILLISECOND","LTE_10_MILLISECONDS","LTE_100_MILLISECONDS",
		"LTE_1_SECOND","LTE_10_SECONDS","LTE_100_SECONDS","LTE_1000_SECONDS","GT_1000_SECONDS",
	}, dlvc_api.Position_TFOM_name)
}

// create the example json file used by the tests in each language
func createJSONExampleFile() error {
	ct, err := time.Parse(time.RFC3339Nano, "2019-08-18T09:03:22.234123098Z")
	if err != nil {
		return err
	}
	pct, err := ptypes.TimestampProto(ct)
	if err != nil {
		return err
	}

	foo := dlvc_api.PushRawMessagesRequest{
		Metadata: &dlvc_api.Metadata{
			PartnerId: "test-partner-id",
			PartnerCertId: "test-partner-cert-id",
			SourceId: "test-source-id",
			ExerciseId: "test-exercise-id",
			ExerciseName: "test-exercise-name",
			EntityStatePdu: "test-entity-state-pdu",
			ForceColor: dlvc_api.Metadata_BLUE,
		},
		UserMetadata: []*dlvc_api.UserDefinedMetadata{
			{
				Key: "test-key-1",
				Value: "5000000",
				ValueType: "INT",
				UnitType: "BYTES",
			},
		},
		Messages: []*dlvc_api.WrappedMessage{
			{
				IdempotencyKey: "test-idempotency-key",
				Metadata: &dlvc_api.Metadata{
					ForceColor: dlvc_api.Metadata_RED,
				},
				UserMetadata: []*dlvc_api.UserDefinedMetadata{
					{
						Key: "test-key-2",
						Value: "test-value-2",
						ValueType: "STRING",
					},
				},
				MessageType: dlvc_api.WrappedMessage_INSTRUCTOR_COMMENT,
				MessageEncoding: &dlvc_api.MessageEncoding{
					EncodingType: dlvc_api.MessageEncoding_TEXT,
				},
				Position: &dlvc_api.Position{
					Latitude:             37.959315,
					Longitude:            -122.525800,
					Pitch:                2,
					Yaw:                  170,
					Roll:                 1,
					RadiusMeters:         4000,
					ResolutionMeters:     1,
					Tfom:                 dlvc_api.Position_LTE_1_SECOND,
				},
				CreatedTime: pct,
				RawMessage: []byte("test-raw-message"),
			},
		},
	}

	prmF2, err := os.OpenFile(filepath.Join("testdata", "push_raw_messages_request.json"), os.O_RDWR, os.ModePerm)
	if err != nil {
		return err
	}
	defer prmF2.Close()

	jpbM:=jsonpb.Marshaler{Indent: "  "}
	err = jpbM.Marshal(prmF2, &foo)
	if err != nil {
		return err
	}

	return nil
}