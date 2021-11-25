import findLastIndex from "./findLastIndex"

const findLast = (collection, predicate, fromIndex) => {
  const index = findLastIndex(collection, predicate, fromIndex)
  return index === -1 ? undefined : collection[index]
} 

export default findLast