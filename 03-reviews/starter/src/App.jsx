import data from "./data";
import Review from "./Review";
import { FaGithubSquare } from "react-icons/fa";

const App = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />  
        </section>
      </main>
    </>
  );
};
export default App;
