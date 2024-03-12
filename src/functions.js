// function to get ip when user load the page using ipify api
async function getDefaultip () {
  try {
    const request =
      await fetch('https://api.ipify.org?format=json', { mode: 'cors' })
    const data = await request.json()
    console.log(data)
    return data
  } catch (error) {
    console.log('no data found for this default ip '.error.message)
  }
}
// get information using ip from https://ipapi.co/#api
// function that accept ip address and get information from ip-api and return promise
//
async function getInfobyip (ip) {
  const url = `https://ipapi.co/${ip}/json/`
  try {
    const request = await fetch(url, { mode: 'cors' });
    const data = await request.json();
    console.log(data)
    return data
  } catch (error) {
    console.log(error, 'no data found')
  }
}

// function to hide error message on focus
function focusStyle (field, errDom) {
  field.addEventListener('focus', () => {
    if (field.className === 'invalid') errDom.style.display = 'none';
  });
  field.addEventListener('focusout', () => {
    if (field.className === 'invalid') {
      errDom.style.display = 'block';
    }
  });
}
export { getDefaultip, getInfobyip, focusStyle }
