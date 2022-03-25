import { useState } from "react";

export function ExpenseFilter (props) {
    const [ selectedYear, setSelectedYear ] = useState("2020");
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        props.onYearChange(Number.parseInt(e.target.value, 10));
    }
    return <div>
        <p>Filter by year</p>
        <select value={selectedYear} onChange={handleYearChange}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
}