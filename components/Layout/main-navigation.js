import Link from "next/link";
import classes from "./main-navigation.module.css";
import LoginIcon from "./LoginIcon";
import HeaderCartButton from "./HeaderCartButton";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <a className={classes.nlink}>
            <h1>Jewelry</h1>
          </a>
        </Link>
      </div>
      <div className={classes.container}>
        <Link href="/jewelry">
          <a className={classes.button}>Collection</a>
        </Link>
        <HeaderCartButton onShowCart={props.onShowCart} />
        <div className={classes.pic}>
          <Link href="/login">
            <LoginIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
