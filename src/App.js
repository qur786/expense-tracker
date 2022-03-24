import { Expenses } from "./components/Expense-UI/Expenses";
import { ExpenseInput } from "./components/Expense-Input-UI/ExpenseInput";

export function App() {
    const expenses = [
        {
            id: Math.random().toString(),
            title: "Car Wash",
            amount: 500,
            date: new Date(2021, 1, 20),
        },
        {
            id: Math.random().toString(),
            title: "Grossary",
            amount: 3000,
            date: new Date(2020, 11, 2),
        },
        {
            id: Math.random().toString(),
            title: "Bike Repair",
            amount: 200,
            date: new Date(2020, 10, 11),
        },
        {
            d: Math.random().toString(),
            title: "Furniture",
            amount: 10000,
            date: new Date(2021, 5, 4),
        },
    ]
    return (
        <div>
            <ExpenseInput />
            <Expenses items={expenses} />
        </div>
    )
};