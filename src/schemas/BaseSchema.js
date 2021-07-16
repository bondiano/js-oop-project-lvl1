/* eslint-disable class-methods-use-this */
// @ts-check

export default class BaseSchema {
  constructor(validators) {
    this.validators = validators;
    this.checks = [];
  }

  setupChecks() {

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
}
