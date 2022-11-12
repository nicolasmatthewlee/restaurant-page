let display_about = () => {

    /*
    * create about content
    */

    let about_page = document.createElement('div');
    about_page.setAttribute('class','about-page');

    let content_fieldset = document.createElement('fieldset');
    about_page.appendChild(content_fieldset);
    let content_title = document.createElement('legend');
    content_title.textContent='Rockefeller\'s Diner';
    content_fieldset.appendChild(content_title);

    let about_content = document.createElement('div');
    about_content.setAttribute('class','about-content');
    content_fieldset.appendChild(about_content);

    /*
    * description
    */

    let about_title = document.createElement('div');
    about_title.setAttribute('class','about-title');
    about_title.textContent='About';
    content_fieldset.appendChild(about_title);

    let about_text = document.createElement('div');
    about_text.setAttribute('class','about-text');
    about_text.textContent="Rockefeller's Diner was founded in 1947 by Sherman and Irma Rockefeller. The original establishment was renowned for its quick service and sizable portions. To this day, the diner remains family-owned and operated."
    content_fieldset.appendChild(about_text);

    /*
    * 1. clear <content-container>
    * 2. add to <content-container>
    */

    let content = document.querySelector('.main-content');
    while (content.firstChild) {
        content.firstChild.remove()
    }
    content.appendChild(about_page);

}

export {display_about};