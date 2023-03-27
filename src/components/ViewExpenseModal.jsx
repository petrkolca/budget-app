import { Modal, Button, Stack } from "react-bootstrap";
import { StyledForm } from "./styles/Form.styled";
import { useBudgetCtx, uncategorisedBudgetId } from "../store/context";
import { currencyFormatter } from "../utils/utils";


const ViewExpenseModal = ({budgetId, closeModalHandler}) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgetCtx();

  const budget = uncategorisedBudgetId === budgetId ? { 
    // create new budget
      name: "Uncategorised",
      id: uncategorisedBudgetId,
    } : 
    // find our budget from the Array of Budgets
    budgets.find(budget => budget.id === budgetId);
    
  const expenses = getBudgetExpenses(budgetId);

  return (
    <Modal show={budgetId != null} onHide={closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div className="me-auto">Expenses - {budget?.name}</div>
            {budgetId !== uncategorisedBudgetId && (
              <Button 
                variant="outline-danger"
                onClick={() => {
                  deleteBudget(budgetId);
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
        <Stack direction="vertical" gap="2">
          {expenses.map((expense, index) => (
            <Stack key={expense.id} direction="horizontal" gap="3">
              <div className="me-auto fs-4">{expense.title}</div>
              <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
              <Button 
                variant="outline-danger"
                size="sm"
                onClick={() => deleteExpense(expense.id)} 
              >
                &times;
              </Button>
                  
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  );
}

export default ViewExpenseModal;