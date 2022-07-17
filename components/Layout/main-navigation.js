import Link from "next/link";
import classes from "./main-navigation.module.css";
import LoginIcon from "../Icon/LoginIcon";
import HeaderCartButton from "./HeaderCartButton";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth-context";
import LogoutIcon from "../Icon/LogoutIcon";

const MainNavigation = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const email = authCtx.email;

  useEffect(() => {
    if (email === "admin@gmail.com") {
      setIsAdmin(true);
    }
  }, [email]);

  const LogoutHandler = () => {
    authCtx.logout();
    setIsAdmin(false);
  };

  return (
    <header className={`${classes.header}  `}>
      <div>
        <Link href="/">
          <a className={`${classes.nlink} navbar-brand`}>
            <h1>Jewelry</h1>
          </a>
        </Link>
      </div>
     
      <div className={classes.container}>
        {isAdmin && (
          <Link href="/AddJewelry">
            <a className={classes.button}>Add New Jewelry</a>
          </Link>
        )}

        <Link href="/jewelry">
          <a className={classes.button}>Collection</a>
        </Link>
        {isLoggedIn && (
          <Link href="/profile">
            <a className={classes.button}>Profile</a>
          </Link>
        )}

        {isLoggedIn && <HeaderCartButton onShowCart={props.onShowCart} />}
        {!isLoggedIn && (
          <div className={classes.login}>
            <LoginIcon />
          </div>
        )}
        {isLoggedIn && (
          <div className={classes.logout} onClick={LogoutHandler}>
            <LogoutIcon />
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
