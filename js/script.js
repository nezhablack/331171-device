var sliderButton1 = document.querySelector(".slider-btn-1");
var sliderButton2 = document.querySelector(".slider-btn-2");
var sliderButton3 = document.querySelector(".slider-btn-3");
var sliderServiceButton1 = document.querySelector(".button-service-1");
var sliderServiceButton2 = document.querySelector(".button-service-2");
var sliderServiceButton3 = document.querySelector(".button-service-3");
var link = document.querySelector(".write-us");
var popup = document.querySelector(".letter-popup");
var close = document.querySelector(".letter-popup .modal-close");
var form = popup.querySelector(".user-letter");
var name = popup.querySelector(".popup-user-name");
var email = popup.querySelector(".popup-user-email");
var letter = popup.querySelector(".popup-user-letter");
var mapClose = document.querySelector(".modal-map .modal-close");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");

sliderButton1.addEventListener("click", function (evt) {
    document.querySelector(".promo-slide-active").classList.remove("promo-slide-active");
    document.querySelector(".promo-slide-1").classList.add("promo-slide-active");
    document.querySelector(".slider-btn-active").classList.remove("slider-btn-active");
    sliderButton1.classList.add("slider-btn-active");
});

sliderButton2.addEventListener("click", function (evt) {
    document.querySelector(".promo-slide-active").classList.remove("promo-slide-active");
    document.querySelector(".promo-slide-2").classList.add("promo-slide-active");
    document.querySelector(".slider-btn-active").classList.remove("slider-btn-active");
    sliderButton2.classList.add("slider-btn-active");
});

sliderButton3.addEventListener("click", function (evt) {
    document.querySelector(".promo-slide-active").classList.remove("promo-slide-active");
    document.querySelector(".promo-slide-3").classList.add("promo-slide-active");
    document.querySelector(".slider-btn-active").classList.remove("slider-btn-active");
    sliderButton3.classList.add("slider-btn-active");
});


sliderServiceButton1.addEventListener("click", function (evt) {
    document.querySelector(".services-slide-active").classList.remove("services-slide-active");
    document.querySelector(".services-slide-1").classList.add("services-slide-active");
    document.querySelector(".button-service-active").classList.remove("button-service-active");
    sliderServiceButton1.classList.add("button-service-active");
});

sliderServiceButton2.addEventListener("click", function (evt) {
    document.querySelector(".services-slide-active").classList.remove("services-slide-active");
    document.querySelector(".services-slide-2").classList.add("services-slide-active");
    document.querySelector(".button-service-active").classList.remove("button-service-active");
    sliderServiceButton2.classList.add("button-service-active");
});

sliderServiceButton3.addEventListener("click", function (evt) {
    document.querySelector(".services-slide-active").classList.remove("services-slide-active");
    document.querySelector(".services-slide-3").classList.add("services-slide-active");
    document.querySelector(".button-service-active").classList.remove("button-service-active");
    sliderServiceButton3.classList.add("button-service-active");
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) { 
    if (!name.value || !email.value || !letter.value) { 
        evt.preventDefault(); 
        popup.classList.add("modal-error"); 
    } 
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");

}); 


