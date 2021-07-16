/* eslint-disable class-methods-use-this */
// @ts-check

import schemas from './schemas/index.js';

export default class Validator {
  string() {
    return new schemas.StringSchema();
  }

  number() {
    return new schemas.NumberSchema();
  }

  array() {
    return new schemas.ArraySchema();
  }

  object() {
    return new schemas.ObjectSchema();
  }
}
