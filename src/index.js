import 'leaflet/dist/leaflet.css'
import './style.css'
import L from 'leaflet'
import iconLocation from './assets/images/icon-location.svg'
import { getGeolocationdata } from './functions.js'
let userLongtiude;
let UserLatitude;
// api to get long and lat

getGeolocationdata().then(response => {
  UserLatitude = Number(response.latitude)
  userLongtiude = Number(response.longitude)

  maps(UserLatitude, userLongtiude)
}).catch(err => {
  console.log(err, "can't find data")
})

// add map to the screen

// const map = L.map('map').flyTo([UserLatitude, userLongtiude], 20);
function maps (lat, lon) {
  const map = L.map('map').setView([lat, lon], 13);
  const marker = L.marker([lat, lon]).addTo(map)
  marker.bindPopup('<b>based on your ip your address is here').openPopup();
  // icon
  const greenIcon = L.icon({
    iconUrl: `${iconLocation}`,
    iconSize: [40, 65] // size of the icon
  });
  L.marker([lat, lon], { icon: greenIcon }).addTo(map);

  console.log(userLongtiude, UserLatitude)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}
