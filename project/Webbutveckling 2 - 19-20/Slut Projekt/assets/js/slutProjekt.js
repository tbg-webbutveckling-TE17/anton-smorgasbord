var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");

var sectionImages = document.querySelector(".images");

var headerScroll = document.querySelector("header");

var spec = document.querySelector("#specifications");
var specXBtn = document.querySelector(".close")

var cartBtn = document.querySelector("#cartBtn");
var cartXBtn = document.querySelector(".fa-times");
var cart = document.querySelector("#cart");

var mainContent = document.querySelector("main");

var buyBtn1 = document.querySelector(".buyBtn1");
var buyBtn2 = document.querySelector(".buyBtn2");
var buyBtn3 = document.querySelector(".buyBtn3");
var buyBtn4 = document.querySelector(".buyBtn4");
var buyBtn5 = document.querySelector(".buyBtn5");
var buyBtn6 = document.querySelector(".buyBtn6");
var buyBtn7 = document.querySelector(".buyBtn7");
var buyBtn8 = document.querySelector(".buyBtn8");
var buyBtn9 = document.querySelector(".buyBtn9");
var buyBtn10 = document.querySelector(".buyBtn10");

var specBtn1 = document.querySelector(".specBtn1");
var specBtn2 = document.querySelector(".specBtn2");
var specBtn3 = document.querySelector(".specBtn3");
var specBtn4 = document.querySelector(".specBtn4");
var specBtn5 = document.querySelector(".specBtn5");
var specBtn6 = document.querySelector(".specBtn6");
var specBtn7 = document.querySelector(".specBtn7");
var specBtn8 = document.querySelector(".specBtn8");
var specBtn9 = document.querySelector(".specBtn9");
var specBtn10 = document.querySelector(".specBtn10");


var totalPrice = document.querySelector(".totalPrice");
var productPrice = 0

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

specBtn1.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Poggers not gonna lie very poggers";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn2.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Cringe";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn3.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Hm.... maybe";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn4.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "I don't know, ask an expert";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn5.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Wow, you don't need to get mad just because I don't know anything about these things";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn6.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Okej, jag kom precis på att jag har en svensk sida... ajdå.";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn7.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Tänk om jag faktiskt hade skrivit specifikationerna här istället så hade det sett mycket snyggare ut.";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn8.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Den här processorn skulle jag gärna vilja ha.";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn9.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "Varför? Jag vet inte.";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
});
specBtn10.addEventListener("click", function() {
    spec.style.visibility = "visible";
    spec.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";
    
    var specification = document.createElement("p");
    specification.innerHTML = "I'm starting to think that these specifications ain't specifications really.";
    spec.appendChild(specification);

    specXBtn.addEventListener("click", function() {
        spec.style.visibility = "hidden";
        spec.style.opacity = 0;
        mainContent.style.filter = "blur(0px)";
    
        spec.removeChild(specification);
    });
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
        price: 14999
    },
    {
        name: "GTX GEFORCE 1060",
        product: "assets/images/1660.png",
        price: 2990
    },
    {
        name: "GTX GEFORCE 1080",
        product: "assets/images/1080.png",
        price: 7999
    },
    {
        name: "GTX GEFORCE 970",
        product: "assets/images/970.png",
        price: 1099
    },
    {
        name: "GTX GEFORCE 1070",
        product: "assets/images/1070.png",
        price: 5390
    },
    {
        name: "RYZEN 9 - 3900X",
        product: "assets/images/ryzen9.png",
        price: 10999
    },
    {
        name: "RYZEN 7 - 3700X",
        product: "assets/images/ryzen7.png",
        price: 4790
    },
    {
        name: "Intel Core i9 - 9900K",
        product: "assets/images/i9.png",
        price: 10000
    },
    {
        name: "Intel Core i7 - 9700",
        product: "assets/images/i7.png",
        price: 5790
    },
    {
        name: "Intel Core i5 - 9600K",
        product: "assets/images/i5.png",
        price: 3790
    }
];

buyBtn1.addEventListener("click", function() {
    productPrice = productPrice + products[0].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[0].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[0].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[0].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[0].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyBtn2.addEventListener("click", function() {
    productPrice = productPrice + products[1].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[1].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[1].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[1].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[1].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn3.addEventListener("click", function() {
    productPrice = productPrice + products[2].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[2].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[2].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[2].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[2].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn4.addEventListener("click", function() {
    productPrice = productPrice + products[3].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[3].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[3].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[3].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[3].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn5.addEventListener("click", function() {
    productPrice = productPrice + products[4].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[4].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[4].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[4].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[4].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn6.addEventListener("click", function() {
    productPrice = productPrice + products[5].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[5].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[5].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[5].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[5].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn7.addEventListener("click", function() {
    productPrice = productPrice + products[6].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[6].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[6].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[6].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[6].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn8.addEventListener("click", function() {
    productPrice = productPrice + products[7].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[7].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[7].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[7].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[7].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn9.addEventListener("click", function() {
    productPrice = productPrice + products[8].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[8].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[8].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[8].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[8].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});
buyBtn10.addEventListener("click", function() {
    productPrice = productPrice + products[9].price;
    totalPrice.innerHTML = "Total: " + productPrice + " kr";

    var name = document.createElement("h3");
    name.innerHTML = products[9].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[9].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[9].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[9].price;
        totalPrice.innerHTML = "Total: " + productPrice + " kr";

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});







