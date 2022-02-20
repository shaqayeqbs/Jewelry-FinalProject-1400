import data from "../data/dummy-data.json";

export function getAllJewelry() {
  // export async function getStaticProps() {
  //   const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  //   const jsonData = await fs.readFile(filePath);
  //   const jewelrys = JSON.parse(jsonData);

  
  // const res = await fetch(
  //   "https://finalproject-1400-default-rtdb.firebaseio.com/jewelry.json"
  // );

  const res = data.DUMMY_DATA;

  // const myjewelrys = await res.json();
  // for (const key in myjewelrys) {
  //   jewelrys.push({
  //     id: key,
  //     ...myjewelrys[key],
  //   });
  // }
  return res;
}

export function getFilteredJewelry(type) {
  const allJewerly = getAllJewelry();

  return allJewerly.filter((jewelry) => jewelry.type === type);
}

export function getJewelryById(id) {
  const allJewerly = getAllJewelry();
  return allJewerly.find((jewelry) => jewelry.id === id);
}
