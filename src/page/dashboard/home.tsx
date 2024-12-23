import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="content">
      <Navbar route='home' />
    </div>
  )
}

export default Home;
