import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCartByUserId } from "../../services/apiCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../services/supabase.js";
import { useAuth } from "../auth/useAuth";

export  function useCart () {

  const { user , isPending:gettingUser} = useAuth()

  const { data, isPending } = useQuery({
    queryKey: ["cart",user?.id],
    queryFn: async () => getCartByUserId(user?.id),
  });

  return { data, isPending };
};