var STOP = 'STOP';

var markers = {};
var labels = {};


function internalStart(label) {
  var newLabel = generateUniqueLabel(label);
  markers[newLabel] = label;
  performance.mark(label);
}

function internalEnd(label) {
  markers[label + '_' + STOP] = label;
  performance.mark(label);
}

function giveMeAllMeasures() {
  var measures = [];

  for (var label in markers) {
    var originalLabel = markers[label];
    var marker = performance.getEntriesByName(originalLabel, 'mark');
    console.log(marker);
  }

  return measures;
}
var counter = 1;

function getCounter() {
  counter += 1;
  return counter;
}

function generateUniqueLabel(label) {
  var uniqueLabel = label + '_' + getCounter();
  if (!labels[uniqueLabel]) {
    labels[uniqueLabel] = label;
    return uniqueLabel;
  } else {
    return generateUniqueLabel(uniqueLabel);
  }
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
  getMeasures();
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
