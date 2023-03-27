import { useBudgetCtx, uncategorisedBudgetId } from "../store/context";
import BudgetCard from "./BudgetCard";


const UncategorisedBudgetCard = (props) => {
  const {getBudgetExpenses} = useBudgetCtx();
  const amount = getBudgetExpenses(uncategorisedBudgetId).reduce((total, expense) => {
    // total amount (multiplier) of all expenses (starting 0) + each expense amount
    return total + expense.amount;
  }, 0);

  if (amount === 0 ) return;

  return (
    <BudgetCard 
      name="Uncategorised" 
      amount={amount}
      gray 
      {...props} />
  );
}

export default UncategorisedBudgetCard;