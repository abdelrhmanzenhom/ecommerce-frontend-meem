export const empty_form = {
    name: "",
    description: "",
    category: null,
    subCategory: null,
    tags: [""],
    price: "",
    thumbnail: "",
    images: [""],
    colors: [""],
    sizes: [""],
    weight: "",
    dimensions: {
        length: "",
        width: "",
        height: "",
    },
    isFeatured: false,
    isActive: true,
};


export const requiredFields = [
    "name", "description", "price"
]