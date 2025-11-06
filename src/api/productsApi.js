import axios from "axios";


const API_BASE = import.meta.env.VITE_API_URL || "https://back-end-prod-meem-production.up.railway.app/";
const BASE_URL = `${API_BASE}/products`;


export const getAllProducts = async () => {
  const pew = (await (axios.get(BASE_URL))).data;
  console.log("Get Products:", pew);
  return pew
}

export const getProductsByCategory = async (category) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?category=${category}`);
    console.log(`Products in category "${category}":`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching products for category "${category}":`, error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  const { data } = await axios.get(`${BASE_URL}/${productId}`);
  return data;
};

export const getProductBySlug = async (slug) => {
  const { data } = await axios.get(`${BASE_URL}/${slug}`);
  return data;
};


export const addProduct = async (product) => {
  try {
    const { data } = await axios.post(BASE_URL, product);
    console.log("Added Product:", data);
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (productId, product) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/${productId}`, product);
    console.log("Updated Product:", data);
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};


export const deleteProductById = async (productId) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/${productId}`);
    console.log("Deleted Product:", data);
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
