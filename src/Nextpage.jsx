
import { useNavigate } from "react-router-dom";

const Nextpage = () => {
 
  const navigate = useNavigate();

 const handleLogin=()=>
        {
          navigate("/");
        }

  return (
    <div>
        <center>

      <h1>Login Succesfully..........</h1>

      <button onClick={handleLogin}>Logout</button>
        </center>
    </div>
  )
}

export default Nextpage
