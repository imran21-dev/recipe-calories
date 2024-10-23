import PropTypes from "prop-types";

const TimeCaloriesCalc = ({totalTime, totalCalories}) => {
    return (
        <ul className="numbered-list w-full ">
        <li className=" flex w-full items-center p-4">
          <span className="flex-shrink-0 w-8 h-8  mr-4 "></span>
          <span className="grid grid-cols-3 items-center text-center text-secondaryTextColor/60 font-medium text-sm w-full">
           <h1></h1>
            <h1 className="w-full">Total Time = {totalTime} min</h1>
            <h1 className="w-full">Total Calories = {totalCalories} cal</h1>
          </span>
        </li>
      </ul>
    );
};
TimeCaloriesCalc.propTypes = {
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired
}
export default TimeCaloriesCalc;