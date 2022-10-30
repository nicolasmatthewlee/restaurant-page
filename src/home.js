
let display_home = () => {
    
    /*
    * create menu content
    */

    let home_content_container = document.createElement('div');
    home_content_container.textContent='Home';

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(home_content_container);

}

export {display_home};