import NewJeweleryForm from "../components/new-jewelry/NewJeweleryForm";
import { useRouter } from "next/router";
const AddJewelry = () => {
  const history = useRouter();

  function addJeweleryHandler(jeweleryData) {
    console.log(jeweleryData, "jdata");
    const { data } = jeweleryData;
    console.log(data, "data");
    fetch(
      "https://finalproject-1400-default-rtdb.firebaseio.com/jewelry.json",
      {
        method: "POST",
        body: JSON.stringify(jeweleryData),

        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <NewJeweleryForm onAddJewelery={addJeweleryHandler} />
    </section>
  );
};

export default AddJewelry;
