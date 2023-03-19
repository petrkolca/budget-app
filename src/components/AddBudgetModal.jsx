import { Modal, Form, Button } from "react-bootstrap";
import { StyledForm } from "./styles/Form.styled";


const AddBudgetModal = ({children, show, handleClose}) => {

  const onSubmitHandler = (e) => {
    
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <StyledForm onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter budget name" required />
            <Form.Text className="text-muted">
              Ensure to enter unique yet not existing Budget Name.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spend</Form.Label>
            <Form.Control type="number" placeholder="Enter amount" min={0} step={0.01} required />
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