import { START, STOP } from '../utilities/constants'

const markers = {}
const labels = {};
const internalPerformance = {
  mark (label) {

  }
}
if (process.env.NODE_ENV !== 'production') {
  // performance =  internalPerformance
}

export function internalStart  (label) {
  const newLabel = generateUniqueLabel(label);
  markers[newLabel] = label
  performance.mark(label)
}

export function internalEnd (label) {
  markers[`${label}_${STOP}`] = label
  performance.mark(label)
}

export function giveMeAllMeasures() {
  const measures = []

  for (const label in markers) {
    const originalLabel = markers[label];
    const marker = performance.getEntriesByName(originalLabel, 'mark')
    console.log(marker)
  }


  return measures
}
let counter = 1;

function getCounter () {
  counter += 1;
  return counter;
}

export function generateUniqueLabel (label) {
  const uniqueLabel = label + '_' + getCounter()
  if (!labels[uniqueLabel]) {
    labels[uniqueLabel] = label;
    return uniqueLabel;
  }  else {
    return generateUniqueLabel(uniqueLabel);
  }
}
