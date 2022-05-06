'use strict';

import * as dotenv from 'dotenv';
import _ from 'lodash';

import development from './development.js';

import { createReadOnlyProxy } from '../src/utils/common.js';

dotenv.config();

const all = {
  env: process.env.NODE_ENV || 'development',

  debug: false,

  // Server port
  port: process.env.PORT || 9000,

  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
};

const environments = {
  development
};

const allMerged = _.merge(
  all,
  environments[all.env] || {});

const proxy = createReadOnlyProxy(allMerged);
export default proxy;
