import CurrentCook from "./CurrentCook/CurrentCook";
import TimeCaloriesCalc from "./TimeCaloriesCalc/TimeCaloriesCalc";
import WantCook from "./WantCook/WantCook";
import PropTypes from "prop-types";

const Calculations = ({ wantCook, currentCook, handleCurrentRecipe}) => {
  return (
    <div className="w-2/5 pl-6">
      <div className="border-2 border-secondaryTextColor/10 rounded-2xl w-full min-h-[700px] max-h-[700px] h-max overflow-y-auto flex flex-col items-center py-8">
        <section className="w-full  min-h-[200px] max-h-[300px] overflow-y-auto text-center flex flex-col items-center">
          <h1 className="text-2xl h-max text-secondaryTextColor font-semibold border-b w-3/4 pb-2 border-secondaryTextColor/10">
            Want to cook: {wantCook.length}
          </h1>

          <ul className="numbered-list w-full">
            <li className=" flex w-full items-center p-4">
              <span className="flex-shrink-0 w-8 h-8  mr-4 "></span>
              <span className="grid grid-cols-4 items-center text-secondaryTextColor/60 font-medium text-sm w-full">
                <h1 className="w-full text-left">Name</h1>
                <h1 className="w-full">Time</h1>
                <h1 className="w-full">Calories</h1>
              </span>
            </li>
          </ul>
          <ul className="numbered-list w-full pb-5">
            {wantCook.map((recipe, idx) => (
              <WantCook key={idx} recipe={recipe} handleCurrentRecipe={handleCurrentRecipe}></WantCook>
            ))}
          </ul>
        </section>

        <section className="w-full pt-5 overflow-y-auto text-center flex flex-col items-center">
          <h1 className="text-2xl h-max text-secondaryTextColor font-semibold border-b w-3/4 pb-2 border-secondaryTextColor/10">
            Currently cooking: {currentCook.length}
          </h1>
          <ul className="numbered-list w-full">
            <li className=" flex w-full items-center p-4">
              <span className="flex-shrink-0 w-8 h-8  mr-4 "></span>
              <span className="grid grid-cols-3 items-center text-secondaryTextColor/60 font-medium text-sm w-full">
                <h1 className="w-full text-left">Name</h1>
                <h1 className="w-full">Time</h1>
                <h1 className="w-full">Calories</h1>
              </span>
            </li>
          </ul>
          <ul className="numbered-list w-full pb-5">
            {currentCook.map((recipe, idx) => (
              <CurrentCook key={idx} recipe={recipe}></CurrentCook>
            ))}
          </ul>
        </section>
        <section className="w-full">
            <TimeCaloriesCalc></TimeCaloriesCalc>
        </section>
      </div>
    </div>
  );
};
Calculations.propTypes = {
  wantCook: PropTypes.array.isRequired,
  currentCook: PropTypes.array.isRequired,
  handleCurrentRecipe: PropTypes.func.isRequired
};
export default Calculations;
