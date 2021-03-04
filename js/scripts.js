const hamburger = document.querySelector('.header__menu--hamburger');
const menu = document.querySelector('.header__responsive');


hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('switch')
})

window.addEventListener('click', e=> {
    if(menu.classList.contains('switch') && e.target != menu && e.target != hamburger) {
    
        menu.classList.toggle('switch')

    }
})