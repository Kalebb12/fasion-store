import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import Fullpage from "../../components/Fullpage";
import Spinner from "../../components/Spinner";

const RedirectIfAuthenticated = ({ children }) => {
  const {isAuthenticated,isPending} = useAuth()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(isAuthenticated && !isPending){
        navigate("/");
    }
  },[navigate,isAuthenticated])

  if (isPending)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    )

  if(!isAuthenticated && !isPending) return children;
};

export default RedirectIfAuthenticated;
