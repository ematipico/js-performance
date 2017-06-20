import { START, STOP } from '../utilities/constants'

const labels = {};
const internalPerformance = {
  mark (label) {

  }
}
if (process.env.NODE_ENV !== 'production') {
  // performance =  internalPerformance
}

export function internalStart  (label) {
  labels[label] = {
    start: label +'_'+ START
  }
  performance.mark(label +'_'+ START)
}

export function internalEnd (label) {
  labels[label]['stop'] = label +'_'+ STOP
  performance.mark(label +'_'+ STOP)
}

export function giveMeAllMeasures() {
  for (const label in labels) {
    const originalLabel = labels[label];
    const startLabel = originalLabel.start;
    const stopLabel = originalLabel.stop;
    try {
      performance.measure(label, startLabel, stopLabel);
    } catch (e) {
      throw new Error('JS Performance is trying access to marker that does not exist')
    }




  }
  const measures = performance.getEntitiesByType('measure')


  return measures
}
