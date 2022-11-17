const buttonInsert = document.getElementById("insert");
document.getElementById("FormPersonData").addEventListener("submit", update);
document.getElementById("FormMoney").addEventListener("submit", update);
let nameContribution = document.getElementById("name-contribution");
let typeContribution = document.getElementById("type-contribution");
const newContribution = document.querySelector(".new-contribution");
document.getElementById("open-score").addEventListener("click", () => {check();});
let sumContribution = document.getElementById("sum-contribution");
document.getElementById("top-up").addEventListener("click", () => {
  introductionSum(infoContribution,nameContribution.value,sumContribution.value);});
document.getElementById("take-off").addEventListener("click", () => {
  withdrawalSum(infoContribution,nameContribution.value,sumContribution.value);
});
const not = document.getElementById("not");
document.getElementById('close-score').addEventListener('click',()=>{
	deletContribution(infoContribution, nameContribution.value)})
let infoContribution = [];

function update(event) {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  const PersonDataButton = document.getElementById("PersonDataButton");
  const formShow = document.getElementById("form-show");
  PersonDataButton.addEventListener("click", () => {
    openForm(formShow, "open", "closed", 500);
  });
});

function openForm(element, open, closed, timer) {
  if (!element.classList.contains(open)) {
    element.classList.add(open);
    element.classList.remove(closed);
  } else {
    element.classList.add(closed);
    window.setTimeout(function () {
      element.classList.remove(open);
    }, timer);
  }
}

buttonInsert.addEventListener("click", () => {
  let nameUser = document.getElementById("name").value;
  let Surname = document.getElementById("Surname").value;
  let birth = document.getElementById("Year-of-birth").value;
  document.getElementById("user-name").innerHTML = nameUser;
  document.getElementById("user-surname").innerHTML = Surname;
  document.getElementById("user-birth").innerHTML = birth;
});

function check() {
  if (nameContribution.value === "" || parseInt(nameContribution.value) < 16) {
    alert("Проверьте правильность написания счета!");
  } else {
    let logics = conformity(infoContribution, nameContribution.value);
    if (logics) {
      alert("Данный счет уже открыт!");
    } else {
      openDeposits(newContribution);
    }
  }
}

function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function openDeposits(el) {
  let balance = 0;
  let idSpan = Random("1", "10000");
	let divContr=Random("1", "100000");
  el.innerHTML += `<div id=${divContr}><div>номер вклада:
    ${nameContribution.value}</div class="contr"> <div>тип вклада:${typeContribution.value}</div>
    <div>баланс:<span id="${idSpan}">${balance}</span></div></div>`;
  newObject(infoContribution, nameContribution.value, balance, idSpan,divContr);
}

function newObject(array, room, balance, rndSpan,rndDiv) {
  let contribution = {
    idContribution: parseInt(room),
    sum: parseInt(balance),
    idSpan: rndSpan,
		idDiv:rndDiv,
  };
  array.push(contribution);
}

function conformity(array, room) {
  for (const arr of array) {
    if (arr.idContribution === parseInt(room)) {
      return true;
    }
  }
}

function checkSum(sum) {
  let message = prompt("Введите трехзначный код");
  if (message.length === 3 && message === "123") {
    if (sum === "" || sum === "0") alert("Введите сумму");
    else if (sum < "0") alert("Нельзя вводить отрицательное число!");
    else return true;
  } else alert("Неверный код");
}

function introductionSum(array, room, balance) {
  for (const arr of array) {
    if (arr.idContribution === parseInt(room)) {
      if (checkSum(balance)) {
        let span = document.getElementById(arr.idSpan);
        arr.sum += parseInt(balance);
        span.innerHTML = arr.sum;
        not.innerHTML += `<div>Пополнение счета:${arr.idContribution}</div>
				<div>на сумму:${balance} рублей</div><div>	баланс счета:${arr.sum}</div>`;
      }
    } 
  }
}

function withdrawalSum(array, room, balance) {
  for (const arr of array) {
    if (arr.idContribution === parseInt(room)) {
      if (checkSum(balance)) {
        let value = parseInt(arr.sum) - parseInt(balance);
        if (value >= 0) {
          let span = document.getElementById(arr.idSpan);
          span.innerHTML = value;
          arr.sum -= parseInt(balance);
          not.innerHTML += `<div>Снятие со счета:${arr.idContribution}</div>
					<div>суммы:${balance} рублей</div><div> баланс счета:${arr.sum} рублей</div>`;
        } else alert("Недостаточно средств для снятия");
      }
    } 
  }
}

	
function chekDelet(){
	if (nameContribution.value === "" || parseInt(nameContribution.value) < 16) {
		alert("Проверьте правильность написания счета!");
	}
	let message = prompt("Введите трехзначный код");
	if (message.length === 3 && message === "123") {
		return true;
	}
}

function deletContribution(array, room){
	for (const arr of array) {
    if (arr.idContribution === parseInt(room)) {
			if(chekDelet()){
				let contrib=document.getElementById(arr.idDiv);
				contrib.innerHTML='';
				array=array.filter(value=>value.idContribution!==parseInt(room));
			}
	}
}
}
