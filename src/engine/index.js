import { START, STOP } from '../utilities/constants'
import { internalStart, internalEnd, giveMeAllMeasures } from './markerGenerator'

export function getStartLabel (label) {
  return `${label}_${START}`
}

export let start = () => {}
export let stop = () => {}


export function recordingStart () {
  start = internalStart;
  stop = internalEnd;
}

export function recordingStop () {
  start = () => {};
  stop = () => {};
}

export function getMeasures () {
  return giveMeAllMeasures()
}

export function getMeasure (label) {
  performance.getEntriesByName('', 'mark')
}
