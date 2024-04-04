const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e){
    const menuLink = e.target;
    //для избежания ошибок, если вдруг не правильно введена секция
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        //получаю местоположение в пискелях на старнице
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset ;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        //просто выполнение прокрутки, чтобы не переходить куда - либо
        e.preventDefault();
    }
   }
}


// меню бургер

const menuBtn = document.querySelector('.burger');
const menuMobile = document.querySelector('.header_menu_list');


menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu_open')
});


//


const menuLinkss = document.querySelectorAll('.menu_list_link[data-goto]');
if(menuLinkss.length > 0){
    menuLinkss.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLinkClicke);
   });

   function onMenuLinkClicke(e){
    const menuLinks = e.target;
    //для избежания ошибок, если вдруг не правильно введена секция
    if(menuLinks.dataset.goto && document.querySelector(menuLinks.dataset.goto)){
        const gotoBlocke = document.querySelector(menuLinks.dataset.goto);
        //получаю местоположение в пискелях на старнице
        const gotoBlockeValue = gotoBlocke.getBoundingClientRect().top + pageYOffset ;

        window.scrollTo({
            top: gotoBlockeValue,
            behavior: "smooth"
        });
        //просто выполнение прокрутки, чтобы не переходить куда - либо
        e.preventDefault();
    }
   }
};


document.getElementById("button_1").onclick = function () {
    document.getElementById("email").scrollIntoView({behavior:"smooth"});
  }
 
  

document.getElementById("subscribe").onclick = function(){
    document.getElementById("contanier_1").scrollIntoView({behavior:"smooth"});
}