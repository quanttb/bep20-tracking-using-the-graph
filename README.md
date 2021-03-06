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
- jq
- docker
- docker-compose

Then run this script:

```sh
git submodule update --init --recursive
```

## Useful links

[The Graph Quick Start](https://thegraph.com/docs/developer/quick-start)
[Create a Subgraph](https://thegraph.com/docs/developer/create-subgraph-hosted)

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
cd bep20-tracking-subgraph
yarn
truffle compile
truffle migrate
```

Then copy TokenplayToken contract address.

### Deploy the subgraph to the local Graph Node

```sh
sed -i -e 's/0x0000000000000000000000000000000000000000/<CONTRACT_ADDRESS>/g' subgraph.yaml
yarn codegen
yarn create-local
yarn deploy-local
```

Now you can access: http://127.0.0.1:8000/subgraphs/name/quanttb/bep20-tracking/graphql

## Contribution

Your contribution is welcome and greatly appreciated. Please contribute your fixes and new features via a pull request.
Pull requests and proposed changes will then go through a code review and once approved will be merged into the project.

If you like my work, please leave me a star :)
