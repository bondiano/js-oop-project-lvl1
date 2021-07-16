// @ts-check

import BaseSchema from './BaseSchema';

export default class ArraySchema extends BaseSchema {
  constructor() {
    super(ArraySchema.validators);
  }
}

ArraySchema.validators = {
  required: Array.isArray,
  sizeof: (array, size) => array.length === size,
};
