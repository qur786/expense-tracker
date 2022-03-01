import "./ExpenseItem.css";
export const ExpenseItem = (props) => {
    const { date } = props;
    const month = date.toLocaleString("en-US", {month: "long"});
    const day = date.toLocaleString("en-US", { day: "2-digit"});
    const year = date.getFullYear();
    return (
        <div className="expense-item">
            <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">&#8377; {props.amount}</div>
            </div>
        </div>
    )
}