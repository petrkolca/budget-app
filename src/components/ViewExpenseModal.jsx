import { Modal, Button, Stack } from "react-bootstrap";
import { StyledForm } from "./styles/Form.styled";
import { useBudgetCtx, uncategorisedBudgetId } from "../store/context";


const ViewExpenseModal = ({budgetId, closeModalHandler}) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgetCtx();

  const budget = uncategorisedBudgetId === budgetId ? { 
    // create new budget
      name: "Uncategorised",
      id: uncategorisedBudgetId,
    } : 
    // find our budget from the Array of Budgets
    budgets.find(budget => budget.id === budgetId)

  return (
    <Modal show={budgetId != null} onHide={closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budget?.name}</div>
            {budgetId !== uncategorisedBudgetId && (
              <Button 
                variant="outlined-danger"
                onClick={() => {
                  deleteBudget();
                  closeModalHandler();
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      </Modal.Body>
    </Modal>
  );
}

export default ViewExpenseModal;