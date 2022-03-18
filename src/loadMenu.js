import { clearContents } from './clearContents';
import {menu} from './menu'



const createMenuBox = (div) => {

    clearContents(div);

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    div.appendChild(title);



    for (const header in menu) {
        makeSectionComponent(div, header)
    }

}

const makeSectionComponent = (div, section) => {
    const sectionDiv = document.createElement('div');

    sectionDiv.classList.add('menu-section');

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = section;
    sectionDiv.appendChild(sectionTitle);

    menu[section].forEach((item) => {
        makeMenuItem(sectionDiv, item);
    });

    div.appendChild(sectionDiv);

}

const makeMenuItem = (div, item) => {
    console.log(item);
    const itemDiv = document.createElement('div');
    itemDiv.classList = 'menu-item';

    const itemTitle = document.createElement('h4');
    itemTitle.textContent = item.food;

    const itemPrice = document.createElement('p')
    itemPrice.textContent = item.price;

    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;

    if (item.img != '') {
        console.log(item.img);
    }



    div.appendChild(itemTitle);
    div.appendChild(itemPrice);
    div.appendChild(itemDesc);



}

export { createMenuBox }