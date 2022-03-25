import { useState } from "react";
import { Card } from "../Generic-UI/Card";
import { ExpenseItem } from "./ExpenseItem"
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";

export const Expenses = (props) => {
    const [filteredItems, setFilteredItems] = useState(props.items);
    const yearChangeHandler = (year) => {
        const filter = props.items.filter((e) => e.date.getFullYear() === year);
        setFilteredItems(filter);
    };

    return (
        <Card className="expenses">
            <ExpenseFilter onYearChange={yearChangeHandler} />
            {filteredItems.length > 0 
            ? filteredItems.map((e) => <ExpenseItem key={e.id} date={e.date} amount={e.amount} title={e.title} />) 
            : <p className="expenses__fallback">No Expense Found.</p>}
        </Card>
    )
}