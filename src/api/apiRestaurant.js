import axios from "axios";

const API_URI = "http://51.75.161.94:5000/api";
const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("auth_Token"),
  },
};

export async function getAllRestaurant() {
  let restaurants;
  axios.get(API_URI + "/restaurant", options).then((response) => {
    restaurants = response.data;
  });
  return restaurants;
}

export async function getRestaurant(restaurant_id) {
  let restaurant;
  axios
    .get(API_URI + "/restaurant/" + restaurant_id, options)
    .then((response) => {
      restaurant = response.data;
    });
  return restaurant;
}

export async function createRestaurant(
  name,
  description,
  address,
  days,
  opening_time,
  closing_time,
  user_id,
  image
) {
  let new_restaurant = {
    name: name,
    description: description,
    address: address,
    days: days,
    opening_time: opening_time,
    closing_time: closing_time,
    user_id: parseInt(user_id),
    image: image,
  };
  axios.post(API_URI + "/restaurant", new_restaurant, options);
}

export async function editRestaurant(
  restaurant_id,
  name,
  description,
  address,
  days,
  opening_time,
  closing_time,
  image
) {
  let updateRestaurant = {
    name: name,
    description: description,
    address: address,
    days: days,
    opening_time: opening_time,
    closing_time: closing_time,
    image: image,
  };
  axios.put(
    API_URI + "/restaurant/" + restaurant_id,
    updateRestaurant,
    options
  );
}

export async function deleteRestaurant(restaurant_id) {
  axios.delete(API_URI + "/restaurant/" + restaurant_id, options);
}
