import { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { StyledForm } from "./styles/Form.styled";
import { useBudgetCtx, uncategorisedBudgetId } from "../store/context";


const AddExpenseModal = ({show, closeModalHandler, defaultBudgetId}) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { budgets, addExpense } = useBudgetCtx();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addExpense({
      budgetId: budgetIdRef.current.value,
      expTitle: titleRef.current.value,
      expAmount: parseFloat(amountRef.current.value),
    });

    closeModalHandler();
  }

  return (
    <Modal show={show} onHide={closeModalHandler}>
      <StyledForm onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} type="text" placeholder="Enter expense name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control ref={amountRef} type="number" placeholder="Enter amount" min={0} step={0.01} required />
            <Form.Text className="text-muted">
              Enter amount value you for this expense.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Choose Budget</Form.Label>
            <Form.Select 
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}
            >
              <option value={uncategorisedBudgetId}>{uncategorisedBudgetId}</option>
              {budgets.map((budget, index) => (
                <option key={index} value={budget.id}>{budget.name}</option>
              ))
              }
            </Form.Select>
          </Form.Group>
          <div className="form-footer">
            <Button variant="primary" type="submit">
              Add Expense
            </Button>
          </div>
        </Modal.Body>
      </StyledForm>
    </Modal>
  );
}

export default AddExpenseModal;