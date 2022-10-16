const btnOpenDeposit = document.querySelector('.js-open-deposit'),

    btnOffVclad = document.querySelector('.js-write-off-vclad'),
    btnClose = document.querySelector('.js-window-close'),
    btnWriteOffClose = document.querySelector('.js-write-off-close');

const elWindow = document.querySelector('.js-window'),
    topUpp = document.querySelector('.js-top-upp'),
    writeOff = document.querySelector('.js-write-off');


btnOpenDeposit.addEventListener('click', function(e){
    elWindow.classList.add('show');
});

btnClose.addEventListener('click', function(e){
    elWindow.classList.remove('show');
});

let deposits = [];

let elDeposits = document.querySelector('.js-add-vclad');
let openDeposit = document.querySelector('.js-btn-open-openvclad');

openDeposit.addEventListener('click', function(event){
    event.preventDefault();

let count = parseInt(localStorage.getItem('count')) || 0; 
count++;

    localStorage.setItem('count', count)

    let deposit = {
        'procent': document.querySelector('.js-data-vclad').value,
        'sum': document.querySelector('.js-cash-vclad').value,
        'type': document.querySelector('.js-type').value,
    };

    deposits.push(deposit);

    let depositsHtml = localStorage.getItem('deposits_html');

        let depositHtml =
        `<tr id = "d_${localStorage.getItem('count')}" class = "js-row">
            <td>${deposit.procent}</td>
            <td>${deposit.sum}</td>
            <td class = "js-cash">${deposit.type}</td>
            <td>
                <button class="js-top-up action btn-open" data-id = "d_${localStorage.getItem('count')}">Пополнить</button>
                <button class="js-write-off-vclad btn-open-deposit" onclick="">Списать</button>
                <button class = "js-remove-row action btn-open ">Закрыть</button>
            </td>
        </tr>`;

            depositsHtml += depositHtml;

        elDeposits.innerHTML = depositsHtml;

        localStorage.setItem('deposits_html', depositsHtml);

        const btnTopApp = document.querySelector('.js-top-up');

        btnTopApp.addEventListener('click', function(e){
            topUpp.classList.add('show');
        });

    elWindow.classList.remove('show');
});

const userName = document.querySelector('#user-name');
const userDate = document.querySelector('#user-date');

userName.innerHTML = localStorage.getItem('first_name');
userName.innerHTML += ' ' + localStorage.getItem('second_name');
userName.innerHTML += ' ' + localStorage.getItem('third_name');
userDate.innerHTML = ' (' + localStorage.getItem('day_date');
userDate.innerHTML += '.' + localStorage.getItem('month_date');
userDate.innerHTML += '.' + localStorage.getItem('year_date') + ')';
elDeposits.innerHTML = localStorage.getItem('deposits_html');

//localStorage.clear();