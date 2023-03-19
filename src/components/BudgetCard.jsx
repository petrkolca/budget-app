import React from 'react'
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';
import { currencyFormatter } from '../utils/utils';
import { StyledCard } from './styles/Card.styled';


const BudgetCard = ({name, amount, max, gray, onAddExpenseBtnClick}) => {

  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  } else {
    classNames.push("bg-white");
  }

  const getProgressBarVariant = (amount, max) => {
    const ratio_percantage = amount / max;
    
    if (ratio_percantage < 0.5) return "primary"
    if (ratio_percantage < 0.75) return "warning"
    return "danger"  
    
  }

  return (
    <StyledCard className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div>{currencyFormatter.format(amount)}
            <span>/ {currencyFormatter.format(max)}</span>
          </div>
        </Card.Title>
        <ProgressBar 
          className="rounded-pill" 
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button onClick={onAddExpenseBtnClick} variant="outline-primary ms-auto">Add Expense</Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
    </StyledCard>
  );
}

export default BudgetCard;
