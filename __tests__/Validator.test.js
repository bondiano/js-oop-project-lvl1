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

  it('number', () => {
    const validator = new Validator();
    const schema = validator.number();

    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(5)).toBe(true);

    schema.required();

    expect(schema.isValid(7)).toBe(true);
    expect(schema.isValid(null)).toBe(false);

    schema.positive();

    expect(schema.isValid(10)).toBe(true);
    expect(schema.isValid(-10)).toBe(false);

    schema.range(-5, 5);

    expect(schema.isValid(3)).toBe(true);
    expect(schema.isValid(6)).toBe(false);

    expect(validator.number().positive().isValid(null)).toBe(true);
  });

  it('array', () => {
    const validator = new Validator();
    const schema = validator.array();

    schema.required();

    expect(schema.isValid([])).toBe(true);
    expect(schema.isValid(['hexlet'])).toBe(true);
    expect(schema.isValid(null)).toBe(false);

    schema.sizeof(2);

    expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true);
    expect(schema.isValid(['hexlet'])).toBe(false);
  });

  it('object', () => {
    const validator = new Validator();
    const schema = validator.object();

    expect(schema.isValid(null)).toBe(true);

    schema.required();

    expect(schema.isValid({})).toBe(true);
    expect(schema.isValid(null)).toBe(false);

    schema.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
    expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
    expect(schema.isValid({ name: '', age: null })).toBe(false);
    expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
  });

  it('addValidator', () => {
    const validator = new Validator();
    const startsWith = (value, start) => value.startsWith(start);
    validator.addValidator('string', 'startWith', startsWith);

    const schema = validator.string().test('startWith', 'H');
    expect(schema.isValid('Hexlet')).toBe(true);
    expect(schema.isValid('exlet')).toBe(false);

    const min = (value, minimum) => value >= minimum;
    validator.addValidator('number', 'min', min);

    const minSchema = validator.number().test('min', 5);
    expect(minSchema.isValid(6)).toBe(true);
    expect(minSchema.isValid(4)).toBe(false);
  });
});
