import styles from "./Card.css";

export const Card = (props) => {
    const classes = styles.card + " " + props.className;
    return (
    <div className={classes}>
        {props.children}
    </div>
    );
}