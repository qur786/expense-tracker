import styles from "./ExpenseDate.css";

export function ExpenseDate(props) {
    const { date } = props;
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    return (
        <div className={styles["expense-date"]}>
            <div className={styles["expense-date__month"]}>{month}</div>
            <div className={styles["expense-date__year"]}>{year}</div>
            <div className={styles["expense-date__day"]}>{day}</div>
        </div>
    );
}