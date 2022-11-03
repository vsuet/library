document.addEventListener('DOMContentLoaded', function(){

    // Получаем данные из localStorage по ключу h1Text
    let name = localStorage.getItem('inputValueName');
    let username = localStorage.getItem('inputValueUsername');

    if (name && username.trim()){

        var a = document.querySelector('.result');

        a.innerHTML = `<p>Здравствуй, ${name}&nbsp;${username}</p>`;
    }

});