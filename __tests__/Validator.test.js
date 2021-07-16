import Validator from '..';

describe('Validator', () => {
  it('string', () => {
    const validator = new Validator();
    const schema = validator.string();

    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(false);

    schema.required();

    expect(schema.isValid('come on baby')).toBe(true);
    expect(schema.isValid('')).toBe(false);

    schema.contains('dimple');

    expect(schema.isValid('simple dimple pop it squish')).toBe(true);
    expect(schema.isValid('pop it squish')).toBe(false);

    schema.minLength(10);

    expect(schema.isValid('simple dimple pop it squish')).toBe(true);
    expect(schema.isValid('squish')).toBe(false);
  });
});
