
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {

  if (password.value === atob('MTQyMDE5MTYxODIyMjU=')) {
    setTimeout("location.assign(atob('aHR0cHM6Ly9nb29nbGUuY29t'))", 1000);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.assign(atob('aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ=='))", 1000);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)
