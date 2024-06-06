
import { Link } from "react-router-dom";

const HomePage = () => {
//onclick of shop now ask them to login or create an acc

  return (
    <div className="Ener_tittle">
      <h1>ENER</h1>
      <h2>One Of A Kind...</h2>
      <Link to="products">Shop NOW!!</Link>
    </div>
  );
};

export default HomePage;
