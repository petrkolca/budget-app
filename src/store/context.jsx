import React, { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext(
  {
    budgets : [],
    expenses : [],
    addBudget : () => {},
    addExpense : () => {},
    getBudgetExpenses : () => {},
    deleteBudget : () => {},
    deleteExpense : () => {},
  }
);

const uncategorisedBudgetId = "Uncategorised";

const useBudgetCtx = () => {
  return useContext(AppContext)
}

const AppProvider = (props) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []); // (key, defValue)
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addBudget = ({budgetName, budgetMaxValue}) => {
    // NEW Budget Item object parameters
    const newBudgetItem = {
      id: uuidv4(),
      name: budgetName,
      max: budgetMaxValue,
    }

    setBudgets((prevBudgets) => {
      // check if budget already exists in the List under the same name
      if (prevBudgets.find((budget) => budget.name === budgetName)) {
        // return existing budgets
        return prevBudgets;
      }
      return [...prevBudgets, newBudgetItem];
    });
  };

  const addExpense = ({budgetId, expTitle, expAmount}) => {
    // NEW Expense Item object parameters
    // under certain Budget ID
    const newExpenseItem = {
      id: uuidv4(),
      budgetId: budgetId,
      title: expTitle,
      amount: expAmount,
    }

    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpenseItem]
    });
  };

  const getBudgetExpenses = (id) => {
    return expenses.filter((expense) => expense.budgetId === id);
  };

  const deleteBudget = (id) => {
    console.log('Budget delete func. init', id)
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  };

  const deleteExpense = (id) => {
    // Delete all expenses under certain budget
    console.log('expense delete func. init', id)
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.budgetId !== id);
    });
  };
  
  const value = {
    budgets : budgets,
    expenses : expenses,
    addBudget : addBudget,
    addExpense : addExpense,
    getBudgetExpenses : getBudgetExpenses,
    deleteBudget : deleteBudget,
    deleteExpense : deleteExpense,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export {useBudgetCtx, AppProvider, uncategorisedBudgetId};