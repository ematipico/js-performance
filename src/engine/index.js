import { START, STOP } from '../utilities/constants'

const markers = {}

export function getStartLabel (label) {
  return `${label}_${START}`
}

export function allowed () {
  return typeof window !== 'undefined'
}

export function precise () {
  return typeof window.performance !== 'undefined'
}

export function start (label) {
  markers[`${label}_${START}`] = label
  performance.mark(label)
}

export function end (label) {
  markers[`${label}_${STOP}`] = label
  performance.mark(label)
}

export function getMeasures () {

}

export function getMeasure (label) {
  performance.getEntriesByName('', 'mark')
}
