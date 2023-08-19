import type { StatictisItemInterface } from '~/routes/_auth.expenses_.analyze';
import type { Expense } from '~/utils/expense.server';

const analysisExpenses = (expensesList: Expense[]) => {
  let minAmount = expensesList[0]?.amount || 0;
  let maxAmount = expensesList[0]?.amount || 0;
  let totalAmount = 0;
  let avgAmount = 0;

  if (expensesList.length) {
    for (const expense of expensesList) {
      const currentAmount = expense.amount;
      totalAmount += currentAmount;
      if (minAmount > currentAmount) {
        minAmount = currentAmount;
      }
      if (maxAmount < currentAmount) {
        maxAmount = currentAmount;
      }
    }
    avgAmount = +(totalAmount / expensesList.length).toFixed(2);
  }

  const data: StatictisItemInterface[] = [
    { label: 'Total Amount', value: totalAmount },
    { label: 'Average Amount', value: avgAmount },
    { label: 'Min. Amount', value: minAmount },
    { label: 'Max. Amount', value: maxAmount },
  ];

  return data;
};

export default analysisExpenses;
