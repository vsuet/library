const form_names = document.getElementById('form_names');

const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const patronymic = document.getElementById('patronymic');
const date=document.getElementById('date');

form_names.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('first_name', first_name.value);
    localStorage.setItem('last_name', last_name.value);
    localStorage.setItem('patronymic', patronymic.value);
    localStorage.setItem('date', date.value);
});

const load_button = document.getElementById('load_button');
load_button.addEventListener('click', function () {
    first_name.value = localStorage.getItem('first_name');
    last_name.value = localStorage.getItem('last_name');
    patronymic.value = localStorage.getItem('patronymic');
   date.value = localStorage.getItem('date')
});



//операции с депозитами

document.querySelector('.script-write-off-contribution');
document.querySelector('.write-off-close');
const btnOpenDeposit = document.querySelector('.script-open-deposit'),
    btnClose = document.querySelector('.window-close');

document.querySelector('.top-upp');
document.querySelector('.write-off');
const elWindow = document.querySelector('.window');


btnOpenDeposit.addEventListener('click', function(){
    elWindow.classList.add('show');
});

btnClose.addEventListener('click', function(){
    elWindow.classList.remove('show');
});

let deposits = [];
document.querySelector('.script-add-contribution');
let openDeposit = document.querySelector('.script-btn-open-contribution');

openDeposit.addEventListener('click', function(event){
    event.preventDefault();

    let count = parseInt(localStorage.getItem('count')) || 0;
    count++;
    localStorage.setItem('count', count)

    console.log(localStorage.getItem('count'));

    let deposit = {
        'percent': document.querySelector('.script-data-contribution').value,
        'sum': document.querySelector('.script-sum-contribution').value,
        'type': document.querySelector('.script-type').value, percent: undefined

    };

    deposits.push(deposit);
    localStorage.getItem('deposits_html');
    `<tr id = "d_${localStorage.getItem('count')}" class = "js-row">
        <td>${deposit.percent}</td>
        <td>${deposit.sum}</td>
        <td class = "js-cash">${deposit.type}</td>
        <td>
            <button class="script-top-up action btn-open" data-id = "d_${localStorage.getItem('count')}">Пополнить</button>
            <button class="script-write-off-vclad btn-open-deposit" onclick="">Списать</button>
            <button class = "script-remove-row action btn-open ">Закрыть</button>
        </td>
    </tr>`;
});
