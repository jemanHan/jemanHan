import common from './common';
import local from './local';
import dev from './dev';
import prod from './prod';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'dev') {
  conf = dev;
} else if (phase === 'prod') {
  conf = prod;
}

// __dirname 기반 절대경로 → dev/prod 빌드 모두 안전
const yamlPath = join(__dirname, '..', '..', 'envs', 'config.yaml');

// unknown → Record 타입 변환
const yamlConfig = (yaml.load(readFileSync(yamlPath, 'utf8')) ?? {}) as Record<
  string,
  any
>;

export default () => ({
  ...common,
  ...conf,
  ...yamlConfig,
});
