import React, { Fragment, useState } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
// import { GlobalStyles } from './components/styles/GlobalStyles'
import { Grid } from './components/styles/Grid.styled';
import BudgetCard from './components/BudgetCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      {/* <GlobalStyles /> */}
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className='me-auto'>Spend Wise</h1>
          <Button variant="primary">Add Budget</Button>
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
