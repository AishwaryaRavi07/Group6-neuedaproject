// fields, panels
const income = document.querySelector('.income-area')
const expenses = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

// buttons
const deleteBtn = document.querySelector('.delete')
const addBtn = document.querySelector('.add-transaction')
const resetBtn = document.querySelector('.delete-all')
const panelSaveBtn = document.querySelector('.save')
const panelCancelBtn = document.querySelector('.cancel')

// inputs
const nameInput = document.getElementById('name')
const amountInput = document.getElementById('amount')
const categoryInput = document.getElementById('category')

// style
const lightStyleBtn = document.querySelector('.light')
const darkStyleBtn = document.querySelector('.dark')

// containers and variables
let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyArr = [0]

const showPanel = () => {
	addTransactionPanel.style.display = 'flex'
}
const cancelPanel = () => {
	addTransactionPanel.style.display = 'none'
}

const checkForm = () => {
	if (nameInput.value !== '' && amountInput.value !== '' && categoryInput.value !== 'none') {
		savePanel()
	} else {
		alert('Give all the details')
	}
}

const savePanel = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('transaction')
	newTransaction.setAttribute('id', ID)
	checkCategory(selectedCategory)
	moneyArr.push(parseFloat(amountInput.value))
	sumAmount(moneyArr)
	if (amountInput.value > 0) {
		newTransaction.classList.add('income')
		income.appendChild(newTransaction)
	} else {
		newTransaction.classList.add('expenses')
		expenses.appendChild(newTransaction)
	}
	newTransaction.innerHTML = `
    <p class="transaction-name">
    ${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount"> ${amountInput.value}$ 
    <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>
    `;

	cancelPanel()
	ID++
	clearInputs()
}

const selectCategory = () => {
	selectedCategory = categoryInput.options[categoryInput.selectedIndex].text
}

const checkCategory = transaction => {
	switch (transaction) {
		case 'Salary':
			categoryIcon = '<i class="fa-solid fa-sack-dollar"></i>'
			break
		case 'Bonus':
			categoryIcon = '<i class="fa-solid fa-hand-holding-dollar"></i>'
			break
		case 'Investments':
			categoryIcon = '<i class="fa-solid fa-chart-line"></i>'
			break
		case 'Shopping':
			categoryIcon = '<i class="fa-solid fa-cart-plus"></i>'
			break
		case 'Food':
			categoryIcon = '<i class="fa-solid fa-utensils"></i>'
			break
		case 'Transportation':
			categoryIcon = '<i class="fa-solid fa-bus"></i>'
			break
		case 'Entertaiment':
			categoryIcon = '<i class="fa-solid fa-gamepad"></i>'
			break
	}
}

const sumAmount = money => {
	const newMoney = money.reduce((a, b) => a + b)
	availableMoney.textContent = `${newMoney}$`
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id);
    const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText);
    const indexOfTransaction = moneyArr.indexOf(transactionAmount);
    moneyArr.splice(indexOfTransaction, 1)

    transactionToDelete.classList.contains('income') ? income.removeChild(transactionToDelete) : expenses.removeChild(transactionToDelete)
	sumAmount(moneyArr)
}

const clearInputs = () => {
	nameInput.value = ''
	amountInput.value = ''
	categoryInput.selectedIndex = 'none'
}

const deleteAll = () => {
    income.innerHTML = `<h3>Income:</h3>`
    expenses.innerHTML = `<h3>Spendings:</h3>`
    availableMoney.textContent = '0$'
    moneyArr = [0];
}

addBtn.addEventListener('click', showPanel)
panelCancelBtn.addEventListener('click', cancelPanel)
panelSaveBtn.addEventListener('click', checkForm)
resetBtn.addEventListener('click', deleteAll)
lightStyleBtn.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#F9F9F9')
	root.style.setProperty('--second-color', '#14161F')
	root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)')
})
darkStyleBtn.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#14161F')
	root.style.setProperty('--second-color', '#F9F9F9')
	root.style.setProperty('--border-color', 'rgba(249, 249, 249, .2)')
})