import axios from 'axios';

// Replace with your actual JSONBin.io API Key and Bin IDs
const API_KEY = 'YOUR_JSONBIN_API_KEY';
const TRANSACTIONS_BIN_ID = 'YOUR_TRANSACTIONS_BIN_ID';
const BUDGETS_BIN_ID = 'YOUR_BUDGETS_BIN_ID';

const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': API_KEY
};

export async function fetchData(binId) {
  const res = await axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, { headers });
  return res.data.record;
}

export async function saveData(binId, data) {
  await axios.put(`https://api.jsonbin.io/v3/b/${binId}`, data, { headers });
}
