import './style.css'
import { product, appendElement, slider } from './room'

const navHolder = document.querySelector('.nav-holder')
const maskDivs = document.querySelectorAll('.dark-mask')
const closeNavbtn = document.querySelector('.close-nav-btn')
const openNavbtn = document.querySelector('.open-nav-btn')
const firstNav = document.querySelector('.first-nav')
const secondNav = document.querySelector('.second-nav')
const btns = document.querySelector('[data-slider-btns]')
const divHolder = document.querySelector('[data-hero-holder]')
const article = document.querySelector('[data-article]')

closeNavbtn.addEventListener('click', () => {
  if (secondNav.getAttribute('data-spread') === 'true') {
    firstNav.setAttribute('data-spread', 'true')
    secondNav.setAttribute('data-spread', 'false')
    navHolder.classList.remove('close-nav-style')
    maskDivs.forEach(darkMask => {
      darkMask.classList.remove('black-mask')
    })
  }
})
openNavbtn.addEventListener('click', () => {
  if (secondNav.getAttribute('data-spread') === 'false') {
    firstNav.setAttribute('data-spread', 'false')
    secondNav.setAttribute('data-spread', 'true')
    navHolder.classList.add('close-nav-style')
    maskDivs.forEach(darkMask => {
      darkMask.classList.add('black-mask')
    })
  }
})

maskDivs.forEach(mask => {
  mask.addEventListener('click', () => {
    mask.style.backgroundColor = 'transparent'
  })
})
let sliderIndex = 0
const restrict = function () {
  if (sliderIndex >= product.length) {
    sliderIndex = 0
  } else if (sliderIndex < 0) {
    sliderIndex = product.length - 1
  }
  return sliderIndex
}
btns.addEventListener('click', (e) => {
  if (e.target.matches('[data-next-btn]')) {
    sliderIndex++
    restrict()
    slider(product, divHolder, article, sliderIndex)
  } else if (e.target.matches('[data-prev-btn]')) {
    sliderIndex--
    restrict()
    slider(product, divHolder, article, sliderIndex)
  }
})
function defaultSlider () {
  appendElement(divHolder, article, sliderIndex)
}
defaultSlider()
