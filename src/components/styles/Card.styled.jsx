import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
    font-weight: normal;

    > div {
      &:first-of-type {
        margin-right: auto;
      }

      &:last-of-type {
        display: flex;
        align-items: baseline;

        span {
          color: #a4a4a4;
          font-size: 0.85rem;
          margin-left: 0.25rem;
        }
      }
    }
  }
`