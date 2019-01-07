import { DecimalPart, SumFloat } from '../src/index.js'

test('DecimalPart', () => {
  expect(DecimalPart(123)).toEqual(0)
  expect(DecimalPart(123.1)).toEqual(1)
  expect(DecimalPart(123.01)).toEqual(2)
})

test('SumFloat', () => {
  expect(SumFloat(0.1, 0.2)).toEqual(0.3)
})
