import axios from "axios"
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BASE_URL = `${API_BASE}/orders`

export const addOrder = async (order) => {
    const pew = (await axios.post(`${BASE_URL}`, order, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })).data
    console.log("order mrten f3ln",pew);
    return pew;
}

export const getAllOrders = async () => {
    const pew = (await axios.get(`${BASE_URL}`, {
        headers: {

            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })).data.data.orders
    console.log("Get Orders:", pew);
    return pew;
}
export const getMyOrders = async () => {
  const res = await axios.get("http://localhost:5000/api/orders/myOrders", {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  console.log("My Orders:", res.data.data.orders);
  return res.data.data.orders;
};


// {
//     "user": "68ffaaf8adbdc29938c6f1f9",
//         "items": [
//             {
//                 "product": "690315dbc6fa90e75278c5ee",
//                 "quantity": 5
//             }
//         ]
// }