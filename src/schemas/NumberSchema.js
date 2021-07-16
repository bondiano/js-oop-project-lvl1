// @ts-check

import _ from 'lodash';

import { setupChecks } from './helpers.js';

import BaseSchema from './BaseSchema';

export default class NumberSchema extends BaseSchema {
  constructor() {
    super(NumberSchema.validators);

    setupChecks(NumberSchema);
  }
}

NumberSchema.validators = {
  required: _.isNumber,
  positive: (value) => value > 0,
  range: (value, min, max) => value >= min && value <= max,
};
