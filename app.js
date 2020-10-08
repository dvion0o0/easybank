var btn = document.querySelector(".nav-toggle");

var side = document.querySelector(".sidebar");

var header = document.querySelector(".header");

btn.addEventListener("click", function(){

btn.classList.toggle("change");

side.classList.toggle("show");

header.classList.toggle("overlay");

});