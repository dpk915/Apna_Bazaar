let data1;
var x = fetch("https://63c685da4ebaa80285479fa1.mockapi.io/products")
    .then(response => response.json())
    .then((data) => {
        data1 = data,
            console.log(data)


    })
    .catch(err => console.error(err));

var cartdata = JSON.parse(localStorage.getItem("cartitem")) || [];
var c = document.querySelector("#cont1")

function display(x) {


    x.forEach(element => {
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
        var btn = document.createElement("button");
        btn.innerText = "Add to cart"
        btn.addEventListener("click", () => {
            let added = cartdata.find((el) => el.id == element.id)
            if (added) {
                alert("already added to cart")
            } else {
                cartdata.push({...element, quantity: 1 });
                localStorage.setItem("cartitem", JSON.stringify(cartdata))
                btn.innerText = "Added"
            }

        })
        div1.append(image, name, price, cat, dis, btn)
        c.append(div1)

    });
}


var itemsearch = document.getElementById("searchbtn");
var itemname = document.getElementById("searchitem");
var item1 = document.getElementById("items");
var item2 = document.getElementById("container")
itemsearch.addEventListener("click", () => {
    item1.innerHTML = ""
    item2.innerHTML = ""
    c.innerHTML = ""
    console.log(itemname.value)
    let filterdata = data1.filter((e) => e.name.toLowerCase().includes(itemname.value.toLowerCase()))
    display(filterdata)

})



var catagerized = document.getElementById("dropdown")
catagerized.addEventListener("change", () => {
    item1.innerHTML = ""
    item2.innerHTML = ""
    c.innerHTML = ""
    let filterdata = data1.filter((e) => e.catrgory == catagerized.value)
    display(filterdata)
})