import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// rename accordingly, e.g: deployNodejsAppStackProps
export interface stackNameStackProps extends StackProps {}

// rename accordingly, e.g: DeployNodejsAppStack
export class StackNameStack extends Stack {
  constructor(scope: Construct, id: string, props: stackNameStackProps) {
    super(scope, id, props);

    // rename accordingly, e.g: _createCodedeployPipeline()
    this._createName();
  }

  _createName(): void {}
}

