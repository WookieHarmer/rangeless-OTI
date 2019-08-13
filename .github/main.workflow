workflow "CI" {
  on = "pull_request"
  resolves = ["test-go", "test-python", "test-java"]
}

action "test-go" {
   uses = "docker://ravenops/dlvc-ci:ubuntu19.04-go1.11.5-20190812T210754Z-eaf91f8"
   args =  ["bash", "-c", "cd /github/workspace/pkgs/go && go test -mod=vendor -race ./..."]
}

action "test-python" {
  uses = "docker://ravenops/dlvc-ci:ubuntu19.04-go1.11.5-20190812T210754Z-eaf91f8"
  args =  ["pytest", "/github/workspace/pkgs/rvnpy/"]
}

action "test-java" {
  uses = "docker://ravenops/dlvc-ci:ubuntu19.04-go1.11.5-20190812T210754Z-eaf91f8"
  args =  ["bash", "-c", "cd /github/workspace/pkgs/java && ./gradlew test"]
}
