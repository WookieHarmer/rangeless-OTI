"""
Copyright (c) 2019, RavenOps Inc., All Rights Reserved

The files contained in the messages directory are all generated.

This file tests that the code builds in this native language as laid out in this language specific pkg directory.

Testing importing proto types across files and importing common ptypes are the objectives of these tests.

These tests also exist for the purposes of backwards compatibility. Any breakage of backwards compatibility will require
changing this test.

JSON test messages were used for ease of debugabilty.
"""
import unittest
import os

from google.protobuf import json_format

import rvnpy.messages.dlvc_api.dlvc_pb2 as dlvc_pb2
from rvnpy.messages.dlvc_api.dlvc_api_pb2_twirp import DLVCServiceClient

THIS_DIR = os.path.dirname(os.path.realpath(__file__))

class TestPushRawMessages(unittest.TestCase):
    """
    This tests the following:
    - the generated code compiles
    - the message types PushRawMessageRequest and PushRawMessageResponse were successfully imported from dlvc.proto
    - the timestamp ptype was successfully imported
    """
    def test_compiles(self):
        # load an example message
        with open(os.path.join(THIS_DIR,"testdata","push_raw_messages_request.json"), "r") as file:
            prmS = file.read()
        prm = dlvc_pb2.PushRawMessagesRequest()
        prm = json_format.Parse(prmS, prm)
        self.assertIsNotNone(prm)

        # Spot check fields aren't empty
        self.assertEqual(prm.metadata.partner_id, "test-partner-id")
        self.assertEqual(prm.metadata.force_color, dlvc_pb2.Metadata.ForceColor.BLUE)
        self.assertEqual(prm.messages[0].idempotency_key, "test-idempotency-key")

        # Test the client
        dlvc_client = DLVCServiceClient("")
        # if the client fails at establishing a connection,
        # then we've validated it successfully imported the proto message file
        # success is this error: https://golang.org/src/net/http/transport.go#L444
        try:
            res = dlvc_client.push_raw_messages(prm)
        except ValueError as e:
            if not str(e).startswith("unknown url type:"):
                raise e

if __name__ == '__main__':
    unittest.main()
