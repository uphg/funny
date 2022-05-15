import isArrayLike from './isArrayLike'
import type { ArrayLike, Key } from './internal/interfaces'

// 对数组或对象的每一项执行一次给定的函数
function each<T>(
  obj: { [key: Key]: T } | ArrayLike<T> | Array<T>,
  callback: (
    currentValue: T,
    index: number | string,
    obj?: { [key: Key]: T } | ArrayLike<T> | Array<T>
  ) => unknown
) {
  if (isArrayLike(obj)) {
    const length = obj.length
    for (let i = 0; i < length; i++) {
      callback((obj as ArrayLike<T>)[i], i, obj)
    }
  } else {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      callback((obj as { [key: Key]: T })[key], key, obj)
    }
  }

  return obj
}

export default each
