import { DecimalPart, SumFloat } from '../src/index.js'

test('DecimalPart', () => {
  expect(DecimalPart(123)).toEqual(0)
  expect(DecimalPart(123.1)).toEqual(1)
  expect(DecimalPart(123.01)).toEqual(2)
  expect(DecimalPart(-123)).toEqual(0)
  expect(DecimalPart(-123.1)).toEqual(1)
  expect(DecimalPart(-123.01)).toEqual(2)

  expect(DecimalPart('123')).toEqual(0)
  expect(DecimalPart('123.1')).toEqual(1)
  expect(DecimalPart('123.01')).toEqual(2)
  expect(DecimalPart('-123')).toEqual(0)
  expect(DecimalPart('-123.1')).toEqual(1)
  expect(DecimalPart('-123.01')).toEqual(2)

  expect(() => {
    DecimalPart({})
  }).toThrow(Error)

  expect(() => {
    DecimalPart(null)
  }).toThrow(Error)

  expect(() => {
    DecimalPart('')
  }).toThrow(Error)

  expect(() => {
    DecimalPart()
  }).toThrow(Error)
})

test('SumFloat', () => {
  expect(SumFloat(0.1, 0.2)).toEqual(0.3)
  expect(SumFloat(-0.1, -0.2)).toEqual(-0.3)

  expect(SumFloat('0.1', '0.2')).toEqual(0.3)
  expect(SumFloat('-0.1', '-0.2')).toEqual(-0.3)

  expect(SumFloat(1, 2)).toEqual(3)
  expect(SumFloat('1', '2')).toEqual(3)
  expect(SumFloat(-1, -2)).toEqual(-3)
  expect(SumFloat('-1', '-2')).toEqual(-3)
})
