import {createHomeBox} from './loadHome';

const initialLoad = () => {
    // Cache DOM
    const body = document.querySelector('body');
    const wrapper = document.querySelector('#content');

    createNav(body);

    const container = createInitialBox(wrapper);

    
    createHomeBox(container);

    createFooter(body);


}

const createNav = (div) => {
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const navItems = ['Home', 'Menu', 'Contact'];
    navItems.forEach((item) => {
        const navItem = document.createElement('li');
        navItem.textContent = item;
        navItem.classList.add('nav-item');
        if(item != 'Home') {
            navItem.classList.add('active');
        }
        navList.appendChild(navItem);

    });

    navList.classList.add('nav-list');

    nav.appendChild(navList);
    div.insertBefore(nav, div.firstChild);
}



const createInitialBox = (div) => {
    const startBox = document.createElement('div');
    startBox.classList.add('content-box');
    div.appendChild(startBox);
    return startBox;
}

const createFooter = (div) => {
    


}




export { initialLoad };


