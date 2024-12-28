import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddProductToCart } from "../../services/apiCart";
import toast from "react-hot-toast";
import supabase from "../../services/supabase.js";

export function useAddToCart(productId) {
  const [id,setId] = useState(null)
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getUser = async () => {
    const {data: {user} = {}} = await supabase.auth.getUser()
    if(user){
      setId(user.id)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  
  const { mutate, isPending } = useMutation({
    mutationFn:async () => AddProductToCart(id,productId),
    // mutationFn:  AddProductToCart,
    onSuccess: () => {
      toast.success("product added successfully");
      queryClient.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      toast.error(error.message);
      navigate("/login"); // if user is not logged in, navigate to login page
    },
  });

  return { mutate, isPending};
}
