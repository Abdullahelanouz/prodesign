// navbar 
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="container">
        <a class="navbar-brand" href="index.html"><img class="img-fluid" src="./images/report_logo.png" width="80px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainmenu">
          <ul class="navbar-nav">
            <li class="nav-item">
              
              <a class="nav-link " aria-current="page" href="index.html"> الرئيسية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="Services.html">  الخدمات </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="about.html"> معلومات عنا </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="content.html">اتصل بنا</a>
            </li>
            <form class="form-inline">
              <button  class="btn btn-outline-success" type="button" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">تسجيل الدخول</button>
            </li>
          </ul>
        </form>
      </div>
      <!-- Strat Form login  -->
      <div id="id01" class="modal_login"  >
        <form class="modal-content animate" onsubmit="return login()">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="./images/Untitled-1.png" alt="Avatar" class="avatar">
          </div>
      
          <div class="containerfrom">
            <label for="uname"><b>اسم المستخدم </b></label>
            <input type="email" placeholder="ادخل اسم المستخدم" id="username"  required>
      
            <label for="psw"><b>كلمة السر</b></label>
            <input type="password" placeholder="ادخل كلمة السر"  id="password" required>
              
            <button class="btnone" type="submit">Login</button>
  
          </div>
      
          <div class="containerfrom" style="background-color:#005c22; padding: 10px;">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw">نسيت  <a href="#">كلمة السر؟</a></span>
          </div>
        </form>
      </div>
  
      <!-- End from login  -->

    `;
}

createNav();


//footer
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
            <!-- socail media -->
        <div class="social">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <section>
            <!-- Facebook -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #3b5998;"
                href="https://www.facebook.com/EgyptFutureProject/?ref=page_internal"
                role="button"
                target="_blank"
                ><i class="bi bi-facebook"></i></a>

            <!-- Twitter -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #55acee;"
                target="_blank"
                href="https://twitter.com/EgyptFutureProj?fbclid=IwAR3l-B0BjHnu_qxwgXlwMeYfPwApvHnpFFqWsWPP5qOZskfJJx78gTcYjhY"
                role="button"
                ><i class="bi bi-twitter"></i
            ></a>

            

            <!-- Instagram -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #ac2bac;"
                target="_blank"
                href="https://www.instagram.com/egyptfutureproject/?fbclid=IwAR07FDARmvuBAJqWP8z9rTHVUqGnWoQ7RedUuHC97lOkKuZqQmooeTk6Sn0"
                role="button"
                ><i class="bi bi-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #0082ca;"
                href="#!"
                role="button"
                ><i class="bi bi-linkedin"></i></i
            ></a>
            </section>
            <!-- Section: Social media -->
        </div>
        
        </div>

        <!-- Grid container -->

        <!-- Copyright -->
        <div class="Copyright">
        <div class="py-4 bg-dark text-white text-center position-reltive ">
        <div class="container">
            <p class="lead">
        حقوق النشر &copy; 2202 ادارة الرقمنة
        <a href="#" class="position-absolute buttom-0 end-0 ">
        
            <i class="bi bi-arrow-up-circle h2"></i>
        </a>
        </p>  
        </div>
        </div>
        </div>
        <!-- Copyright -->
    
    `;
}

createFooter();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}