import { Modal, Button } from "react-bootstrap";
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
      <StyledForm onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Stack direction="horizontal" gap="2">
              <div>Expenses - {budget.name}</div>
              {budgetId !== uncategorisedBudgetId && (
                <button 
                  variant="outlined-danger"
                  onClick={() => {
                    deleteBudget();
                    closeModalHandler();
                  }}
                >
                  Delete
                </button>
              )}
            </Stack>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
        </Modal.Body>
      </StyledForm>
    </Modal>
  );
}

export default ViewExpenseModal;