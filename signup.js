var userdata = JSON.parse(localStorage.getItem("logindetail")) || [];

var form1 = document.getElementById("signup");
form1.addEventListener("submit", function(e) {
    e.preventDefault();
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value
    var obj = {
        uname: username,
        phonenum: phone,
        pass: password
    }
    var member = false;
    userdata.forEach(element => {
        if (element.phonenum == phone) {
            member = true;
        }
    });


    if (member == true) {

        alert("User already have account");


    } else {
        alert("Signup Successfull")
        window.open("login.html")
        userdata.push(obj)
        localStorage.setItem("logindetail", JSON.stringify(userdata));
    }
})