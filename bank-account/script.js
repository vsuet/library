var slider = document.getElementById("input-sum");
var output = document.getElementById("sum");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

var slider1 = document.getElementById("input-date");
var output1 = document.getElementById("date");
output.innerHTML = slider.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
}

const formAutorization = document.getElementById("form-autorization")
const inputName = document.getElementById("input-name")
const inputLastName = document.getElementById("input-last-name")
const inputPatronymic = document.getElementById("input-patronymic")
const butSubmit = document.getElementById("submit")
const outputName = document.getElementById("output-name")
const outputLastName = document.getElementById("output-last-name")
const outputPatronymic = document.getElementById("output-patronymic")

formAutorization.addEventListener("submit", function (event) {
    event.preventDefault();

    outputName.innerHTML = `<h3>${inputName.value}</h3>`;
    outputLastName.innerHTML = `<h3>${inputLastName.value}</h3>`;
    outputPatronymic.innerHTML = `<h3>${inputPatronymic.value}</h3>`;


});

const formDepo = document.getElementById("form-depo")
const depo = document.getElementById("depo")

formDepo.addEventListener("submit", function(event){
    event.preventDefault();

    depo.innerHTML += `<div class="new-depo" id="new-depo"><button class="but-2" id="close-depo">Закрыть депозит</button><h3 class="depo-info">${slider.value} рублей на срок (в годах): ${slider1.value}</h3><div>`
})

const closeDepo = document.getElementById("close-depo")
const newDepo = document.getElementById("new-depo")

closeDepo.addEventListener("click", function(){
    newDepo.remove();
})
