import React, { createContext, useContext } from "react";
import { uuid } from "uuidv4";

const AppContext = createContext({
  budgets : [],
  expenses : [],
  addBudget : () => {},
  addExpense : () => {},
});

const useBudgetCtx = () => {
  return useContext(AppContext)
}

const AppProvider = (props) => {
  const [budgets, setBudgets] = useState();
  const [expenses, setExpenses] = useState();

  const addBudget = ({budgetName, budgetMaxValue}) => {
    // NEW Budget Item object parameters
    const newBudgetItem = {
      id: uuid(),
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
  }

  const addExpense = ({budgetId, expTitle, expAmount}) => {
    // NEW Expense Item object parameters
    // under certain Budget ID
    const newExpenseItem = {
      id: uuid(),
      budgetId: budgetId,
      title: expTitle,
      amount: expAmount,
    }

    setExpenses([...prevExpenses, newExpenseItem]);
  }
  
  const value = {
    budgets : budgets,
    expenses : expenses,
    addBudget : addBudget,
    addExpense : addExpense,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export {AppContext, useBudgetCtx, AppProvider};