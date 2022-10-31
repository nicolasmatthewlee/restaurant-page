
let display_contact = () => {
    
    /*
    * create menu content
    */

    let contact_page = document.createElement('div');
    contact_page.setAttribute('class','contact-page');

    let contact_title = document.createElement('div');
    contact_title.setAttribute('class','page-title');
    contact_title.textContent='Contact';
    contact_page.appendChild(contact_title);

    /*
    * phone
    */

    let phone_container = document.createElement('div');
    phone_container.setAttribute('class','phone-container');
    contact_page.appendChild(phone_container);

    let phone_label = document.createElement('div');
    phone_label.setAttribute('class','phone-label');
    phone_label.textContent = 'Phone:';
    phone_container.appendChild(phone_label);

    let phone_value = document.createElement('div');
    phone_value.setAttribute('class','phone-value');
    phone_value.textContent = '123-456-7890';
    phone_container.appendChild(phone_value);

    /* 
    * address
    */

    let address_container = document.createElement('div');
    address_container.setAttribute('class','address-container');
    contact_page.appendChild(address_container);

    let address_label = document.createElement('div');
    address_label.setAttribute('class','address-label');
    address_label.textContent = 'Address:';
    address_container.appendChild(address_label);

    let address_value = document.createElement('div');
    address_value.setAttribute('class','address-value');
    address_value.textContent = '1670 Rockefeller St. New York, NY 10004';
    address_container.appendChild(address_value);

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(contact_page);

}

export {display_contact};