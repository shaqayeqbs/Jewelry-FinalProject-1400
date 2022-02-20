import classes from "./detail-detail.module.css";
import PirceIcon from "../Icon/Price";
import WeightIcon from "../Icon/Weight";

const DetailDetali = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.other}>
        <div className={classes.icon}>
          <WeightIcon />
        </div>
        Weight:<span className={classes.bold}>{props.weight} </span>
      </div>
      <div className={classes.other}>
        <div className={classes.icon}>
          <PirceIcon />
        </div>
        Price:<span className={classes.bold}>{props.price}</span>
      </div>
    </div>
  );
};

export default DetailDetali;
