# unleash-proxy-lambda
Simple codebase to deploy Unleash Proxy with AWS Lambda 

## Getting Started

These instructions will help you to run the code locally and deploy the proxy as an aws lambda function.

> **IMPORTANT**: Compatible version for "@unleash/proxy" is >= "0.6.1",

### Prerequisites

Install [serverless](https://serverless.com/framework/docs/getting-started/) framework.

```
# Install the serverless cli
npm install -g serverless
```

Install aws-cli. Please visit AWS [website](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) for installation steps.
Setup your AWS credentials to be able to deploy the function.

```
aws configure
```

Copy .env.example file and rename it to .env


```
cp .env.example .env
```
Fill all environment variables in that file.


### Running locally

> **WARNING**: Ensure that your globally available node version is at least 14 as unleash/proxy has issues with lower versions and serverless offline uses the global node interpreter for running locally

To run the project locally run:

```
npm start
```

## Deployment

To deploy the lambda function run.

```
npm deploy
```
