const time = document.querySelector('.time')
const greet = document.querySelector('.greeting')
const name = document.querySelector('.name')
const focus = document.querySelector('.focus')

// Add Zero to min, sec

const addZero = (n) => {
  return n >= 10 ? n : '0' + n
}

// Catch name 

const inputName = document.querySelector('.input-name')
const button = document.querySelector('.btn')
const modal = document.querySelector('.modal')


const setName = () => {

  if (inputName.value.length >= 2) {
    localStorage.setItem('name', inputName.value)
    modal.classList.add('hide')
  } else {
    alert("Name must be more than 2 characters")
  }

  name.textContent = localStorage.getItem('name')
}

inputName.addEventListener('input', (evt) => {
  inputName.value = inputName.value.replace(/[^а-я/a-z\s]+/ig, "");
})

button.addEventListener('click', setName)

// Set time

const setTime = () => {

  const date = new Date()

  let hours = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  const amPm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12 || 12


  time.innerHTML = `${hours}:${addZero(min)}:${addZero(sec)} ${amPm}`

  setTimeout(setTime, 1000);

  setGreeting()
}


const setGreeting = () => {
  const date = new Date()

  let hours = date.getHours()

  if (hours < 12) {
    greet.innerHTML = "Good Morning, "
    document.body.style.background = "url('image/morning.jpg') center/cover no-repeat"
  } else if (hours < 18) {
    greet.innerHTML = "Good Afternoon, "
    document.body.style.background = "url('image/afternoon.jpg') center/cover no-repeat"
  } else {
    greet.innerHTML = "Good Evening, "
    document.body.style.background = "url('image/night.jpg') center/cover no-repeat"
  }
}


focus.addEventListener('keydown', (evt) => {
  if (evt.code === "Enter") {
    focus.blur()
  }
})

focus.addEventListener('blur', () => {
  localStorage.setItem('focus-text', focus.textContent)
})

name.textContent = localStorage.getItem('name')
focus.textContent = localStorage.getItem('focus-text')

setTime()