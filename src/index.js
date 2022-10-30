import './reset.css';
import './style.css';

import { display_menu } from './menu';
import { display_contact } from './contact';
import { display_home } from './home';

/*
* menu bar
*/

let body = document.querySelector('body');

let menu_bar = document.createElement('div');
body.appendChild(menu_bar);

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
* content
*/

let content = document.createElement('div');
content.setAttribute('class','content-container')
body.appendChild(content);