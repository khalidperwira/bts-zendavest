"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[779],{779:function(t,e,r){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,s=[],o=!0,i=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e),r.d(e,{default:function(){return c}});var s=r(791),o=r(184),i=function(t){var e=t.prevPointer,r=void 0===e?0:e,n=t.nextPointer,a=void 0===n?2:n;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"page",children:[(0,o.jsx)("div",{className:"section left",style:{backgroundImage:"url(https://bts-typescript.khalidperwira.repl.co/src/assets/"+r+".webp)"}}),(0,o.jsx)("div",{className:"section right",children:(0,o.jsx)("div",{className:"frontfaceright",style:{backgroundImage:"url(https://bts-typescript.khalidperwira.repl.co/src/assets/"+a+".webp)"}})})]})})};function c(){var t=a((0,s.useState)(0),2),e=t[0],r=t[1],n=a((0,s.useState)(1),2),c=n[0],l=n[1],u=a((0,s.useState)(2),2),f=u[0],d=u[1],p=function(t){var e=t.pointer,n=void 0===e?1:e,i=t.prevPointer,c=void 0===i?0:i,u=t.nextPointer,f=void 0===u?2:u,p=179,g=a(s.useState(0),2),h=g[0],m=g[1],y=a(s.useState(0),2),v=y[0],b=y[1];function w(t){m(t.targetTouches[0].clientX)}function k(t){b(t.targetTouches[0].clientX)}var x=window.document.styleSheets[0];return x.insertRule("\n      @keyframes flip-".concat(p," {\n        0%   { transform: rotateY(0deg); }\n        100% { transform: rotateY(-").concat(p,"deg); }\n      }"),x.cssRules.length),x.insertRule("\n      @keyframes flip-reverse-".concat(p," {\n        0%   { transform: rotateY(-").concat(p,"deg); }\n        100% { transform: rotateY(0deg); }\n      }"),x.cssRules.length),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"page",children:[(0,o.jsx)("div",{className:"section left",style:{backgroundImage:"url(https://bts-typescript.khalidperwira.repl.co/src/assets/"+n+".webp)"},onClick:function(t){1!==n&&(t.currentTarget.style.animation="flip-reverse-".concat(p," 1s ease-in-out forwards"))},onAnimationEnd:function(t){t.currentTarget.style.animation="none",t.currentTarget.style.transform="rotateY(-".concat(p,"deg)"),r(c-1),l(n-1),d(f-1)},onTouchStart:w,onTouchMove:k,onTouchEnd:function(t){if(h-v<-75){if(1===n)return;t.currentTarget.style.animation="flip-reverse-".concat(p," 1s ease-in-out forwards")}}}),(0,o.jsxs)("div",{className:"section right",onClick:function(t){64!==n&&(t.currentTarget.style.animation="flip-".concat(p," 1s ease-in-out forwards"))},onAnimationEnd:function(t){t.currentTarget.style.animation="none",t.currentTarget.style.transform="rotateY(-".concat(p,"deg)"),t.currentTarget.style.animation="none",r(c+1),l(n+1),d(f+1)},onTouchStart:w,onTouchMove:k,onTouchEnd:function(t){if(h-v>75){if(64===n)return;t.currentTarget.style.animation="flip-".concat(p," 1s ease-in-out forwards")}},children:[(0,o.jsx)("div",{className:"frontfaceright",style:{backgroundImage:"url(https://bts-typescript.khalidperwira.repl.co/src/assets/"+n+".webp)"}}),(0,o.jsx)("div",{className:"backfaceright",style:{backgroundImage:"url(https://bts-typescript.khalidperwira.repl.co/src/assets/"+f+".webp)"}})]})]})})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{nextPointer:f,prevPointer:e}),(0,o.jsx)(p,{pointer:c,nextPointer:f,prevPointer:e})]})}}}]);
//# sourceMappingURL=779.0c2fba71.chunk.js.map