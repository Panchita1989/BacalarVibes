let arrow = document.querySelector('.arrow')
let menu = document.querySelector('.menu')
let sideMenu = document.querySelector('.sideMenu')

arrow.addEventListener('click', () =>  {
    sideMenu.classList.toggle('sideMenuOpen')

    if(!menu.classList.contains('sichtbar')){
        menu.classList.add('sichtbar')
        menu.classList.remove('sichtbarRev')
        arrow.classList.add('arrowMove')
        arrow.classList.remove('arrowMoveRev')
    }else{
        menu.classList.add('sichtbarRev')
        menu.classList.remove('sichtbar')
        arrow.classList.add('arrowMoveRev')
        arrow.classList.remove('arrowMove')
    }

})