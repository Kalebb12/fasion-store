import { useQuery } from "@tanstack/react-query";
import { getCartByUserId } from "../../services/apiCart";
import { useAuth } from "../auth/useAuth";

export  function useCart () {

  const { user , isPending:gettingUser} = useAuth()

  const { data, isPending } = useQuery({
    queryKey: ["cart",user?.id],
    queryFn: async () => getCartByUserId(user?.id),
  });

  return { data, isPending };
};