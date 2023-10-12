import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

const SushiContainer = ({ allSushi, nextFour, handleEatSushi }) => {
  const sushi = allSushi
    .slice(0, 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi} />
    ));

  return (
    <div className="belt">
      {sushi}
      <MoreButton nextFour={nextFour} />
    </div>
  );
};

export default SushiContainer;
