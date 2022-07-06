var jwt = localStorage.getItem("jwt");

//login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST","http://localhost:8000/php-auth-api/login.php");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", objects['token']);
        console.log(objects['type-users']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed && objects['type-users']==1) {
            window.location.href = 'http://localhost:8000/pro/da/index.html';
          }else if (result.isConfirmed && objects['type-users']==2) {
            window.location.href = 'http://localhost:8000/pro/hr/crud.html';
          }else if (result.isConfirmed && objects['type-users']==3) {
            window.location.href = 'http://localhost:8000/pro/store/store.html';
          }

        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}