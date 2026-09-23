const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {

  }

  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }

  async searchProducts(query) {
    const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
    let allProducts = [];

    
    for (const category of categories) {
      try {
        const products = await this.getData(category);
        if (Array.isArray(products)) {
          allProducts = allProducts.concat(products);
        }
      } catch (error) {
        console.error(`Error fetching category ${category}:`, error);
      }
    }

    const searchTerm = query.toLowerCase().trim();
    
  
    return allProducts.filter((product) => {
      const name = (product.Name || "").toLowerCase();
      const brand = (product.Brand?.Name || "").toLowerCase();
      const nameNoBrand = (product.NameWithoutBrand || "").toLowerCase();
      
      return (
        name.includes(searchTerm) ||
        brand.includes(searchTerm) ||
        nameNoBrand.includes(searchTerm)
      );
    });
  }
}