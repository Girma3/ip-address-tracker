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
export { getGeolocationdata, getbyDefaultipadress, getbyDomain, getbyIpadress, focusStyle }
