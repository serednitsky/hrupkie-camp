
let password = document.getElementById('password')
let notification = document.getElementById('notification')

function checkPassword() {
  if (password.value === 'dqqq') {
    setTimeout("location.replace('https://hrupkie.ru/wp-content/uploads/BF_HRUPKIE_USTAV.pdf')", 1500);
    notification.classList.add('hidden')

  } else {
    setTimeout("location.replace('https://youtu.be/dQw4w9WgXcQ')", 1500);
    notification.classList.remove('hidden')
  }
}

let login = document.getElementById('login')
login.addEventListener('click', checkPassword)