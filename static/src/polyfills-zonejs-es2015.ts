// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames

/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
const isIE = /MSIE|Trident/.test(window.navigator.userAgent);
if (isIE) {
  (window as any).__Zone_enable_cross_context_check = true;
}

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // 45kb-50kb It''s es5
// TODO When zone.js is updated to the >0.11.3 please replace to this line:
// import 'zone.js';  // ~40kb - es2015
// But make sure that all apps in connect app load zone.js from static repo (tasks COSF-1117 TRANF-69 SETF-369 are live)
