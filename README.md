# BEP20 Tracking using The Graph

## Overview

- BEP20 tracking using [The Graph](https://thegraph.com/)

## The following prerequisites are required to be installed on your system:

- node
- yarn
- truffle
- ganache-cli
- @graphprotocol/graph-cli
  - npm install -g yarn truffle ganache-cli @graphprotocol/graph-cli
- docker
- docker-compose

## Useful links

[The Graph Quick Start](https://thegraph.com/docs/developer/quick-start)

## Execution

### Setup local environment

```sh
ganache-cli -h 0.0.0.0
```

### Run a local Graph Node

```sh
cd graph-node/docker
./setup.sh
docker-compose up
```

### Deploy an example smart contract to Ganache

```sh
truffle compile
truffle migrate
```

Then copy GravatarRegistry contract address.
0xbbD91F5f1141E7d29D6A34c53D0B8ceB90C4693F

### Deploy the subgraph to the local Graph Node

```sh

```

## Contribution

Your contribution is welcome and greatly appreciated. Please contribute your fixes and new features via a pull request.
Pull requests and proposed changes will then go through a code review and once approved will be merged into the project.

If you like my work, please leave me a star :)
