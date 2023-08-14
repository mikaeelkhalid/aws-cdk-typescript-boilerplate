import { Construct } from 'constructs';

// rename accordingly, e.g: codedeployConstructProps
export interface constructNameProps {}

// rename accordingly, e.g: codedeployConstruct
export class cconstructNameConstruct extends Construct {
  constructor(scope: Construct, id: string, props: constructNameProps) {
    super(scope, id);

    // rename accordingly, e.g: _createCodedeploy()
    this._createConstructName();
  }

  _createConstructName(): void {}
}

