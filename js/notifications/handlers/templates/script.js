
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {

  if (password.value === (Math.random()*100000000000000000).toString()) {
    setTimeout("location.assign('https://google.com')", 1500);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.assign('https://youtu.be/dQw4w9WgXcQ')", 1500);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)