import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface deployNodejsAppStackProps extends StackProps {}

export class DeployNodejsAppStack extends Stack {
  constructor(scope: Construct, id: string, props: deployNodejsAppStackProps) {
    super(scope, id, props);

    this._createCodedeployPipeline();
  }

  _createCodedeployPipeline(): void {}
}

