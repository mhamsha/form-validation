import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  }

  return <> <h1>Welcome to the App of form validation</h1>
    <button type="button" onClick={handleClick} className="cursor-pointer bg-amber-200" >
      click me to go
    </button>
  
  </>;
}

export default App;
