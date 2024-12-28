import supabase from "./supabase.js";

export const getCartByUserId = async (userId) => {
  if (!userId) return [];

  let { data: cart, error } = await supabase
    .from("cart")
    .select("*")
    .eq("userId", userId);

  if (error) {
    //   console.error(error.message);
    return [];
  }

  return cart;
};

export const AddProductToCart = async (userId, productId) => {
  // 1
  if(!userId) throw new Error('need to be logged in')

  const {data,error} = await supabase.from("cart").insert([{productId}])

  if(error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
};