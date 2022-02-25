import classes from "./NewJeweleryForm.module.css";
import { useRef } from "react";

const NewJeweleryForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const weightInputRef = useRef();
  const typeInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredweight = weightInputRef.current.value;
    const enteredType = typeInputRef.current.value;

    const jewelry = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      weight: enteredweight,
      type: enteredType,
    };
    props.onAddJewelery(jewelry);
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Jewelery Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Jewelery Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            required
            id="price"
            ref={priceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            step="0.01"
            required
            id="weight"
            ref={weightInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="Type">Type</label>
          <div className={classes.radio}>
            <label>Ring</label>
            <input type="radio" required id="ring" ref={typeInputRef} />
            <label>Bracelet</label>
            <input type="radio" required id="bracelet" ref={typeInputRef} />
            <label>Nechlace</label>
            <input type="radio" required id="necklace" ref={typeInputRef} />
            <label>Earing</label>
            <input type="radio" required id="earing" ref={typeInputRef} />
          </div>
        </div>

        <div className={classes.actions}>
          <button>Add Jewelery</button>
        </div>
      </form>
    </div>
  );
};

export default NewJeweleryForm;
