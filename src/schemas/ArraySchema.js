// @ts-check

import BaseSchema from './BaseSchema';

export default class ArraySchema extends BaseSchema {
  constructor(customValidators) {
    super({ ...ArraySchema.validators, ...customValidators });
  }
}

ArraySchema.validators = {
  required: Array.isArray,
  sizeof: (array, size) => array.length === size,
};
