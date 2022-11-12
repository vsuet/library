const walletsList = document.getElementById("wallets-list")
const notificationList = document.getElementById("notification-list")
const formOpenWallet = document.getElementById('form-open-wallet');
const getWallets = document.getElementById('get-wallets');
let  account = {}
async function main() {
    account = await load()
    outputWallets(account.wallets)
    outputNotifications(account.notifications)
}

main().then()
formOpenWallet.addEventListener('submit', async (e) => {
    e.preventDefault();
    const wallet = {
        name: document.getElementById('name').value,
        amount: document.getElementById('amount').value,
        transactions: [],
        id: random(1000000000000000, 9999999999999999),

    }
    await sendNotification('Счет успешно создан', `Вы открыли новый счет под названием: ${name}`)

    await addWallet(wallet)
})

getWallets.addEventListener('click', async () => {
    console.log(account.wallets)
});

async function addWallet(newWallet) {
    for (const wallet of account.wallets) {
        if (wallet.name === newWallet.name) {
            return alert(`У вас уже есть банковский счет с таким названием`)
        }
    }
    account.wallets.push(newWallet)
    await save()
    alert(`Открыт новый банковский счет ${newWallet.name}`)
}

async function load() {
    let user = JSON.parse(localStorage.getItem(`account`))
    if (!user) {
        user = {
            firstName: "Nick",
            lastName: "Rozhko",
            photo: "main-user.png",
            dateOfBirth: new Date(2002, 11, 22),
            wallets: [],
            notifications: [],
            gender: "male",
        }
    }
    const userData = document.getElementById("user-data")
    userData.innerHTML = `
        <img src="images/users/${user.photo}" alt="user" width="300">
        <p>Имя: ${user.firstName}</p>
        <p>Фамилия: ${user.lastName}</p>
        <p>Пол: ${user.gender === "male" ? "Мужской" : "Женский"}</p>
`
    await save()
    return user;
}

async function save() {
    localStorage.setItem(`account`, JSON.stringify(account))
}
function outputWallets(wallets) {
    walletsList.innerHTML = '';
    for (const wallet of wallets) {
        let transactions = ``
        for (const transaction of wallet.transactions) {
            transactions += `
            <div class="transaction">
                <p>Тип транзакции: ${transaction.type === "get" ? "Пополнение" : "Списание"}</p>
                <p>Сумма: ${transaction.money} $</p> 
                <p>Дата перевода: ${transaction.date}</p>
                <p>${transaction.type === "get" ? "Отправитель" : "Получатель"}: ${transaction.name}</p>
                <p>Комментарий: ${transaction.comment}</p>
            </div>
            `
        }
        walletsList.innerHTML += `
<div class="card"">
    <div class="card-header">
        <h4>${wallet.name}</h4>
        <h6>id: ${wallet.id}</h6>
        <h6 class="${wallet.type}-card-text">Тип карты: ${wallet.type}</h6>
    </div>
    
    <div class="card-text">
        <p>Баланс: ${wallet.money} $</p>
    </div>
    
    <div class="card-transactions">
        <h5>Последние транзакции:</h5>
       
        ${transactions}
        
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
    
    <div class="card-footer">
        <p>${notification.date}</p>
    </div>
</div>
        `;
    }
}

async function sendNotification(name, text) {
    createSections(account, "notifications")
    account.notifications.push({
        name: name,
        text: text,
        date: new Date()
    })
    await save()
    outputNotifications(account.notifications)
}

async function transaction(type, name, user, money, comment) {
    await sendNotification(`${type === "get" ? "Входящий" : "Исходящий"} перевод`, `
Пользователь: ${user}
<br> Перевел вам: ${money}$ 
<br> На счет: ${name} 
<br> Комментарии при переводе: "${comment}".`
    )
    for (const wallet of account.wallets) {
        if (wallet.name === name) {
            type === "get" ? wallet.money += money : wallet.money -= money
            wallet.transactions.push({
                type: type,
                date: new Date(),
                name: user,
                comment: comment,
                money: money
            })
            break
        }
    }
    await save()
    outputWallets(account.wallets)
}
function createSections(arr, name) {
    if (!arr[name]) arr[name] = []
}

