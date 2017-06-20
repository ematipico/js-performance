import { recordingStart, recordingStop, getMeasures, start, stop } from './engine'
import { support } from './utilities'

/**
 *
 */
export function startRecording () {
  recordingStart()
}

/**
 *
 */
export function stopRecording () {
  recordingStop()
}

export function allMeasures () {
  getMeasures()
}

/**
 * [mark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
export function startMark (labelToMarkWith) {
  start(labelToMarkWith)
  if (process.env.NODE_ENV !== 'production') {
    return labelToMarkWith
  }
}

/**
 * [endMark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
export function endMark (labelToMarkWith) {
  stop(labelToMarkWith)
  if (process.env.NODE_ENV !== 'production') {
    return labelToMarkWith
  }
}

export function checkSupport () {
  support()
}
