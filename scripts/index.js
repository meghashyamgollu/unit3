var home = document.createElement("div");
home.setAttribute("class", "home");
home.textContent = "Home";

var login = document.createElement("div");
login.setAttribute("class", "login");
login.textContent = "Login";
login.addEventListener("click", function(){
    window.location.href = login.html;
})

var signup = document.createElement("div");
signup.setAttribute("class", "signup");
signup.textContent = "signup";

var log = document.createElement("div");
log.setAttribute("class", "log");
log.append(login, signup);

var nav = document.querySelector(".navbar");
nav.append(home, log);

let data = [];

fetch("www.themealdb.com/api/json/v1/1/random.php") //not getting api
.then(function(res){
    return res.json();
}).then(function (res){
    data = res.data;
    console.log(data);
})