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
    i++;
    cont.append(im);

}, 1000);


var cat1 = document.querySelector(".cat")
console.log(cat1)