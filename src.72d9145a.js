parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y5dV":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("../node_modules/modern-normalize"),require("./sass/main.scss");const e=document.body,t=document.querySelectorAll(".slide"),c=document.querySelector(".left-arrow"),l=document.querySelector(".right-arrow");let o=JSON.parse(localStorage.getItem("activeSlide"))||0;function r(){(o+=1)>t.length-1&&(o=0),s(),i(),localStorage.setItem("activeSlide",o)}function a(){(o-=1)<0&&(o=t.length-1),s(),i(),localStorage.setItem("activeSlide",o)}function i(){t.forEach(e=>e.classList.remove("slide-active")),t[o].classList.add("slide-active")}function s(){e.style.backgroundImage=t[o].style.backgroundImage}i(),s(),l.addEventListener("click",r),c.addEventListener("click",a);
},{"../node_modules/modern-normalize":"Y5dV","./sass/main.scss":"Y5dV"}]},{},["Focm"], null)
//# sourceMappingURL=/custom-slider/src.72d9145a.js.map