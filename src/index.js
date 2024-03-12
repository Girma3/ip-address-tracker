import 'leaflet/dist/leaflet.css'
import './style.css'
import L from 'leaflet'
import iconLocation from './assets/images/icon-location.svg'
import { getDefaultip, getInfobyip, focusStyle } from './functions'
const skeletoText = document.querySelectorAll('.skeleton-text');
const skeletonMap = document.querySelector('.skeleton')
const errorMsg = document.querySelector('[data-error-msg]');
const userInput = document.querySelector('.user-input');
const submitBtn = document.querySelector('[data-location-btn]');
const userIpaddress = document.querySelector('[data-ip-address]');
const userLocation = document.querySelector('[data-user-location]');
const userTimezone = document.querySelector('[data-user-timezone]')
const userIsp = document.querySelector('[data-user-isp]');
const loadArray = [...skeletoText];
let latitude;
let longitude;
let userCountryName;
let userPlaceName;
// function to clear the  map before redraw again
function clearMap () {
  const container = L.DomUtil.get('map');
  if (container != null) {
    container._leaflet_id = null;
  }
}
// function to remove load element(skeleton text class)
function removeLoad (array, classname) {
  array.forEach(element => {
    element.classList.remove(classname)
  });
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
function maps (lat, lon) {
  // default map layer is osm
  const map = L.map('map', { layers: [googleHybrid] }).setView([lat, lon], 13);
  // add layer control
  L.control.layers(baseMaps).addTo(map);
  // pop up message
  const message = `<b>The ip address located in ${userPlaceName}, ${userCountryName}`
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
// get ip address on load
const ip = getDefaultip();
ip.then(response => {
  const data = response;
  const userIp = data.ip;

  // get info using ip
  const info = getInfobyip(userIp)
  info.then(response => {
    latitude = response.latitude;
    longitude = response.longitude;
    userCountryName = response.country_name;
    userPlaceName = response.city;
    // update dom element
    userIpaddress.textContent = response.ip;
    userLocation.textContent = `${response.city}, ${response.region_code}`;
    userTimezone.textContent = response.utc_offset;
    userIsp.textContent = response.org;
    skeletonMap.classList.remove('.skeleton');
    removeLoad(loadArray, 'skeleton-text');
    clearMap();
    maps(latitude, longitude)
  });
});
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = userInput.value;
  const regexIp = /^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$/;
  if (regexIp.test(value)) {
    const userIp = value;
    const info = getInfobyip(userIp)
    info.then(response => {
      latitude = response.latitude;
      longitude = response.longitude;
      userCountryName = response.country_name;
      userPlaceName = response.city;
      // dom elment
      userIpaddress.textContent = response.ip;
      userLocation.textContent = `${response.city}, ${response.region_code}`;
      userTimezone.textContent = response.utc_offset;
      userIsp.textContent = response.org;
      clearMap();
      maps(latitude, longitude)
      userInput.classList.add('valid');
      errorMsg.textContent = '';
    });
  } else if (regexIp.test(value) === false) {
    userInput.classList.add('invalid');
    errorMsg.textContent = 'no data found, please check the format.';
  }
});
userInput.addEventListener('focus', () => {
  focusStyle(userInput, errorMsg)
});
