import { Card } from "../Generic-UI/Card";
import { ExpenseItem } from "./ExpenseItem"
import "./Expenses.css";

export const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((e) => <ExpenseItem key={e.id} date={e.date} amount={e.amount} title={e.title} />)}
        </Card>
    )
}