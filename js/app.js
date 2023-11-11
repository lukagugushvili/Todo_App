// date methods 

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const year = now.getFullYear();
const month = now.getMonth();
let amPm = hours >= 12 ? 'PM' : 'AM';

const daysOfWeak = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDay = new Date();
const gotItDay = daysOfWeak[currentDay.getDay()];

// todoApp time code

const todoBox = document.querySelector('.todo-box');

const dayAndMonth = document.createElement('h3');
dayAndMonth.classList.add('day-and-month');
dayAndMonth.textContent = `${gotItDay}  ${month} `;
todoBox.appendChild(dayAndMonth);

const time = document.createElement('h2');
time.classList.add('time');
time.textContent = `${hours}:${minutes}  ${amPm} `;
todoBox.appendChild(time);

//input lists code

const listText = document.querySelector('#list-text');
const btnContent = document.querySelector('.btn-content-box');

function btnFunc() {
    
    //todo lists content

    const inpContent = document.getElementById('inpContent').value;
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    textBox.innerHTML = `
    <div class = 'title-box'>
        <p>${inpContent}</p>
        <span>Today at ${hours}:${minutes} ${amPm}</span>
    </div>
    <div class = 'icon-box'>
        <div class = "checkbox-content">
            <img src="./imgs/arrow-icon.PNG" alt="arrow-icon">
        </div>
        <div class = 'delete-icon-box'>
            <img src="./imgs/delete-icon.PNG" alt="delete-icon">
        </div>
    </div>
    `;
    listText.appendChild(textBox);

    //checkbox style

    const check = textBox.querySelector('.checkbox-content');
    
    check.addEventListener('click', () => {
        if(check){
            check.style.backgroundColor = 'rgba(32, 238, 176, 1)';
        }else {
            check.style.backgroundColor = 'white';
        }
    });

    //delete code

    const deleteBtn = textBox.querySelector('.delete-icon-box');
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', () => {
        textBox.remove();
    });

};

btnContent.addEventListener('click', btnFunc)


