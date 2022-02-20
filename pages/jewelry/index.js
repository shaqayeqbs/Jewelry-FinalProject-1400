import JewelryList from "../../components/jewlery/jewelry-list";
import FilteredButton from "../../components/filter/filtered-button";
import { getAllJewelry } from "../../helpers/api-util";
import Head from "next/head";

const AllJewelry = (props) => {
  const { items } = props;
  return (
    <div>
      <Head>
        <title>All Jewelrys</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <FilteredButton items={items} />
      <JewelryList items={items} />
    </div>
  );
};

export default AllJewelry;

export async function getStaticProps() {
  const jewelrys = await getAllJewelry();

  if (jewelrys.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      items: jewelrys,
    },
    revalidate: 1800,
  };
}
