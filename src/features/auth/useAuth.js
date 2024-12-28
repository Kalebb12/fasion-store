import {  useQuery } from "@tanstack/react-query";
import {  getCurrentUser } from "../../services/apiUser";

export function useAuth () {
   const {isPending , data : user} = useQuery({
        queryKey:['user'],
        queryFn:async () => getCurrentUser()
    })

    return {  isPending,isAuthenticated  : user?.role === 'authenticated',user }
}