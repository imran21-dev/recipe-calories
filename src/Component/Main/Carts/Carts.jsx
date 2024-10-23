import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import PropTypes from "prop-types";



const Carts = ({handleRecipe}) => {
    const [recipes, setRecipes] = useState([]);

useEffect(()=>{
    const recipesData = async() => {
        const res = await fetch('recipes.json');
        const data = await res.json();
        setRecipes(data)
     
    }
    recipesData()
},[])
    return (
        <div className=" w-3/5 grid grid-cols-2 gap-6">
          {
          recipes.map(recipe =>   <Cart key={recipe.recipe_id} recipe={recipe} handleRecipe={handleRecipe}></Cart>)
          }
        </div>
    );
};
Carts.propTypes ={
    handleRecipe: PropTypes.func.isRequired
}
export default Carts;