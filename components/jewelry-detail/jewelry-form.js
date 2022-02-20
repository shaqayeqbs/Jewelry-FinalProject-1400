import classes from "./jewelry-form.module.css";
import { useRef } from "react";

const JeweleryForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    console.log(enteredAmountNumber, "entered amount");
 
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.input} htmlFor="Amount">
        Amount
      </label>
      <input
        ref={amountInputRef}
        id={`"amount_" + ${props.id}`}
        type="number"
        step="1"
        defaultValue="1"
      />
      <div className={classes.container}>
        <button className={classes.button} type="submit">
         + Add 
        </button>
      </div>
    </form>
  );
};

export default JeweleryForm;
