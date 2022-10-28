const form_names = document.getElementById('form_names')
let first_name = document.getElementById('first-name');
let last_name = document.getElementById('last-name');
let patronimyc = document.getElementById('patronimyc');
let date_born = document.getElementById('date-born');
let number = document.getElementById('number');

let first_name1 = document.getElementById('first-name1');
let last_name1 = document.getElementById('last-name1');
let patronimyc1 = document.getElementById('patronimyc1');
let date_born1 = document.getElementById('date-born1');
let number1 = document.getElementById('number-1');


let change = document.getElementById('changeBtn');
const ready = document.getElementById('ready');
const profile = document.getElementById('profile');

change.addEventListener('click', function (){
    ready.style.display='none';
    profile.style.display='block';
})



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

    profile.style.display='none';
    ready.style.display='block';
    first_name1.innerHTML=first_name.value;
    last_name1.innerHTML=last_name.value;
    patronimyc1.innerHTML=patronimyc.value;
    date_born1.innerHTML=date_born.value;
    number1.innerHTML=number.value;

});
first_name1.innerHTML=first_name.value;
last_name1.innerHTML=last_name.value;
patronimyc1.innerHTML=patronimyc.value;
date_born1.innerHTML=date_born.value;
number1.innerHTML=number.value;


