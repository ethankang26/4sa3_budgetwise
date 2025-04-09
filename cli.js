import inquirer from 'inquirer';
import { logTransaction } from './models/transaction.js';
import { setBudget, viewBudget } from './models/budget.js';
import { generateReport } from './reports/generateReport.js';

export async function start() {
    while (true) {
        const { choice } = await inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'Choose an action:',
            choices: ['Log Transaction', 'Set Budget', 'View Budget', 'Generate Report', 'Exit']
        }]);

        if (choice === 'Log Transaction') {
            await logTransaction();
        } else if (choice === 'Set Budget') {
            await setBudget();
        } else if (choice === 'View Budget') {
            await viewBudget();
        } else if (choice === 'Generate Report') {
            await generateReport();
        } else {
            console.log('Goodbye!');
            break;
        }
    }
}
