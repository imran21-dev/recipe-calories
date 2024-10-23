
import {  useState } from 'react'
import './App.css'
import Banner from './Component/Header/Banner'
import Navbar from './Component/Header/Navbar'
import Calculations from './Component/Main/Calculations/Calculations'
import Carts from './Component/Main/Carts/Carts'
import Modal from './Component/Main/Calculations/Modal/Modal'

function App() {
const [wantCook, setWantCook] = useState([]);
const [currentCook, setCurrentCook] = useState([]);
const [totalTime, setTotalTime] = useState(0);
const [totalCalories, setTotalCalories] = useState(0);



const handleRecipe =(recipe) => {
 const previousRecipe = wantCook.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
 if (!previousRecipe) {
   
   const newWantCook = [...wantCook,recipe];
   setWantCook(newWantCook)
   
 }
 else{
   document.getElementById('my_modal_1').showModal()
 }


}
const handleCurrentRecipe = (recipe) => {
   const newCurrentCook = [...currentCook,recipe];
   setCurrentCook(newCurrentCook)
   const remainingWantCook = wantCook.filter(rec => rec.recipe_id !== recipe.recipe_id);
   setWantCook(remainingWantCook)
   const newTotalTime = totalTime + parseFloat(recipe.preparing_time);
   setTotalTime(newTotalTime) 
   const newTotalCalories = totalCalories + parseFloat(recipe.calories);
   setTotalCalories(newTotalCalories)
}

  return (
    <>
    {/* header ---------------------- */}
    <header className='md:container mx-auto'>
     <Navbar></Navbar>
    <Banner></Banner>
    </header>
    {/* main------------------- */}
 <main className='md:container mx-auto'>
     <div className='text-center pt-8'>
      <h1 className='text-3xl font-bold'>Our Recipes</h1>
      <p className='text-secondaryTextColor/70 py-3 text-sm'>Discover a variety of easy and delicious recipes, carefully crafted to bring flavor and joy to your kitchen. <br /> From quick meals to gourmet dishes, find inspiration for every occasion!</p>
     </div>

    <section className='flex py-8'>
    <Carts handleRecipe={handleRecipe}></Carts>
    <Calculations totalCalories={totalCalories} totalTime={totalTime} wantCook={wantCook} currentCook={currentCook} handleCurrentRecipe={handleCurrentRecipe}></Calculations>
    </section>
 </main>
 <Modal></Modal>
    </>
  )
}

export default App
