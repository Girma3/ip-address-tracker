import 'leaflet/dist/leaflet.css'
import './style.css'
import L from 'leaflet'
import iconLocation from './assets/images/icon-location.svg'
import { getGeolocationdata, getbyDefaultipadress, getbyDomain, getbyIpadress, focusStyle, removeLoad } from './functions.js'

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
  const container = L.DomUtil.get('map');
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
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google map'
});
const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google map'
});
const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
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
  const map = L.map('map', { layers: [osm] }).setView([lat, lon], 13);
  // add layer control
  L.control.layers(baseMaps).addTo(map);
  // pop up message
  const message = `<b>your ip address located in ${userPlaceName}, ${userCountryName}`
  const marker = L.marker([lat, lon], { alt: `${userPlaceName}` }).addTo(map).bindPopup(`${message}`).openPopup();
  // add icon
  const blackIcon = L.icon({
    iconUrl: `${iconLocation}`,
    iconSize: [40, 65], // size of the icon
    iconAnchor: [16, 80]
  });
  // add event on icon click
  L.marker([lat, lon], { icon: blackIcon }).addTo(map).on('click', () => {
    marker.bindPopup(`${message}`).openPopup();
  });
}

const locationBydefault = getbyDefaultipadress().then(response => {
  return response
});
const data = getGeolocationdata(locationBydefault)
data.then(response => {
  latitude = Number(response.latitude);
  longitude = Number(response.longitude);
  userCountryName = response.countryName;
  userPlaceName = response.region;
  updateDom(response)
  removeLoad(loadArray, 'skeleton-text')
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
    const locationByip = getbyIpadress(value).then(response => {
      return response
    });
    const data = getGeolocationdata(locationByip)
    data.then(response => {
      latitude = Number(response.latitude);
      longitude = Number(response.longitude);
      userCountryName = response.countryName;
      userPlaceName = response.region;
      clearMap();
      maps(latitude, longitude);
      updateDom(response);
      removeLoad(loadArray, 'skeleton-text')
      userInput.classList.add('valid');
      errorMsg.textContent = '';
    }).catch(err => {
      console.log(err)
      userInput.classList.add('invalid');
      errorMsg.textContent = 'no data found in this ip address';
    });
  } else if (regexDomain.test(value)) {
    const locationBydomain = getbyDomain(value).then(response => {
      return response
    })
    const data = getGeolocationdata(locationBydomain)
    data.then(response => {
      latitude = Number(response.latitude);
      longitude = Number(response.longitude);
      userCountryName = response.countryName;
      userPlaceName = response.region;
      clearMap();
      maps(latitude, longitude);
      updateDom(response);
      removeLoad(loadArray, 'skeleton-text');
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
  focusStyle(userInput, errorMsg)
})
