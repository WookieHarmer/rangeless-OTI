/*
Copyright (c) 2019, RavenOps Inc., All Rights Reserved

The files contained in the messages directory are all generated.

This file tests that the code builds in this native language as laid out in this language specific pkg directory.

Testing importing proto types across files and importing common ptypes are the objectives of these tests.

These tests also exist for the purposes of backwards compatibility. Any breakage of backwards compatibility will require
changing this test.

JSON test messages were used for ease of debugabilty.
*/
package dlvc_api;

import java.io.IOException;
import org.junit.*;
import static org.junit.Assert.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.google.protobuf.util.JsonFormat;

public class DlvcTest {

  /*
  This tests the following:
  - the generated code compiles
  - the timestamp ptype was successfully imported
  */
  @Test
  public void testCompile() throws IOException{
    // load the example file
    Path prmP = Paths.get(System.getProperty("user.dir"),
        "src", "test", "java", "messages", "dlvc_api", "testdata", "push_raw_messages_request.json");
    String prmS = Files.readString(prmP);

    // Spot check the message
    Dlvc.PushRawMessagesRequest.Builder builder = Dlvc.PushRawMessagesRequest.newBuilder();
    JsonFormat.parser().merge(prmS, builder);
    Dlvc.PushRawMessagesRequest prm = builder.build();
    assertEquals("test-partner-id", prm.getMetadata().getPartnerId());
    assertEquals(Dlvc.Metadata.ForceColor.BLUE, prm.getMetadata().getForceColor());
    assertEquals("test-idempotency-key", prm.getMessagesList().get(0).getIdempotencyKey());
  }
}