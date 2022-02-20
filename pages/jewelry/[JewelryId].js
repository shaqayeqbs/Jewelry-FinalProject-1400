import JDetail from "../../components/jewelry-detail/jDetail";
import { getJewelryById, getAllJewelry } from "../../helpers/api-util";
import Head from "next/head";

const JewelryDetail = (props) => {
  const { item } = props;
  if (!item || item.lenght === 0) {
    return <p>No jewelry found!</p>;
  }

  return (
    <div>
      <Head>
        <title>Detail Page</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <div>{<JDetail item={item} />}</div>
    </div>
  );
};

export default JewelryDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const jewleryId = params.JewelryId;

  const jewelry = await getJewelryById(jewleryId);

  if (!jewelry || jewelry.lenght === 0) {
    return { notFound: true };
  }

  return {
    props: {
      item: jewelry,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const jewelrys = await getAllJewelry();

  const paths = jewelrys.map((jewelry) => ({
    params: { JewelryId: jewelry.id },
  }));
  return {
    paths: paths, //vase che id haei page pre render besh
    fallback: false,
  };
}
