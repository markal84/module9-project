// mobile menu hide/show

var sidebar = document.querySelector('.sidebar');
var topbar = document.querySelector('.topbar');
var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    sidebar.classList.toggle('show');
    topbar.classList.toggle('show');
});

// Chart creation
/*var ctx = document.getElementById('myChart').getContext('2d'); // select canvas element on index.html page
var chart = new Chart(ctx, { // create a new chart on index.html page
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});
*/
// Modals

function closeModal() { // function for closing modals by removing show class from overlay
    document.getElementById('overlay').classList.remove('show-modal') 
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
    document.querySelectorAll('#overlay > *').forEach(function(modal){
        modal.classList.remove('show-modal');
    })
    document.querySelector('#overlay').classList.add('show-modal');
    document.querySelector(modal).classList.add('show-modal');
};

var logout = document.getElementById('logout');
console.log(logout + ' test');
logout.addEventListener('click', openModal('#modalQuit'));
