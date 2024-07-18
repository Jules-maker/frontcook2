import axios from "axios";

const API_URI = "http://51.75.161.94:5000/api";
const options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("auth_token");
    }
}

export async function getAllDish()
{
    let dishes;
    axios.get(API_URI + "/dish", options).then((response) => {
        dishes = response.data;
    });
    return dishes;
}

export async function getSingleDish(id)
{
    let dish;
    axios.get(API_URI + "/dish/" + id, options).then((response) => { dish = response.data});
    return dish;
}

export async function createDish(title, description, timeprepare, quantity, menu_id, category_id, image)
{
    let newDish = {
        title: title,
        description: description,
        timeprepare: parseInt(timeprepare),
        quantity: parseInt(quantity),
        menu_id: parseInt(menu_id),
        category_id: parseInt(category_id),
        image: image
    };

    axios.post(API_URI + "/dish", newDish, options);
}

export async function editDish(dish_id, title, description, timeprepare, quantity, menu_id, category_id)
{
    let updateDish = {
        title: title,
        description: description,
        timeprepare: parseInt(timeprepare),
        quantity: parseInt(quantity),
        menu_id: parsseInt(menu_id),
        category_id: parseInt(category_id)
    }

    axios.put(API_URI + "/dish/" + dish_id, updateDish, options);
}

export async function deleteDish(dish_id)
{
    axios.delete(API_URI + "/dish/" + dish_id, options);
}