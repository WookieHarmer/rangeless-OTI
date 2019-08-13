![Raven Black Logo](logo.png)
# DLVC API (Deployable Live, Virtual, Constructive)

|    Upcoming Milestones            |  No Later Than         | Available in Release |
|-----------------------------------|------------------------|----------------------|
| Launch Always-on Debug Servers    | Monday, Sept 23rd 2019 |                      |
______
Three-Eyed Raven (3ER) is a series of data infrastructure tools designed to support AFRL's Deployable Live, Virtual, Constructive (DLVC) project.  This code repository contains the APIs needed by other DLVC elements to send and receive data from 3ER.

### DLVC Overview

DLVC is intended to blend three types of training environments: 

- "Live" - Actual aircraft and personnel in field environments
- "Virtual" - Real personnel participating in the exercise remotely via a simulator or other training device
- "Constructive" - Purely synthetic, computer-generated training elements

For example, a rescue training exercise may include A-10 and HH-60 aircraft and pararescue jumpers operating in a training range (live). They are interacting with a JSTARs crew that is operating in a simulator (virtual) while engaging a computer-generated SA-6 missing site (constructive).

### 3ER's Role in DLVC

There are three main uses for the data produced by a DLVC-enabled exercise:
- Providing situational awareness to the exercise operators (i.e., White Cell)
- Enabling an objective debriefing after an exercise or individual training event
- Allowing for post-exercise and cross-exercise analysis to maximize the training of all participants

3ER enables all three by acting as a central data store, making data searchable, and allowing for access by external visualization or analysis tools.  

A significant challenge in DLVC is data connectivity.  Exercises may take place on non-instrumented ranges or across large geographic areas.  Part of what 3ER provides is multi-layered caching.  Caching local storage devices without sufficient data backhaul capability to store data and share it with the larger system when better connectivity becomes available.  Due to intermittent connectivity, not all data nodes will have the same available data and a node may receive past data at any time in the future. 

### What 3ER Does Not Do

3ER is not the networking infrastructure itself.  It is an application layer running on top of existing networks.  It can, however, span multiple types of networks -- for example, one deployment could span a LAN, cloud, and cellular networks.

Although 3ER can approach real-time with sufficient compute and networking resources, it is not intended to guarantee real-time, low-latency data transfer. 

______

### Documentation

Documentation for the DLVC Service APIs can be found at: [DLVC API Docs](/docs/source_data_api).

The DLVC API proto files can be found in the [messages](/messages) directory.

In order to support multiple languages in the same repo, we group all
source files for each language under a language specific directory inside
the [pkgs](/pkgs) directory.

Language specific documentation is available at links in the table below.

|    Language                |  Twirp  | Protobuf | Integration Tests |
|----------------------------|---------|----------|-------------------|
| [**Golang**](/pkgs/go)     |    ✓    |     ✓    |        ✓          |
| [**Python**](/pkgs/rvnpy)  |    ✓    |     ✓    |        ✓          |
| [**Java**](/pkgs/java)     |         |     ✓    |        ✓          |
| [**Typescript**](/pkgs/ts) |    ✓    |     ✓    |                   |
| [**C++**](/pkgs/cpp)       |         |     ✓    |                   |

For additional information about Protobufs or Twirp, please see the official docs.

|           | Docs | Source Code |
|-----------|------|-------------|
| Protobufs | [https://developers.google.com/protocol-buffers/](https://developers.google.com/protocol-buffers/) | [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) |
| Twirp     | [https://twitchtv.github.io/twirp/docs/intro.html](https://twitchtv.github.io/twirp/docs/intro.html) | [https://github.com/twitchtv/twirp](https://github.com/twitchtv/twirp) |

### Example

The language specific generated code in this repo is provided for 
convenience. The proto files are provided in this repo so you can 
incorporate them into your internal protoc build pipelines. 

For debugging we recommend just curling at the endpoints, 
which requires no installation or additional plugins, for example:

```json
curl \
--request "POST" \
--header "Content-Type:application/json" \
--location "https://api.raven.black/dlvc/PushRawMessages" \
--data @- << EOF

{
  "metadata": {
    "partnerId": "test-partner-id",
    "partnerCertId": "test-partner-cert-id",
    "sourceId": "test-source-id",
    "exerciseId": "test-exercise-id",
    "exerciseName": "test-exercise-name",
    "entityStatePdu": "test-entity-state-pdu",
    "forceColor": "BLUE"
  },
  "userMetadata": [
    {
      "key": "test-key-1",
      "value": "5000000",
      "valueType": "INT",
      "unitType": "BYTES"
    }
  ],
  "messages": [
    {
      "idempotencyKey": "test-idempotency-key",
      "metadata": {
        "forceColor": "RED"
      },
      "userMetadata": [
        {
          "key": "test-key-2",
          "value": "test-value-2",
          "valueType": "STRING"
        }
      ],
      "messageType": "INSTRUCTOR_COMMENT",
      "messageEncoding": {
        "encodingType": "TEXT"
      },
      "position": {
        "latitude": 37.959316,
        "longitude": -122.5258,
        "pitch": 2,
        "yaw": 170,
        "roll": 1,
        "radiusMeters": 4000,
        "resolutionMeters": 1,
        "tfom": "LTE_1_SECOND"
      },
      "createdTime": "2019-08-18T09:03:22.234123098Z",
      "rawMessage": "dGVzdC1yYXctbWVzc2FnZQ=="
    }
  ]
}
EOF
```
_The above url will not resolve yet. We will notify the community when
we've stood up a demo server. During exercises the url will use a locally
namespaced url._

### Releases

The DLVC API follows semantic versioning through git tags, and uses 
Github Releases for release notes and upgrade guides: 
[DLVC API Releases](https://github.com/ravenops/dlvc-api/releases).

### Contributing

Thanks for helping make the DLVC API better!

First, if you have run into a bug, please file an issue. We try to get back to
issue reporters within a day or two. We might be able to help you right away.

If you'd rather not publicly discuss the issue, please email randall@raven.black
and/or security@raven.black.

Issues are also a good place to present experience reports or requests for new
features.

The DLVC API uses github pull requests. Create a new branch, run the test
suite with `make test`, and submit a PR.

We will ask you to confirm the licensing of your contribution. We may ask
you to sign a 
[Contributor License Agreement (CLA)](http://en.wikipedia.org/wiki/Contributor_License_Agreement)
for larger changes.

### Code of Conduct

This project has adopted the [Amazon Open Source Code of Conduct](https://aws.github.io/code-of-conduct).
For more information see the [Code of Conduct FAQ](https://aws.github.io/code-of-conduct-faq) or contact
opensource-codeofconduct@amazon.com with any additional questions or comments.

### License 

This library is licensed under the [Apache 2.0 License](/LICENSE).

_Note:  This repository is hosted under "ravenops".  RavenOps is the parent company of Raven Black._
