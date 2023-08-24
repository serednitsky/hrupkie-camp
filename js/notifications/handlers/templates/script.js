
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {
  if (password.value === atob('MTQyMDE5MTYxODIyMjU=')) {
    password.value = ''
    setTimeout("location.assign('https://hrupkie.ru/wp-content/uploads/2023/08/Deti-o-chude-gotovyj.pdf')", 1000);
    notification.classList.add('hidden')
  } else {
    password.value = ''
    setTimeout("location.assign(atob('aHR0cHM6Ly9ocnVwa2llLnJ1L2hydXBraWUtY2FtcC1mYWlsLz91dG1fc291cmNlPWNhbXAmdXRtX21lZGl1bT1nYW1lJnV0bV9jYW1wYWlnbj1pbmNvcnJlY3Q='))", 1000);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)
