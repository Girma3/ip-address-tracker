// function to get ip when user load the page using ipify api
async function getDefaultip () {
  try {
    const request =
      await fetch('https://api.ipify.org?format=json', { mode: 'cors' })
    const data = await request.json()
    console.log(data)
    return data
  } catch {
    console.log('no data found for this default ip ')
  }
}
// get information using ip from https://ip-api.com
// function that accept ip address and get information from ip-api and return promise
async function getInfobyip (ip) {
  console.log(ip)
  const params = [
    { query: `${ip}` }
  ]
  //  use generic number in url to select the promise  which property should contain
  const url = 'http://ip-api.com/batch?fields=33615871'
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(params)
  };
  try {
    const request = await fetch(url, options);
    const data = await request.json();
    console.log(data)
    return data
  } catch {
    console.log('no data found with this ip')
  }
}

async function getUtc (region) {
  const url = `http://worldtimeapi.org/api/timezone/${region}`;
  try {
    const request = await fetch(url, { mode: 'cors' });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error fetching data:', error.message);
  }
}
// get ip  address by default
function userDeafultIp () {
  const ip = getDefaultip();
  ip.then(response => {
    const data = response;
    const userIp = data.ip;
    // get info using ip
    const info = getInfobyip(userIp)
    info.then(response => {
      const timeZone = response[0].timezone;
      // get utc using ip
      const utc = getUtc(timeZone)
      utc.then(response => {
        const utcOffset = response.utc_offset
        console.log(utcOffset)
      });
    });
  });
}
const ip = '8.8.8.8'
// const info = getInfobyip(ip);
// info.then(response => {
//   console.log(response)
// })
function userInfobyip (ip) {
  const info = getInfobyip(ip);
  info.then(response => {
    const timeZone = response[0].timezone;
    console.log(timeZone)
    const utc = getUtc(timeZone);
    utc.then(response => {
      const utcOffset = response.utc_offset
      console.log(utcOffset)
    })
  })
}
const domain = 'google.com'
async function userInfobydomain (domain) {
  const key = '5793b054c82e47f082fd1491eec2df0e'
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=dns.${domain}`;
  try {
    const request = await fetch(url, { mode: 'cors' });
    const data = await request.json();
    return data
  } catch (error) {
    console.log("can't find this domain", error.message)
  }
}
const bydom = userInfobydomain(domain)
bydom.then(response => {
  console.log(response)
})
