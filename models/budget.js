import inquirer from 'inquirer';
import { fetchData, saveData } from '../db/db.js';

const BIN_ID = 'YOUR_BUDGETS_BIN_ID';

export async function setBudget() {
  const answers = await inquirer.prompt([
    { name: 'category', message: 'Enter category:' },
    { name: 'limit', message: 'Set budget limit:', type: 'number' }
  ]);

  const data = await fetchData(BIN_ID);
  data[answers.category] = answers.limit;
  await saveData(BIN_ID, data);

  console.log('Budget set.');
}

export async function viewBudget() {
  const data = await fetchData(BIN_ID);
  console.table(Object.entries(data).map(([category, limit]) => ({ category, limit })));
}
