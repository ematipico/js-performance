import { start, end, recordingStart, recordingStop } from './engine'
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

/**
 * [mark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
export function startMark (labelToMarkWith) {
  start(labelToMarkWith)
  if (process.NODE_ENV.env !== 'production') {
    return labelToMarkWith
  }
}

/**
 * [endMark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
export function endMark (labelToMarkWith) {
  end(labelToMarkWith)
  if (process.NODE_ENV.env !== 'production') {
    return labelToMarkWith
  }
}

export function checkSupport () {
  support()
}
