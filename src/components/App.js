import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

const App = () => {
  const [allSushi, setAllSushi] = useState([]);
  const [cash, setCash] = useState(100);

  useEffect(() => {
    const getData = () => {
      fetch(API)
        .then((resp) => resp.json())
        .then((arr) =>
          setAllSushi(arr.map((sushi) => ({ ...sushi, eaten: false })))
        )
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

  const handleNextFour = () =>
    setAllSushi((prev) => [...prev.slice(4), ...prev.slice(0, 4)]);

  const handleEatSushi = (obj) => {
    const { price, id } = obj;
    if (cash >= price) {
      setCash((cash) => cash - price);
      setAllSushi((prev) =>
        prev.map((sushi) =>
          sushi.id === id ? { ...sushi, eaten: true } : sushi
        )
      );
    } else {
      alert("Sorry, you don't have enough money!");
    }
  };

  const handleAddCash = (amt) => setCash((cash) => cash + amt);

  const plates = allSushi.filter(({ eaten }) => eaten);

  return (
    <div className="app">
      <SushiContainer
        allSushi={allSushi}
        nextFour={handleNextFour}
        handleEatSushi={handleEatSushi}
      />
      <Table cash={cash} plates={plates} handleAddCash={handleAddCash} />
    </div>
  );
};

export default App;
