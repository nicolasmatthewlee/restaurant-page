import './reset.css';
import './style.css';

import MENU_ICON from './menu.svg'

import { display_menu } from './menu';
import { display_contact } from './contact';
import { display_home } from './home';

let body = document.querySelector('body');

/*
* header
*/ 

let header = document.createElement('div');
header.setAttribute('class','header')
body.appendChild(header);

let company_name = document.createElement('div');
company_name.setAttribute('class','company-name');
company_name.textContent='Rockefeller\'s Diner';
header.appendChild(company_name);

let header_spacer = document.createElement('div');
header_spacer.setAttribute('class','header-spacer');
header.appendChild(header_spacer);

/*
* menu bar
*/

let menu_bar = document.createElement('div');
menu_bar.setAttribute('class','menu-bar');
header.appendChild(menu_bar);

let home_button = document.createElement('button');
let menu_button = document.createElement('button');
let contact_button = document.createElement('button');

home_button.textContent='home';
menu_button.textContent='menu';
contact_button.textContent='contact';

home_button.addEventListener('click',display_home);
menu_button.addEventListener('click',display_menu);
contact_button.addEventListener('click',display_contact);

menu_bar.appendChild(home_button);
menu_bar.appendChild(menu_button);
menu_bar.appendChild(contact_button);

/*
* overflow menu
*/

let overflow_menu = document.createElement('div');
overflow_menu.setAttribute('class','overflow-menu');
header.appendChild(overflow_menu);

let overflow_menu_button_open = document.createElement('button');
overflow_menu_button_open.setAttribute('class','overflow-menu-button-open');
let overflow_menu_button_open_icon = new Image();
overflow_menu_button_open_icon.setAttribute('class','overflow-menu-button-open-icon');
overflow_menu_button_open_icon.src = MENU_ICON;
overflow_menu_button_open.appendChild(overflow_menu_button_open_icon);
overflow_menu_button_open.addEventListener('click',() => overflow_menu.classList.add('active'));
header.appendChild(overflow_menu_button_open);

let overflow_menu_button_close = document.createElement('button');
overflow_menu_button_close.setAttribute('class','overflow-menu-button-close');
overflow_menu_button_close.textContent='X';
overflow_menu_button_close.addEventListener('click',() => overflow_menu.classList.remove('active'));
overflow_menu.appendChild(overflow_menu_button_close);

let overflow_menu_button_home = document.createElement('button');
let overflow_menu_button_menu = document.createElement('button');
let overflow_menu_button_contact = document.createElement('button');

overflow_menu_button_home.setAttribute('class','overflow-menu-button-home');
overflow_menu_button_menu.setAttribute('class','overflow-menu-button-menu');
overflow_menu_button_contact.setAttribute('class','overflow-menu-button-contact');

overflow_menu_button_home.textContent='home';
overflow_menu_button_menu.textContent='menu';
overflow_menu_button_contact.textContent='contact';

overflow_menu_button_home.addEventListener('click',() => {
    overflow_menu.classList.remove('active');
    display_home();});
overflow_menu_button_menu.addEventListener('click',() => {
    overflow_menu.classList.remove('active');
    display_menu();});
overflow_menu_button_contact.addEventListener('click',() => {
    overflow_menu.classList.remove('active');
    display_contact();});

overflow_menu.appendChild(overflow_menu_button_home);
overflow_menu.appendChild(overflow_menu_button_menu);
overflow_menu.appendChild(overflow_menu_button_contact);

/*
* main content
*/

let content = document.createElement('div');
content.setAttribute('class','main-content')
body.appendChild(content);