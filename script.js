const dom = {
    sectionUser: document.getElementById('section-user'), 
    sectionDeposits: document.getElementById('section-deposits'), 

    blockUserInfo: document.getElementById('user-info-block'), 
    blockLogInAccount: document.getElementById('log-in-account-block'), 
    blockListDeposits: document.getElementById('list-deposits-block'), 
    blockEditDeposit: document.getElementById('edit-deposit-block'), 
    blockOpenDeposit: document.getElementById('open-deposit-block'), 

    tbodyListDeposits: document.getElementById('tbody-list-deposits'), 

    buttonNavOpenDeposit: document.getElementById('nav-open-deposit-btn'), 
    buttonCloseEditDepositBlock: document.getElementById('close-btn-edit-deposit-block'), 
    buttonCloseOpenDepositBlock: document.getElementById('close-btn-open-deposit-block'), 

}


const blockLogInAccount = {
    surnameInput: document.getElementById('surname-input'), 
    nameInput: document.getElementById('name-input'), 
    patronymicInput: document.getElementById('patronymic-input'),
    dateOffBirthInput: document.getElementById('date-of-birth-input'), 
    buttonLogInAccount: document.getElementById('log-in-btn'), 
}

const blockUserInfo = {
    userSurname: document.getElementById('user-surname'), 
    userName: document.getElementById('user-name'), 
    userBirthDate: document.getElementById('user-birth-date'), 
    buttonLogOutAccount: document.getElementById('log-out-btn'), 
}


const blockOpenDeposit = {
    depositNameInput: document.getElementById('deposit-name'), 
    depositSummaInput: document.getElementById('deposit-summa'), 
    buttonOpenDeposit: document.getElementById('open-deposit-btn'), 
}


const blockEditDeposit = {
    depositId: document.getElementById('hidden-id-deposit'), 
    depositNameLabel: document.getElementById('deposit-name-label'), 
    depositSummaLabel: document.getElementById('deposit-summa-label'), 
    inputEditDepositName: document.getElementById('edit-deposit-name'), 
    inputInsertMoney: document.getElementById('insert-money'), 
    inputTakeOffMoney: document.getElementById('takeOff-money'), 
    buttonRename: document.getElementById('rename-btn'), 
    buttonInsertMoney: document.getElementById('insert-money-btn'), 
    buttonTakeOffMoney: document.getElementById('takeOff-money-btn'), 
    buttonCloseDeposit: document.getElementById('close-deposit-btn'), 
}


let deposits = []


blockLogInAccount.buttonLogInAccount.onclick = () => {
    let surname = blockLogInAccount.surnameInput
    let name = blockLogInAccount.nameInput
    let patronymic = blockLogInAccount.patronymicInput
    let dateOfBirth = blockLogInAccount.dateOffBirthInput

    if (surname.value && name.value && patronymic.value && dateOfBirth.value) {
        addUserData(surname.value, name.value, patronymic.value, dateOfBirth.value) /

        dom.blockUserInfo.classList.remove('user-info-block-hidden') 
        dom.blockUserInfo.classList.add('user-info-block-visible')
        dom.blockLogInAccount.classList.remove('log-in-account-block-visible')
        dom.blockLogInAccount.classList.add('log-in-account-block-hidden')
        dom.sectionUser.classList.remove('user-area-unauthorized')
        dom.sectionUser.classList.add('user-area-authorized')
        dom.sectionDeposits.classList.remove('section-deposits-hidden')
        dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits')
        dom.sectionDeposits.classList.add('section-deposits-without-list-deposits')

        surname.value = '' 
        name.value = ''
        patronymic.value = ''
        dateOfBirth.value = ''
    }
}


blockUserInfo.buttonLogOutAccount.onclick = () => {
    dom.blockUserInfo.classList.remove('user-info-block-visible') 
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

    dom.tbodyListDeposits.innerHTML = '' 
    blockOpenDeposit.depositNameInput.value = '' 
    blockOpenDeposit.depositSummaInput.value = ''
    deposits = [] 
}


dom.buttonNavOpenDeposit.onclick = () => {
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits')

    if (dom.sectionDeposits.classList.contains('section-deposits-without-list-deposits')) {
        dom.blockOpenDeposit.classList.remove('open-deposit-block-hidden')
        dom.blockOpenDeposit.classList.add('open-deposit-block-visible')
    }

    if (dom.blockListDeposits.classList.contains('list-deposits-block-visible') && dom.blockEditDeposit.classList.contains('edit-deposit-block-hidden')) {
        dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-open-deposit-block')
        dom.blockOpenDeposit.classList.remove('open-deposit-block-hidden')
        dom.blockOpenDeposit.classList.add('open-deposit-block-visible')
    }
}


blockOpenDeposit.buttonOpenDeposit.onclick = () => {
    let depName = blockOpenDeposit.depositNameInput
    let depSumm = blockOpenDeposit.depositSummaInput

    if (depName.value && depSumm.value) {
        addDeposit(depName.value, depSumm.value) 
        showDepositsList(deposits) 

        dom.blockOpenDeposit.classList.remove('open-deposit-block-visible') 
        dom.blockOpenDeposit.classList.add('open-deposit-block-hidden')
        dom.blockListDeposits.classList.remove('list-deposits-block-hidden')
        dom.blockListDeposits.classList.add('list-deposits-block-visible')
        dom.sectionDeposits.classList.remove('section-deposits-without-list-deposits')
        dom.sectionDeposits.classList.add('section-deposits-with-list-deposits-open-deposit-block')

        depName.value = '' 
        depSumm.value = ''
    }
}


dom.tbodyListDeposits.onclick = (click) => {

    if (!dom.blockOpenDeposit.classList.contains('open-deposit-block-visible')) {
        const target = click.target 
        if (target.classList.contains('btn-listDeposit')) {
            let depositBlock = target.parentNode.parentNode 
            for (let deposit of deposits) {
                if (deposit.id == depositBlock.id) {
                    blockEditDeposit.depositId.id = deposit.id 
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
        } else {

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


blockEditDeposit.buttonRename.onclick = () => {
    let idDep = blockEditDeposit.depositId.id 
    let newNameDep = blockEditDeposit.inputEditDepositName 

    if (newNameDep.value) {

        for (let deposit of deposits) {
            if (deposit.id == idDep) {
                deposit.name = newNameDep.value 
                blockEditDeposit.depositNameLabel.innerText = deposit.name 
                showDepositsList(deposits) 
            }
        }
    }
}


blockEditDeposit.buttonInsertMoney.onclick = () => {
    let idDep = blockEditDeposit.depositId.id 
    let summDep = blockEditDeposit.depositSummaLabel.textContent 
    let addedSumm = blockEditDeposit.inputInsertMoney 

    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            deposit.summ = Number(summDep) + Number(addedSumm.value) 
            blockEditDeposit.depositSummaLabel.innerText = deposit.summ 
            showDepositsList(deposits) 
            addedSumm.value = '' 
        }
    }
}


blockEditDeposit.buttonTakeOffMoney.onclick = () => {
    let idDep = blockEditDeposit.depositId.id 
    let summDep = blockEditDeposit.depositSummaLabel.textContent 
    let awaySumm = blockEditDeposit.inputTakeOffMoney 
    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            deposit.summ = Number(summDep) - Number(awaySumm.value) 
            blockEditDeposit.depositSummaLabel.innerText = deposit.summ 
            showDepositsList(deposits) 
            awaySumm.value = '' 
        }
    }
}


blockEditDeposit.buttonCloseDeposit.onclick = () => {
    let idDep = blockEditDeposit.depositId.id 

    for (let deposit of deposits) {
        if (deposit.id == idDep) {
            let indexDeposit = deposits.indexOf(deposit) 
            deposits.splice(indexDeposit, 1) 
            showDepositsList(deposits) 

            dom.blockEditDeposit.classList.remove('edit-deposit-block-visible') 
            dom.blockEditDeposit.classList.add('edit-deposit-block-hidden')
            dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-edit-deposit-block')
            dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')
        }
    }
}


dom.buttonCloseEditDepositBlock.onclick = () => {
    dom.blockEditDeposit.classList.remove('edit-deposit-block-visible') 
    dom.blockEditDeposit.classList.add('edit-deposit-block-hidden')
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-edit-deposit-block')
    dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')

    blockEditDeposit.inputEditDepositName.value = '' 
    blockEditDeposit.inputInsertMoney.value = ''
    blockEditDeposit.inputTakeOffMoney.value = ''
}


dom.buttonCloseOpenDepositBlock.onclick = () => {
    dom.blockOpenDeposit.classList.remove('open-deposit-block-visible') 
    dom.blockOpenDeposit.classList.add('open-deposit-block-hidden')
    dom.sectionDeposits.classList.remove('section-deposits-with-list-deposits-open-deposit-block')
    dom.sectionDeposits.classList.add('section-deposits-with-list-deposits')

    blockOpenDeposit.depositNameInput.value = '' 
    blockOpenDeposit.depositSummaInput.value = ''
}



function addUserData(surname, name, patronymic, dateOfBirth) {
    blockUserInfo.userSurname.innerText = `${surname}` 
    blockUserInfo.userName.innerText = `${name + " " + patronymic}` 
    blockUserInfo.userBirthDate.innerText = `${dateOfBirth}` 
}


function addDeposit(name, summ) {
    const timestamp = Date.now() 
    const deposit = {
        id: timestamp,
        name,
        summ,
    }
    deposits.push(deposit) 
}


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