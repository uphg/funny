import now from './now'

export default function throttle(
  func: (...args: unknown[]) => unknown,
  wait: number
) {
  let timerId: null | number | NodeJS.Timeout = null,
    context: unknown,
    args: unknown[] | null,
    result: unknown

  let previous = 0

  const later = function() {
    clearTimeout(timerId as number)

    previous = now()
    timerId = null
    result = func.apply(context, args as unknown[])

    if (!timerId) context = args = null
  }

  const throttled = function(..._args: any) {
    const _now = now()
    const remaining = wait - (_now - previous)
    context = this
    args = _args
    // remaining > wait，客户端系统时间被调整过，马上执行 func 函数
    if (remaining <= 0 || remaining > wait) {
      if (timerId) {
        clearTimeout(timerId as number)
        timerId = null
      }

      previous = _now
      result = func.apply(context, args as unknown[])

      if (!timerId) context = args = null
    } else if (!timerId) {
      timerId = setTimeout(later, remaining)
    }

    return result
  }

  return throttled
}
