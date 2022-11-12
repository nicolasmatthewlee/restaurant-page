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

let home_button = document.createElement('button');
home_button.textContent='Home';
home_button.addEventListener('click',display_home);
header.appendChild(home_button);

let menu_button = document.createElement('button');
menu_button.textContent='Menu';
menu_button.addEventListener('click',display_menu);
header.appendChild(menu_button);

let company_name = document.createElement('div');
company_name.setAttribute('class','company-name');
company_name.textContent='Rockefeller\'s Diner';
company_name.addEventListener('click',display_home);
header.appendChild(company_name);

let about_button = document.createElement('button');
about_button.textContent='About';
header.appendChild(about_button);

let contact_button = document.createElement('button');
contact_button.setAttribute('class','header-contact-button')
contact_button.textContent='Contact';
contact_button.addEventListener('click',display_contact);
header.appendChild(contact_button);

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

let content_area = document.createElement('div');
content_area.setAttribute('class','content-area');
body.appendChild(content_area);

let content = document.createElement('div');
content.setAttribute('class','main-content');
content_area.appendChild(content);

// display home page
display_home();