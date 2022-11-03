document.getElementById('sendbtn').addEventListener('click', function (e) {

    let value = document.getElementById('input-name').value // записываем значение в переменную

    localStorage.setItem('inputValueName', value) // записываем значение в localStorage
})

document.getElementById('sendbtn').addEventListener('click', function (e) {
    
    let value = document.getElementById('input-username').value // записываем значение в переменную

    localStorage.setItem('inputValueUsername', value) // записываем значение в localStorage
    window.location.href='overview.html'
})

