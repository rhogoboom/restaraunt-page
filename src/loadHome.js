import Icon from './sandwich.png';
import { clearContents } from './clearContents';

const createHomeBox = (div) => {

    clearContents(div);
    
    const title = document.createElement('h1'); 
    title.textContent = 'Hogoboom\'s Hoagies';
    div.appendChild(title);
    
    const myImage = new Image();
    myImage.src = Icon;
    div.appendChild(myImage);

    createQuoteComponent(div);

    makeHoursComponent(div);

    makeLocationComponent(div);


}


const createQuoteComponent = (div) => {
    const quoteDiv = document.createElement('div');
    const quote = document.createElement('p');
    const quoter = document.createElement('span');
    quoteDiv.classList.add('home-item');
    quote.textContent = 'Gabriela sends me down here for the gabagool.';
    quoter.textContent = '-Silvio Dante';
    quoteDiv.appendChild(quote);
    quoteDiv.appendChild(quoter);
    div.appendChild(quoteDiv);


}

const makeHoursComponent = (div) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hoursDiv = document.createElement('div');
    const hoursHead = document.createElement('h3');
    const hoursList = document.createElement('ul');
    hoursDiv.classList.add('home-item');
    hoursHead.textContent = 'Hours';
    

    days.forEach((day) => {
        const hoursItem = document.createElement('li');
        const currentDay = document.createElement('span');
        const currentHours = document.createElement('span');
        
        currentDay.textContent = `${day}:`

        if (day == 'Sunday') {
            currentHours.textContent = `Closed`
        } else if (day == 'Saturday') {
            currentHours.textContent = `8am - 3pm`
        } else {
            currentHours.textContent = `7am - 5pm`
        }

        hoursItem.appendChild(currentDay);
        hoursItem.appendChild(currentHours);

        hoursList.appendChild(hoursItem);
    })

    hoursDiv.appendChild(hoursHead);
    hoursDiv.appendChild(hoursList);
    div.appendChild(hoursDiv);
    
}

const makeLocationComponent = (div) => {
    const locationDiv = document.createElement('div');
    const locationHead = document.createElement('h3');
    const locationText = document.createElement('p');
    
    locationDiv.classList.add('home-item');
    
    locationHead.textContent = 'Location';
    locationText.textContent = '973 Flavor Road, Subsubia, Maryland'

    locationDiv.appendChild(locationHead);
    locationDiv.appendChild(locationText);

    div.appendChild(locationDiv);

}

export { createHomeBox };