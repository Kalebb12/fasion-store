import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/apiUser"

export const useLogin = () => {
    const {} = useMutation({
        mutationFn: login({email,password}) 
    })
}