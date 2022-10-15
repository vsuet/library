const account = load()
const walletsList = document.getElementById("wallets-list")
const notificationList = document.getElementById("notification-list")
const cardCreate = document.getElementById("form-new-wallet")
const cardClose = document.getElementById("card-close")
outputWallets(account.wallets)
outputNotifications(account.notifications)

cardCreate.addEventListener('submit', (event) => {
    event.preventDefault()
    const nameWallet = document.getElementById('name-wallet').value
    createWallet(nameWallet)
})

cardClose.addEventListener('click', () => {
    const nameWallet = document.getElementById('name-wallet').value
    const wallet = account.wallets.find(wallet => wallet.name === nameWallet)
    if (!wallet) return  alert('Такого счета не существует')
    account.wallets.splice(account.wallets.indexOf(wallet), 1)
    outputWallets(account.wallets)
    save()
    sendNotification('Счет успешно закрыт',`Вы закрыли счет под названием: ${nameWallet}`)
})

function load() {
    let user = JSON.parse(localStorage.getItem(`account`))
    if (!user) {
        user = {
            firstName: "Mary",
            lastName: "Benson",
            dateOfBirth: new Date(1970, 1, 1),
            wallets: [],
            notifications: []
        }
    }
    const userData = document.getElementById("user-data")
    userData.innerHTML = `
        <img src="images/user.png" alt="user">
        <p>Имя: ${user.firstName}</p>
        <p>фамилия: ${user.lastName}</p>
`
    return user
}

function save() {
    localStorage.setItem(`account`, JSON.stringify(account))
}

function createSections(arr, name) {
    if (!arr[name]) arr[name] = []
}


function createWallet(name) {
    createSections(account, "wallets")
    if (checkWallet(name)) {
        alert('Такой счет уже существует')
    } else {
        account.wallets.push({
            name: name,
            money: 1000000,
            transactions: [],
            id: random(1000000000000000, 9999999999999999)
        })
        sendNotification('Счет успешно создан',`Вы открыли новый счет под названием: ${name}`)
        sendNotification('Входящий перевод',`Пользователь: Скрудж макдак <br> Перевел вам: 1.000.000$ <br> На счет: ${name} <br> Комментарии при переводе: "Привет я обещал миллиард долларов но думаю тебе хватит:)".`)
    }
    save()
    outputWallets(account.wallets)
}

function checkWallet(name) {
    for (const wallet of account.wallets) {
        if (wallet.name === name) {
            return true
        }
    }
    return false
}

function outputWallets(wallets) {
    walletsList.innerHTML = '';
    for (const wallet of wallets) {
        walletsList.innerHTML += `
<div class="card"">
    <div class="card-header">
        <h4>${wallet.name}</h4>
        <h6>id: ${wallet.id}</h6>
    </div>
    
    <div class="card-text">
        <p>Баланс: ${wallet.money} $</p>
    </div>
</div>
        `;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function outputNotifications(notifications) {
    notificationList.innerHTML = '';
    for (const notification of notifications) {
        notificationList.innerHTML += `
<div class="notification-card"">
    <div class="card-header">
        <h4>${notification.name}</h4>
    </div>
    
    <div class="card-text">
        <p>${notification.text}</p>
    </div>
</div>
        `;
    }
}

function sendNotification(name, text) {
    createSections(account, "notifications")
    account.notifications.push({
        name: name,
        text: text
    })
    save()
    outputNotifications(account.notifications)
}