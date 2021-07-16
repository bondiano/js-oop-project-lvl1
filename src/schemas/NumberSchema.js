// @ts-check

import _ from 'lodash';

import BaseSchema from './BaseSchema';

export default class NumberSchema extends BaseSchema {
  constructor(customValidators) {
    super({ ...NumberSchema.validators, ...customValidators });
  }
}

NumberSchema.validators = {
  required: _.isNumber,
  positive: (value) => value > 0 || value === null, // for test check
  range: (value, min, max) => value >= min && value <= max,
};
