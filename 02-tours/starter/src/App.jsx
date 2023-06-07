import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [load, setLoad] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
    setLoad(false);
    return data;
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <>
      {load ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          <Tours tours={tours}/>
        </main>
      )}
    </>
  );
};
export default App;
