import { useState } from 'react';

const Expense = () => {
  const [expense, setExpense] = useState('');
  const [outputExpense, setOutputExpense] = useState(0);

  const handleExpenseChange = e => {
    const newExpense = parseFloat(e.target.value);
    setExpense(newExpense);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOutputExpense(outputExpense + expense);
    setExpense(''); // Reset the input field after submitting
  };

  return (
    <div>
      <h2>Expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Expense">Expense</label>
        <input type="number" id="Expense" value={expense} onChange={handleExpenseChange} />
        <button type="submit">Add Expense</button>
      </form>

      <p>Current Expense: ${outputExpense}</p>
    </div>
  );
};

export default Expense;