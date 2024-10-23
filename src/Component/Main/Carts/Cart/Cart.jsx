import { LuDot } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Cart = ({recipe, handleRecipe}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className="border-2 border-secondaryTextColor/10 p-6 rounded-2xl">
             <img className="rounded-xl w-full h-60 object-cover" src={recipe_image} alt="Recipe Image" />
             <h1 className="text-xl font-bold py-6">{recipe_name}</h1>
             <p className="text-secondaryTextColor/70 pb-4 text-sm">{short_description}</p>
             <section className="border-b border-t border-secondaryTextColor/10 py-4">
                <h1 className="text-lg font-medium">Ingredients: {ingredients.length}</h1>
                <ul className=" text-secondaryTextColor/70 py-2 space-y-1  max-h-32 min-h-32 h-max overflow-y-auto">
                    {
                    ingredients.map((item, idx) => <li key={idx} className="flex items-center"><LuDot></LuDot> {item}</li>)
                    } 
                </ul>
             </section>
             <section className="flex items-center gap-4 py-4">
                <span className="flex items-center gap-2 text-secondaryTextColor/80"><span className="text-xl"><IoTimeOutline></IoTimeOutline></span>{preparing_time}</span>
                <span className="flex items-center gap-2 text-secondaryTextColor/80"><span className="text-xl"><AiOutlineFire></AiOutlineFire> </span>{calories}</span>
             </section>
             <button onClick={()=> handleRecipe(recipe)} className="bg-pColor px-6 py-3 rounded-full font-medium text-lg">Want to Cook</button>
        </div>
    );
};

Cart.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleRecipe: PropTypes.func.isRequired
}
export default Cart;