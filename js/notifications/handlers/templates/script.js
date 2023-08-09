
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {

  if (password.value === atob('MTQyMDE5MTYxODIyMjU=')) {
    setTimeout("location.assign(atob('aHR0cHM6Ly9ocnVwa2llLnJ1L2hydXBraWUtY2FtcC1zdWNjZXNzLw=='))", 1000);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.assign(atob('aHR0cHM6Ly9ocnVwa2llLnJ1L2hydXBraWUtY2FtcC1mYWlsLw=='))", 1000);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)
