import classes from "./jDetail.module.css";
import DetailDetali from "./detail-detail";
import JeweleryForm from "./jewelry-form";
import Image from "next/image";
import { useContext } from "react";
import AuthProvider from "../store/auth-context";
import CartContext from "../store/cart-context";

const JDetail = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthProvider);

  const isLoggedIn = authCtx.isLoggedIn;
  const { item } = props;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      amount: amount,
      price: item.price,
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.mainImage}>
        <Image
          src={"/" + item.image}
          alt={item.title}
          width={550}
          height={450}
        />
      </div>
      <div className={classes.data}>
        <DetailDetali
          title={item.title}
          weight={item.weight}
          price={item.price}
        />
        <div className={classes.formContainer}>
          {isLoggedIn && (
            <JeweleryForm
              jewelry={item}
              id={item.id}
              onAddToCart={addToCartHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JDetail;
