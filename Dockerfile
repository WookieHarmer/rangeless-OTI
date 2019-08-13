FROM ubuntu:19.04

LABEL Name="DLVC API CI Test"
LABEL Company="Raven Black"
LABEL Description="Used for CI testing of the DLVC API repo"

RUN touch ~/.bashrc && chmod +x ~/.bashrc
RUN apt-get update && apt-get install -y \
    autoconf automake libtool wget curl make g++ unzip xz-utils git \
    && rm -rf /var/lib/apt/lists/*

ENV GO_VERSION="1.12.6"
#JAVA Version not parameterized into install script
ENV JAVA_VERSION="jdk-11.0.4+11"
#ENV NVM_VERSION="0.34.0"
#ENV NODE_VERSION="12.4.0"


# Go
ARG GO_TARGZ="go${GO_VERSION}.linux-amd64.tar.gz"
RUN wget --progress=bar:force "https://dl.google.com/go/${GO_TARGZ}" && tar -C /usr/local -xzf "${GO_TARGZ}" && rm "${GO_TARGZ}"
ENV GOPATH=/~/go
ENV PATH="${PATH}:/usr/local/go/bin:${GOPATH}/bin"

# Python
RUN apt-get update \
  && apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip \
  && pip3 install -U pytest \
  && pip3 install -U google \
  && pip3 install -U protobuf \
  && rm -rf /var/lib/apt/lists/*

# Java, from: https://github.com/AdoptOpenJDK/openjdk-docker/blob/master/11/jdk/ubuntu/Dockerfile.hotspot.releases.full
ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en' LC_ALL='en_US.UTF-8'

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates locales \
    && echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
    && locale-gen en_US.UTF-8 \
    && rm -rf /var/lib/apt/lists/*

RUN set -eux; \
    ARCH="$(dpkg --print-architecture)"; \
    ESUM='90c33cf3f2ed0bd773f648815de7347e69cfbb3416ef3bf41616ab1c4aa0f5a8'; \
    BINARY_URL='https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.4%2B11/OpenJDK11U-jdk_x64_linux_hotspot_11.0.4_11.tar.gz'; \
    curl -LfsSo /tmp/openjdk.tar.gz ${BINARY_URL}; \
    echo "${ESUM} */tmp/openjdk.tar.gz" | sha256sum -c -; \
    mkdir -p /opt/java/openjdk; \
    cd /opt/java/openjdk; \
    tar -xf /tmp/openjdk.tar.gz --strip-components=1; \
    rm -rf /tmp/openjdk.tar.gz;

ENV JAVA_HOME=/opt/java/openjdk \
    PATH="/opt/java/openjdk/bin:$PATH"

# Setup Gradle, from: https://github.com/keeganwitt/docker-gradle/blob/master/jdk11/Dockerfile
ENV GRADLE_HOME /opt/gradle

RUN set -o errexit -o nounset \
    && echo "Adding gradle user and group" \
    && groupadd --system --gid 1000 gradle \
    && useradd --system --gid gradle --uid 1000 --shell /bin/bash --create-home gradle \
    && mkdir /home/gradle/.gradle \
    && chown --recursive gradle:gradle /home/gradle \
    \
    && echo "Symlinking root Gradle cache to gradle Gradle cache" \
    && ln -s /home/gradle/.gradle /root/.gradle

VOLUME /home/gradle/.gradle

RUN apt-get update \
    && apt-get install --yes --no-install-recommends \
        fontconfig \
        unzip \
        wget \
        \
        bzr \
        git \
        mercurial \
        openssh-client \
        subversion \
    && rm -rf /var/lib/apt/lists/*

ENV GRADLE_VERSION 5.5.1
ARG GRADLE_DOWNLOAD_SHA256=222a03fcf2fcaf3691767ce9549f78ebd4a77e73f9e23a396899fb70b420cd00
RUN set -o errexit -o nounset \
    && echo "Downloading Gradle" \
    && wget --no-verbose --output-document=gradle.zip "https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip" \
    \
    && echo "Checking download hash" \
    && echo "${GRADLE_DOWNLOAD_SHA256} *gradle.zip" | sha256sum --check - \
    \
    && echo "Installing Gradle" \
    && unzip gradle.zip \
    && rm gradle.zip \
    && mv "gradle-${GRADLE_VERSION}" "${GRADLE_HOME}/" \
    && ln --symbolic "${GRADLE_HOME}/bin/gradle" /usr/bin/gradle \
    \
    && echo "Testing Gradle installation" \
    && gradle --version

# Node
#ENV NODE_VERSION="12.4.0"
#ARG NODE_TARXZ="node-v${NODE_VERSION}-linux-x64.tar.xz"
#RUN curl -fsSLO --compressed "https://nodejs.org/dist/v${NODE_VERSION}/${NODE_TARXZ}" && \
#    tar -xJf "${NODE_TARXZ}" -C /usr/local --strip-components=1 --no-same-owner && \
#    rm "${NODE_TARXZ}" && \
#    ln -s /usr/local/bin/node /usr/local/bin/nodejs

# Proto - JavaScript + TypeScript
# This version is current `master` as of 2019-08-02.
#ENV PROTOJS_VERSION="4d490eb"
#RUN npm init --yes \
#    && npm install "protobufjs/protobuf.js#${PROTOJS_VERSION}"
#ENV PATH="$PATH:./node_modules/.bin"
# Run pbjs once so that it installs runtime dependencies not installed through npm.
# https://github.com/protobufjs/protobuf.js/issues/716
#RUN pbjs --version || true

# setup entrypoint
COPY ./entrypoint.sh /

# RVN: make entrypoint executable just in cast it isn't in this repository
RUN chmod a+x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["bash"]