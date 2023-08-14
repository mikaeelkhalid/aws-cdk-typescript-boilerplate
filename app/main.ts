#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { DeployNodejsAppStack } from '../stacks';
import { deployNodejsAppStackProps } from '../config';
import { config } from 'dotenv';

config();

const { nameSpace } = deployNodejsAppStackProps;

const app = new App();

new DeployNodejsAppStack(app, `${nameSpace}-stack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT, // get account from current CLI configuration
    region: process.env.CDK_DEFAULT_REGION, // get region from current CLI configuration
  },
});

