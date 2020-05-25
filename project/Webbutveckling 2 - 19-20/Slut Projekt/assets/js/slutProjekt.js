var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");
var sectionImages = document.querySelector(".images");
var headerScroll = document.querySelector("header");
var cartBtn = document.querySelector("#cartBtn");
var cartXBtn = document.querySelector(".fa-times");
var cart = document.querySelector("#cart");
var mainContent = document.querySelector("main");
var buyBtn1 = document.querySelector(".buyBtn1");
var cartProducts = [];

var marginPx = 0;

btnNextImage.addEventListener("click", function() {
    if(marginPx < -1000) {
        marginPx = 0
        sectionImages.style.marginLeft = marginPx + "px";
    } else {
        marginPx = marginPx + (-1000);
        sectionImages.style.marginLeft = marginPx + "px";
    }
    

});

btnPrevImage.addEventListener("click", function() {
    if(marginPx > (-1000)) {
        marginPx = (-2000);
        sectionImages.style.marginLeft = marginPx + "px";
    } else {
        marginPx = marginPx + 1000; 
        sectionImages.style.marginLeft = marginPx + "px";
    }
    
    
});

cartBtn.addEventListener("click", function() {
    cart.style.visibility = "visible";
    cart.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";    
});

cartXBtn.addEventListener("click", function() {
    cart.style.visibility = "hidden";
    cart.style.opacity = 0;
    mainContent.style.filter = "blur(0px)";
});

var products = [
    {
        name: "RTX GEFORCE 2080ti",
        product: "assets/images/2080ti.png",
        price: "14.999 kr"
    },
    {
        name: "GTX GEFORCE 1060",
        product: 1,
        price: "2.990 kr"
    },
    {
        name: "GTX GEFORCE 1080",
        product: 1,
        price: "7.999 kr"
    },
    {
        name: "GTX GEFORCE 970",
        product: 1,
        price: "1.099 kr"
    },
    {
        name: "GTX GEFORCE 1070",
        product: 1,
        price: "5.390 kr"
    }
];

buyBtn1.addEventListener("click", function() {
    
    // var graphicsCard1 = document.createElement("img");

    // graphicsCard1.classList.add("createdImages");
    // graphicsCard1.src = products[0].product;
    // cart.appendChild(graphicsCard1);
    // cartProducts.push(graphicsCard1);

    cart.innerHTML += "<p>" + products[0].name + "</p>" + "<img src='" + products[0].product + "'>" + "<p onclick='removeFunction'> X </p>";

    var xoxo = cart.innerHTML;
    console.log(xoxo);

    cartProducts.push(xoxo);
    console.log(cartProducts);
});

function removeFunction() {
    cartProducts.splice(this,1);
}