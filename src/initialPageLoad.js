import {createHomeBox} from './loadHome';
import {createMenuBox} from './loadMenu';

const initialLoad = () => {
    // Cache DOM
    const body = document.querySelector('body');
    const wrapper = document.querySelector('#content');

    createNav(body);

    const container = createInitialBox(wrapper);
    
    createHomeBox(container);

    // createMenuBox(container);

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
        if(item == 'Home') {
            navItem.classList.add('current');
        }

        navItem.addEventListener('click', loadTab);
        navList.appendChild(navItem);

    });

    navList.classList.add('nav-list');

    nav.appendChild(navList);
    div.insertBefore(nav, div.firstChild);
}

const loadTab = (e) => {
    console.log(e.target);
    const box = document.querySelector('.content-box');
    const current = document.querySelector('.current');
    if (!e.target.classList.contains('current')) {
        console.log('text');
        if (e.target.textContent == 'Menu') {
            createMenuBox(box);
        }
        if (e.target.textContent == 'Home') {
            createHomeBox(box);
        }
        if (e.target.textContent == 'Contact') {
            console.log('TODO');
        }

        e.target.classList.add('current');
        current.classList.remove('current');
    }

    
}

const createInitialBox = (div) => {
    const startBox = document.createElement('div');
    startBox.classList.add('content-box');
    div.appendChild(startBox);
    return startBox;
}

const createFooter = (div) => {
    const test = document.createElement('h3');
    test.textContent = 'TODO';
    
    div.appendChild(test);


}




export { initialLoad };


