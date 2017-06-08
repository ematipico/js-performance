import { log } from './utilities/logger'
import { allowed, precise } from 'utilities'
import { start, end } from './engine'
/**
 * [mark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
export function startMark (labelToMarkWith) {
  if (allowed()) {
    if (precise()) {
      start(labelToMarkWith)
    }
  }
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
  if (allowed()) {
    if (precise()) {
      end(labelToMarkWith)
    }
  }
  if (process.NODE_ENV.env !== 'production') {
    return labelToMarkWith
  }
}

export function checkSupport () {
  let result = ''
  if (allowed()) {
    if (precise()) {
      result = 'Your browser support the User Timing API. The measures will be precise!'
    } else {
      result = 'Your browser does not support the User Timing API. The measures will not be precise'
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    return result
  } else {
    log(result)
  }
}
