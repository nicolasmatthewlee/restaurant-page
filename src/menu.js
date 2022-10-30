
let display_menu = () => {

    /*
    * create menu content
    */

    let menu_content_container = document.createElement('div');
    menu_content_container.textContent='Menu';

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(menu_content_container);

}

export {display_menu};