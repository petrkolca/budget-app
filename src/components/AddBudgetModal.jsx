import { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { StyledForm } from "./styles/Form.styled";
import { useBudgetCtx } from "../store/context";


const AddBudgetModal = ({show, closeModalHandler}) => {
  const nameRef = useRef();
  const maxAmountRef = useRef();
  const { addBudget } = useBudgetCtx();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addBudget({
      budgetName: nameRef.current.value,
      budgetMaxValue: parseFloat(maxAmountRef.current.value),
    });

    closeModalHandler();
  }

  return (
    <Modal show={show} onHide={closeModalHandler}>
      <StyledForm onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Enter budget name" required />
            <Form.Text className="text-muted">
              Ensure to enter unique yet not existing Budget Name.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spend</Form.Label>
            <Form.Control ref={maxAmountRef} type="number" placeholder="Enter amount" min={0} step={0.01} required />
            <Form.Text className="text-muted">
              Enter max amount value you for this budget.
            </Form.Text>
          </Form.Group>
          <div className="form-footer">
            <Button variant="primary" type="submit">
              Add Budget
            </Button>
          </div>
        </Modal.Body>
      </StyledForm>
    </Modal>
  );
}

export default AddBudgetModal;