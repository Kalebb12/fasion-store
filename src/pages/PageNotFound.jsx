import { useNavigate } from "react-router-dom";

function PageNotFound() {

  const navigate = useNavigate()
  const moveBack =()=> {
    navigate('/')
  }
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
      <h2>
        The page you are looking for could not be found 😢
      </h2>
      <button onClick={moveBack} size="large">
        &larr; Go back
      </button>
    </div>
  );
}

export default PageNotFound;
