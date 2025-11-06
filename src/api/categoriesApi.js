import axios from "axios"
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BASE_URL = `${API_BASE}/categories`


export const getAllCategories = async () => {
    const pew = (await (axios.get(BASE_URL))).data;
    let category = [];
    let subCategory = [];
    // console.log("Get categories:", pew);
    pew.map((item) => {
        if (item.parentCategory)
            subCategory.push({ _id: item._id, name: item.name })
        else
            category.push({ _id: item._id, name: item.name })
    })

    return { category, subCategory }
}

// export const getProdctById = async (productId) => {
//     const pew = (await (axios.get(`${BASE_URL}/${productId}`))).data
//     console.log(pew);
//     return pew
// }

// export const addProduct = async (product) => {
//     const pew = (await (axios.post(BASE_URL, product))).data
//     console.log(pew);
//     return pew
// }

// export const updateProduct = async (productId, product) => {
//     const pew = (await (axios.put(`${BASE_URL}/${productId}`, product))).data
//     console.log("update:", pew);
//     return pew
// }

// export const deleteProductById = async (productId) => {
//     const pew = (await (axios.delete(`${BASE_URL}/${productId}`))).data
//     console.log(pew);
//     return pew
// }
