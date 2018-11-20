const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-kutman');

const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
	if(!showMenu) {
	  menuBtn.classList.add('close');
	  menu.classList.add('show');
	  menuNav.classList.add('show');
	  menuBranding.classList.add('show');
	  navItems.forEach(item => item.classList.add('show'));
	  showMenu = true;
	}else {

 	  menuBtn.classList.remove('close');
	  menu.classList.remove('show');
	  menuNav.classList.remove('show');
	  menuBranding.classList.remove('show');
	  navItems.forEach(item => item.classList.remove('show'));
	  showMenu = false;

	}
}



function checkEqual(a, b) {
    return a === b ? true : false;
}

var click = checkEqual(1, 2);

console.log(click);