import { db } from './db.server';

export interface Expense {
  title: string;
  amount: number;
  date: string;
}

export async function createExpense(expenseData: Expense, userId: string) {
  try {
    return await db.expense.create({
      data: { ...expenseData, User: { connect: { id: userId } } },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Create expense failed.');
  }
}

export async function getExpenses(userId: string) {
  try {
    return await db.expense.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Get expense failed.');
  }
}

export async function getExpenseById(id: string, userId: string) {
  try {
    return await db.expense.findFirst({ where: { id } });
  } catch (error) {
    console.log(error);
    throw new Error('Get expense failed.');
  }
}

export async function updateExpense(id: string, expenseData: Expense) {
  try {
    return await db.expense.update({ where: { id }, data: expenseData });
  } catch (error) {
    console.log(error);
    throw new Error('Update expense failed.');
  }
}

export async function deleteExpense(id: string) {
  try {
    return await db.expense.delete({ where: { id } });
  } catch (error) {
    console.log(error);
    throw new Error('Delete expense failed.');
  }
}
