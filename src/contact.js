
let display_contact = () => {
    
    /*
    * create menu content
    */

    let contact_content_container = document.createElement('div');
    contact_content_container.textContent='Contact';

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(contact_content_container);

}

export {display_contact};