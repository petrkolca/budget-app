import { useBudgetCtx } from "../store/context";
import BudgetCard from "./BudgetCard";


const TotalBudgetCard = () => {
  const {expenses, budgets} = useBudgetCtx();
  
  const amount = expenses.reduce((total, expense) => {
    // total amount (multiplier) of all expenses (starting 0) + each expense amount
    return total + expense.amount;
  }, 0);

  const max = budgets.reduce((total, budget) => {
    // total amount (multiplier) of all budgets (starting 0) + each budget max
    return total + budget.max;
  }, 0);

  if (max === 0 ) return;

  return (
    <BudgetCard 
      name="Total" 
      amount={amount}
      gray
      max={max} />
  );
}

export default TotalBudgetCard;