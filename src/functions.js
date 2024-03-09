// function to fetch data from https://geo.ipify.org to get ip address and location name,region
async function getIpadress () {
  try {
    const request =
    await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_C8EiGK0u9YbO7pyGFv9SHQiHAg8Er', { mode: 'cors' })
    const data = await request.json()
    return data
  } catch {
    console.log('no data found for ip or domain')
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
async function getGeolocationdata () {
  try {
    const locationName = await getIpadress().then(response => {
      return response
    })
    // array of location
    console.log(locationName)
    // get info aboout the using ip adress
    const region = locationName.location.region;
    const countryName = locationName.location.country;
    const ipAdress = locationName.ip;
    const isp = locationName.isp;
    const timeZone = locationName.location.timezone;
    const asnNumber = locationName.as.asn;
    // get geolocation
    const locationInfo = await getGeocode(region)
    const longitude = await locationInfo[0].lon
    const latitude = await locationInfo[0].lat
    console.log(longitude)
    return { longitude, latitude, countryName, region, ipAdress, isp, timeZone, asnNumber }
  } catch {
    console.log("can't find data for location or ip")
  }
}
export { getGeolocationdata, getIpadress }
