export function DecimalPart(num1) {
  let num2
  if (typeof num1 === 'string') {
    num2 = parseFloat(num1)
  } else if (typeof num !== 'number') {
    num2 = num1
  }
  if (isNaN(num2)) {
    throw Error(`必须可转换成数字: ${num1}`)
  }
  const part2 = (num2 + '').split('.')[1]
  return part2 ? part2.length : 0
}

export function SumFloat(aa1, bb1) {
  const len1 = DecimalPart(aa1)
  const len2 = DecimalPart(bb1)
  const len3 = Math.max(len1, len2)
  if (len3) {
    const cc1 = Math.pow(10, len3)
    return (aa1 * cc1 + bb1 * cc1) / cc1
  } else {
    return aa1 + bb1
  }
}
