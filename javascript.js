const form_names = document.getElementById('form_names')
let first_name = document.getElementById('first-name');
let last_name = document.getElementById('last-name');
let patronimyc = document.getElementById('patronimyc');
let date_born = document.getElementById('date-born');
let number = document.getElementById('number');

first_name.value = localStorage.getItem('first-name');
last_name.value = localStorage.getItem('last-name');
patronimyc.value = localStorage.getItem('patronimyc');
date_born.value = localStorage.getItem('date-born');
number.value = localStorage.getItem('number');

form_names.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('first-name', first_name.value);
    localStorage.setItem('last-name', last_name.value);
    localStorage.setItem('patronimyc', patronimyc.value);
    localStorage.setItem('date-born', date_born.value);
    localStorage.setItem('number', number.value);
});



