/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusStyle: () => (/* binding */ focusStyle),
/* harmony export */   getGeolocationdata: () => (/* binding */ getGeolocationdata),
/* harmony export */   getbyDefaultipadress: () => (/* binding */ getbyDefaultipadress),
/* harmony export */   getbyDomain: () => (/* binding */ getbyDomain),
/* harmony export */   getbyIpadress: () => (/* binding */ getbyIpadress),
/* harmony export */   removeLoad: () => (/* binding */ removeLoad)
/* harmony export */ });
// function to fetch data from https://geo.ipify.org to get ip address and location name,region
async function getbyDefaultipadress () {
  try {
    const request =
    await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_C8EiGK0u9YbO7pyGFv9SHQiHAg8Er', { mode: 'cors' })
    const data = await request.json()
    return data
  } catch {
    console.log('no data found for this default ip ')
  }
}
// function to get adress by domain
async function getbyDomain (domain) {
  try {
    const request =
    await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_C8EiGK0u9YbO7pyGFv9SHQiHAg8Er&domain=${domain}`, { mode: 'cors' })
    const data = await request.json()
    return data
  } catch {
    console.log('no data found for this domain')
  }
}
async function getbyIpadress (ipaddress) {
  try {
    const request =
    await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_C8EiGK0u9YbO7pyGFv9SHQiHAg8Er&ipAddress=${ipaddress}`, { mode: 'cors' })
    const data = await request.json()
    return data
  } catch {
    console.log('no data found for this ip ')
  }
}
// function to fetch data using address name and
// get longitude and latitude of that place/address from https://geocode.map.co
async function getGeocode (address) {
  try {
    const api = '65eba1e2d8689026564545ihgc7d288'
    const request =
    await fetch(`https://geocode.maps.co/search?q=${address}&api_key=${api}`, { mode: 'cors' })
    const data = await request.json()
    return data
  } catch {
    console.log('no data for longitude and latitude found')
  }
}

async function getGeolocationdata (obj) {
  const response = await obj;
  const region = response.location.region;
  const countryName = response.location.country;
  const ipAdress = response.ip;
  const isp = response.isp;
  const timeZone = response.location.timezone;
  const asnNumber = response.as.asn;
  const geoData = await getGeocode(region)
  const longitude = geoData[0].lon;
  const latitude = geoData[0].lat;
  return { region, countryName, ipAdress, isp, timeZone, asnNumber, latitude, longitude }
}
// form style on focus
const focusStyle = function (field, errDom) {
  field.addEventListener('focus', () => {
    if (field.className === 'invalid') errDom.style.display = 'none'
  })
  field.addEventListener('focusout', () => {
    if (field.className === 'invalid') {
      errDom.style.display = 'block'
    }
  })
}
// functin to remove loading class ,parameter arr of elment and classname
function removeLoad (array, classname) {
  array.forEach(element => {
    element.classList.remove(classname)
  });
}



/***/ }),

/***/ "./src/assets/images/icon-location.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-location.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e6459d2a9278295ae78.svg";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet/dist/leaflet.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _assets_images_icon_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/icon-location.svg */ "./src/assets/images/icon-location.svg");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");






let latitude;
let longitude;
let userCountryName;
let userPlaceName;
// const skeletonPage = document.querySelector('main');
const skeletoText = document.querySelectorAll('.skeleton-text');
const errorMsg = document.querySelector('[data-error-msg]');
const userInput = document.querySelector('.user-input');
const submitBtn = document.querySelector('[data-location-btn]');
const userIp = document.querySelector('[data-ip-address]');
const userLocation = document.querySelector('[data-user-location]');
const userTimezone = document.querySelector('[data-user-timezone]')
const userIsp = document.querySelector('[data-user-isp]');
const userAsn = document.querySelector('[data-user-asn]');
const loadArray = [...skeletoText]
// function that clear existing map to redraw again
function clearMap () {
  const container = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get('map');
  if (container != null) {
    container._leaflet_id = null;
  }
}
// function to update dom
function updateDom (response) {
  userIp.textContent = response.ipAdress;
  userIsp.textContent = response.isp;
  userTimezone.textContent = response.timeZone;
  userLocation.textContent = `${response.region}, ${response.countryName}`;
  userAsn.textContent = response.asnNumber;
}
// base layers for the map
const osm = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

const googleSat = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google map'
});
const googleStreets = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google map'
});
const googleHybrid = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google map'
});
const baseMaps = {
  OpenStreetMap: osm,
  satellite: googleSat,
  street: googleStreets,
  hybrid: googleHybrid
};
/*
*function to create map using  https://leafletjs.com/
*parmaeters: latitude,longitude, icon,placename,and country name
*return map with given  positon at center and popup message
*/

async function maps (lat, lon) {
  // default map layer is osm
  const map = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('map', { layers: [osm] }).setView([lat, lon], 13);
  // add layer control
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).layers(baseMaps).addTo(map);
  // pop up message
  const message = `<b>your ip address located in ${userPlaceName}, ${userCountryName}`
  const marker = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([lat, lon], { alt: `${userPlaceName}` }).addTo(map).bindPopup(`${message}`).openPopup();
  // add icon
  const blackIcon = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    iconUrl: `${_assets_images_icon_location_svg__WEBPACK_IMPORTED_MODULE_1__}`,
    iconSize: [40, 65], // size of the icon
    iconAnchor: [16, 80]
  });
  // add event on icon click
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'leaflet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([lat, lon], { icon: blackIcon }).addTo(map).on('click', () => {
    marker.bindPopup(`${message}`).openPopup();
  });
}

const locationBydefault = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getbyDefaultipadress)().then(response => {
  return response
});
const data = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getGeolocationdata)(locationBydefault)
data.then(response => {
  latitude = Number(response.latitude);
  longitude = Number(response.longitude);
  userCountryName = response.countryName;
  userPlaceName = response.region;
  updateDom(response)
  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.removeLoad)(loadArray, 'skeleton-text')
  maps(latitude, longitude)
}).catch(error => {
  console.log(error)
  errorMsg.textContent = 'no data found Please, try later'
})
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = userInput.value;
  const regexIp = /^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$/;
  const regexDomain = /^(?!-)(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/;
  console.log(regexDomain.test(value))
  if (regexIp.test(value)) {
    const locationByip = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getbyIpadress)(value).then(response => {
      return response
    });
    const data = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getGeolocationdata)(locationByip)
    data.then(response => {
      latitude = Number(response.latitude);
      longitude = Number(response.longitude);
      userCountryName = response.countryName;
      userPlaceName = response.region;
      clearMap();
      maps(latitude, longitude);
      updateDom(response);
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.removeLoad)(loadArray, 'skeleton-text')
      userInput.classList.add('valid');
      errorMsg.textContent = '';
    }).catch(err => {
      console.log(err)
      userInput.classList.add('invalid');
      errorMsg.textContent = 'no data found in this ip address';
    });
  } else if (regexDomain.test(value)) {
    const locationBydomain = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getbyDomain)(value).then(response => {
      return response
    })
    const data = (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.getGeolocationdata)(locationBydomain)
    data.then(response => {
      latitude = Number(response.latitude);
      longitude = Number(response.longitude);
      userCountryName = response.countryName;
      userPlaceName = response.region;
      clearMap();
      maps(latitude, longitude);
      updateDom(response);
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.removeLoad)(loadArray, 'skeleton-text');
      userInput.classList.add('valid');
      errorMsg.textContent = '';
    }).catch(err => {
      console.log(err)
      userInput.classList.add('invalid');
      errorMsg.textContent = 'no data found by this domain'
    });
  } else if (regexIp.test(value) === false && regexDomain.test(value) === false) {
    userInput.classList.add('invalid');
    errorMsg.textContent = 'no data found please,check the format.';
  }
})
userInput.addEventListener('focus', () => {
  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.focusStyle)(userInput, errorMsg)
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUM7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsc0lBQVEsZUFBZSxpQkFBaUI7QUFDMUMsd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIOztBQUVBLDBCQUEwQixtRUFBb0I7QUFDOUM7QUFDQSxDQUFDO0FBQ0QsYUFBYSxpRUFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBVTtBQUNaO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUk7QUFDL0Qsd0RBQXdELElBQUksb0NBQW9DLEtBQUs7QUFDckc7QUFDQTtBQUNBLHlCQUF5Qiw0REFBYTtBQUN0QztBQUNBLEtBQUs7QUFDTCxpQkFBaUIsaUVBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFVO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSiw2QkFBNkIsMERBQVc7QUFDeEM7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLGlFQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBVTtBQUNoQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsRUFBRSwwREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXIvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gdG8gZmV0Y2ggZGF0YSBmcm9tIGh0dHBzOi8vZ2VvLmlwaWZ5Lm9yZyB0byBnZXQgaXAgYWRkcmVzcyBhbmQgbG9jYXRpb24gbmFtZSxyZWdpb25cbmFzeW5jIGZ1bmN0aW9uIGdldGJ5RGVmYXVsdGlwYWRyZXNzICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID1cbiAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9nZW8uaXBpZnkub3JnL2FwaS92Mi9jb3VudHJ5P2FwaUtleT1hdF9DOEVpR0swdTlZYk83cHlHRnY5U0hRaUhBZzhFcicsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCB7XG4gICAgY29uc29sZS5sb2coJ25vIGRhdGEgZm91bmQgZm9yIHRoaXMgZGVmYXVsdCBpcCAnKVxuICB9XG59XG4vLyBmdW5jdGlvbiB0byBnZXQgYWRyZXNzIGJ5IGRvbWFpblxuYXN5bmMgZnVuY3Rpb24gZ2V0YnlEb21haW4gKGRvbWFpbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPVxuICAgIGF3YWl0IGZldGNoKGBodHRwczovL2dlby5pcGlmeS5vcmcvYXBpL3YyL2NvdW50cnk/YXBpS2V5PWF0X0M4RWlHSzB1OVliTzdweUdGdjlTSFFpSEFnOEVyJmRvbWFpbj0ke2RvbWFpbn1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2gge1xuICAgIGNvbnNvbGUubG9nKCdubyBkYXRhIGZvdW5kIGZvciB0aGlzIGRvbWFpbicpXG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGdldGJ5SXBhZHJlc3MgKGlwYWRkcmVzcykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPVxuICAgIGF3YWl0IGZldGNoKGBodHRwczovL2dlby5pcGlmeS5vcmcvYXBpL3YyL2NvdW50cnk/YXBpS2V5PWF0X0M4RWlHSzB1OVliTzdweUdGdjlTSFFpSEFnOEVyJmlwQWRkcmVzcz0ke2lwYWRkcmVzc31gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2gge1xuICAgIGNvbnNvbGUubG9nKCdubyBkYXRhIGZvdW5kIGZvciB0aGlzIGlwICcpXG4gIH1cbn1cbi8vIGZ1bmN0aW9uIHRvIGZldGNoIGRhdGEgdXNpbmcgYWRkcmVzcyBuYW1lIGFuZFxuLy8gZ2V0IGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgb2YgdGhhdCBwbGFjZS9hZGRyZXNzIGZyb20gaHR0cHM6Ly9nZW9jb2RlLm1hcC5jb1xuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvY29kZSAoYWRkcmVzcykge1xuICB0cnkge1xuICAgIGNvbnN0IGFwaSA9ICc2NWViYTFlMmQ4Njg5MDI2NTY0NTQ1aWhnYzdkMjg4J1xuICAgIGNvbnN0IHJlcXVlc3QgPVxuICAgIGF3YWl0IGZldGNoKGBodHRwczovL2dlb2NvZGUubWFwcy5jby9zZWFyY2g/cT0ke2FkZHJlc3N9JmFwaV9rZXk9JHthcGl9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIHtcbiAgICBjb25zb2xlLmxvZygnbm8gZGF0YSBmb3IgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBmb3VuZCcpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvbG9jYXRpb25kYXRhIChvYmopIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYmo7XG4gIGNvbnN0IHJlZ2lvbiA9IHJlc3BvbnNlLmxvY2F0aW9uLnJlZ2lvbjtcbiAgY29uc3QgY291bnRyeU5hbWUgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICBjb25zdCBpcEFkcmVzcyA9IHJlc3BvbnNlLmlwO1xuICBjb25zdCBpc3AgPSByZXNwb25zZS5pc3A7XG4gIGNvbnN0IHRpbWVab25lID0gcmVzcG9uc2UubG9jYXRpb24udGltZXpvbmU7XG4gIGNvbnN0IGFzbk51bWJlciA9IHJlc3BvbnNlLmFzLmFzbjtcbiAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IGdldEdlb2NvZGUocmVnaW9uKVxuICBjb25zdCBsb25naXR1ZGUgPSBnZW9EYXRhWzBdLmxvbjtcbiAgY29uc3QgbGF0aXR1ZGUgPSBnZW9EYXRhWzBdLmxhdDtcbiAgcmV0dXJuIHsgcmVnaW9uLCBjb3VudHJ5TmFtZSwgaXBBZHJlc3MsIGlzcCwgdGltZVpvbmUsIGFzbk51bWJlciwgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9XG59XG4vLyBmb3JtIHN0eWxlIG9uIGZvY3VzXG5jb25zdCBmb2N1c1N0eWxlID0gZnVuY3Rpb24gKGZpZWxkLCBlcnJEb20pIHtcbiAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaWYgKGZpZWxkLmNsYXNzTmFtZSA9PT0gJ2ludmFsaWQnKSBlcnJEb20uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9KVxuICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICBpZiAoZmllbGQuY2xhc3NOYW1lID09PSAnaW52YWxpZCcpIHtcbiAgICAgIGVyckRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSlcbn1cbi8vIGZ1bmN0aW4gdG8gcmVtb3ZlIGxvYWRpbmcgY2xhc3MgLHBhcmFtZXRlciBhcnIgb2YgZWxtZW50IGFuZCBjbGFzc25hbWVcbmZ1bmN0aW9uIHJlbW92ZUxvYWQgKGFycmF5LCBjbGFzc25hbWUpIHtcbiAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NuYW1lKVxuICB9KTtcbn1cbmV4cG9ydCB7IGdldEdlb2xvY2F0aW9uZGF0YSwgZ2V0YnlEZWZhdWx0aXBhZHJlc3MsIGdldGJ5RG9tYWluLCBnZXRieUlwYWRyZXNzLCBmb2N1c1N0eWxlLCByZW1vdmVMb2FkIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgaWNvbkxvY2F0aW9uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9pY29uLWxvY2F0aW9uLnN2ZydcbmltcG9ydCB7IGdldEdlb2xvY2F0aW9uZGF0YSwgZ2V0YnlEZWZhdWx0aXBhZHJlc3MsIGdldGJ5RG9tYWluLCBnZXRieUlwYWRyZXNzLCBmb2N1c1N0eWxlLCByZW1vdmVMb2FkIH0gZnJvbSAnLi9mdW5jdGlvbnMuanMnXG5cbmxldCBsYXRpdHVkZTtcbmxldCBsb25naXR1ZGU7XG5sZXQgdXNlckNvdW50cnlOYW1lO1xubGV0IHVzZXJQbGFjZU5hbWU7XG4vLyBjb25zdCBza2VsZXRvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBza2VsZXRvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2VsZXRvbi10ZXh0Jyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVycm9yLW1zZ10nKTtcbmNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWlucHV0Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2NhdGlvbi1idG5dJyk7XG5jb25zdCB1c2VySXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pcC1hZGRyZXNzXScpO1xuY29uc3QgdXNlckxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlci1sb2NhdGlvbl0nKTtcbmNvbnN0IHVzZXJUaW1lem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVzZXItdGltZXpvbmVdJylcbmNvbnN0IHVzZXJJc3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11c2VyLWlzcF0nKTtcbmNvbnN0IHVzZXJBc24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11c2VyLWFzbl0nKTtcbmNvbnN0IGxvYWRBcnJheSA9IFsuLi5za2VsZXRvVGV4dF1cbi8vIGZ1bmN0aW9uIHRoYXQgY2xlYXIgZXhpc3RpbmcgbWFwIHRvIHJlZHJhdyBhZ2FpblxuZnVuY3Rpb24gY2xlYXJNYXAgKCkge1xuICBjb25zdCBjb250YWluZXIgPSBMLkRvbVV0aWwuZ2V0KCdtYXAnKTtcbiAgaWYgKGNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgY29udGFpbmVyLl9sZWFmbGV0X2lkID0gbnVsbDtcbiAgfVxufVxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIGRvbVxuZnVuY3Rpb24gdXBkYXRlRG9tIChyZXNwb25zZSkge1xuICB1c2VySXAudGV4dENvbnRlbnQgPSByZXNwb25zZS5pcEFkcmVzcztcbiAgdXNlcklzcC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmlzcDtcbiAgdXNlclRpbWV6b25lLnRleHRDb250ZW50ID0gcmVzcG9uc2UudGltZVpvbmU7XG4gIHVzZXJMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLnJlZ2lvbn0sICR7cmVzcG9uc2UuY291bnRyeU5hbWV9YDtcbiAgdXNlckFzbi50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmFzbk51bWJlcjtcbn1cbi8vIGJhc2UgbGF5ZXJzIGZvciB0aGUgbWFwXG5jb25zdCBvc20gPSBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgbWF4Wm9vbTogMTksXG4gIGF0dHJpYnV0aW9uOiAnwqkgT3BlblN0cmVldE1hcCdcbn0pO1xuXG5jb25zdCBnb29nbGVTYXQgPSBMLnRpbGVMYXllcignaHR0cDovL3tzfS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsIHtcbiAgbWF4Wm9vbTogMjAsXG4gIHN1YmRvbWFpbnM6IFsnbXQwJywgJ210MScsICdtdDInLCAnbXQzJ10sXG4gIGF0dHJpYnV0aW9uOiAnwqkgR29vZ2xlIG1hcCdcbn0pO1xuY29uc3QgZ29vZ2xlU3RyZWV0cyA9IEwudGlsZUxheWVyKCdodHRwOi8ve3N9Lmdvb2dsZS5jb20vdnQvbHlycz1tJng9e3h9Jnk9e3l9Jno9e3p9Jywge1xuICBtYXhab29tOiAyMCxcbiAgc3ViZG9tYWluczogWydtdDAnLCAnbXQxJywgJ210MicsICdtdDMnXSxcbiAgYXR0cmlidXRpb246ICfCqSBHb29nbGUgbWFwJ1xufSk7XG5jb25zdCBnb29nbGVIeWJyaWQgPSBMLnRpbGVMYXllcignaHR0cDovL3tzfS5nb29nbGUuY29tL3Z0L2x5cnM9cyxoJng9e3h9Jnk9e3l9Jno9e3p9Jywge1xuICBtYXhab29tOiAyMCxcbiAgc3ViZG9tYWluczogWydtdDAnLCAnbXQxJywgJ210MicsICdtdDMnXSxcbiAgYXR0cmlidXRpb246ICfCqSBHb29nbGUgbWFwJ1xufSk7XG5jb25zdCBiYXNlTWFwcyA9IHtcbiAgT3BlblN0cmVldE1hcDogb3NtLFxuICBzYXRlbGxpdGU6IGdvb2dsZVNhdCxcbiAgc3RyZWV0OiBnb29nbGVTdHJlZXRzLFxuICBoeWJyaWQ6IGdvb2dsZUh5YnJpZFxufTtcbi8qXG4qZnVuY3Rpb24gdG8gY3JlYXRlIG1hcCB1c2luZyAgaHR0cHM6Ly9sZWFmbGV0anMuY29tL1xuKnBhcm1hZXRlcnM6IGxhdGl0dWRlLGxvbmdpdHVkZSwgaWNvbixwbGFjZW5hbWUsYW5kIGNvdW50cnkgbmFtZVxuKnJldHVybiBtYXAgd2l0aCBnaXZlbiAgcG9zaXRvbiBhdCBjZW50ZXIgYW5kIHBvcHVwIG1lc3NhZ2VcbiovXG5cbmFzeW5jIGZ1bmN0aW9uIG1hcHMgKGxhdCwgbG9uKSB7XG4gIC8vIGRlZmF1bHQgbWFwIGxheWVyIGlzIG9zbVxuICBjb25zdCBtYXAgPSBMLm1hcCgnbWFwJywgeyBsYXllcnM6IFtvc21dIH0pLnNldFZpZXcoW2xhdCwgbG9uXSwgMTMpO1xuICAvLyBhZGQgbGF5ZXIgY29udHJvbFxuICBMLmNvbnRyb2wubGF5ZXJzKGJhc2VNYXBzKS5hZGRUbyhtYXApO1xuICAvLyBwb3AgdXAgbWVzc2FnZVxuICBjb25zdCBtZXNzYWdlID0gYDxiPnlvdXIgaXAgYWRkcmVzcyBsb2NhdGVkIGluICR7dXNlclBsYWNlTmFtZX0sICR7dXNlckNvdW50cnlOYW1lfWBcbiAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW2xhdCwgbG9uXSwgeyBhbHQ6IGAke3VzZXJQbGFjZU5hbWV9YCB9KS5hZGRUbyhtYXApLmJpbmRQb3B1cChgJHttZXNzYWdlfWApLm9wZW5Qb3B1cCgpO1xuICAvLyBhZGQgaWNvblxuICBjb25zdCBibGFja0ljb24gPSBMLmljb24oe1xuICAgIGljb25Vcmw6IGAke2ljb25Mb2NhdGlvbn1gLFxuICAgIGljb25TaXplOiBbNDAsIDY1XSwgLy8gc2l6ZSBvZiB0aGUgaWNvblxuICAgIGljb25BbmNob3I6IFsxNiwgODBdXG4gIH0pO1xuICAvLyBhZGQgZXZlbnQgb24gaWNvbiBjbGlja1xuICBMLm1hcmtlcihbbGF0LCBsb25dLCB7IGljb246IGJsYWNrSWNvbiB9KS5hZGRUbyhtYXApLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBtYXJrZXIuYmluZFBvcHVwKGAke21lc3NhZ2V9YCkub3BlblBvcHVwKCk7XG4gIH0pO1xufVxuXG5jb25zdCBsb2NhdGlvbkJ5ZGVmYXVsdCA9IGdldGJ5RGVmYXVsdGlwYWRyZXNzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gIHJldHVybiByZXNwb25zZVxufSk7XG5jb25zdCBkYXRhID0gZ2V0R2VvbG9jYXRpb25kYXRhKGxvY2F0aW9uQnlkZWZhdWx0KVxuZGF0YS50aGVuKHJlc3BvbnNlID0+IHtcbiAgbGF0aXR1ZGUgPSBOdW1iZXIocmVzcG9uc2UubGF0aXR1ZGUpO1xuICBsb25naXR1ZGUgPSBOdW1iZXIocmVzcG9uc2UubG9uZ2l0dWRlKTtcbiAgdXNlckNvdW50cnlOYW1lID0gcmVzcG9uc2UuY291bnRyeU5hbWU7XG4gIHVzZXJQbGFjZU5hbWUgPSByZXNwb25zZS5yZWdpb247XG4gIHVwZGF0ZURvbShyZXNwb25zZSlcbiAgcmVtb3ZlTG9hZChsb2FkQXJyYXksICdza2VsZXRvbi10ZXh0JylcbiAgbWFwcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKVxufSkuY2F0Y2goZXJyb3IgPT4ge1xuICBjb25zb2xlLmxvZyhlcnJvcilcbiAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnbm8gZGF0YSBmb3VuZCBQbGVhc2UsIHRyeSBsYXRlcidcbn0pXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHZhbHVlID0gdXNlcklucHV0LnZhbHVlO1xuICBjb25zdCByZWdleElwID0gL15bMC05XXsxLDN9LlswLTldezEsM30uWzAtOV17MSwzfS5bMC05XXsxLDN9JC87XG4gIGNvbnN0IHJlZ2V4RG9tYWluID0gL14oPyEtKSg/ITpcXC9cXC8pKFthLXpBLVowLTktXStcXC4pezAsNX1bYS16QS1aMC05LV1bYS16QS1aMC05LV0rXFwuW2EtekEtWl17Miw2NH0/JC87XG4gIGNvbnNvbGUubG9nKHJlZ2V4RG9tYWluLnRlc3QodmFsdWUpKVxuICBpZiAocmVnZXhJcC50ZXN0KHZhbHVlKSkge1xuICAgIGNvbnN0IGxvY2F0aW9uQnlpcCA9IGdldGJ5SXBhZHJlc3ModmFsdWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGdldEdlb2xvY2F0aW9uZGF0YShsb2NhdGlvbkJ5aXApXG4gICAgZGF0YS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGxhdGl0dWRlID0gTnVtYmVyKHJlc3BvbnNlLmxhdGl0dWRlKTtcbiAgICAgIGxvbmdpdHVkZSA9IE51bWJlcihyZXNwb25zZS5sb25naXR1ZGUpO1xuICAgICAgdXNlckNvdW50cnlOYW1lID0gcmVzcG9uc2UuY291bnRyeU5hbWU7XG4gICAgICB1c2VyUGxhY2VOYW1lID0gcmVzcG9uc2UucmVnaW9uO1xuICAgICAgY2xlYXJNYXAoKTtcbiAgICAgIG1hcHMobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICB1cGRhdGVEb20ocmVzcG9uc2UpO1xuICAgICAgcmVtb3ZlTG9hZChsb2FkQXJyYXksICdza2VsZXRvbi10ZXh0JylcbiAgICAgIHVzZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgdXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJ25vIGRhdGEgZm91bmQgaW4gdGhpcyBpcCBhZGRyZXNzJztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChyZWdleERvbWFpbi50ZXN0KHZhbHVlKSkge1xuICAgIGNvbnN0IGxvY2F0aW9uQnlkb21haW4gPSBnZXRieURvbWFpbih2YWx1ZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBnZXRHZW9sb2NhdGlvbmRhdGEobG9jYXRpb25CeWRvbWFpbilcbiAgICBkYXRhLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGF0aXR1ZGUgPSBOdW1iZXIocmVzcG9uc2UubGF0aXR1ZGUpO1xuICAgICAgbG9uZ2l0dWRlID0gTnVtYmVyKHJlc3BvbnNlLmxvbmdpdHVkZSk7XG4gICAgICB1c2VyQ291bnRyeU5hbWUgPSByZXNwb25zZS5jb3VudHJ5TmFtZTtcbiAgICAgIHVzZXJQbGFjZU5hbWUgPSByZXNwb25zZS5yZWdpb247XG4gICAgICBjbGVhck1hcCgpO1xuICAgICAgbWFwcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIHVwZGF0ZURvbShyZXNwb25zZSk7XG4gICAgICByZW1vdmVMb2FkKGxvYWRBcnJheSwgJ3NrZWxldG9uLXRleHQnKTtcbiAgICAgIHVzZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgdXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJ25vIGRhdGEgZm91bmQgYnkgdGhpcyBkb21haW4nXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocmVnZXhJcC50ZXN0KHZhbHVlKSA9PT0gZmFsc2UgJiYgcmVnZXhEb21haW4udGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgdXNlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICdubyBkYXRhIGZvdW5kIHBsZWFzZSxjaGVjayB0aGUgZm9ybWF0Lic7XG4gIH1cbn0pXG51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGZvY3VzU3R5bGUodXNlcklucHV0LCBlcnJvck1zZylcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=