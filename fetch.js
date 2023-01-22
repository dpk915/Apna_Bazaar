/**  let data1;
fetch("https://63c685da4ebaa80285479fa1.mockapi.io/products")
    .then(response => response.json())
    .then((data) => {
        data1 = data,
            console.log(data1)


    })
    .catch(err => console.error(err)); **/

var d = [{
        "price": 2149,
        "name": "Guitar",
        "avtar": "https://m.media-amazon.com/images/I/81rEbqDbPUL._AC_UL320_.jpg",
        "catrgory": "Music",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "1"
    },
    {
        "price": 250,
        "name": "Face wash",
        "avtar": "https://m.media-amazon.com/images/I/510wajKkEFL._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "2"
    },
    {
        "price": 200,
        "name": "car",
        "avtar": "https://m.media-amazon.com/images/I/31HzaJXPngL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Toys",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "id": "3"
    },
    {
        "price": 49,
        "name": "Chips",
        "avtar": "https://m.media-amazon.com/images/I/81tzFgAzZBL._AC_UL320_.jpg",
        "catrgory": "Kids",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "4"
    },
    {
        "price": 749,
        "name": "Shirt",
        "avtar": "https://m.media-amazon.com/images/I/511mroWTy+L._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "5"
    },
    {
        "price": 259,
        "name": "Bike for kids",
        "avtar": "https://m.media-amazon.com/images/I/71AabI76rtS._AC_UL320_.jpg",
        "catrgory": "Toys",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "6"
    },
    {
        "price": 55,
        "name": "Chips",
        "avtar": "https://m.media-amazon.com/images/I/619dV1y+7xL._AC_UL320_.jpg",
        "catrgory": "Kids",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "7"
    },
    {
        "price": 210,
        "name": "cream for face",
        "avtar": "https://m.media-amazon.com/images/I/61Yt+yfTk7L._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "8"
    },
    {
        "price": 510,
        "name": "Teddy toy for kids",
        "avtar": "https://m.media-amazon.com/images/I/41ZZohxXSBL._AC_UL320_.jpg",
        "catrgory": "Toy",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "9"
    },
    {
        "price": 600,
        "name": "shirt",
        "avtar": "https://m.media-amazon.com/images/I/51xnTXlLhaL._AC_UL320_.jpg",
        "catrgory": "kids",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "10"
    },
    {
        "price": 145,
        "name": "powder",
        "avtar": "https://m.media-amazon.com/images/I/5151YTsVZ5L._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "11"
    },
    {
        "price": 410,
        "name": "gun",
        "avtar": "https://m.media-amazon.com/images/I/81TOk2VlNwL._AC_UL320_.jpg",
        "catrgory": "Toy",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "12"
    },
    {
        "price": 120,
        "name": "book",
        "avtar": "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg",
        "catrgory": "Kids",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "13"
    },
    {
        "price": 265,
        "name": "Paint",
        "avtar": "https://m.media-amazon.com/images/I/619jdphRQHL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Kids",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "14"
    },
    {
        "price": 590,
        "name": "Car",
        "avtar": "https://m.media-amazon.com/images/I/71lRvV4yL0L._AC_UL320_.jpg",
        "catrgory": "Toys",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "15"
    },
    {
        "price": 51,
        "name": "Soap",
        "avtar": "https://m.media-amazon.com/images/I/71SIZqoJGFL._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "id": "16"
    },
    {
        "price": 84,
        "name": "lipstick",
        "avtar": "https://m.media-amazon.com/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "17"
    },
    {
        "price": 710,
        "name": "earphone",
        "avtar": "https://m.media-amazon.com/images/I/61sILScAOQL._AC_UY218_.jpg",
        "catrgory": "Music",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "18"
    },
    {
        "price": 5700,
        "name": "Speakers",
        "catrgory": "speaker",
        "avtar": "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/c/A21TJRUUN4KGV/4db249cd1e37b4688777323b270dfccb._AC_SL180_QL70_.jpg",
        "catrgory": "Music",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "19"
    },
    {
        "price": 201,
        "name": "Car",
        "avtar": "https://m.media-amazon.com/images/I/819KqXAbP-L._AC_UL320_.jpg",
        "catrgory": "Toys",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "20"
    },
    {
        "price": 83,
        "name": "Soap",
        "avtar": "https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_UL320_.jpg",
        "catrgory": "Beauty",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "21"
    },
    {
        "price": 96,
        "name": "Fish",
        "avtar": "https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SR400,600_.jpg",
        "catrgory": "Toy",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "22"
    },
    {
        "price": 399,
        "name": "Hair band for women Korean Style",
        "avtar": "https://m.media-amazon.com/images/I/61v+wo+j85L._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "id": "23"
    },
    {
        "price": 1800,
        "name": "Smart watch",
        "avtar": "https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SR400,600_.jpg",
        "catrgory": "Fashion",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "24"
    },
    {
        "price": 99,
        "name": "Go for Festival paperback",
        "avtar": "https://m.media-amazon.com/images/I/91G-sx4w5hL._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Books",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "id": "25"
    },
    {
        "price": 110,
        "name": "Grammar book",
        "avtar": "https://m.media-amazon.com/images/I/31k5Su2uZ0L._AC_UY218_.jpg",
        "catrgory": "Industrial",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "id": "26"
    },
    {
        "price": 220,
        "name": "George well paper back",
        "avtar": "https://m.media-amazon.com/images/I/517USUJAueL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        "catrgory": "Book",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "27"
    },
    {
        "price": 999,
        "name": "Real me wire less bluetooth",
        "avtar": "https://m.media-amazon.com/images/I/61+3f5q7T6S._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Electronic",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "28"
    },
    {
        "price": 1499,
        "name": "Realme tech life buds",
        "avtar": "https://m.media-amazon.com/images/I/61aasAbKvvL._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Electornics",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "id": "29"
    },
    {
        "price": 320,
        "name": "Shirt for kids",
        "avtar": "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/c/A21TJRUUN4KGV/4db249cd1e37b4688777323b270dfccb._AC_SL180_QL70_.jpg",
        "catrgory": "Kids",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "30"
    },
    {
        "price": 9999,
        "name": "Real-me Narzo",
        "avtar": " https: //m.media-amazon.com/images/I/81QqVNKWtML._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Electronics",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "31"
    },
    {
        "price": 620,
        "name": "HP Chromebook 11a, MediaTek MT8183 Processor 11.6 inch(29.5 cm) Thin",
        "avtar": "https://m.media-amazon.com/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Automotive",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "id": "32"
    },
    {
        "price": 60,
        "name": "Gloves for washing",
        "avtar": "https://m.media-amazon.com/images/I/71e1qKps-HL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Games",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "33"
    },
    {
        "price": 98,
        "name": "Gentel baby liquid Detergent",
        "avtar": "https://m.media-amazon.com/images/I/61770JV5jZS._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Baby",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "34"
    },
    {
        "price": 450,
        "name": "Skipping rope Blue",
        "avtar": "https://m.media-amazon.com/images/I/81A0QpZkPuL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Sports",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "35"
    },
    {
        "price": 250,
        "name": "Gold plated crystall",
        "avtar": "https://m.media-amazon.com/images/I/31YY+SAt4TL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Jewelery",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "36"
    },
    {
        "price": 21,
        "name": "Reebok men Runiing Shoes",
        "avtar": "https://m.media-amazon.com/images/I/71Y3KlD3sqL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Shoes",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "37"
    },
    {
        "price": 239,
        "name": "Wow Skin Science onion har oil",
        "avtar": "https://m.media-amazon.com/images/I/619jdphRQHL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "38"
    },
    {
        "price": 210,
        "name": "",
        "avtar": "https://m.media-amazon.com/images/I/61wsThyPVCL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "39"
    },
    {
        "price": 140,
        "name": "Setwet Hair Gel For Men",
        "avtar": "https://m.media-amazon.com/images/I/81SNKNHVaWL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "id": "40"
    },
    {
        "price": 199,
        "name": "Babby Unicorn Teddy bear",
        "avtar": "https://m.media-amazon.com/images/I/31QPmZKotmL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Kids",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "41"
    },
    {
        "price": 350,
        "name": "Baby station 100% Cotton",
        "avtar": "https://m.media-amazon.com/images/I/61dq1TjSV-L._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Kids",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "id": "42"
    },
    {
        "price": 149,
        "name": "Babique Unicorn Teddy Bear Plush Soft Toy",
        "avtar": "https://m.media-amazon.com/images/I/31l9X1z7+8S._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Toys",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "id": "43"
    },
    {
        "price": 571,
        "name": " Adorable Gold Plated Pearl Choker Necklace Set for Women ",
        "avtar": "https://m.media-amazon.com/images/I/81UaMFQR6kL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Jewelery",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "44"
    },
    {
        "price": 3999,
        "name": "cricket bat",
        "avtar": "https://m.media-amazon.com/images/I/71AabI76rtS._AC_UL320_.jpg",
        "catrgory": "Sports",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "45"
    },
    {
        "price": 1499,
        "name": "Shoes Rebook",
        "avtar": "https://m.media-amazon.com/images/I/41dXa2CVvPL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Fashion",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "id": "46"
    },
    {
        "price": 8000,
        "name": "CULT Sprt Mountain Cycle",
        "avtar": "https://m.media-amazon.com/images/I/81KklBn1LwL._AC_UY327_FMwebp_QL65_.jpg",
        "catrgory": "Sports",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "id": "47"
    },
    {
        "price": 1799,
        "name": "Play Shifu educational globe",
        "avtar": "https://m.media-amazon.com/images/I/81cXVO9SCYL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Toys",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "48"
    },
    {
        "price": 190,
        "name": "Lakme lip color Red",
        "avtar": "https://m.media-amazon.com/images/I/418W1my8EcL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Beauty",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "id": "49"
    },
    {
        "price": 1700,
        "name": "Shoes for men",
        "avtar": "https://m.media-amazon.com/images/I/31HzaJXPngL._AC_UL480_FMwebp_QL65_.jpg",
        "catrgory": "Shoes",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "id": "50"
    }
]

data1 = d
console.log(d)

var cartdata = JSON.parse(localStorage.getItem("cartitem")) || [];
var c = document.querySelector("#cont1212")
console.log(c)

function display(x) {

    c.innerHTML = ""
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

var slide = document.querySelector(".section-2")
var itemsearch = document.getElementById("searchbtn");
var itemname = document.getElementById("searchitem");
var item1 = document.getElementById("items");
var item2 = document.getElementById("container")
itemsearch.addEventListener("click", () => {
    item1.innerHTML = ""
    item2.innerHTML = ""
    c.innerHTML = ""
    slide.innerHTML = ""
    console.log(data1)

    let filterdata = data1.filter((e) => e.name.toLowerCase().includes(itemname.value.toLowerCase()))

    if (filterdata.length > 0) {
        display(filterdata)
    } else {
        var nofound = document.createElement("h1");
        nofound.innerText = "No item found"
        nofound.style.margin = "auto"
        c.append(nofound)
    }

})



var catagerized = document.getElementById("dropdown")
catagerized.addEventListener("change", () => {
    item1.innerHTML = ""
    item2.innerHTML = ""
    c.innerHTML = ""
    slide.innerHTML = ""

    if (catagerized.value == "1") {
        display(data1)

    } else {
        let filterdata = data1.filter((e) => e.catrgory == catagerized.value)
        display(filterdata)
    }

})