const symbol = Symbol('a')
const bigInt = BigInt(9007199254740991)
const error = new Error()
const date = new Date()
const regex = /a/
const func = () => void 0
function argsFn() {
  return arguments
}

const stringObj = new String('a')
const numberObj = new Number(0)
const booleanObj = new Boolean(true)

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
const arrayBuffer = new ArrayBuffer(0)

export {
  symbol,
  bigInt,
  error,
  date,
  regex,
  func,
  argsFn,
  stringObj,
  numberObj,
  booleanObj,
  arrayLike,
  arrayBuffer
}