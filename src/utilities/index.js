export function allowed () {
  return typeof window !== 'undefined'
}

export function precise () {
  return typeof window.performance !== 'undefined'
}
