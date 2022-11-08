var buttonAdd = document.getElementById('button-add')
var account = document.querySelector('.accounts')
var result = document.querySelector('.result');
let valueName = localStorage.getItem('inputValueName');
let valueSurname = localStorage.getItem('inputValueSurname');
var money = document.getElementById('money-count')
var firstPage = document.getElementById('1')
var secondPage = document.getElementById('2')
var thirdPage = document.getElementById('3')
var fourthPage = document.getElementById('4')
var fifthPage = document.getElementById('5')

document.querySelector('.btns-pages').addEventListener('click', e => { // вешаем один обработчик события клика на весь блок
    const { target } = e;  // цель, на которую мы кликнули
    const targetClassList = target.classList;  // массив классов цели, на которую мы кликнули
    const allNumPages = [ ...document.querySelectorAll('.num-page')];  // массив всех нумерованых блоков (блоки с классом .num-page), оператор '...' здесь не просто так
    const activePageNumber = allNumPages.findIndex(i => i.classList.contains('num-active'));  // номер (индекс) ранее выбранной страницы
    
    switch(true) {  // этот оператор смотрит на какую кнопку мы кликнули
      case targetClassList.contains('btn-left'): return activePageNumber && setNum(-1, true);  // если кликнули на кнопку влево
      case targetClassList.contains('btn-right'): return  (activePageNumber - allNumPages.length + 1) && setNum(1, true);  // если кликнули на кнопку вправо
    }
    
    function setNum(num, direction = null) {  // функция, которая задает выбранную страницу. параметр num - какую цифру мы выбрали (если мы нажали на цифру). параметр direction - направление стрелки, которую мы выбрали (если мы нажали на стрелку)
      allNumPages[activePageNumber].classList.remove('num-active'); // убирает класс .num-active с ранее выбранной страницы
      // здесь самый сок
      // если в вызываемой функции указан аргумент direction (он true или false), то берем индекс ранее выбранной цифры и плюсуем/минусуем 1, чтобы активировать предыдущую/следующую цифру
      // плюсовать или минусовать указывает аргумент num, который равен -1 либо 1
      // если в вызываемой функции не указан аргумен direction (он равен null) - значит мы кликнули прямо на число. берем содержимое выбранной цифры (через innerHTML) и по полученому индексу делаем элемент активным
      (allNumPages[direction === null ? target.innerHTML - 1 : activePageNumber + num]).classList.add('num-active') ;

      
    }
  });  

document.addEventListener('DOMContentLoaded', function(){

    if (valueName && valueSurname.trim()){
        result.innerHTML = `<p>Здравствуй, ${valueName}&nbsp;${valueSurname}</p>`;
    }

});


buttonAdd.addEventListener('click', function(e){
    let newDiv1 = document.createElement('div')
    newDiv1.className = 'account-card'
    newDiv1.innerHTML = `<div class="money-count"><div id="money1">${money.value}</div>&nbsp;$</div>\<input type="number" id="vnesti1">\<div class="operations"><button class="plus1">Deposit</button>\<button class="minus1">Withdraw</button>\<button class="delete1">Delete Account</button></div>`
    
    let newDiv2 = document.createElement('div')
    newDiv2.className = 'account-card'
    newDiv2.innerHTML = `<div class="money-count"><div id="money2">${money.value}</div>&nbsp;$</div>\<input id="vnesti2"></input>\<div class="operations"><button class="plus2">Deposit</button>\<button class="minus2">Withdraw</button>\<button class="delete2">Delete Account</button></div>`

    let newDiv3 = document.createElement('div')
    newDiv3.className = 'account-card'
    newDiv3.innerHTML = `<div class="money-count"><div id="money3">${money.value}</div>&nbsp;$</div>\<input id="vnesti3"></input>\<div class="operations"><button class="plus3">Deposit</button>\<button class="minus3">Withdraw</button>\<button class="delete3">Delete Account</button></div>`

    var btnDelete1 = document.querySelector('.delete1')
    var btnDelete2 = document.querySelector('.delete2')
    var btnDelete3 = document.querySelector('.delete3')
    let i = 0

    
    if (money.value != "" && !btnDelete1){
        account.appendChild(newDiv1)

        document.querySelector('.plus1').addEventListener('click', function(e){
            if (document.getElementById('vnesti1').value != ""){
                if (i<5){
                let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                document.getElementById('money1').innerHTML= data;

                let historyDiv = document.createElement('div')
                historyDiv.className = 'history-element'

                i=i+1

                var today = new Date();
                var now = today.toLocaleString();

                
                firstPage.appendChild(historyDiv).innerHTML = `<div>Deposit</div><div>${now}</div><div>Deposit</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<10) {
                let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                document.getElementById('money1').innerHTML= data;

                

                i=i+1

                var today = new Date();
                var now = today.toLocaleString();

                
                secondPage.appendChild(historyDiv).innerHTML = `<div>Deposit</div><div>${now}</div><div>Deposit</div><div>${document.getElementById('vnesti1').value}</div> <div>${data}</div>`
                }
                else if(i<15) {
                    let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    thirdPage.appendChild(historyDiv).innerHTML = `<div>Deposit</div><div>${now}</div><div>Deposit</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<20) {
                    let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    fourthPage.appendChild(historyDiv).innerHTML = `<div>Deposit</div><div>${now}</div><div>Deposit</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<25) {
                    let data = parseInt(document.getElementById('vnesti1').value) + parseInt(document.getElementById('money1').getInnerHTML())
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    fifthPage.appendChild(historyDiv).innerHTML = `<div>Deposit</div><div>${now}</div><div>Deposit</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
            }

        })

        document.querySelector('.minus1').addEventListener('click', function(e){
                if (i<5){
                let data = parseInt(document.getElementById('money1').getInnerHTML()) - parseInt(document.getElementById('vnesti1').value)
                document.getElementById('money1').innerHTML= data;

                let historyDiv = document.createElement('div')
                historyDiv.className = 'history-element'

                i=i+1

                var today = new Date();
                var now = today.toLocaleString();
                
                
                firstPage.appendChild(historyDiv).innerHTML = `<div>Withdraw</div><div>${now}</div><div>Withdraw</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<10) {
                let data = parseInt(document.getElementById('money1').getInnerHTML()) - parseInt(document.getElementById('vnesti1').value)
                document.getElementById('money1').innerHTML= data;

                let historyDiv = document.createElement('div')
                historyDiv.className = 'history-element'

                i=i+1

                var today = new Date();
                var now = today.toLocaleString();

                
                secondPage.appendChild(historyDiv).innerHTML = `<div>Withdraw</div><div>${now}</div><div>Withdraw</div><div>${document.getElementById('vnesti1').value}</div> <div>${data}</div>`
                }
                else if(i<15) {
                    let data = parseInt(document.getElementById('money1').getInnerHTML()) - parseInt(document.getElementById('vnesti1').value)
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    thirdPage.appendChild(historyDiv).innerHTML = `<div>Withdraw</div><div>${now}</div><div>Withdraw</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<20) {
                    let data = parseInt(document.getElementById('money1').getInnerHTML()) - parseInt(document.getElementById('vnesti1').value)
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    fourthPage.appendChild(historyDiv).innerHTML = `<div>Withdraw</div><div>${now}</div><div>Withdraw</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
                else if(i<25) {
                    let data = parseInt(document.getElementById('money1').getInnerHTML()) - parseInt(document.getElementById('vnesti1').value)
                    document.getElementById('money1').innerHTML= data;
    
                    let historyDiv = document.createElement('div')
                    historyDiv.className = 'history-element'
    
                    i=i+1
    
                    var today = new Date();
                    var now = today.toLocaleString();
    
                    
                    fifthPage.appendChild(historyDiv).innerHTML = `<div>Withdraw</div><div>${now}</div><div>Withdraw</div><div>${document.getElementById('vnesti1').value}</div>  <div>${data}</div>`
                }
            
        })
        
        document.querySelector('.delete1').addEventListener('click', function(e){
            account.removeChild(newDiv1)
            document.querySelector('.num-page').removeChild(historyDiv)
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

        document.querySelector('.minus2').addEventListener('click', function(e){
            if (document.getElementById('vnesti2').value != ""){
                let data = parseInt(document.getElementById('money2').getInnerHTML()) - parseInt(document.getElementById('vnesti2').value)
                document.getElementById('money2').innerHTML= data;
            }
        })

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

        document.querySelector('.minus3').addEventListener('click', function(e){
            if (document.getElementById('vnesti3').value != ""){
                let data = parseInt(document.getElementById('money3').getInnerHTML()) - parseInt(document.getElementById('vnesti3').value)
                document.getElementById('money3').innerHTML= data;
            }
        })
        
        document.querySelector('.delete3').addEventListener('click', function(e){
            account.removeChild(newDiv3)
        })
    }
})
