export async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
}

export async function fetchProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) return null;
    return response.json();
}

export async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
}
