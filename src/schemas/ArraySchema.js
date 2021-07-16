// @ts-check

import { setupChecks } from './helpers.js';

import BaseSchema from './BaseSchema';

export default class ArraySchema extends BaseSchema {
  constructor() {
    super(ArraySchema.validators);

    setupChecks(ArraySchema);
  }
}

ArraySchema.validators = {
  required: Array.isArray,
  sizeof: (array, size) => array.length === size,
};
