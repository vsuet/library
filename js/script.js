const monthDate = document.querySelector('.js-month-date'); 
const dayDate = document.querySelector('.js-day-date');
const yearDate = document.querySelector('.js-year-date');
const yearStart = 1950,
yearEnd = 2020;

const userName = document.querySelector('#user-name');
let saveButton = document.querySelector('.js-submit');
let firstName = document.querySelector('[name="first_name"]');
let secondName = document.querySelector('[name="second_name"]');
let thirdName = document.querySelector('[name="third_name"]');
let userDate = document.querySelector('#user-date');



for (var i = 1; i <= 31; i=i+1) {
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    
    dayDate.add(option);
};

for (let yearCurrent = yearStart; yearCurrent <= yearEnd;  yearCurrent = yearCurrent + 1) {
    let option = document.createElement("option");
    option.text = yearCurrent;
    option.value = yearCurrent;

    yearDate.add(option);
};

saveButton.addEventListener('click', function(e){
    localStorage.setItem('first_name', firstName.value);
    userName.innerHTML = localStorage.getItem('first_name');
    localStorage.setItem('second_name', secondName.value);
    userName.innerHTML += ' ' + localStorage.getItem('second_name');
    localStorage.setItem('third_name', thirdName.value);
    userName.innerHTML += ' ' + localStorage.getItem('third_name');
    localStorage.setItem('day_date', dayDate.value);
    userDate.innerHTML = ' (' + localStorage.getItem('day_date');
    localStorage.setItem('month_date', monthDate.value);
    userDate.innerHTML += '.' + localStorage.getItem('month_date');
    localStorage.setItem('year_date', yearDate .value);
    userDate.innerHTML += '.' + localStorage.getItem('year_date') + ')';
});

userName.innerHTML = localStorage.getItem('first_name');
userName.innerHTML += ' ' + localStorage.getItem('second_name');
userName.innerHTML += ' ' + localStorage.getItem('third_name');

userDate.innerHTML = ' (' + localStorage.getItem('day_date');
userDate.innerHTML += '.' + localStorage.getItem('month_date');
userDate.innerHTML += '.' + localStorage.getItem('year_date') + ')';

