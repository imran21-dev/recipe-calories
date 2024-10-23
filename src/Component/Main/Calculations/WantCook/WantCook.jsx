import PropTypes from "prop-types";


const WantCook = ({recipe,handleCurrentRecipe}) => {
    const {recipe_name,preparing_time,calories} = recipe;
    
    return (
        <li className="bg-secondaryTextColor/5 flex w-full items-center p-4">
            <span className="flex-shrink-0 w-8 h-8 text-secondaryTextColor/70 bg-gray-200 text-center rounded-md mr-4 list-number"></span>
            <span className="grid grid-cols-4 w-full items-center text-secondaryTextColor/60 text-sm">
            <h1 className="text-left w-full">{recipe_name}</h1>
            <h1 className="w-full">{preparing_time}</h1>
            <h1 className="w-full">{calories}</h1>
            <button onClick={()=>handleCurrentRecipe(recipe)} className="bg-pColor mx-2 text-secondaryTextColor font-medium rounded-full py-2">Preparing</button>

            </span>
        </li>
    );
};
WantCook.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCurrentRecipe: PropTypes.func.isRequired
}
export default WantCook;