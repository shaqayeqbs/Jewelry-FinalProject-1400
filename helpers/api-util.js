

export async function getAllUsers(){
  const res =await fetch(
    "https://finalproject-1400-default-rtdb.firebaseio.com/users.json"
  );
    
  const data = await res.json();
      const testUser = [];

      for (const key in data) {
        testUser.push({
          id: key,
          key: key,
          name: data[key].name,
          lastname: data[key].lastname,
          email: data[key].email,
          password: data[key].password,
        });
      }
      return testUser;
 
       
}

export async function getAllJewelry() {
  const res = await fetch(
    "https://finalproject-1400-default-rtdb.firebaseio.com/jewelry.json"
  );

  // const res = data.DUMMY_DATA;
  const data = await res.json();
  const testjewelerys = [];

  for (const key in data) {
    console.log(key);
    testjewelerys.push({
      id: key,
      key: key,
      price: data[key].price,
      title: data[key].title,
      image: data[key].image,
      weight: data[key].weight,
      type: data[key].type,
    });
  }
  return testjewelerys;
}

export async function getFilteredJewelry(type) {
  const allJewerly = await getAllJewelry();

  return allJewerly.filter((jewelry) => jewelry.type === type);
}

export async function getJewelryById(id) {
  const allJewerly = await getAllJewelry();
  return allJewerly.find((jewelry) => jewelry.id === id);
}
