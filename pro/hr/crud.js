var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href ='http://localhost:8000/pro/index.html';
}

if (jwt != null) {
  window.location.href ='http://localhost:8000/pro/hr/crud.html';
  

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





// reading users
function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/users");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      for (let object of objects) {
        trHTML += '<tr>'; 
        trHTML += '<td>'+object['id']+'</td>';
        trHTML += '<td>'+object['firstName']+'</td>';
        trHTML += '<td>'+object['lastName']+'</td>';
        trHTML += '<td>'+object['phoneNumber']+'</td>';
        trHTML += '<td>'+object['emailAddress']+'</td>';
        trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
        trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  };
}

loadTable();


//create users
function showUserCreateBox() {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="id" type="hidden">' +
      '<input id="fname" class="swal2-input" placeholder="First">' +
      '<input id="lname" class="swal2-input" placeholder="Last">' +
      '<input id="phoneNumber" class="swal2-input" placeholder="phoneNumber">' +
      '<input id="email" class="swal2-input" placeholder="Email">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })
}

function userCreate() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/users");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "firstName": fname, "lastName": lname, "phoneNumber": phoneNumber, "emailAddress": email
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
} 

//update usres
function showUserEditBox(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/users/"+id);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      Swal.fire({
        title: 'Edit User',
        html:
          '<input id="id" type="hidden" value='+objects['id']+'>' +
          '<input id="fname" class="swal2-input" placeholder="First" value="'+objects['firstName']+'">' +
          '<input id="lname" class="swal2-input" placeholder="Last" value="'+objects['lastName']+'">' +
          '<input id="username" class="swal2-input" placeholder="Username" value="'+objects['phoneNumber']+'">' +
          '<input id="email" class="swal2-input" placeholder="Email" value="'+objects['emailAddress']+'">',
        focusConfirm: false,
        preConfirm: () => {
          userEdit();
        }
      })
    }
  };
}

function userEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phoneNumber = document.getElementById("username").value;
  const email = document.getElementById("email").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT","http://localhost:3000/users/"+id);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id, "firstName": fname, "lastName": lname, "phoneNumber": phoneNumber, "emailAddress": email, 
    "avatar": "https://www.mecallapi.com/users/cat.png"
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}

// deleted users
function userDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/users/"+id);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    } 
  };
}


//search
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}