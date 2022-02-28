import "./ExpenseItem.css";
export const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <h2>Date</h2>
            <div className="expense-item__description">
                <h2 >Title</h2>
                <div className="expense-item__price">&#8377; 299</div>
            </div>
        </div>
    )
}