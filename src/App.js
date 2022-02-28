import { ExpenseItem } from "./components/ExpenseItem";
export function App() {
    const expenses = [
        {
            title: "Car Wash",
            amount: 500,
            date: new Date(2021, 1, 20),
        },
        {
            title: "Grossary",
            amount: 3000,
            date: new Date(2020, 11, 2),
        },
        {
            title: "Bike Repair",
            amount: 200,
            date: new Date(2020, 10, 11),
        },
        {
            title: "Furniture",
            amount: 10000,
            date: new Date(2021, 5, 4),
        },
    ]
    return (
        <div>
            <h2>
                Expense Tracker
            </h2>
            {
                expenses.map((el) => <ExpenseItem title={el.title} amount={el.amount} date={el.date} />)
            }
            
        </div>
    )
};