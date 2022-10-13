//Элементы страницы
const dom = {
    sectionUser: document.getElementById('section-user'), //Верхняя часть страницы целиком, на ней блок входа в аккаунт и блок информации о пользователе
    sectionDeposits: document.getElementById('section-deposits'), //Нижняя часть страницы целиком, на ней список депозитов, открытие депозита и изменение депозита

    blockUserInfo: document.getElementById('user-info-block'), //Блок информации о пользователе (Фамилия, Имя, Отчество, Дата рождения)
    blockLogInAccount: document.getElementById('log-in-account-block'), //Блок входа в аккаунт
    blockListDeposits: document.getElementById('list-deposits-block'), //Блок со списком депозитов
    blockEditDeposit: document.getElementById('edit-deposit-block'), //Блок редактирования существующего депозита
    blockOpenDeposit: document.getElementById('open-deposit-block'), //Блок открытия депозита

    tbodyListDeposits: document.getElementById('tbody-list-deposits'), //tbody содержащее открытые депозиты (список депозитов по сути)

    buttonNavOpenDeposit: document.getElementById('nav-open-deposit-btn'), //Кнопка открытия блока Открыть депозит на меню навигации
    buttonCloseEditDepositBlock: document.getElementById('close-btn-edit-deposit-block'), //Кнопка-крестик закрытия блока редактирования существующего депозита
    buttonCloseOpenDepositBlock: document.getElementById('close-btn-open-deposit-block'), //Кнопка-крестик закрытия блока добавления депозита

}

//Элементы блока Вход в аккаунт
const blockLogInAccount = {
    surnameInput: document.getElementById('surname-input'), //Поле ввода фамилии пользователя
    nameInput: document.getElementById('name-input'), //Поле ввода имени пользователя
    patronymicInput: document.getElementById('patronymic-input'), //Поле ввода отчества пользователя
    dateOffBirthInput: document.getElementById('date-of-birth-input'), //Поле ввода даты рождения пользователя
    buttonLogInAccount: document.getElementById('log-in-btn'), //Кнопка ВОЙТИ В АККАУНТ
}

//Элементы блока информации о пользователе
const blockUserInfo = {
    userSurname: document.getElementById('user-surname'), //Надпись фамилии пользователя (большая такая)
    userName: document.getElementById('user-name'), //Надпись, содержащая имя и отчество пользователя в одной строке
    userBirthDate: document.getElementById('user-birth-date'), //Надпись с датой рождения пользователя
    buttonLogOutAccount: document.getElementById('log-out-btn'), //Кнопка ВЫЙТИ из аккаунта
}

//Элементы блока открытия депозита
const blockOpenDeposit = {
    depositNameInput: document.getElementById('deposit-name'), //Поле для ввода названия депозита
    depositSummaInput: document.getElementById('deposit-summa'), //Поле для ввода суммы депозита. Не стал делать возможность ввода только цифр, но впринципе такое можно дыло бы сделать
    buttonOpenDeposit: document.getElementById('open-deposit-btn'), //Кнопка ОТКРЫТЬ ДЕПОЗИТ
}

//Элементы блока редактирования сущестувующего депозита
const blockEditDeposit = {
    depositId: document.getElementById('hidden-id-deposit'), //Надпись с id депозита. Не видна на форме. Можно было бы и по другому id передать в форму. Это первое что придумал
    depositNameLabel: document.getElementById('deposit-name-label'), //Надпись с названием депозита
    depositSummaLabel: document.getElementById('deposit-summa-label'), //Надпись с текущей суммой депозита
    inputEditDepositName: document.getElementById('edit-deposit-name'), //Поле для редактирования названия депозита
    inputInsertMoney: document.getElementById('insert-money'), //Поле для внесения денег в депозит
    inputTakeOffMoney: document.getElementById('takeOff-money'), //Поле для снятия денег из депозита
    buttonRename: document.getElementById('rename-btn'), //Кнопка ПЕРЕИМЕНОВАТЬ депозит
    buttonInsertMoney: document.getElementById('insert-money-btn'), //Кнопка ВНЕСТИ СУММУ. При нажатии в текущую сумму депозита приплюсуется значение из поля Внесение денег. Если кончено там цифры написаны
    buttonTakeOffMoney: document.getElementById('takeOff-money-btn'), //Кнопка СНЯТЬ СУММУ. При нажатии из текущей суммы депозита вычтется указанная в поле Снятие денег сумма
    buttonCloseDeposit: document.getElementById('close-deposit-btn'), //Кнопка ЗАКРЫТЬ (УДАЛИТЬ) ДЕПОЗИТ. Удаляет депозит полностью. Без подтверждения
}

//Массив депозитов. Содержит созданные депозиты
let deposits = []

//Нажатие по кнопке ВОЙТИ в аккаунт
blockLogInAccount.buttonLogInAccount.onclick = () => {
    let surname = blockLogInAccount.surnameInput
    let name = blockLogInAccount.nameInput
    let patronymic = blockLogInAccount.patronymicInput
    let dateOfBirth = blockLogInAccount.dateOffBirthInput
    //Проверка на заполнение полей с данными
    if (surname.value && name.value && patronymic.value && dateOfBirth.value) {
        addUserData(surname.value, name.value, patronymic.value, dateOfBirth.value) //Вызываю функцию добавления данных пользователя

        dom.blockUserInfo.classList.remove('user-info-block-hidden') //Меняю классы для элементов, чтобы изменить отображение на странице
        dom.blockUserInfo.classList.add('user-info-block-visible')
        dom.blockLogInAccount.classList.remove('log-in-account-block-visible')
        dom.blockLogInAccount.classList.add('log-in-account-block-hidden')
        dom.sectionUser.classList.remove('user-area-unauthorized')
        dom.sectionUser.classList.add('user-area-authorized')
        dom.sectionDeposits.classList.remove('section-deposits-hidden')
        dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits')
        dom.sectionDeposits.classList.add('section-deposits-without-list-deposits')

        surname.value = '' //Очищаю поля с данными
        name.value = ''
        patronymic.value = ''
        dateOfBirth.value = ''
    }
}

//Нажатие по кнопке ВЫЙТИ
blockUserInfo.buttonLogOutAccount.onclick = () => {
    dom.blockUserInfo.classList.remove('user-info-block-visible') //Переназначаю различные классы у элементов для нормального отображения
    dom.blockUserInfo.classList.add('user-info-block-hidden')

    dom.blockLogInAccount.classList.remove('log-in-account-block-hidden')
    dom.blockLogInAccount.classList.add('log-in-account-block-visible')

    dom.blockOpenDeposit.classList.remove('open-deposit-block-hidden')
    dom.blockOpenDeposit.classList.add('open-deposit-block-visible')

    dom.sectionUser.classList.remove('user-area-authorized')
    dom.sectionUser.classList.add('user-area-unauthorized')

    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-open-deposit-block')
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-edit-deposit-block')
    dom.sectionDeposits.classList.add('section-deposits-hidden')

    dom.blockListDeposits.classList.remove('list-deposits-block-visible')
    dom.blockListDeposits.classList.add('list-deposits-block-hidden')

    dom.blockEditDeposit.classList.remove('edit-deposit-block-visible')
    dom.blockEditDeposit.classList.add('edit-deposit-block-hidden')

    dom.tbodyListDeposits.innerHTML = '' //Очищаю список депозитов НА СТРАНИЦЕ при выходе пользователя, чтобы у другого пользователя не отображалось чужих депозитов
    blockOpenDeposit.depositNameInput.value = '' //Очищаю значения в полях на форме добавления депозита. На случай, если выйти из аккаунта при открытой форме создания депозита
    blockOpenDeposit.depositSummaInput.value = ''
    deposits = [] //Очищаю список депозитов В МАССИВЕ при выходе пользователя, чтобы у другого пользователя не отображалось чужих депозитов
}

//Нажатие по кнопке ОТКРЫТЬ ДЕПОЗИТ (в навигации nav)
dom.buttonNavOpenDeposit.onclick = () => {
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits')
    //Проверка условия для нормального отображения блока создания депозита
    if (dom.sectionDeposits.classList.contains('section-deposits-without-list-deposits')) {
        dom.blockOpenDeposit.classList.remove('open-deposit-block-hidden')
        dom.blockOpenDeposit.classList.add('open-deposit-block-visible')
    }
    //Другая проверка условия для нормального отображения того же блока создания депозита
    if (dom.blockListDeposits.classList.contains('list-deposits-block-visible') && dom.blockEditDeposit.classList.contains('edit-deposit-block-hidden')) {
        dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-open-deposit-block')
        dom.blockOpenDeposit.classList.remove('open-deposit-block-hidden')
        dom.blockOpenDeposit.classList.add('open-deposit-block-visible')
    }
}

//Нажатие по кнопке ОТКРЫТЬ ДЕПОЗИТ (на форме создания нового депозита)
blockOpenDeposit.buttonOpenDeposit.onclick = () => {
    let depName = blockOpenDeposit.depositNameInput
    let depSumm = blockOpenDeposit.depositSummaInput
    //Проверка на заполнение полей с данными
    if (depName.value && depSumm.value) {
        addDeposit(depName.value, depSumm.value) //Вызываю функцию добавления нового депозита в массив
        showDepositsList(deposits) //Вызываю функцию вывода списка депозитов

        dom.blockOpenDeposit.classList.remove('open-deposit-block-visible') //Переназначаю классы элементам для нормального отображения
        dom.blockOpenDeposit.classList.add('open-deposit-block-hidden')
        dom.blockListDeposits.classList.remove('list-deposits-block-hidden')
        dom.blockListDeposits.classList.add('list-deposits-block-visible')
        dom.sectionDeposits.classList.remove('section-deposits-without-list-deposits')
        dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-open-deposit-block')

        depName.value = '' //Очищаю поля с данными
        depSumm.value = ''
    }
}

//Нажатие по кнопке РЕДАКТИРОВАТЬ депозит на списке депозитов
dom.tbodyListDeposits.onclick = (click) => {
    //Проверка, что блок открытия депозита скрыт, иначе не получится открыть блок редактирования существующего депозита
    if (!dom.blockOpenDeposit.classList.contains('open-deposit-block-visible')) {
        const target = click.target //В переменную target передаю событие клика по любому элементу на tbody, чтобы в дальнейшем выцепить только событие клика по кнопке РЕДАКТИРОВАТЬ депозит, расположенной на tbody
        //Проверка что нажата именно кнопка РЕДАКТИРОВАТЬ, а не другой элемент из tbody. Вторая проверка в else, т.к. на кнопке есть элемент img и по нему тоже можно кликнуть
        if (target.classList.contains('btn-listDeposit')) {
            let depositBlock = target.parentNode.parentNode //Получаю в переменную depositBlock тег <tr>, являющийся родительским для кнопки РЕДАКТИРОВАТЬ, + содержащий данные (название, сумму, кнопку) о депозите, + имеющий уникальный id
            //Циклом перебираю массив с депозитами и выполняю действия с тем депозитом, id которого совпал с id тега <tr> на странице. В теге <tr> если чё хранится данные депозита и кнопка редактирования
            for (let deposit of deposits) {
                if (deposit.id == depositBlock.id) {
                    blockEditDeposit.depositId.id = deposit.id //При нажатии на кнопку получаю id нужного депозита из массива с депозитами и записываю этот id в невидимый элемент на форме редактирования депозита
                    blockEditDeposit.depositNameLabel.innerText = deposit.name //При нажатии на кнопку получаю name (название по сути) нужного депозита из массива с депозитами и записываю этот name в элемент на форме редактирования депозита
                    blockEditDeposit.depositSummaLabel.innerText = deposit.summ //При нажатии на кнопку получаю summ (количество денег) нужного депозита из массива с депозитами и записываю этот summ в элемент на форме редактирования депозита

                    blockEditDeposit.inputEditDepositName.value = `${deposit.name}` //При открытии формы поле с именем депозита уже будет содержать имя. Можно и без этого
                    blockEditDeposit.inputInsertMoney.value = '' //Очищаю поле с добавлением денег при открытии формы редактирования депозита
                    blockEditDeposit.inputTakeOffMoney.value = ''

                    dom.blockEditDeposit.classList.remove('edit-deposit-block-hidden') //Переназначаю классы элементам для нормального отображения
                    dom.blockEditDeposit.classList.add('edit-deposit-block-visible')
                    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-open-deposit-block')
                    dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-edit-deposit-block')
                }
            }
        } else {
            //Аналогичные действия как выше, но только если нажатие произошло на картинку с ручкой, расположенной на кнопке РЕДАКТИРОВАТЬ
            if (target.classList.contains('pen-img')) {
                let depositElement = target.parentNode.parentNode.parentNode

                for (let deposit of deposits) {
                    if (deposit.id == depositElement.id) {
                        blockEditDeposit.depositNameLabel.innerText = deposit.name
                        blockEditDeposit.depositSummaLabel.innerText = deposit.summ

                        blockEditDeposit.inputEditDepositName.value = `${deposit.name}`
                        blockEditDeposit.inputInsertMoney.value = ''
                        blockEditDeposit.inputTakeOffMoney.value = ''

                        dom.blockEditDeposit.classList.remove('edit-deposit-block-hidden')
                        dom.blockEditDeposit.classList.add('edit-deposit-block-visible')
                        dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-open-deposit-block')
                        dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-edit-deposit-block')
                    }
                }
            }
        }
    }
}

//Нажатие по кнопке ПЕРЕИМЕНОВАТЬ на форме редактирования депозита
blockEditDeposit.buttonRename.onclick = () => {
    let idDep = blockEditDeposit.depositId.id //Получаю id редактируемого депозита из скрытого элемента на форме
    let newNameDep = blockEditDeposit.inputEditDepositName //Поле для ввода нового названия депозита
    //Проверка, что поле ввода нового имени не пустое, на всякий случай
    if (newNameDep.value) {
        //В цикле forof перебираю элементы массива с депозитами, пока не совпадут id депозита из массива и депозита на форме
        for (let deposit of deposits) {
            if (deposit.id == idDep) {
                deposit.name = newNameDep.value //Присваиваю новое имя депозиту в массиве, равное значению поля с новым именем
                blockEditDeposit.depositNameLabel.innerText = deposit.name //Вывожу новое имя депозита на форму уже из массива, а не из поля ввода
                showDepositsList(deposits) //Вызываю функцию вывода списка депозитов. По идее она заново отрисовывает всю таблицу слева. Т. к. в массиве имя депозита поменялось, то и слева в таблице тоже
            }
        }
    }
}

//Нажатие по кнопке ВНЕСТИ СУММУ на форме редактирования депозита
blockEditDeposit.buttonInsertMoney.onclick = () => {
    let idDep = blockEditDeposit.depositId.id //Получаю id редактируемого депозита из скрытого элемента на форме
    let summDep = blockEditDeposit.depositSummaLabel.textContent //Надпись на форме с текущей суммой депозита
    let addedSumm = blockEditDeposit.inputInsertMoney //Поле для ввода суммы добавления к депозиту (внесение денег)
    //В цикле forof перебираю элементы массива с депозитами, пока не совпадут id депозита из массива и депозита на форме
    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            deposit.summ = Number(summDep) + Number(addedSumm.value) //Присваиваю новую текущую сумму депозиту в массиве путём складывания Старой текущей суммы + Значение из поля для внесения денеге (обязательно цифры)
            blockEditDeposit.depositSummaLabel.innerText = deposit.summ //Вывожу новую текущую сумму депозита на форму
            showDepositsList(deposits) //Вызываю функцию вывода списка депозитов. По идее она заново отрисовывает всю таблицу слева. Т. к. в массиве текущая сумма депозита поменялось, то и слева в таблице тоже
            addedSumm.value = '' //Очищаю поле внесения денег
        }
    }
}

//Нажатие по кнопке СНЯТЬ СУММУ на форме редактирования депозита
blockEditDeposit.buttonTakeOffMoney.onclick = () => {
    let idDep = blockEditDeposit.depositId.id //Получаю id редактируемого депозита из скрытого элемента на форме
    let summDep = blockEditDeposit.depositSummaLabel.textContent //Надпись на форме с текущей суммой депозита
    let awaySumm = blockEditDeposit.inputTakeOffMoney //Поле для ввода суммы убавления из депозиту (снятие денег)
    //В цикле forof перебираю элементы массива с депозитами, пока не совпадут id депозита из массива и депозита на форме
    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            deposit.summ = Number(summDep) - Number(awaySumm.value) //Присваиваю новую текущую сумму депозиту в массиве путём вычитания Старой текущей суммы - Значение из поля для снятия денеге (обязательно цифры)
            blockEditDeposit.depositSummaLabel.innerText = deposit.summ //Вывожу новую текущую сумму депозита на форму
            showDepositsList(deposits) //Вызываю функцию вывода списка депозитов. По идее она заново отрисовывает всю таблицу слева. Т. к. в массиве текущая сумма депозита поменялось, то и слева в таблице тоже
            awaySumm.value = '' //Очищаю поле снятия денег
        }
    }
}

//Нажатие по кнопке ЗАКРЫТЬ (УДАЛИТЬ) ДЕПОЗИТ на форме редактирования депозита
blockEditDeposit.buttonCloseDeposit.onclick = () => {
    let idDep = blockEditDeposit.depositId.id //Получаю id редактируемого депозита из скрытого элемента на форме
    //В цикле forof перебираю элементы массива с депозитами, пока не совпадут id депозита из массива и депозита на форме
    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            let indexDeposit = deposits.indexOf(deposit) //Получаю индекс (порядковый номер) редактируемого депозита в массиве с депозитами
            deposits.splice(indexDeposit, 1) //Удаляю депозит из массива с депозитами по его индексу
            showDepositsList(deposits) //Вызываю функцию вывода списка депозитов. По идее она заново отрисовывает всю таблицу слева. Т. к. в массиве депозит удалился, то и слева в таблице тоже

            dom.blockEditDeposit.classList.remove('edit-deposit-block-visible') //Переназначаю классы элементов для нормального отображения элементов. При нажати на кнопку ЗАКРЫТЬ (УДАЛИТЬ) ДЕПОЗИТ форма редактирования депозитов закрывается
            dom.blockEditDeposit.classList.add('edit-deposit-block-hidden')
            dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-edit-deposit-block')
            dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')
        }
    }
}

//Отслеживаю нажатие на кнопку КРЕСТИК в правом верхнем углу формы редактирования депозита
dom.buttonCloseEditDepositBlock.onclick = () => {
    dom.blockEditDeposit.classList.remove('edit-deposit-block-visible') //Переназначаю классы элементов для нормального отображения на странице
    dom.blockEditDeposit.classList.add('edit-deposit-block-hidden')
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-edit-deposit-block')
    dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')

    blockEditDeposit.inputEditDepositName.value = '' //Очищаю поля с данными
    blockEditDeposit.inputInsertMoney.value = ''
    blockEditDeposit.inputTakeOffMoney.value = ''
}

//Отслеживаю нажатие на кнопку КРЕСТИК в правом верхнем углу блока добавления депозита
dom.buttonCloseOpenDepositBlock.onclick = () => {
    dom.blockOpenDeposit.classList.remove('open-deposit-block-visible') //Переназначаю классы элементов для нормального отображения на странице
    dom.blockOpenDeposit.classList.add('open-deposit-block-hidden')
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-open-deposit-block')
    dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')

    blockOpenDeposit.depositNameInput.value = '' //Очищаю поля с данными
    blockOpenDeposit.depositSummaInput.value = ''
}


//Функция внесения данных о пользователе
function addUserData(surname, name, patronymic, dateOfBirth) {
    blockUserInfo.userSurname.innerText = `${surname}` //Внесение фамилии на блок с информацией о пользователе
    blockUserInfo.userName.innerText = `${name + " " + patronymic}` //Внесение имени + отчества одной строкой на блок с информацией о пользователе
    blockUserInfo.userBirthDate.innerText = `${dateOfBirth}` //Внесение даты рождения на блок с информацией о пользователе
}

//Функция добавления нового депозита в массив
function addDeposit(name, summ) {
    const timestamp = Date.now() //Временная метка для получения уникального id депозита
    // Формирование объекта депозита, включающего id, название депозита и сумму
    const deposit = {
        id: timestamp,
        name,
        summ,
    }
    deposits.push(deposit) //Добавление объекта депозита в массив с депозитами
}

//Функция вывода списка депозитов. Её я взял из видео на ютубе, переработал под себя, но не все моменты понял. \_(ツ)_/¯
function showDepositsList(deposits) {
    let htmlList = ''

    deposits.forEach((deposit) => {
        const depositHtml = `
                <tr id="${deposit.id}" class="deposit">
                    <td class="name-deposit-cell">${deposit.name}</td>
                    <td class="summ-deposit-cell">${deposit.summ}</td>
                    <td>
                        <button type="button" class="button btn-listDeposit">
                            <img src="images/pen.png" class="pen-img">
                            Редактировать
                        </button>
                    </td>
                </tr>
        `
        htmlList += depositHtml
    })
    dom.tbodyListDeposits.innerHTML = htmlList
}