// mobile menu hide/show

var sidebar = document.querySelector('.sidebar');
var topbar = document.querySelector('.topbar');
var hamburger = document.getElementById('hamburger');
var body = document.body;
hamburger.addEventListener('click', function(){
    sidebar.classList.toggle('show');
    topbar.classList.toggle('show');
    //body.classList.toggle('dim-bg');
});