import Link from "next/link";
import classes from "./nav-links.module.css";

const NavLinks = () => {
  return (
    <nav>
      <Link href="/">
        <a className={classes.button}>Home</a>
      </Link>
      <Link href="/profile">
        <a className={classes.button}>Profile</a>
      </Link>
      <Link href="/AddJewelry">
        <a className={classes.button}>Add Jewelry</a>
      </Link>
     
    </nav>
  );
};

export default NavLinks;
