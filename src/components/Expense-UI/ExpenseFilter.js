import { useState } from "react";
import "./ExpenseFilter.css";

export function ExpenseFilter (props) {
    const [ selectedYear, setSelectedYear ] = useState("2020");
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        props.onYearChange(Number.parseInt(e.target.value, 10));
    }
    return <div className="expenseFilter">
        <p className="expenseFilter__title">Filter by year</p>
        <select value={selectedYear} onChange={handleYearChange} className="expenseFilter__year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
}