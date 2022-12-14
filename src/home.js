import MAIN_IMAGE from './CoffeeDoddle.svg';

let display_home = () => {
    
    /*
    * create menu content
    */

    let home_page = document.createElement('div');
    home_page.setAttribute('class','home-page');

    let content_fieldset = document.createElement('fieldset');
    home_page.appendChild(content_fieldset);
    let content_title = document.createElement('legend');
    content_title.textContent='Rockefeller\'s Diner';
    content_fieldset.appendChild(content_title);

    let diner_image = new Image();
    diner_image.setAttribute('class','main-image');
    diner_image.src = MAIN_IMAGE;
    content_fieldset.appendChild(diner_image);

    let tagline = document.createElement('div');
    tagline.setAttribute('class','tagline');
    tagline.textContent='New York\'s Favorite Diner, since 1947'
    content_fieldset.appendChild(tagline);

    let home_content = document.createElement('div');
    home_content.setAttribute('class','home-content');
    content_fieldset.appendChild(home_content);

    /*
    * hours
    */

    let hours_container = document.createElement('div');
    hours_container.setAttribute('class','hours-container');
    home_content.appendChild(hours_container);

    let hours_title = document.createElement('div');
    hours_title.setAttribute('class','hours-title');
    hours_title.textContent='Hours';
    hours_container.appendChild(hours_title)

    let hours_data = {
        'Sunday':'9am-5pm',
        'Monday':'9am-8pm',
        'Tuesday':'9am-8pm',
        'Wednesday':'9am-8pm',
        'Thursday':'9am-8pm',
        'Friday':'9am-10pm',
        'Saturday':'9am-10pm',
    };

    for (const [day_value,hours_value] of Object.entries(hours_data)) {

        let hours_item = document.createElement('div');
        hours_item.setAttribute('class','hours-item');
        hours_container.append(hours_item);

        let day = document.createElement('div');
        day.setAttribute('class','day');
        day.textContent=day_value;
        hours_item.appendChild(day);

        let hours = document.createElement('div');
        hours.setAttribute('class','hours');
        hours.textContent=hours_value;
        hours_item.appendChild(hours);
    }

    /*
    * address
    */

    let address_container = document.createElement('div');
    address_container.setAttribute('class','address-container');
    home_content.appendChild(address_container);

    let address_title = document.createElement('div');
    address_title.setAttribute('class','address-title');
    address_title.textContent='Address';
    address_container.appendChild(address_title)

    let address = document.createElement('div');
    address.setAttribute('class','address');
    address.textContent='1670 Rockefeller St. New York, NY 10004';
    address_container.appendChild(address);

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(home_page);

}

export {display_home};