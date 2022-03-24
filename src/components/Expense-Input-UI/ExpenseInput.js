import { ExpenseForm } from "./ExpenseForm";
import "./ExpenseInput.css";

export function ExpenseInput(props) {
    const saveExpenseDataHandler = (expenseInput) => {
        const expense = {
            ...expenseInput,
            id: Math.random().toString(),
        }
        props.onAddExpense(expense);
    }

    return (
        <div class="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
