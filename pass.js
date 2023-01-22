var numlogin = JSON.parse(localStorage.getItem("number"))
var logindata = JSON.parse(localStorage.getItem("logindetail"))
console.log(logindata)
console.log(numlogin)
var n = document.getElementById("lognumber")
if (numlogin == null) {
    window.open("login.html")
} else {
    n.innerText = `${numlogin}?`;
}
var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var pass1 = document.getElementById("pass").value;
    var flag = false;
    logindata.forEach(element => {
        if (element.phonenum == numlogin && element.pass == pass1) {
            JSON.stringify(localStorage.setItem("name", element.uname))
            flag = true
        }

    });
    if (flag == true) {
        alert("Login Succesful")
        window.open("index.html")
    } else {
        alert("incorrect password")
    }
    localStorage.removeItem("number")
})