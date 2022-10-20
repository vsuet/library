let i = 1;
const button = document.getElementById('plus')
let money_summ = Number(0);
let money = document.getElementById('money');


button.addEventListener("click", function () {
    let list = document.getElementsByClassName("deposit-list")[0];
    let div = document.createElement('div');

    div.setAttribute('id', 'deposit_' + i);
    div.innerHTML = "<div  class=\"flex_row deposit \">\n" +
        "    <div><img src=\"img/safe.png\" alt=\"\"></div>\n" +
        "    <div>\n" +
        "        <p> Вклад </p>" +
        "    </div>\n" +
        "    <div class=\"deposit-money money1\"><input type=\"text\" name=\"\" placeholder=\"0\">₽</div>\n" +
        "</div>" +
        "<hr width='90%'>";
    list.appendChild(div);
    i++;
})

function remove() {
    let list = document.querySelector('.deposit-list');
    let div = document.createElement('div');
    div.setAttribute('id', 'deposit_' + i);
    list.lastChild.remove();
}


function add() {
    let addmoney = prompt("Введите желаему сумму для пополнения");
    money_summ = money_summ + Number(addmoney);
    money.innerHTML = money_summ;
    localStorage.setItem('money_summ', money_summ);
}

function take() {
    let takemoney = prompt("Сколько средств вы хотите снять?")
    if (Number(takemoney) > money_summ) {
        alert("На вашем счете недостаточно средств")
    } else {
        money_summ = money_summ - Number(takemoney);
        money.innerHTML = money_summ;
        localStorage.setItem('money_summ', money_summ);
    }
}

function load() {
    money_summ = localStorage.getItem('money_summ');
    money.innerHTML = money_summ;
}
