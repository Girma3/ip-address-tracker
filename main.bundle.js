/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/league-spartan-v11-latin-regular.woff2 */ "./src/assets/fonts/league-spartan-v11-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-hamburger.svg */ "./src/assets/images/icon-hamburger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-close.svg */ "./src/assets/images/icon-close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-angle-left.svg */ "./src/assets/images/icon-angle-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-angle-right.svg */ "./src/assets/images/icon-angle-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* league-spartan-regular - latin */
@font-face {
  font-display: swap;
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
    format("woff2");
}
* {
  margin: 0;
}
body {
  min-height: 100vh;
  max-width: 100vw;
  font-family: "League Spartan";
}
ul {
  list-style: none;

  transition: all ease-in-out 500ms;
  border: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
.part-one,
.part-two {
  display: grid;
}
header {
  position: relative;
  height: 46vh;
}
.nav-holder {
  padding: 1rem;
}
[data-spread="false"] {
  display: none;
}
[data-spread="true"] {
  display: grid;
  grid-template-columns: 3rem 4fr;
  justify-self: center;
}
.close-nav-btn,
.open-nav-btn {
  width: 1.5rem;
  aspect-ratio: 1;
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.open-nav-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-color: inherit;
}

.close-nav-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.close-nav-style {
  background-color: white;
}
.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.links > li > a::after {
  display: block;
  content: "";
  border-bottom: solid 2px #ffffff;
  padding-bottom: 0.3rem;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.links > li > a:hover::after {
  padding-bottom: 0.3rem;
  transform: scaleX(0.6);
}
.desktop-logo {
  display: none;
}
.mobile-logo {
  text-align: center;
  padding-top: 0.4rem;
}
/* slider image as hero */
.image-holder {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 46vh;

  transition: opacity ease-in-out 2s;
}

/* animation  style */
img,
p,
h1 {
  transition: all ease-in-out 3s;
}
@keyframes zoomin {
  0% {
    opacity: 0.7;
    background-color: yellow;
  }
  50% {
    opacity: 0.9;
    background-color: yellow;
  }

  100% {
    opacity: 1;
    border-radius: 4%;
    transform: scale(1);
  }
}
/*  */
.image-holder > img {
  width: 100%;
  height: 100%;
}
.slider-btns {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 54%;
  border: 0;
}
.next-btn,
.prev-btn {
  opacity: 1;
  padding: 1.2rem 1.5rem 1.2rem 1.5rem;
  cursor: pointer;
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  border: 0;
}
.prev-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.next-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.next-btn:hover,
.prev-btn:hover {
  opacity: 0.7;
}
.about-product {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}
h1 {
  font-size: 2.5rem;
  word-wrap: break-word;
}
p {
  margin-top: 12px;
  color: hsl(0, 0%, 27%);
  word-spacing: 0.1rem;
  line-height: 1rem;
  word-wrap: break-word;
  letter-spacing: 1px;
}
.buy-btn-holder {
  width: 100%;
  margin-top: 12px;
}
.shop-btn {
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.6rem;
  letter-spacing: 0.5rem;
  padding: 1rem 1rem 1rem 0;
  background-color: inherit;
}
.shop-btn:hover {
  opacity: 0.6;
}
/* part two(3 columns grid style */
.show-furniture {
  display: block;
  width: 100%;
}
.about-furniture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}
.furniture-title {
  letter-spacing: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
}

.dark-mask {
  background-color: transparent;
  margin: 0;
}
.black-mask {
  background-color: rgba(0, 0, 0, 0.4);
}
@media (min-width: 900px) {
  body {
    background-color: rgb(255, 255, 255);
  }
  .part-one {
    grid-template-columns: 1.2fr 1fr;
    height: 65vh;
  }
  header {
    height: 65vh;
  }
  .nav-holder {
    background-color: inherit;
  }
  .first-nav {
    display: none;
  }
  .second-nav {
    display: flex;
    gap: 1.5rem;
    padding: 1.3rem;
  }
  .links {
    gap: 2rem;
    align-items: end;
    font-size: 0.8rem;
    color: white;
    font-weight: 600;
    margin-top: 0.2rem;
  }
  .mobile.log {
    display: none;
  }
  .desktop-logo {
    display: block;
    padding: 0.2rem 0.5rem 0 0;
    margin-bottom: 0.2rem;
  }
  .close-nav-btn {
    display: none;
  }
  .image-holder {
    height: 65vh;
  }
  .slider-btns {
    left: 100%;
    padding: 0;
  }
  /* part two style */
  .part-two {
    grid-template-columns: 1fr 2fr 1fr;
  }
  .about-product {
    padding: 2rem;
  }
  .shop-btn {
    padding: 1rem;
  }
  .show-furniture {
    width: 100%;
    height: 280px;
  }
  .black-mask {
    background-color: transparent;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;EAChB;mBACiB;AACnB;AACA;EACE,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;EACE,gBAAgB;;EAEhB,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA;;EAEE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,oBAAoB;AACtB;AACA;;EAEE,aAAa;EACb,eAAe;EACf,SAAS;EACT,4BAA4B;EAC5B,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,yDAAyD;EACzD,yBAAyB;AAC3B;;AAEA;EACE,yDAAqD;AACvD;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,gCAAgC;EAChC,sBAAsB;EACtB,oBAAoB;EACpB,uCAAuC;AACzC;AACA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,WAAW;EACX,YAAY;;EAEZ,kCAAkC;AACpC;;AAEA,qBAAqB;AACrB;;;EAGE,8BAA8B;AAChC;AACA;EACE;IACE,YAAY;IACZ,wBAAwB;EAC1B;EACA;IACE,YAAY;IACZ,wBAAwB;EAC1B;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,mBAAmB;EACrB;AACF;AACA,KAAK;AACL;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,SAAS;EACT,SAAS;AACX;AACA;;EAEE,UAAU;EACV,oCAAoC;EACpC,eAAe;EACf,4BAA4B;EAC5B,uBAAuB;EACvB,2BAA2B;EAC3B,SAAS;AACX;AACA;EACE,yDAA0D;AAC5D;AACA;EACE,yDAA2D;AAC7D;AACA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;AACA,kCAAkC;AAClC;EACE,cAAc;EACd,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,SAAS;AACX;AACA;EACE,oCAAoC;AACtC;AACA;EACE;IACE,oCAAoC;EACtC;EACA;IACE,gCAAgC;IAChC,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,WAAW;IACX,eAAe;EACjB;EACA;IACE,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,0BAA0B;IAC1B,qBAAqB;EACvB;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA,mBAAmB;EACnB;IACE,kCAAkC;EACpC;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,aAAa;EACf;EACA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":["/* league-spartan-regular - latin */\n@font-face {\n  font-display: swap;\n  font-family: \"League Spartan\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./assets/fonts/league-spartan-v11-latin-regular.woff2\")\n    format(\"woff2\");\n}\n* {\n  margin: 0;\n}\nbody {\n  min-height: 100vh;\n  max-width: 100vw;\n  font-family: \"League Spartan\";\n}\nul {\n  list-style: none;\n\n  transition: all ease-in-out 500ms;\n  border: none;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n.part-one,\n.part-two {\n  display: grid;\n}\nheader {\n  position: relative;\n  height: 46vh;\n}\n.nav-holder {\n  padding: 1rem;\n}\n[data-spread=\"false\"] {\n  display: none;\n}\n[data-spread=\"true\"] {\n  display: grid;\n  grid-template-columns: 3rem 4fr;\n  justify-self: center;\n}\n.close-nav-btn,\n.open-nav-btn {\n  width: 1.5rem;\n  aspect-ratio: 1;\n  border: 0;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.open-nav-btn {\n  background-image: url(./assets/images/icon-hamburger.svg);\n  background-color: inherit;\n}\n\n.close-nav-btn {\n  background-image: url(./assets/images/icon-close.svg);\n}\n.close-nav-style {\n  background-color: white;\n}\n.links {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n\n.links > li > a::after {\n  display: block;\n  content: \"\";\n  border-bottom: solid 2px #ffffff;\n  padding-bottom: 0.3rem;\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n}\n.links > li > a:hover::after {\n  padding-bottom: 0.3rem;\n  transform: scaleX(0.6);\n}\n.desktop-logo {\n  display: none;\n}\n.mobile-logo {\n  text-align: center;\n  padding-top: 0.4rem;\n}\n/* slider image as hero */\n.image-holder {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 46vh;\n\n  transition: opacity ease-in-out 2s;\n}\n\n/* animation  style */\nimg,\np,\nh1 {\n  transition: all ease-in-out 3s;\n}\n@keyframes zoomin {\n  0% {\n    opacity: 0.7;\n    background-color: yellow;\n  }\n  50% {\n    opacity: 0.9;\n    background-color: yellow;\n  }\n\n  100% {\n    opacity: 1;\n    border-radius: 4%;\n    transform: scale(1);\n  }\n}\n/*  */\n.image-holder > img {\n  width: 100%;\n  height: 100%;\n}\n.slider-btns {\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  left: 54%;\n  border: 0;\n}\n.next-btn,\n.prev-btn {\n  opacity: 1;\n  padding: 1.2rem 1.5rem 1.2rem 1.5rem;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-color: black;\n  background-position: center;\n  border: 0;\n}\n.prev-btn {\n  background-image: url(./assets/images/icon-angle-left.svg);\n}\n.next-btn {\n  background-image: url(./assets/images/icon-angle-right.svg);\n}\n.next-btn:hover,\n.prev-btn:hover {\n  opacity: 0.7;\n}\n.about-product {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem;\n}\nh1 {\n  font-size: 2.5rem;\n  word-wrap: break-word;\n}\np {\n  margin-top: 12px;\n  color: hsl(0, 0%, 27%);\n  word-spacing: 0.1rem;\n  line-height: 1rem;\n  word-wrap: break-word;\n  letter-spacing: 1px;\n}\n.buy-btn-holder {\n  width: 100%;\n  margin-top: 12px;\n}\n.shop-btn {\n  border: 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.6rem;\n  letter-spacing: 0.5rem;\n  padding: 1rem 1rem 1rem 0;\n  background-color: inherit;\n}\n.shop-btn:hover {\n  opacity: 0.6;\n}\n/* part two(3 columns grid style */\n.show-furniture {\n  display: block;\n  width: 100%;\n}\n.about-furniture {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem;\n}\n.furniture-title {\n  letter-spacing: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.dark-mask {\n  background-color: transparent;\n  margin: 0;\n}\n.black-mask {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n@media (min-width: 900px) {\n  body {\n    background-color: rgb(255, 255, 255);\n  }\n  .part-one {\n    grid-template-columns: 1.2fr 1fr;\n    height: 65vh;\n  }\n  header {\n    height: 65vh;\n  }\n  .nav-holder {\n    background-color: inherit;\n  }\n  .first-nav {\n    display: none;\n  }\n  .second-nav {\n    display: flex;\n    gap: 1.5rem;\n    padding: 1.3rem;\n  }\n  .links {\n    gap: 2rem;\n    align-items: end;\n    font-size: 0.8rem;\n    color: white;\n    font-weight: 600;\n    margin-top: 0.2rem;\n  }\n  .mobile.log {\n    display: none;\n  }\n  .desktop-logo {\n    display: block;\n    padding: 0.2rem 0.5rem 0 0;\n    margin-bottom: 0.2rem;\n  }\n  .close-nav-btn {\n    display: none;\n  }\n  .image-holder {\n    height: 65vh;\n  }\n  .slider-btns {\n    left: 100%;\n    padding: 0;\n  }\n  /* part two style */\n  .part-two {\n    grid-template-columns: 1fr 2fr 1fr;\n  }\n  .about-product {\n    padding: 2rem;\n  }\n  .shop-btn {\n    padding: 1rem;\n  }\n  .show-furniture {\n    width: 100%;\n    height: 280px;\n  }\n  .black-mask {\n    background-color: transparent;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/room.js":
/*!*********************!*\
  !*** ./src/room.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendElement: () => (/* binding */ appendElement),
/* harmony export */   product: () => (/* binding */ product),
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _assets_images_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/desktop-image-hero-1.jpg */ "./src/assets/images/desktop-image-hero-1.jpg");
/* harmony import */ var _assets_images_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/desktop-image-hero-2.jpg */ "./src/assets/images/desktop-image-hero-2.jpg");
/* harmony import */ var _assets_images_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/desktop-image-hero-3.jpg */ "./src/assets/images/desktop-image-hero-3.jpg");
/* harmony import */ var _assets_images_mobile_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/mobile-image-hero-1.jpg */ "./src/assets/images/mobile-image-hero-1.jpg");
/* harmony import */ var _assets_images_mobile_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/mobile-image-hero-2.jpg */ "./src/assets/images/mobile-image-hero-2.jpg");
/* harmony import */ var _assets_images_mobile_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/mobile-image-hero-3.jpg */ "./src/assets/images/mobile-image-hero-3.jpg");







const firstTitle = 'Discover innovative ways to decorate'
const secondTitle = 'We are available all acress the globe'
const thirdTitle = 'Manufactured with the best materials'

const firstArticle = `
                    we provide unamatched quality,comfort and style for property
                    owners across the country.Our experts combine form and function in 
                    bringing your vision to life.Create a room in your own style with 
                    our collection and make your property a reflection of you and what you love.
                   `
const secondArticle = `
                    With stores all over the world.it's easy for you to find furniture for
                    your home or place of budiness.Locally,we're in most major cities throughout
                    the country .Find the branch nearest you using our store locator.Any questions?
                    Don't hesitate to contact us today.
                    `
const thirdArticle = `
                    Our modern furniture store provide a high level of quality.Our company
                    has invested in advanced technology to ensure that every product is made as 
                    perfect and as consistent as possible.With three decades of experience in this 
                    industry.we understand what customers want for their home and office.
                    `

const titles = [firstTitle, secondTitle, thirdTitle]
const articles = [firstArticle, secondArticle, thirdArticle]
const product = [
  {
    productTitle: titles[0],
    productArticle: articles[0],
    productImg: `${_assets_images_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_0__}`,
    mobileImg: `${_assets_images_mobile_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_3__}`,
    imgAlt: 'chair and table'
  },

  {
    productTitle: titles[1],
    productArticle: articles[1],
    productImg: `${_assets_images_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_1__}`,
    mobileImg: `${_assets_images_mobile_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_4__}`,
    imgAlt: 'yellow and white chairs'
  },
  {
    productTitle: titles[2],
    productArticle: articles[2],
    productImg: `${_assets_images_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_2__}`,
    mobileImg: `${_assets_images_mobile_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_5__}`,
    imgAlt: 'black chair'
  }
]
// function that take two dom elments one to append image other article
// and the array contain image and article as object
function slider (array, domElementOne, domElementtwo, index) {
  array.forEach(element => {
    if (array.indexOf(element) === index) {
      appendElement(domElementOne, domElementtwo, index)
    }
  })
}

function appendElement (elementone, elementTwo, index) {
  const screenWidth = window.screen.width
  elementone.textContent = ''
  elementTwo.textContent = ''
  const img = document.createElement('img')
  const productTitle = document.createElement('h1')
  const productDetail = document.createElement('p')
  productDetail.style.animation = 'zoomin 2s'
  productTitle.style.animation = 'zoomin 2s'
  img.style.animation = 'zoomin 1s'
  img.alt = product[index].imgAlt

  if (screenWidth >= 577) {
    img.src = product[index].productImg
  } else if (screenWidth <= 577) {
    img.src = product[index].mobileImg
  }
  productTitle.textContent = product[index].productTitle
  productDetail.textContent = product[index].productArticle
  elementone.appendChild(img)
  elementTwo.appendChild(productTitle)
  elementTwo.appendChild(productDetail)
}




/***/ }),

/***/ "./src/assets/fonts/league-spartan-v11-latin-regular.woff2":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/league-spartan-v11-latin-regular.woff2 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80da6b54836e1d7c0884.woff2";

/***/ }),

/***/ "./src/assets/images/desktop-image-hero-1.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/desktop-image-hero-1.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91901d0d47ea68db9434.jpg";

/***/ }),

/***/ "./src/assets/images/desktop-image-hero-2.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/desktop-image-hero-2.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d35405672f4fca67945.jpg";

/***/ }),

/***/ "./src/assets/images/desktop-image-hero-3.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/desktop-image-hero-3.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05fd679aa0d31e01c176.jpg";

/***/ }),

/***/ "./src/assets/images/icon-angle-left.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-angle-left.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d53877dfd9c6774a6874.svg";

/***/ }),

/***/ "./src/assets/images/icon-angle-right.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-angle-right.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ed3f81fbd14b3bd61d8.svg";

/***/ }),

/***/ "./src/assets/images/icon-close.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-close.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e88bd6e1dd859233d65.svg";

/***/ }),

/***/ "./src/assets/images/icon-hamburger.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-hamburger.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc022bac537a273572af.svg";

/***/ }),

/***/ "./src/assets/images/mobile-image-hero-1.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/mobile-image-hero-1.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5de3d1472db703fb2f8a.jpg";

/***/ }),

/***/ "./src/assets/images/mobile-image-hero-2.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/mobile-image-hero-2.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51db290a00388a5a0bea.jpg";

/***/ }),

/***/ "./src/assets/images/mobile-image-hero-3.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/mobile-image-hero-3.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "601d0f37f7ff5e62008c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room */ "./src/room.js");



const navHolder = document.querySelector('.nav-holder')
const maskDivs = document.querySelectorAll('.dark-mask')
const closeNavbtn = document.querySelector('.close-nav-btn')
const openNavbtn = document.querySelector('.open-nav-btn')
const firstNav = document.querySelector('.first-nav')
const secondNav = document.querySelector('.second-nav')
const btns = document.querySelector('[data-slider-btns]')
const divHolder = document.querySelector('[data-hero-holder]')
const article = document.querySelector('[data-article]')

closeNavbtn.addEventListener('click', () => {
  if (secondNav.getAttribute('data-spread') === 'true') {
    firstNav.setAttribute('data-spread', 'true')
    secondNav.setAttribute('data-spread', 'false')
    navHolder.classList.remove('close-nav-style')
    maskDivs.forEach(darkMask => {
      darkMask.classList.remove('black-mask')
    })
  }
})
openNavbtn.addEventListener('click', () => {
  if (secondNav.getAttribute('data-spread') === 'false') {
    firstNav.setAttribute('data-spread', 'false')
    secondNav.setAttribute('data-spread', 'true')
    navHolder.classList.add('close-nav-style')
    maskDivs.forEach(darkMask => {
      darkMask.classList.add('black-mask')
    })
  }
})

maskDivs.forEach(mask => {
  mask.addEventListener('click', () => {
    mask.style.backgroundColor = 'transparent'
  })
})
let sliderIndex = 0
const restrict = function () {
  if (sliderIndex >= _room__WEBPACK_IMPORTED_MODULE_1__.product.length) {
    sliderIndex = 0
  } else if (sliderIndex < 0) {
    sliderIndex = _room__WEBPACK_IMPORTED_MODULE_1__.product.length - 1
  }
  return sliderIndex
}
btns.addEventListener('click', (e) => {
  if (e.target.matches('[data-next-btn]')) {
    sliderIndex++
    restrict()
    ;(0,_room__WEBPACK_IMPORTED_MODULE_1__.slider)(_room__WEBPACK_IMPORTED_MODULE_1__.product, divHolder, article, sliderIndex)
  } else if (e.target.matches('[data-prev-btn]')) {
    sliderIndex--
    restrict()
    ;(0,_room__WEBPACK_IMPORTED_MODULE_1__.slider)(_room__WEBPACK_IMPORTED_MODULE_1__.product, divHolder, article, sliderIndex)
  }
})
function defaultSlider () {
  ;(0,_room__WEBPACK_IMPORTED_MODULE_1__.appendElement)(divHolder, article, sliderIndex)
}
defaultSlider()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1TEFBd0U7QUFDcEgsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0QyxtSkFBc0Q7QUFDbEcsNENBQTRDLHFKQUF1RDtBQUNuRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sWUFBWSxRQUFRLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FB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d2VicGFjazovL3Jvb20taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS8uL3NyYy9yb29tLmpzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbGVhZ3VlLXNwYXJ0YW4tdjExLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1oYW1idXJnZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tYW5nbGUtbGVmdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1hbmdsZS1yaWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBsZWFndWUtc3BhcnRhbi1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtZmFtaWx5OiBcIkxlYWd1ZSBTcGFydGFuXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSlcbiAgICBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbioge1xuICBtYXJnaW46IDA7XG59XG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGZvbnQtZmFtaWx5OiBcIkxlYWd1ZSBTcGFydGFuXCI7XG59XG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDUwMG1zO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXJ0LW9uZSxcbi5wYXJ0LXR3byB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDZ2aDtcbn1cbi5uYXYtaG9sZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbltkYXRhLXNwcmVhZD1cImZhbHNlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbltkYXRhLXNwcmVhZD1cInRydWVcIl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNGZyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbi5jbG9zZS1uYXYtYnRuLFxuLm9wZW4tbmF2LWJ0biB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcGVuLW5hdi1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jbG9zZS1uYXYtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuLmNsb3NlLW5hdi1zdHlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxpbmtzID4gbGkgPiBhOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbn1cbi5saW5rcyA+IGxpID4gYTpob3Zlcjo6YWZ0ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjYpO1xufVxuLmRlc2t0b3AtbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9iaWxlLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XG59XG4vKiBzbGlkZXIgaW1hZ2UgYXMgaGVybyAqL1xuLmltYWdlLWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDZ2aDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4tb3V0IDJzO1xufVxuXG4vKiBhbmltYXRpb24gIHN0eWxlICovXG5pbWcsXG5wLFxuaDEge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgM3M7XG59XG5Aa2V5ZnJhbWVzIHpvb21pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLyogICovXG4uaW1hZ2UtaG9sZGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zbGlkZXItYnRucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1NCU7XG4gIGJvcmRlcjogMDtcbn1cbi5uZXh0LWJ0bixcbi5wcmV2LWJ0biB7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW0gMS4ycmVtIDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXI6IDA7XG59XG4ucHJldi1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG4ubmV4dC1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG4ubmV4dC1idG46aG92ZXIsXG4ucHJldi1idG46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYWJvdXQtcHJvZHVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5wIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjclKTtcbiAgd29yZC1zcGFjaW5nOiAwLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uYnV5LWJ0bi1ob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5zaG9wLWJ0biB7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cbi5zaG9wLWJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi8qIHBhcnQgdHdvKDMgY29sdW1ucyBncmlkIHN0eWxlICovXG4uc2hvdy1mdXJuaXR1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQtZnVybml0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uZnVybml0dXJlLXRpdGxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uZGFyay1tYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5ibGFjay1tYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuICAucGFydC1vbmUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xuICAgIGhlaWdodDogNjV2aDtcbiAgfVxuICBoZWFkZXIge1xuICAgIGhlaWdodDogNjV2aDtcbiAgfVxuICAubmF2LWhvbGRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuICAuZmlyc3QtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWNvbmQtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEuM3JlbTtcbiAgfVxuICAubGlua3Mge1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgfVxuICAubW9iaWxlLmxvZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZGVza3RvcC1sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtIDAgMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIH1cbiAgLmNsb3NlLW5hdi1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmltYWdlLWhvbGRlciB7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICB9XG4gIC5zbGlkZXItYnRucyB7XG4gICAgbGVmdDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC8qIHBhcnQgdHdvIHN0eWxlICovXG4gIC5wYXJ0LXR3byB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgfVxuICAuYWJvdXQtcHJvZHVjdCB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICAuc2hvcC1idG4ge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnNob3ctZnVybml0dXJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5ibGFjay1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VB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O0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBLG1CQUFtQjtFQUNuQjtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGxlYWd1ZS1zcGFydGFuLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZWFndWUgU3BhcnRhblxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL2xlYWd1ZS1zcGFydGFuLXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyXFxcIilcXG4gICAgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogXFxcIkxlYWd1ZSBTcGFydGFuXFxcIjtcXG59XFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA1MDBtcztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYXJ0LW9uZSxcXG4ucGFydC10d28ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDZ2aDtcXG59XFxuLm5hdi1ob2xkZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuW2RhdGEtc3ByZWFkPVxcXCJmYWxzZVxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbltkYXRhLXNwcmVhZD1cXFwidHJ1ZVxcXCJdIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNGZyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5jbG9zZS1uYXYtYnRuLFxcbi5vcGVuLW5hdi1idG4ge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vcGVuLW5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29uLWhhbWJ1cmdlci5zdmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNsb3NlLW5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29uLWNsb3NlLnN2Zyk7XFxufVxcbi5jbG9zZS1uYXYtc3R5bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmxpbmtzID4gbGkgPiBhOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5saW5rcyA+IGxpID4gYTpob3Zlcjo6YWZ0ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNik7XFxufVxcbi5kZXNrdG9wLWxvZ28ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vYmlsZS1sb2dvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XFxufVxcbi8qIHNsaWRlciBpbWFnZSBhcyBoZXJvICovXFxuLmltYWdlLWhvbGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NnZoO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCAycztcXG59XFxuXFxuLyogYW5pbWF0aW9uICBzdHlsZSAqL1xcbmltZyxcXG5wLFxcbmgxIHtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzcztcXG59XFxuQGtleWZyYW1lcyB6b29taW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4vKiAgKi9cXG4uaW1hZ2UtaG9sZGVyID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc2xpZGVyLWJ0bnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDU0JTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLm5leHQtYnRuLFxcbi5wcmV2LWJ0biB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcGFkZGluZzogMS4ycmVtIDEuNXJlbSAxLjJyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4ucHJldi1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29uLWFuZ2xlLWxlZnQuc3ZnKTtcXG59XFxuLm5leHQtYnRuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbi1hbmdsZS1yaWdodC5zdmcpO1xcbn1cXG4ubmV4dC1idG46aG92ZXIsXFxuLnByZXYtYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLmFib3V0LXByb2R1Y3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5wIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyNyUpO1xcbiAgd29yZC1zcGFjaW5nOiAwLjFyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5idXktYnRuLWhvbGRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxufVxcbi5zaG9wLWJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcbi5zaG9wLWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi8qIHBhcnQgdHdvKDMgY29sdW1ucyBncmlkIHN0eWxlICovXFxuLnNob3ctZnVybml0dXJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hYm91dC1mdXJuaXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5mdXJuaXR1cmUtdGl0bGUge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZGFyay1tYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYmxhY2stbWFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIH1cXG4gIC5wYXJ0LW9uZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICB9XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICB9XFxuICAubmF2LWhvbGRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuICAuZmlyc3QtbmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zZWNvbmQtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gIH1cXG4gIC5saW5rcyB7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgfVxcbiAgLm1vYmlsZS5sb2cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRlc2t0b3AtbG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtIDAgMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgfVxcbiAgLmNsb3NlLW5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmltYWdlLWhvbGRlciB7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gIH1cXG4gIC5zbGlkZXItYnRucyB7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAvKiBwYXJ0IHR3byBzdHlsZSAqL1xcbiAgLnBhcnQtdHdvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIH1cXG4gIC5hYm91dC1wcm9kdWN0IHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG4gIC5zaG9wLWJ0biB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAuc2hvdy1mdXJuaXR1cmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gIH1cXG4gIC5ibGFjay1tYXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZpcnN0SGVybyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZGVza3RvcC1pbWFnZS1oZXJvLTEuanBnJ1xuaW1wb3J0IHNlY29uZEhlcm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc2t0b3AtaW1hZ2UtaGVyby0yLmpwZydcbmltcG9ydCB0aGlyZEhlcm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc2t0b3AtaW1hZ2UtaGVyby0zLmpwZydcbmltcG9ydCBtb2JpbGVGaXJzdGhlcm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1pbWFnZS1oZXJvLTEuanBnJ1xuaW1wb3J0IG1vYmlsZVNlY29uZEhlcm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1pbWFnZS1oZXJvLTIuanBnJ1xuaW1wb3J0IG1vYmlsZVRoaXJkSGVybyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLWltYWdlLWhlcm8tMy5qcGcnXG5cbmNvbnN0IGZpcnN0VGl0bGUgPSAnRGlzY292ZXIgaW5ub3ZhdGl2ZSB3YXlzIHRvIGRlY29yYXRlJ1xuY29uc3Qgc2Vjb25kVGl0bGUgPSAnV2UgYXJlIGF2YWlsYWJsZSBhbGwgYWNyZXNzIHRoZSBnbG9iZSdcbmNvbnN0IHRoaXJkVGl0bGUgPSAnTWFudWZhY3R1cmVkIHdpdGggdGhlIGJlc3QgbWF0ZXJpYWxzJ1xuXG5jb25zdCBmaXJzdEFydGljbGUgPSBgXG4gICAgICAgICAgICAgICAgICAgIHdlIHByb3ZpZGUgdW5hbWF0Y2hlZCBxdWFsaXR5LGNvbWZvcnQgYW5kIHN0eWxlIGZvciBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICBvd25lcnMgYWNyb3NzIHRoZSBjb3VudHJ5Lk91ciBleHBlcnRzIGNvbWJpbmUgZm9ybSBhbmQgZnVuY3Rpb24gaW4gXG4gICAgICAgICAgICAgICAgICAgIGJyaW5naW5nIHlvdXIgdmlzaW9uIHRvIGxpZmUuQ3JlYXRlIGEgcm9vbSBpbiB5b3VyIG93biBzdHlsZSB3aXRoIFxuICAgICAgICAgICAgICAgICAgICBvdXIgY29sbGVjdGlvbiBhbmQgbWFrZSB5b3VyIHByb3BlcnR5IGEgcmVmbGVjdGlvbiBvZiB5b3UgYW5kIHdoYXQgeW91IGxvdmUuXG4gICAgICAgICAgICAgICAgICAgYFxuY29uc3Qgc2Vjb25kQXJ0aWNsZSA9IGBcbiAgICAgICAgICAgICAgICAgICAgV2l0aCBzdG9yZXMgYWxsIG92ZXIgdGhlIHdvcmxkLml0J3MgZWFzeSBmb3IgeW91IHRvIGZpbmQgZnVybml0dXJlIGZvclxuICAgICAgICAgICAgICAgICAgICB5b3VyIGhvbWUgb3IgcGxhY2Ugb2YgYnVkaW5lc3MuTG9jYWxseSx3ZSdyZSBpbiBtb3N0IG1ham9yIGNpdGllcyB0aHJvdWdob3V0XG4gICAgICAgICAgICAgICAgICAgIHRoZSBjb3VudHJ5IC5GaW5kIHRoZSBicmFuY2ggbmVhcmVzdCB5b3UgdXNpbmcgb3VyIHN0b3JlIGxvY2F0b3IuQW55IHF1ZXN0aW9ucz9cbiAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGVzaXRhdGUgdG8gY29udGFjdCB1cyB0b2RheS5cbiAgICAgICAgICAgICAgICAgICAgYFxuY29uc3QgdGhpcmRBcnRpY2xlID0gYFxuICAgICAgICAgICAgICAgICAgICBPdXIgbW9kZXJuIGZ1cm5pdHVyZSBzdG9yZSBwcm92aWRlIGEgaGlnaCBsZXZlbCBvZiBxdWFsaXR5Lk91ciBjb21wYW55XG4gICAgICAgICAgICAgICAgICAgIGhhcyBpbnZlc3RlZCBpbiBhZHZhbmNlZCB0ZWNobm9sb2d5IHRvIGVuc3VyZSB0aGF0IGV2ZXJ5IHByb2R1Y3QgaXMgbWFkZSBhcyBcbiAgICAgICAgICAgICAgICAgICAgcGVyZmVjdCBhbmQgYXMgY29uc2lzdGVudCBhcyBwb3NzaWJsZS5XaXRoIHRocmVlIGRlY2FkZXMgb2YgZXhwZXJpZW5jZSBpbiB0aGlzIFxuICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeS53ZSB1bmRlcnN0YW5kIHdoYXQgY3VzdG9tZXJzIHdhbnQgZm9yIHRoZWlyIGhvbWUgYW5kIG9mZmljZS5cbiAgICAgICAgICAgICAgICAgICAgYFxuXG5jb25zdCB0aXRsZXMgPSBbZmlyc3RUaXRsZSwgc2Vjb25kVGl0bGUsIHRoaXJkVGl0bGVdXG5jb25zdCBhcnRpY2xlcyA9IFtmaXJzdEFydGljbGUsIHNlY29uZEFydGljbGUsIHRoaXJkQXJ0aWNsZV1cbmNvbnN0IHByb2R1Y3QgPSBbXG4gIHtcbiAgICBwcm9kdWN0VGl0bGU6IHRpdGxlc1swXSxcbiAgICBwcm9kdWN0QXJ0aWNsZTogYXJ0aWNsZXNbMF0sXG4gICAgcHJvZHVjdEltZzogYCR7Zmlyc3RIZXJvfWAsXG4gICAgbW9iaWxlSW1nOiBgJHttb2JpbGVGaXJzdGhlcm99YCxcbiAgICBpbWdBbHQ6ICdjaGFpciBhbmQgdGFibGUnXG4gIH0sXG5cbiAge1xuICAgIHByb2R1Y3RUaXRsZTogdGl0bGVzWzFdLFxuICAgIHByb2R1Y3RBcnRpY2xlOiBhcnRpY2xlc1sxXSxcbiAgICBwcm9kdWN0SW1nOiBgJHtzZWNvbmRIZXJvfWAsXG4gICAgbW9iaWxlSW1nOiBgJHttb2JpbGVTZWNvbmRIZXJvfWAsXG4gICAgaW1nQWx0OiAneWVsbG93IGFuZCB3aGl0ZSBjaGFpcnMnXG4gIH0sXG4gIHtcbiAgICBwcm9kdWN0VGl0bGU6IHRpdGxlc1syXSxcbiAgICBwcm9kdWN0QXJ0aWNsZTogYXJ0aWNsZXNbMl0sXG4gICAgcHJvZHVjdEltZzogYCR7dGhpcmRIZXJvfWAsXG4gICAgbW9iaWxlSW1nOiBgJHttb2JpbGVUaGlyZEhlcm99YCxcbiAgICBpbWdBbHQ6ICdibGFjayBjaGFpcidcbiAgfVxuXVxuLy8gZnVuY3Rpb24gdGhhdCB0YWtlIHR3byBkb20gZWxtZW50cyBvbmUgdG8gYXBwZW5kIGltYWdlIG90aGVyIGFydGljbGVcbi8vIGFuZCB0aGUgYXJyYXkgY29udGFpbiBpbWFnZSBhbmQgYXJ0aWNsZSBhcyBvYmplY3RcbmZ1bmN0aW9uIHNsaWRlciAoYXJyYXksIGRvbUVsZW1lbnRPbmUsIGRvbUVsZW1lbnR0d28sIGluZGV4KSB7XG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgaWYgKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPT09IGluZGV4KSB7XG4gICAgICBhcHBlbmRFbGVtZW50KGRvbUVsZW1lbnRPbmUsIGRvbUVsZW1lbnR0d28sIGluZGV4KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudCAoZWxlbWVudG9uZSwgZWxlbWVudFR3bywgaW5kZXgpIHtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoXG4gIGVsZW1lbnRvbmUudGV4dENvbnRlbnQgPSAnJ1xuICBlbGVtZW50VHdvLnRleHRDb250ZW50ID0gJydcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgY29uc3QgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBjb25zdCBwcm9kdWN0RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHByb2R1Y3REZXRhaWwuc3R5bGUuYW5pbWF0aW9uID0gJ3pvb21pbiAycydcbiAgcHJvZHVjdFRpdGxlLnN0eWxlLmFuaW1hdGlvbiA9ICd6b29taW4gMnMnXG4gIGltZy5zdHlsZS5hbmltYXRpb24gPSAnem9vbWluIDFzJ1xuICBpbWcuYWx0ID0gcHJvZHVjdFtpbmRleF0uaW1nQWx0XG5cbiAgaWYgKHNjcmVlbldpZHRoID49IDU3Nykge1xuICAgIGltZy5zcmMgPSBwcm9kdWN0W2luZGV4XS5wcm9kdWN0SW1nXG4gIH0gZWxzZSBpZiAoc2NyZWVuV2lkdGggPD0gNTc3KSB7XG4gICAgaW1nLnNyYyA9IHByb2R1Y3RbaW5kZXhdLm1vYmlsZUltZ1xuICB9XG4gIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3RbaW5kZXhdLnByb2R1Y3RUaXRsZVxuICBwcm9kdWN0RGV0YWlsLnRleHRDb250ZW50ID0gcHJvZHVjdFtpbmRleF0ucHJvZHVjdEFydGljbGVcbiAgZWxlbWVudG9uZS5hcHBlbmRDaGlsZChpbWcpXG4gIGVsZW1lbnRUd28uYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKVxuICBlbGVtZW50VHdvLmFwcGVuZENoaWxkKHByb2R1Y3REZXRhaWwpXG59XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGFwcGVuZEVsZW1lbnQsIHNsaWRlciB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IHByb2R1Y3QsIGFwcGVuZEVsZW1lbnQsIHNsaWRlciB9IGZyb20gJy4vcm9vbSdcblxuY29uc3QgbmF2SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1ob2xkZXInKVxuY29uc3QgbWFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFyay1tYXNrJylcbmNvbnN0IGNsb3NlTmF2YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW5hdi1idG4nKVxuY29uc3Qgb3Blbk5hdmJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW5hdi1idG4nKVxuY29uc3QgZmlyc3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3QtbmF2JylcbmNvbnN0IHNlY29uZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtbmF2JylcbmNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItYnRuc10nKVxuY29uc3QgZGl2SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaGVyby1ob2xkZXJdJylcbmNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hcnRpY2xlXScpXG5cbmNsb3NlTmF2YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoc2Vjb25kTmF2LmdldEF0dHJpYnV0ZSgnZGF0YS1zcHJlYWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgZmlyc3ROYXYuc2V0QXR0cmlidXRlKCdkYXRhLXNwcmVhZCcsICd0cnVlJylcbiAgICBzZWNvbmROYXYuc2V0QXR0cmlidXRlKCdkYXRhLXNwcmVhZCcsICdmYWxzZScpXG4gICAgbmF2SG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlLW5hdi1zdHlsZScpXG4gICAgbWFza0RpdnMuZm9yRWFjaChkYXJrTWFzayA9PiB7XG4gICAgICBkYXJrTWFzay5jbGFzc0xpc3QucmVtb3ZlKCdibGFjay1tYXNrJylcbiAgICB9KVxuICB9XG59KVxub3Blbk5hdmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKHNlY29uZE5hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ByZWFkJykgPT09ICdmYWxzZScpIHtcbiAgICBmaXJzdE5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ByZWFkJywgJ2ZhbHNlJylcbiAgICBzZWNvbmROYXYuc2V0QXR0cmlidXRlKCdkYXRhLXNwcmVhZCcsICd0cnVlJylcbiAgICBuYXZIb2xkZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbmF2LXN0eWxlJylcbiAgICBtYXNrRGl2cy5mb3JFYWNoKGRhcmtNYXNrID0+IHtcbiAgICAgIGRhcmtNYXNrLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLW1hc2snKVxuICAgIH0pXG4gIH1cbn0pXG5cbm1hc2tEaXZzLmZvckVhY2gobWFzayA9PiB7XG4gIG1hc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnXG4gIH0pXG59KVxubGV0IHNsaWRlckluZGV4ID0gMFxuY29uc3QgcmVzdHJpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChzbGlkZXJJbmRleCA+PSBwcm9kdWN0Lmxlbmd0aCkge1xuICAgIHNsaWRlckluZGV4ID0gMFxuICB9IGVsc2UgaWYgKHNsaWRlckluZGV4IDwgMCkge1xuICAgIHNsaWRlckluZGV4ID0gcHJvZHVjdC5sZW5ndGggLSAxXG4gIH1cbiAgcmV0dXJuIHNsaWRlckluZGV4XG59XG5idG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ1tkYXRhLW5leHQtYnRuXScpKSB7XG4gICAgc2xpZGVySW5kZXgrK1xuICAgIHJlc3RyaWN0KClcbiAgICBzbGlkZXIocHJvZHVjdCwgZGl2SG9sZGVyLCBhcnRpY2xlLCBzbGlkZXJJbmRleClcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKCdbZGF0YS1wcmV2LWJ0bl0nKSkge1xuICAgIHNsaWRlckluZGV4LS1cbiAgICByZXN0cmljdCgpXG4gICAgc2xpZGVyKHByb2R1Y3QsIGRpdkhvbGRlciwgYXJ0aWNsZSwgc2xpZGVySW5kZXgpXG4gIH1cbn0pXG5mdW5jdGlvbiBkZWZhdWx0U2xpZGVyICgpIHtcbiAgYXBwZW5kRWxlbWVudChkaXZIb2xkZXIsIGFydGljbGUsIHNsaWRlckluZGV4KVxufVxuZGVmYXVsdFNsaWRlcigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=