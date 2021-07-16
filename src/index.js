// @ts-check

import _ from 'lodash';

import schemas from './schemas/index.js';

export default class Validator {
  constructor() {
    this.customValidators = {
      string: {},
      number: {},
      array: {},
      object: {},
    };
  }

  string() {
    return new schemas.StringSchema(this.customValidators.string);
  }

  number() {
    return new schemas.NumberSchema(this.customValidators.number);
  }

  array() {
    return new schemas.ArraySchema(this.customValidators.array);
  }

  object() {
    return new schemas.ObjectSchema(this.customValidators.object);
  }

  addValidator(schema, name, validate) {
    const schemaName = `${_.upperFirst(schema)}Schema`;
    const isValidatorExists = Boolean(schemas[schemaName]?.validators[name]);

    if (isValidatorExists) {
      throw new Error(`Validator ${name} for ${schema} already exists.`);
    }

    this.customValidators[schema][name] = validate;
  }
}
