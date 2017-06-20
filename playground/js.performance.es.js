var START = 'START';
var STOP = 'STOP';

var labels = {};


function internalStart(label) {
  labels[label] = {
    start: label + '_' + START
  };
  performance.mark(label + '_' + START);
}

function internalEnd(label) {
  labels[label]['stop'] = label + '_' + STOP;
  performance.mark(label + '_' + STOP);
}

function giveMeAllMeasures() {
  for (var label in labels) {
    var originalLabel = labels[label];
    var startLabel = originalLabel.start;
    var stopLabel = originalLabel.stop;
    try {
      performance.measure(label, startLabel, stopLabel);
    } catch (e) {
      throw new Error('JS Performance is trying access to marker that does not exist');
    }
  }
  var measures = performance.getEntitiesByType('measure');

  return measures;
}

var start = function start() {};
var stop = function stop() {};

function recordingStart() {
  start = internalStart;
  stop = internalEnd;
}

function recordingStop() {
  start = function start() {};
  stop = function stop() {};
}

function getMeasures() {
  return giveMeAllMeasures();
}

function allowed() {
  return typeof window !== 'undefined';
}

function precise() {
  return typeof window.performance !== 'undefined';
}
function support() {
  var result = '';
  if (allowed()) {
    if (precise()) {
      result = 'Your browser support the User Timing API. The measures will be precise!';
    } else {
      result = 'Your browser does not support the User Timing API. The measures will not be precise';
    }
  }
  {
    return result;
  }
}

function startRecording() {
  recordingStart();
}

/**
 *
 */
function stopRecording() {
  recordingStop();
}

function allMeasures() {
  return getMeasures();
}

/**
 * [mark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
function startMark(labelToMarkWith) {
  start(labelToMarkWith);
  {
    return labelToMarkWith;
  }
}

/**
 * [endMark description]
 * @param  {[type]} labelToMarkWith [description]
 * @return {[type]}                 [description]
 */
function endMark(labelToMarkWith) {
  stop(labelToMarkWith);
  {
    return labelToMarkWith;
  }
}

function checkSupport() {
  support();
}

export { startRecording, stopRecording, allMeasures, startMark, endMark, checkSupport };
//# sourceMappingURL=js.performance.es.js.map
