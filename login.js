var userdata = JSON.parse(localStorage.getItem("logindetail")) || [];

var uname = document.getElementById("number");
var login = document.getElementById("loginform")
login.addEventListener("submit", (e) => {
    e.preventDefault();

    var flag = false;
    userdata.forEach(element => {
        if (element.phonenum == uname.value) {
            var login = {
                user: uname.value,

            }
            flag = true;
        }

    });

    if (flag == true) {

        localStorage.setItem("number", JSON.stringify(uname.value))
        window.open("paaword.html")
    } else {
        alert("User not registered please create account")
    }
})