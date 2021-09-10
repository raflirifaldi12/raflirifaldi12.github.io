/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Gallery
const container = document.querySelector('.container-img');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500)
    }

    thumbs.forEach(function (thumb) {
        // if (thumb.classList.contains('active')) {
        //     thumb.classList.remove('active');
        // }
        thumb.className = 'thumb';
    });
    e.target.classList.add('active');
});