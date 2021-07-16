/* eslint-disable import/prefer-default-export */

export const setupChecks = (Schema) => {
  Object.keys(Schema.validators).forEach((name) => {
    Object.defineProperty(Schema.prototype, name, {
      value(...args) {
        this.addCheck(name, ...args);
        return this;
      },
      enumerable: true,
      configurable: true,
    });
  });
};
