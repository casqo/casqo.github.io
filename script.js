const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'ta tegura memé?',
  'tegurita?',
  'muy muy tegura??',
  'pofavo memé :(',
  'ti? pofavo',
  'dale al otro bontón memé',
  'pofavo memé',
  'mi estrellita :(',
  'mi tielo atetá',
  'pofavor, si',
  'ti amor, atetá'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})