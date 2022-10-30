import './reset.css';
import './style.css';

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
* main content
*/

let content = document.createElement('div');
content.setAttribute('class','main-content')
body.appendChild(content);


// RESUME HERE
// add spacer to complete header !!!