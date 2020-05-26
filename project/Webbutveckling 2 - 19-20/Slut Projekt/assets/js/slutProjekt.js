var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");
var sectionImages = document.querySelector(".images");
var headerScroll = document.querySelector("header");
var cartBtn = document.querySelector("#cartBtn");
var cartXBtn = document.querySelector(".fa-times");
var cart = document.querySelector("#cart");
var mainContent = document.querySelector("main");
var buyBtn1 = document.querySelector(".buyBtn1");
var buyBtn2 = document.querySelector(".buyBtn2");

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
        product: "assets/images/1660.png",
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
    var name = document.createElement("p");
    name.innerHTML = products[0].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[0].product;
    cart.appendChild(product);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    cart.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        cart.removeChild(product);
        cart.removeChild(name);
        cart.removeChild(removeBtn);

    };    
});
buyBtn2.addEventListener("click", function() {
    var name = document.createElement("p");
    name.innerHTML = products[1].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[1].product;
    cart.appendChild(product);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    cart.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        cart.removeChild(product);
        cart.removeChild(name);
        cart.removeChild(removeBtn);

    };    
});

