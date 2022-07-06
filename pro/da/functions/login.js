var jwt = localStorage.getItem("jwt");
console.log(jwt);
if (jwt == null) {
  window.location.href ='http://localhost:8000/pro/index.html';
}

if (jwt != null) {
  window.location.href ='http://localhost:8000/pro/da/index.html';
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
        document.getElementById("username").innerHTML = user["name"];
      }
    }
  };
}

loadUser();




function logout() {
  localStorage.removeItem("jwt");
  window.location.href = 'http://localhost:8000/pro/index.html';
}


