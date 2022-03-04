import "./ExpenseForm.css";

export function ExpenseForm () {
    return (
            <form className="new-expense">
                <div className="new-expense__controls">
                    <div class="new-expense__control">
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div class="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0" step="1" />
                    </div>
                    <div class="new-expense__control">
                        <label>Date</label>
                        <input type="date" max={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
    )
}