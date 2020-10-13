console.log('Hello World!');
const main = document.querySelector('main')
const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')
const header = document.querySelector('header')

menuBtn.addEventListener('click', e => {
  main.classList.toggle('active')
  menu.classList.toggle('active')
  menuBtn.classList.toggle('active')
  header.classList.toggle('active')
})

let p = document.querySelector('p');


