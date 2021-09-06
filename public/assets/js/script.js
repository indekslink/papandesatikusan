var grafikSlider = document.getElementById("carouselHeroContent");
const intervalCarousel = 10000;
var carousel = new bootstrap.Carousel(grafikSlider, {
    interval: intervalCarousel,
    ride: false,
});

function nextCarousel() {
    return carousel.next();
}
// carousel.pause();
runAnimation(0, nextCarousel, intervalCarousel);

window.onload = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    mustLandscape(width, height);
    closeLoader();
};
window.onresize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    mustLandscape(width, height);
};

document.body.addEventListener("dblclick", function () {
    if (IsFullScreenCurrently()) GoOutFullscreen();
    else GoInFullscreen(document.getElementById("hero-content"));
});

grafikSlider.addEventListener("slide.bs.carousel", function (e) {
    runAnimation(e.to, nextCarousel, intervalCarousel);
});
grafikSlider.addEventListener("slid.bs.carousel", function () {
    carousel.pause();
});
