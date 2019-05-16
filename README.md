# Serverless Examples

## Introduction

This project contains all of the Lambda functions used by the Serverless Examples, all written in TypeScript. 

The functions are structured using the Serverless framework, which is a provider-agnostic way of structuring lambda functions so that the infrastructure can easily be deployed across different cloud providers (including event handling). It also provides useful capabilities like headless Chrome support through plugins and bundle's `node_modules` appropriately for AWS deployment.

## Setting Up

Just install the Node.js dependencies like any other project:

```sh
npm install
```

Copy the `.env.example` file to `.env` and fill out the relevant AWS environment variables.
The AWS keys can be found __somewhere__ under the deploy IAM user.

You may also choose to install the Serverless tool globally via `npm install -g serverless`.
This is not required unless you're doing something beyond running and deploying functions.
You also don't have to login to Serverless, which the Serverless documentation may mention as a step).

## Running

```sh
npm run severless-example-1 # or any other function name
```

To run the tests manually using Serverless (which is all these scripts are doing), do:

```sh
serverless invoke local -f severless-example-1 # or any other function
```

## Deploying

All functions will be automatically deployed by continuous integration. Open a PR to
update/add functions and they'll be deployed once merged.
