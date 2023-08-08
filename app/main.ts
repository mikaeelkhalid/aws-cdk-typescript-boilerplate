#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { StackName } from '../stacks';

const app = new App();

new StackName(app, 'stack-name', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT, // get account from current CLI configuration
    region: process.env.CDK_DEFAULT_REGION, // get region from current CLI configuration
  },
});

