import axios from "axios";

const API_URI = "http://51.75.161.94:5000/api";
const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("auth_token"),
  },
};

export async function getAllMenu() {
  let menus;
  axios.get(API_URI + "/menu", options).then((response) => {
    menus = json.parse(response.data);
  });
  return menus;
}

export async function getSingleMenu(id) {
  let menu;
  axios.get(API_URI + "/menu/" + id, options).then((response) => {
    menu = json.parse(response.data);
  });
  return menu;
}

export async function addMenu(
  title,
  description,
  price,
  quantity,
  date_begin,
  date_end,
  available,
  allergen,
  restaurant_id,
  image
) {
  axios.post(
    API_URI + "/menu",
    {
      title: title,
      description: description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      date_begin: date_begin,
      date_end: date_end,
      available: available,
      allergen: allergen,
      restaurant_id: parseInt(restaurant_id),
      image: image,
    },
    options
  );
}

export async function editMenu(
  menuId,
  title,
  description,
  price,
  quantity,
  date_begin,
  date_end,
  available,
  image
) {
  axios.put(
    API_URI + "/menu/" + menuId,
    {
      title: title,
      description: description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      date_begin: date_begin,
      date_end: date_end,
      available: available,
      image: image,
    },
    options
  );
}
