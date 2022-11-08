var buttonAdd = document.getElementById('button-add')
var account = document.querySelector('.accounts')
var result = document.querySelector('.result');
let valueName = localStorage.getItem('inputValueName');
let valueSurname = localStorage.getItem('inputValueSurname');
var money = document.getElementById('money-count')

document.addEventListener('DOMContentLoaded', function(){

    if (valueName && valueSurname.trim()){
        result.innerHTML = `<p>Здравствуй, ${valueName}&nbsp;${valueSurname}</p>`;
    }

});


buttonAdd.addEventListener('click', function(e){
    let newDiv1 = document.createElement('div')
    newDiv1.className = 'account-card'
    newDiv1.innerHTML = `<div id="money1">${money.value}</div>\<input type="number" id="vnesti1">\<button class="plus1"></button>\<button class="delete1"></button>`
    
    let newDiv2 = document.createElement('div')
    newDiv2.className = 'account-card'
    newDiv2.innerHTML = ` <div id="money2">${money.value}</div>\<span>$</span> \ <input id="vnesti2"></input>\<button class="plus2"></button>\<button class="delete2"></button>`

    let newDiv3 = document.createElement('div')
    newDiv3.className = 'account-card'
    newDiv3.innerHTML = ` <div id="money3">${money.value}</div> \ <input id="vnesti3"></input>\<button class="plus3"></button>\<button class="delete3"></button>`

    var btnDelete1 = document.querySelector('.delete1')
    var btnDelete2 = document.querySelector('.delete2')
    var btnDelete3 = document.querySelector('.delete3')

    if (money.value != "" && !btnDelete1){
        account.appendChild(newDiv1)

        document.querySelector('.plus1').addEventListener('click', function(e){
            if (document.getElementById('vnesti1').value != ""){
                let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                document.getElementById('money1').innerHTML= data;
            }
        })
        
        document.querySelector('.delete1').addEventListener('click', function(e){
            account.removeChild(newDiv1)
        })
    }
    else if (money.value != "" && !btnDelete2){
        account.appendChild(newDiv2)

        document.querySelector('.plus2').addEventListener('click', function(e){
            if(document.getElementById('vnesti2').value != ""){
                let data = parseInt(document.getElementById('vnesti2').value) + parseInt(document.getElementById('money2').getInnerHTML())
                document.getElementById('money2').innerHTML= data;
            }
        } )
        document.querySelector('.delete2').addEventListener('click', function(e){
            account.removeChild(newDiv2)
        })
    }
    else if (money.value != "" && !btnDelete3){
        account.appendChild(newDiv3)

        document.querySelector('.plus3').addEventListener('click', function(e){
            if(document.getElementById('vnesti3').value != ""){
                let data = parseInt(document.getElementById('vnesti3').value) + parseInt(document.getElementById('money3').getInnerHTML())
                document.getElementById('money3').innerHTML= data;
            }
        })
        
        document.querySelector('.delete3').addEventListener('click', function(e){
            account.removeChild(newDiv3)
        })
    }
})