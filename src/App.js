import { useState } from "react";
import { Expenses } from "./components/Expense-UI/Expenses";
import { ExpenseInput } from "./components/Expense-Input-UI/ExpenseInput";

export function App() {
    const [expenses, setExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        setExpenses((prev) => {
            return [...prev, expense];
        })
    }

    return (
        <div>
            <ExpenseInput onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    )
};