import { fetchData } from '../db/db.js';
import { fetchRates } from '../api/exchangeRate.js';

const BIN_ID = 'YOUR_TRANSACTIONS_BIN_ID';

export async function generateReport() {
  const transactions = await fetchData(BIN_ID);
  const rates = await fetchRates();

  let total = 0;
  console.log('\n--- Financial Report ---');
  transactions.forEach(tx => {
    total += (tx.type === 'income' ? 1 : -1) * tx.amount;
    console.log(`${tx.date.slice(0, 10)} | ${tx.category} | ${tx.type} | $${tx.amount}`);
  });

  console.log(`\nNet Total: $${total.toFixed(2)}`);
  console.log('Sample Exchange Rate (USD to EUR):', rates['EUR']);
}
