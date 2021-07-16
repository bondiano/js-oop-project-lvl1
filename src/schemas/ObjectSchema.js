import _ from 'lodash';

import BaseSchema from './BaseSchema.js';

export default class ObjectSchema extends BaseSchema {
  constructor() {
    super(ObjectSchema.validators);
  }

  shape(schemas) {
    const validate = (data) => {
      const result = Object.entries(schemas).every(([key, schema]) => {
        const value = data[key];
        return schema.isValid(value);
      });

      return result;
    };

    this.addCheck('withShape', validate);
    return this;
  }
}

ObjectSchema.validators = {
  required: _.isObject,
  withShape: (value, validate) => validate(value),
};
