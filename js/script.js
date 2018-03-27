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

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    var name = document.querySelector(".popup-user-name");
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
