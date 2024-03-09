// function to fetch data from https://geo.ipify.org to get
// ip aadressa and location name,region(addis,Ethiopia)
async function getIpadress () {
  try {
    const request =
    await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_C8EiGK0u9YbO7pyGFv9SHQiHAg8Er', { mode: 'cors' })
    const data = await request.json()
    console.log(data)
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
      return response.location.region
    })
    const locationNumber = await getGeocode(locationName)
    console.log(locationNumber)
    return locationNumber[0]
  } catch {
    console.log("can't find data for location or ip")
  }
}

export { getGeolocationdata }
