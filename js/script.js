// mobile menu hide/show

var sidebar = document.querySelector('.sidebar');
var topbar = document.querySelector('.topbar');
var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    sidebar.classList.toggle('show');
    topbar.classList.toggle('show');
});

// Modals

function closeModal() { // function for closing modals by removing .show-modal from overlay
    document.getElementById('overlay').classList.remove('show-modal');
    console.log('removing .show-modal'); 
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn){ // close modal by pressing a button with js--close-modal class
    btn.addEventListener('click', function(e){
        e.preventDefault(); // prevent from default button action
        closeModal(); // instead of default action close modal
    })
});
document.querySelector('#overlay').addEventListener('click', function(e){ // close modal by pressing button while overlay is active
    if(e.target === this) { //if user clicked on overlay
        closeModal(); // close modal
    }
});
document.addEventListener('keyup', function(e) { // listen for pressing ESC
    if(e.keyCode === 27) { // if ESC is pressed
        closeModal(); // close modal
    }
});

    // opening a modal
function openModal(modal) {
    console.log(modal + ' was clicked');
    document.querySelectorAll('#overlay > *').forEach(function(modal){
        modal.classList.remove('show-modal');
    })
    document.querySelector('#overlay').classList.add('show-modal');
    document.querySelector(modal).classList.add('show-modal');
};

var login = document.getElementById('login'); //select login element
login.addEventListener('click', function() { // click on login element
    openModal('#modalLogin'); //open login modal
});

var logout = document.getElementById('logout'); //select logout element
logout.addEventListener('click', function(){
    openModal('#modalQuit'); //open quit modal
});

var chat = document.getElementById('notification'); // select notification elements
chat.addEventListener('click', function(){
    openModal('#modalChat'); //open chat modal
});
var chatManager = document.getElementById('notification2'); // select notification2 element
chatManager.addEventListener('click', function(){
    openModal('#modalChat'); //open chat modal
});