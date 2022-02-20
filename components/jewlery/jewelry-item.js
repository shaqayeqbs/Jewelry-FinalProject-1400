import Link from "next/link";
import classes from "./jewelry-item.module.css";
import Image from "next/image";

const JewelryItem = (props) => {
  const { id, image } = props;
  return (
    <li className={classes.container}>
      <Link href={`/jewelry/${id}`}>
        <Image
          className={classes.myimg}
          src={"/" + image}
          alt={props.title}
          width={450}
          height={450}
        />
      </Link>
    </li>
  );
};

export default JewelryItem;
