window.onload= function() {


    const menu = document.querySelector('#moblile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    
    menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
});
};