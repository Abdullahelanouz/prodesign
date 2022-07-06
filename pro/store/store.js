var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = 'http://localhost:8000/pro/index.html';
}
if (jwt != null) {
  window.location.href = 'http://localhost:8000/pro/store/store.html';
}
function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8000/php-auth-api/getUser.php");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", "Bearer "+jwt);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects["status"] == "ok") {
        const user = objects["user"]
       // document.getElementById("username").innerHTML = user["name"];
      }
    }
  };
}

loadUser();

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = '../../index.html';
}




const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = '../images/report_logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()