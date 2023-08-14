import { Construct } from 'constructs';

export interface codedeployConstructProps {}

export class codedeployConstruct extends Construct {
  constructor(scope: Construct, id: string, props: codedeployConstructProps) {
    super(scope, id);

    this._createCodedeploy();
  }

  _createCodedeploy(): void {}
}

