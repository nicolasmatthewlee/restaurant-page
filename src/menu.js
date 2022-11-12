let display_menu = () => {

    /*
    * create menu content
    */

    let menu_page = document.createElement('div');
    menu_page.setAttribute('class','menu-page');

    let content_fieldset = document.createElement('fieldset');
    menu_page.appendChild(content_fieldset);
    let content_title = document.createElement('legend');
    content_title.textContent='Rockefeller\'s Diner';
    content_fieldset.appendChild(content_title);

    let menu_items = {
        'Burgers':{
        'Classic Hamburger':'An american classic, topped with two slices of American cheese, lettuce, and tomato.',
        'Bacon Cheeseburger':'Layered with six cuts of savory, thick-cut bacon, lettuce, tomato, and two slices of melted Swiss cheese.',
        'Country Burger':'Melted Bleu cheese, lettuce, tomato, and mayonnaise.',
        'Mushroom Burger':'Sautéed mushrooms, two slices of Swiss cheese, lettuce, and tomato.'
        },
        'Shakes':{
            'Vanilla Milkshake':'Creamy vanilla shake with whipped cream and hot fudge.',
            'Chocolate Milkshake':'Rich milk chocolate shake with whipped cream.',
            'Strawberry Milkshake':'Sweet strawberry milkshake with whipped cream and fresh strawberries.',
        },
        'Sides':{
            'Fries':'Large, medium, or small.',
            'Onion rings':'Large, medium, or small.'
        }
    }

    for (const [category,category_items] of Object.entries(menu_items)) {

        let category_container = document.createElement('div');
        category_container.setAttribute('class','category-container');
        content_fieldset.appendChild(category_container);

        let category_title = document.createElement('div');
        category_title.setAttribute('class','category-title');
        category_title.textContent=category;
        category_container.appendChild(category_title);

        let items_flexbox = document.createElement('div');
        items_flexbox.setAttribute('class','items-flexbox');
        category_container.appendChild(items_flexbox);

        for (const [name,description] of Object.entries(category_items)) {

            let item_container = document.createElement('div');
            item_container.setAttribute('class','item-container');
            items_flexbox.appendChild(item_container);
            
            let item_name = document.createElement('div');
            item_name.setAttribute('class','item-name');
            item_name.textContent=name;
            item_container.appendChild(item_name);
    
            let item_description = document.createElement('div');
            item_description.setAttribute('class','item-description');
            item_description.textContent=description;
            item_container.appendChild(item_description);
    
        };

    }

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(menu_page);

}

export {display_menu};