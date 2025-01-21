import { Link } from "react-router-dom";
import PageNav from "../../components/navigation/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>Home</h1>

      <Link to="/app">App</Link>
    </div>
  );
}

export default Home;
