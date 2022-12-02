const walletsList = document.getElementById("wallets-list")
const formOpenWallet = document.getElementById('form-open-wallet');
const formCloseWallet = document.getElementById('form-close-wallet');
const walletAddMoney = document.getElementById('wallet-add-money');
const walletWithdrawMoney = document.getElementById('wallet-withdraw-money');
let  account = {}

async function main() {
    account = load()
    outputWallets(account.wallets)
}

main().then()

formOpenWallet.addEventListener('submit', async (e) => {
    e.preventDefault();
    const wallet = {
        name: document.getElementById('name').value,
        amount: Number(document.getElementById('amount').value),
        id: random(1000000000000000, 9999999999999999),
    }
    await addWallet(wallet)
})

formCloseWallet.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = Number(document.getElementById('id').value);
    await closeWallet(id)
})

walletAddMoney.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = Number(document.getElementById('idAdd').value);
    const amount = Number(document.getElementById('moneyAdd').value);
    await addMoney(id, amount)
})

walletWithdrawMoney.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = Number(document.getElementById('idWithdraw').value);
    const amount = -Number(document.getElementById('moneyWithdraw').value);
    await addMoney(id, amount)
})

async function addMoney(id, amount) {
    for (const wallet of account.wallets) {
        if (wallet.id === id) {
            wallet.amount = Number(wallet.amount) + Number(amount)
            await save()
            alert(`Баланс изменен`)
            return outputWallets(account.wallets)
        }
    }
    alert(`Банковский счет с таким id не найден`)
}

async function closeWallet(id) {
    for (const wallet of account.wallets) {
        if (wallet.id === id) {
            const index = account.wallets.indexOf(wallet)
            account.wallets.splice(index, 1)
            await save()
            alert(`Банковский счет закрыт`)
            return outputWallets(account.wallets)
        }
    }
    alert(`Банковский счет с таким id не найден`)
}

async function addWallet(newWallet) {
    if (!account.wallets) account.wallets = []
    if (isNaN(newWallet.amount)) return alert("Введите число")
    for (const wallet of account.wallets) {
        if (wallet.name === newWallet.name) {
            return alert(`У вас уже есть банковский счет с таким названием`)
        }
    }
    account.wallets.push(newWallet)
    await save()
    alert(`Открыт новый банковский счет ${newWallet.name}`)
    outputWallets(account.wallets)
}

function load() {
    let user = JSON.parse(localStorage.getItem(`account`))
    if (!user) {
        user = {
            firstName: "Nick",
            lastName: "Rozhko",
            photo: "main-user.png",
            dateOfBirth: new Date(2002, 11, 22),
            wallets: [],
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
    return user;
}

async function save() {
    localStorage.setItem(`account`, JSON.stringify(account))
}
function outputWallets(wallets) {
    walletsList.innerHTML = '';
    for (const wallet of wallets) {
        walletsList.innerHTML += `
<div class="card"">
    <div class="card-header">
        <h4>${wallet.name}</h4>
        <h5>id: ${wallet.id}</h5>
    </div>
    
    <div class="card-text">
        <p>Баланс: ${wallet.amount} $</p>
    </div>
    
</div>
        `;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSections(arr, name) {
    if (!arr[name]) arr[name] = []
}

