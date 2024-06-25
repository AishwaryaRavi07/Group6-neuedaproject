import React, { useState } from 'react';
import '../App.css';

const FinanceManager = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'none',
  });
  const [availableMoney, setAvailableMoney] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAddTransaction = () => {
    if (formData.name && formData.amount && formData.category !== 'none') {
      const newTransaction = {
        id: Date.now(),
        name: formData.name,
        amount: parseFloat(formData.amount),
        category: formData.category,
      };
      setTransactions([...transactions, newTransaction]);
      setAvailableMoney(prevMoney => prevMoney + newTransaction.amount);
      setFormData({ name: '', amount: '', category: 'none' });
      setIsPanelVisible(false); // Hide panel after adding transaction
    } else {
      alert('Please provide all transaction details.');
    }
  };

  const handleDeleteTransaction = (id) => {
    const deletedTransaction = transactions.find((tx) => tx.id === id);
    if (deletedTransaction) {
      const updatedTransactions = transactions.filter((tx) => tx.id !== id);
      setTransactions(updatedTransactions);
      setAvailableMoney(prevMoney => prevMoney - deletedTransaction.amount);
    }
  };

  const handleDeleteAll = () => {
    setTransactions([]);
    setAvailableMoney(0);
  };

  const handlePanelVisibility = () => {
    setIsPanelVisible(true); 
    console.log("visibility set true")
  };

  const toggleTheme = (selectedTheme) => {
    const root = document.documentElement;
    if (selectedTheme === 'light') {
      root.style.setProperty('--first-color', '#F9F9F9');
      root.style.setProperty('--second-color', '#14161F');
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)');
      setTheme('light');
    } else {
      root.style.setProperty('--first-color', '#14161F');
      root.style.setProperty('--second-color', '#F9F9F9');
      root.style.setProperty('--border-color', 'rgba(249, 249, 249, .2)');
      setTheme('dark');
    }
  };

  const categoryIcon = (category) => {
    switch (category) {
      case 'Salary':
        return '💼';
      case 'Bonus':
        return '🎁';
      case 'Investments':
        return '📈';
      case 'Shopping':
        return '🛒';
      case 'Food':
        return '🍔';
      case 'Transportation':
        return '🚌';
      case 'Entertainment':
        return '🎮';
      default:
        return '';
    }
  };

  return (
    <div style={{ background: "white", marginTop: "10vh" }}>
      <nav className="navbar">
        <a href="/" className="navbar__logo">FINVOICE 360</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar__menu">
          <a href="index.html" className="navbar__link">Home</a>
          <a href="finance.html" className="navbar__link">Finance</a>
          <a href="inventory.html" className="navbar__link">Inventory</a>
          <a href="contact.html" className="navbar__link">Contact</a>
        </div>
      </nav>

      <header>
        <h1><i className="fas fa-wallet"></i> iWallet</h1>
        <p>Your personal finance manager</p>
      </header>

      <main>
        <section className="transactions">
          <h2 className="title">Transaction List</h2>
          <div className="transaction-list">
            <div className="income-area">
              <h3>Income:</h3>
              {transactions.filter(tx => tx.amount > 0).map((tx) => (
                <div key={tx.id} className="transaction">
                  <p className="transaction-name">
                    {categoryIcon(tx.category)} {tx.name}
                  </p>
                  <p className="transaction-amount">
                    ${tx.amount}
                    <button className="delete" onClick={() => handleDeleteTransaction(tx.id)}>
                      <i className="fas fa-times"></i>
                    </button>
                  </p>
                </div>
              ))}
            </div>
            <div className="expenses-area">
              <h3>Spendings:</h3>
              {transactions.filter(tx => tx.amount < 0).map((tx) => (
                <div key={tx.id} className="transaction">
                  <p className="transaction-name">
                    {categoryIcon(tx.category)} {tx.name}
                  </p>
                  <p className="transaction-amount">
                    ${tx.amount}
                    <button className="delete" onClick={() => handleDeleteTransaction(tx.id)}>
                      <i className="fas fa-times"></i>
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="options">
          <div>
            <h2 className="title">Available Money:</h2>
            <p className="available-money">${availableMoney}</p>
          </div>
          <div className="controls">
            <button className="add-transaction" onClick={() => handlePanelVisibility(true)}>
              <i className="fas fa-plus"></i> Add transaction
            </button>
            <button className="delete-all" onClick={handleDeleteAll}>
              <i className="far fa-trash-alt"></i> Clear everything
            </button>
          </div>
          <div className="style-selection">
            <h2 className="title">Pick style:</h2>
            <div className="color-buttons">
              <button className="light" onClick={() => toggleTheme('light')}></button>
              <button className="dark" onClick={() => toggleTheme('dark')}></button>
            </div>
          </div>
        </section>
      </main>

      {isPanelVisible && (
        <div className="add-transaction-panel">
          <h2 className="title">Add new transaction</h2>
          <label htmlFor="name">Name:</label>
          <small>(give transaction name)</small>
          <input type="text" id="name" value={formData.name} onChange={handleInputChange} />

          <label htmlFor="amount">Amount:</label>
          <small>(give transaction amount, if it's spending you should put minus in the beginning)</small>
          <input type="number" id="amount" value={formData.amount} onChange={handleInputChange} />

          <label htmlFor="category">Pick category:</label>
          <select id="category" value={formData.category} onChange={handleInputChange}>
            <option value="none" disabled>Select a category</option>
            <option value="Salary">Salary</option>
            <option value="Bonus">Bonus</option>
            <option value="Investments">Investments</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          <div className="panel-buttons">
            <button className="save" onClick={handleAddTransaction}>
              <i className="fas fa-save"></i> Save
            </button>
            <button className="cancel" onClick={() => handlePanelVisibility(false)}>
              <i className="far fa-window-close"></i> Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinanceManager;
