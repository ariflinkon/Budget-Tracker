// app.js
document.getElementById('add-income').addEventListener('click', addTransaction);
document.getElementById('add-expense').addEventListener('click', addTransaction);

let transactions = [];

function addTransaction(event) {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = event.target.id === 'add-income' ? 'income' : 'expense';

    if (description && amount) {
        const transaction = { description, amount, type };
        transactions.push(transaction);
        updateUI();
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}

function updateUI() {
    const transactionList = document.getElementById('transactions');
    transactionList.innerHTML = '';

    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
        transactionList.appendChild(li);

        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else {
            totalExpenses += transaction.amount;
        }
    });

    document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
    document.getElementById('balance').textContent = `$${(totalIncome - totalExpenses).toFixed(2)}`;
}