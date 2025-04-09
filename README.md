# BudgetWise CLI

A command-line budget tracking app built with Node.js and JSONBin.io as a cloud backend.

## Features

- Log income and expense transactions
- Set and view monthly budgets
- Generate financial reports with currency conversion (via Open Exchange Rates API)

## Technologies

- Node.js
- Inquirer.js
- Axios
- JSONBin.io (cloud database)
- Open Exchange Rates API (for live FX rates)

## Setup

1. Clone this repo and `cd` into it
2. Run `npm install`
3. Create 2 JSON bins at [https://jsonbin.io](https://jsonbin.io)
   - One for transactions (`[]`)
   - One for budgets (`{}`)
4. Add your Bin IDs and API keys in `db/db.js`
5. Run the app:
   ```bash
   npm start
