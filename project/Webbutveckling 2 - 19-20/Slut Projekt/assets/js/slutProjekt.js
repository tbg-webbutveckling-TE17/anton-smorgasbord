var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");
var sectionImages = document.querySelector(".images");
var headerScroll = document.querySelector("header");
var cartBtn = document.querySelector("#cartBtn");
var cartXBtn = document.querySelector(".fa-times");
var cart = document.querySelector("#cart");
var mainContent = document.querySelector("main");

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

