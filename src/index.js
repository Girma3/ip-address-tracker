import 'leaflet/dist/leaflet.css'
import './style.css'
import L from 'leaflet'
import iconLocation from './assets/images/icon-location.svg'
import { getGeolocationdata } from './functions.js'
let userLongtiude;
let userLatitude;
let userCountryName;
let userPlaceName;
const skeletonPage = document.querySelector('main');
const userIp = document.querySelector('[data-ip-address]');
const userLocation = document.querySelector('[data-user-location]');
const userTimezone = document.querySelector('[data-user-timezone]')
const userIsp = document.querySelector('[data-user-isp]');
const userAsn = document.querySelector('[data-user-asn]');

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
getGeolocationdata().then(response => {
  userLatitude = Number(response.latitude)
  userLongtiude = Number(response.longitude)
  userCountryName = response.countryName
  userPlaceName = response.region
  // update dom
  userIp.textContent = response.ipAdress;
  userIsp.textContent = response.isp;
  userTimezone.textContent = response.timeZone;
  userLocation.textContent = `${response.region}, ${response.countryName}`;
  userAsn.textContent = response.asnNumber;
  //   console.log(userCountryName)
  console.log(response)

  maps(userLatitude, userLongtiude)
}).catch(err => {
  console.log(err, "can't find data")
})
