import { jest, test, beforeEach, expect } from '@jest/globals';

const getPathToIndex = () => `${process.cwd()}/index.js`;

let spy;

beforeEach(() => {
  spy = jest.spyOn(console, 'log');
});

test('Вывод решения:', async () => {
  const expected = 'Hello, World!';
  await import(getPathToIndex());

  const output = spy.mock.calls.map((args) => args.join(' ')).join('\n');
  expect(output).toEqual(expected);
});
