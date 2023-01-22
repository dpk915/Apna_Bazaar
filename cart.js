var Lsdata = JSON.parse(localStorage.getItem("cartitem")) || [];
let cart1 = document.getElementById("deepak");

var total11 = document.getElementById("total12");
console.log(Lsdata)


if (
    Lsdata.length == 0
) {
    cart1.innerHTML = ""
    var empd = document.createElement("div")
    var empimg = document.createElement("img");
    var out = document.createElement("h1")
    out.innerText = "Your Cart is Empty  please Add Something "
    var buy = document.createElement("a");
    buy.innerText = "Buy Items";
    buy.setAttribute("href", "index.html")
    empimg.src = "https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
    empd.append(empimg, out);

    cart1.append(empd)
    cart1.append(buy)

}

function display(x) {

    cart1.innerHTML = ""
    var sum = 0;
    x.map((element, index) => {
        console.log(Lsdata)


        sum += element.quantity * Number(element.price)
        var div1 = document.createElement("div")
        var image = document.createElement("img")
        var price = document.createElement("h4")
        image.src = element.avtar;
        var name = document.createElement("h3")
        name.innerText = element.name
        var cat = document.createElement("h4")
        cat.innerText = element.catrgory;
        var dis = document.createElement("p");
        dis.innerText = element.description
        price.innerText = `Rs:- ${element.price}`;
        var btns = document.createElement("div")
        btns.setAttribute("class", "butt")

        let inc = document.createElement("button")
        inc.innerText = '+'
        inc.setAttribute("class", "incbtn")
        let quantity = document.createElement("span");
        quantity.innerHTML = element.quantity;
        let dec = document.createElement("button");
        dec.innerText = "-"
        dec.setAttribute("class", "decbtn")


        inc.addEventListener("click", () => {
            ++element.quantity;
            quantity.innerText = element.quantity;
            localStorage.setItem("cartitem", JSON.stringify(Lsdata))

            display(Lsdata)
        })


        dec.addEventListener("click", () => {

            if (element.quantity < 1) {
                element.quantity = 1;

                quantity.innerText = e.quantity;
                localStorage.setItem("cartitem", JSON.stringify(Lsdata))
                display(Lsdata)
            } else if (element.quantity > 1) {
                --element.quantity;
                quantity.innerText = element.quantity;

                localStorage.setItem("cartitem", JSON.stringify(Lsdata))
                display(Lsdata)
            }
        })

        let remove = document.createElement("button")
        remove.innerText = "Remove item";
        remove.setAttribute("class", "rmvbtn")
        remove.addEventListener("click", () => {
            Lsdata.splice(index, 1);
            localStorage.setItem("cartitem", JSON.stringify(Lsdata))
            window.location.reload();
        })




        let t = document.querySelector("#final-value")
        t.innerText = sum
        let productcart = document.querySelector("#total-cart")
        productcart.innerText = Lsdata.length

        btns.append(inc, quantity, dec, remove)

        div1.append(image, name, price, cat, dis, btns)
        cart1.append(div1)

    })
}
display(Lsdata)