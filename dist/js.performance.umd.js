!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.JSPerf=n.JSPerf||{})}(this,function(n){"use strict";function e(n){var e=n+"-"+b;P[n]={start:e},performance.mark(e)}function r(n){var e=n+"-"+w;P[n].stop=e,performance.mark(e)}function t(){for(var n in P){var e=P[n],r=e.start,t=e.stop;try{performance.measure(n,r,t)}catch(n){throw new Error("JS Performance is trying access to marker that does not exist")}}for(var o=[],i=performance.getEntriesByType("measure"),a=Array.isArray(i),u=0,i=a?i:i[Symbol.iterator]();;){var f;if(a){if(u>=i.length)break;f=i[u++]}else{if((u=i.next()).done)break;f=u.value}var c=f;o.push(new T({name:c.name,duration:c.duration}))}return o}function o(){P={},performance.clearMarks(),performance.clearMeasures()}function i(){o(),S=e,M=r}function a(){S=function(){},M=function(){}}function u(){t().map(function(n){return{"Operation name":n.name,"Duration (ms)":n.duration}})}function f(n){}function c(){return"undefined"!=typeof window}function s(){return void 0!==window.performance}function m(){var n="";c()&&(n=s()?"Your browser support the User Timing API. The measures will be precise!":"Your browser does not support the User Timing API. The measures will not be precise"),f(n)}function p(){i()}function d(){a()}function l(){return u()}function h(n){S(n)}function v(n){M(n)}function y(){m()}var b="START",w="STOP",k=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},g=function(){function n(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}}(),T=function(){function n(e){var r=e.name,t=e.duration;k(this,n),this.name=r,this.duration=t}return g(n,[{key:"info",get:function(){return{name:this.name,duratino:this.duration}},set:function(n){var e=n.name,r=n.duration;this.name=e,this.duration=r}}]),n}(),P={},S=function(){},M=function(){};n.startRecording=p,n.stopRecording=d,n.allMeasures=l,n.startMark=h,n.endMark=v,n.checkSupport=y,Object.defineProperty(n,"__esModule",{value:!0})});
