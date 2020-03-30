var btnPrevImage = document.querySelector(".btnPrev");
var btnNextImage = document.querySelector(".btnNext");
var sectionImages = document.querySelector(".images");

var marginPx = 0;

btnNextImage.addEventListener("click", function() {
    marginPx = marginPx + (-1000);
    sectionImages.style.marginLeft = marginPx + "px";

    return marginPx;
});

btnPrevImage.addEventListener("click", function() {
    marginPx = marginPx + 1000; 
    sectionImages.style.marginLeft = marginPx + "px";
    
    return marginPx;
});