import React, { Fragment, useState } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
// import { GlobalStyles } from './components/styles/GlobalStyles'
import { Grid } from './components/styles/Grid.styled';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import { useBudgetCtx } from './store/context';


function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgetCtx();

  const showBudgetModalHandler = (e) => {
    e.preventDefault();
    setShowBudgetModal(true);

    console.log('showBudgetModal state is: ', showBudgetModal);
  }

  return (
    <Fragment>
      {/* <GlobalStyles /> */}
      <AddBudgetModal show={showBudgetModal} closeModalHandler={() => setShowBudgetModal(false)} />
      <AddExpenseModal show={true} closeModalHandler={() => setShowBudgetModal(false)} />
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className='me-auto'>Spend Wise</h1>
          <Button variant="primary" onClick={showBudgetModalHandler}>Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <Grid>
          {budgets.map((budget) => {

            // get single digit of all expenses
            let expenses = getBudgetExpenses(budget.id);
            let amount;
            
            // if there are no expenses with empty array [] return 0
            if (expenses.length === 0) {
              amount = 0;
            } else {
              amount = expenses.reduce((total, expense) => {
                // total amount (multiplier) of all expenses (starting 0) + each expense amount
                return total + expense.amount;
              }, 0);
            }

            return (
              <BudgetCard 
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            )
          })}

        </Grid>
      </Container>
    </Fragment>
  )
}

export default App;
