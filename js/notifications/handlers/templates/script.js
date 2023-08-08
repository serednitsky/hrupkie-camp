
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {

  if (password.value === "12345") {
    setTimeout("location.assign('https://google.com')", 1000);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.assign('https://youtu.be/dQw4w9WgXcQ')", 1000);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)
