document.getElementById('sendbtn').addEventListener('click', function (e) {
    let value = document.getElementById('inputId').value // записываем значение в переменную
    localStorage.setItem('inputValue', value) // записываем значение в localStorage
    window.location.href='overview.html'
})



