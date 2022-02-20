import JewelryList from "../components/jewlery/jewelry-list";
import FilteredButton from "../components/filter/filtered-button";
import { getFilteredJewelry, getAllJewelry } from "../helpers/api-util";
import Head from "next/head";
const FilteredPage = (props) => {
  const { jewelrys } = props;

  if (!jewelrys || jewelrys.length === 0) {
    return (
      <div>
        <FilteredButton items={jewelrys} />
        <p className="center">There is no Jewelry!</p>;
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{jewelrys[0].type}</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <FilteredButton items={jewelrys} />
      <JewelryList items={jewelrys} />
    </div>
  );
};

export default FilteredPage;

export async function getStaticProps(context) {
  const { params } = context;
  const type = params.type;

  const jewelry = await getFilteredJewelry(type);

  if (!jewelry || jewelry.lenght === 0) {
    return { notFound: true };
  }

  return {
    props: {
      jewelrys: jewelry,
    },
    revalidate: 1800,
  };
}
export async function getStaticPaths() {
  const jewelrys = await getAllJewelry();
  const paths = jewelrys.map((jewelry) => ({
    params: { type: jewelry.type },
  }));
  return {
    paths: paths, //vase che id haei page pre render besh
    fallback: false,
  };
}
