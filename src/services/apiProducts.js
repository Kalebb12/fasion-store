import supabase from "./supabase.js";

export const getProducts = async () => {
  let {
    data: products,
    error,
    count,
  } = await supabase.from("products").select("*", { count: "exact" });
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return { products, count };
};

export const getProductById = async (id) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

    if(error){
      console.error(error.message);
      throw new Error(error.message);
    }

    return product[0]
};
