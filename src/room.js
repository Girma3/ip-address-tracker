import firstHero from './assets/images/desktop-image-hero-1.jpg'
import secondHero from './assets/images/desktop-image-hero-2.jpg'
import thirdHero from './assets/images/desktop-image-hero-3.jpg'
import mobileFirsthero from './assets/images/mobile-image-hero-1.jpg'
import mobileSecondHero from './assets/images/mobile-image-hero-2.jpg'
import mobileThirdHero from './assets/images/mobile-image-hero-3.jpg'

const firstTitle = 'Discover innovative ways to decorate'
const secondTitle = 'We are available all acress the globe'
const thirdTitle = 'Manufactured with the best materials'

const firstArticle = `
                    we provide unamatched quality,comfort and style for property
                    owners across the country.Our experts combine form and function in 
                    bringing your vision to life.Create a room in your own style with 
                    our collection and make your property a reflection of you and what you love.
                   `
const secondArticle = `
                    With stores all over the world.it's easy for you to find furniture for
                    your home or place of budiness.Locally,we're in most major cities throughout
                    the country .Find the branch nearest you using our store locator.Any questions?
                    Don't hesitate to contact us today.
                    `
const thirdArticle = `
                    Our modern furniture store provide a high level of quality.Our company
                    has invested in advanced technology to ensure that every product is made as 
                    perfect and as consistent as possible.With three decades of experience in this 
                    industry.we understand what customers want for their home and office.
                    `

const titles = [firstTitle, secondTitle, thirdTitle]
const articles = [firstArticle, secondArticle, thirdArticle]
const product = [
  {
    productTitle: titles[0],
    productArticle: articles[0],
    productImg: `${firstHero}`,
    mobileImg: `${mobileFirsthero}`,
    imgAlt: 'chair and table'
  },

  {
    productTitle: titles[1],
    productArticle: articles[1],
    productImg: `${secondHero}`,
    mobileImg: `${mobileSecondHero}`,
    imgAlt: 'yellow and white chairs'
  },
  {
    productTitle: titles[2],
    productArticle: articles[2],
    productImg: `${thirdHero}`,
    mobileImg: `${mobileThirdHero}`,
    imgAlt: 'black chair'
  }
]
// function that take two dom elments one to append image other article
// and the array contain image and article as object
function slider (array, domElementOne, domElementtwo, index) {
  array.forEach(element => {
    if (array.indexOf(element) === index) {
      appendElement(domElementOne, domElementtwo, index)
    }
  })
}

function appendElement (elementone, elementTwo, index) {
  const screenWidth = window.screen.width
  elementone.textContent = ''
  elementTwo.textContent = ''
  const img = document.createElement('img')
  const productTitle = document.createElement('h1')
  const productDetail = document.createElement('p')
  productDetail.style.animation = 'zoomin 2s'
  productTitle.style.animation = 'zoomin 2s'
  img.style.animation = 'zoomin 1s'
  img.alt = product[index].imgAlt

  if (screenWidth >= 577) {
    img.src = product[index].productImg
  } else if (screenWidth <= 577) {
    img.src = product[index].mobileImg
  }
  productTitle.textContent = product[index].productTitle
  productDetail.textContent = product[index].productArticle
  elementone.appendChild(img)
  elementTwo.appendChild(productTitle)
  elementTwo.appendChild(productDetail)
}

export { product, appendElement, slider }
