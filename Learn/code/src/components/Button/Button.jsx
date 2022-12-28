import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ primary, disabled }) {
  const classes = clsx(styles.button, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
    "d-flex": true,
  });

  return <button className={classes}>Click me!</button>;
}

export default Button;
