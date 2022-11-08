var valueName = document.getElementById('input-name')
var valueSurname = document.getElementById('input-surname')
var error = document.querySelector('.error')

document.getElementById('sendbtn').addEventListener('click', function (e) {

    if (valueName.value != "" && valueSurname.value != ""){

        let value = valueName.value
        let value2 = valueSurname.value

        localStorage.setItem('inputValueName', value)
        localStorage.setItem('inputValueSurname', value2)

        window.location.href='overview.html'
    }
    else {
        error.innerHTML = `Вы не заполнили оба поля!`
    }
})