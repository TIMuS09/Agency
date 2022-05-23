let menuMobile = document.querySelector('.header__menu-mobile');
let burger = document.querySelector('.header__burger');
let buttonBurger = document.querySelector('.header__burger-inner');
// const burgerSpan = burger.querySelector('span');
let headerInner = document.querySelector('.header__inner');
let lock = document.querySelector('body');
let menu = document.querySelector('.one');



// buttonBurger.addEventListener('click',(event)=>{
//     if(menuMobile.classList.contains('active')) {
//         menuMobile.style.display = 'none';
//         menuMobile.style.position = 'initial';
//         menuMobile.style.left = '-100%'; 
//         menuMobile.classList.remove('active');
//         burgerSpan.style.transform = 'scale(1)';
//     } else {
//         menuMobile.style.display = 'block';
//         menuMobile.style.position = 'fixed';
//         menuMobile.style.left = '0'; 
//         menuMobile.classList.add('active');
//         burgerSpan.style.transform = 'scale(0)';
//     }
// })

// buttonBurger.addEventListener('click', (event) => {
//     if(headerInner.classList.contains('active')) {
//         headerInner.classList.remove('active');
//         lock.classList.remove('lock');
//     } else {
//         headerInner.classList.add('active');
//         lock.classList.add('lock');
//     }
// })

buttonBurger.addEventListener('click', (event) => {
    headerInner.classList.toggle('active');
    lock.classList.toggle('lock');
})


