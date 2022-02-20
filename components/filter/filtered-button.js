import classes from "./filtered.module.css";
import Link from "next/link";

const FilteredButton = (props) => {
  return (
    <div className={classes.underline}>
      <Link href="/earing">
        <a className={classes.filter}>Eearing</a>
      </Link>
      <Link href="/ring">
        <a className={classes.filter}>Rings</a>
      </Link>
      <Link href="/necklaces">
        <a className={classes.filter}> Necklaces</a>
      </Link>
      <Link href="/bracelet">
        <a className={classes.filter}> Bracelets </a>
      </Link>
    </div>
  );
};

export default FilteredButton;
