var imgback = ["https://m.media-amazon.com/images/I/81ps2f268cL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg",
    " https://m.media-amazon.com/images/I/715V9Q6T+6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81xJEV8EKhL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg"
]

var cont = document.getElementById("backimage");
var i = 0;
setInterval(() => {

    cont.innerHTML = ""
    if (i == imgback.length - 1) {
        i = 0;
    }

    var im = document.createElement("img");
    im.src = imgback[i]
    console.log(imgback[i]);
    i++;
    cont.append(im);

}, 2000);


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
        alert("User already have account")
        window.open("index.html")
    } else {
        alert("Signup Successfull")
        userdata.push(obj)
    }


    console.log(userdata)
    localStorage.setItem("logindetail", JSON.stringify(userdata));
})

var inp = document.querySelectorAll("input")
console.log(inp)