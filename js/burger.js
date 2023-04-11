const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav');

burger.addEventListener('click', function(e) {
    this.classList.toggle('active');
    navBar.classList.toggle('active__nav'); 
    if (navBar.classList.contains('active__nav')) {
        console.log("Burger is opened");
        navBar.classList.remove('nav__close');
        navBar.classList.add('nav__open');
    } else {
        console.log("Burger is closed");
        navBar.classList.remove('nav__open');
        navBar.classList.add('nav__close');
    }
})


