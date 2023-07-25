import { useState } from 'react';
import Home from './Home';
const Income = () => {
  const [income, setIncome] = useState('');
  const [outputIncome, setOutputIncome] = useState(0);


  const handleIncomeChange = e => {
    const newIncome = parseFloat(e.target.value);
    setIncome(newIncome);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOutputIncome(outputIncome + income);
    setIncome(''); // Reset the input field after submitting
    
  };

  return (
    <div>
      <h2>Income</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="income">Income</label>
        <input type="number" id="income" value={income} onChange={handleIncomeChange} />
        <button type="submit">Add Income</button>
      </form>

      <p>Current Income: ${outputIncome}</p>
    </div>
  );
};

export default Income;