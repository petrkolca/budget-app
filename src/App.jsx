import React, { Fragment, useState } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
// import { GlobalStyles } from './components/styles/GlobalStyles'
import { Grid } from './components/styles/Grid.styled';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';

function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  const showBudgetModalHandler = (e) => {
    e.preventDefault();
    setShowBudgetModal(true);

    console.log('showBudgetModal state is: ', showBudgetModal);
  }

  return (
    <Fragment>
      {/* <GlobalStyles /> */}
      <AddBudgetModal show={showBudgetModal} closeModalHandler={() => setShowBudgetModal(false)} />
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className='me-auto'>Spend Wise</h1>
          <Button variant="primary" onClick={showBudgetModalHandler}>Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <Grid>
          <BudgetCard 
            name="Entertainment"
            gray
            amount={800}
            max={1000}
          />

        </Grid>
      </Container>
    </Fragment>
  )
}

export default App;
