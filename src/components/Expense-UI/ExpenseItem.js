import { Card } from "../Generic-UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import styles from "./ExpenseItem.css";

export const ExpenseItem = (props) => {
    return (
        <Card className={styles["expense-item"]}>
            <ExpenseDate date={props.date} />
            <div className={styles["expense-item__description"]}>
                <h2>{props.title}</h2>
                <div className={styles["expense-item__price"]}>&#8377; {props.amount}</div>
            </div>
        </Card>
    )
}