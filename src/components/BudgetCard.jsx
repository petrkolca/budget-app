import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap';
import { currencyFormatter } from '../utils/utils';
import { StyledCard } from './styles/Card.styled';


const BudgetCard = ({name, amount, max}) => {

  const getProgressBarVariant = (amount, max) => {
    const ratio_percantage = amount / max;
    
    if (ratio_percantage < 0.5) return "primary"
    if (ratio_percantage < 0.75) return "warning"
    return "danger"  
    
  }

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div>{currencyFormatter.format(amount)}
            <span>/ {currencyFormatter.format(max)}</span>
          </div>
        </Card.Title>
        <ProgressBar 
          className="rounded-pill" 
          variant="getProgressBarVariant(amount, max)"
          min={0}
          max={max}
          now={amount}
        />
      </Card.Body>
    </StyledCard>
  );
}

export default BudgetCard;
