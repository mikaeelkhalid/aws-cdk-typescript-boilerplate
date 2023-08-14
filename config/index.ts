import { parse } from 'yaml';
import { readFileSync } from 'fs';
import { join } from 'path';

const configFilePath = join(__dirname, 'config.yaml');

const readConfigFile = readFileSync(configFilePath, 'utf8');

const config = parse(readConfigFile);

const { nameSpace } = config;

export const deployNodejsAppStackProps = {
  nameSpace,
};
