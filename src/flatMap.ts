import baseFlatten from './_baseFlatten'

function flatMap<T>(array: T[], callback: Function) {
  return baseFlatten<T>(array, callback)
}

export default flatMap
