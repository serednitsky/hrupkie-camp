
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {

  if (password.value === atob('MTQyMDE5MTYxODIyMjU=')) {
    password.value = ''
    setTimeout("location.assign(atob('aHR0cHM6Ly9ocnVwa2llLnJ1L2hydXBraWUtY2FtcC1zdWNjZXNzLz91dG1fc291cmNlPWNhbXAmdXRtX21lZGl1bT1nYW1lJnV0bV9jYW1wYWlnbj1jb3JyZWN0'))", 1000);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.assign(atob('aHR0cHM6Ly9ocnVwa2llLnJ1L2hydXBraWUtY2FtcC1mYWlsLz91dG1fc291cmNlPWNhbXAmdXRtX21lZGl1bT1nYW1lJnV0bV9jYW1wYWlnbj1pbmNvcnJlY3Q='))", 1000);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)
