const markers = {}

export function internalStart  (label) {
  markers[`${label}_${START}`] = label
  performance.mark(label)
}

export function internalEnd (label) {
  markers[`${label}_${STOP}`] = label
  performance.mark(label)
}

export function giveMeAllMeasures() {
  const measures = []

  return measures
}
