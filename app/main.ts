#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { StackNameStack } from '../stacks'; // after renaming stack in stacks, import here
import { stackNameConfigProps } from '../config'; // after renaming in config index.ts, import here
import { config } from 'dotenv';

config();

// rename to your above import config
const { nameSpace } = stackNameConfigProps;

const app = new App();

// rename to your above import stack
new StackNameStack(app, `${nameSpace}-stack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT, // get account from current CLI configuration
    region: process.env.CDK_DEFAULT_REGION, // get region from current CLI configuration
  },
});

