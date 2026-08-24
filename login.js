 const passInput = document.getElementById("pass");
const checkbox = document.getElementById("show");

checkbox.addEventListener("change", function () {
    passInput.type = this.checked ? "text" : "password";
});

function login(){
 const user = document.querySelector("#username").value;
 const pass = document.querySelector("#pass").value;
 
 if(user === "Prototype" &&  pass === "123456789"){
     window.location = "dashboard.html";
 }else{
     alert("Invalid User or Password")
 }
}