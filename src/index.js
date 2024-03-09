import 'leaflet/dist/leaflet.css'
import './style.css'
import L from 'leaflet'
import iconLocation from './assets/images/icon-location.svg'
import { getGeolocationdata } from './functions.js'
let userLongtiude;
let userLatitude;
let userCountryName;
let userPlaceName;
// api to get long and lat

getGeolocationdata().then(response => {
  userLatitude = Number(response.latitude)
  userLongtiude = Number(response.longitude)
  userCountryName = response.location.country
  userPlaceName = response.location.region

  maps(userLatitude, userLongtiude)
}).catch(err => {
  console.log(err, "can't find data")
})
// layers
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

// add map to the screen

// const map = L.map('map').flyTo([UserLatitude, userLongtiude], 20);
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
