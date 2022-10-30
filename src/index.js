import './style.css';

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

menu_bar.appendChild(home_button);
menu_bar.appendChild(menu_button);
menu_bar.appendChild(contact_button);

/*
* content
*/

let content = document.createElement('div');
content.setAttribute('class','content-container')
body.appendChild(content);