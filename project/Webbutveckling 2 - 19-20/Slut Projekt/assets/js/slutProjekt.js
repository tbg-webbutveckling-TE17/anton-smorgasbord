var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");
var sectionImages = document.querySelector(".images");
var headerScroll = document.querySelector("header");

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



