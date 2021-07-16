export default class BaseSchema {
  constructor(validators) {
    this.validators = validators;
    this.checks = [];

    const Schema = this.constructor;
    Object.keys(validators).forEach((name) => {
      Object.defineProperty(Schema.prototype, name, {
        value(...args) {
          this.addCheck(name, ...args);
          return this;
        },
        enumerable: true,
        configurable: true,
      });
    });
  }

  addCheck(name, ...args) {
    const validate = this.validators[name];

    this.checks.push({
      name,
      validate,
      args,
    });
  }

  isValid(value) {
    return this.checks.every((check) => {
      const { validate, args } = check;
      return validate(value, ...args);
    });
  }

  test(name, ...args) {
    this.addCheck(name, ...args);
    return this;
  }
}
