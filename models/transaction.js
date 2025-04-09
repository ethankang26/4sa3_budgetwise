import inquirer from 'inquirer';
import { fetchData, saveData } from '../db/db.js';

const BIN_ID = 'YOUR_TRANSACTIONS_BIN_ID';

export async function logTransaction() {
  const answers = await inquirer.prompt([
    { name: 'amount', message: 'Enter amount:', type: 'number' },
    { name: 'category', message: 'Enter category:' },
    { name: 'type', message: 'Type (income/expense):' }
  ]);

  const data = await fetchData(BIN_ID);
  const newTransaction = {
    amount: answers.amount,
    category: answers.category,
    type: answers.type,
    date: new Date().toISOString()
  };

  data.push(newTransaction);
  await saveData(BIN_ID, data);
  console.log('Transaction logged.');
}
