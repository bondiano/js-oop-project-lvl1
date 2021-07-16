// @ts-check

import _ from 'lodash';

import BaseSchema from './BaseSchema';

export default class StringSchema extends BaseSchema {
  constructor() {
    super(StringSchema.validators);

    super.addCheck('isString');
  }
}

StringSchema.validators = {
  isString: _.isString,
  required: (str) => str.length > 0,
  minLength: (str, length) => str.length >= length,
  contains: (str, substr) => str.includes(substr),
};
