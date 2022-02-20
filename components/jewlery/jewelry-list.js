import classses from "./jewelry-list.module.css";
import JewelryItem from "./jewelry-item";

const JewelryList = (props) => {
  const { items } = props;
  return (
    <section className={classses.jewelrys}>
      <ul>
        {items.map((jewelry) => (
          <JewelryItem
            key={jewelry.id}
            id={jewelry.id}
            title={jewelry.title}
            image={jewelry.image}
            price={jewelry.price}
            weight={jewelry.price}
            type={jewelry.type}
          />
        ))}
      </ul>
    </section>
  );
};

export default JewelryList;
