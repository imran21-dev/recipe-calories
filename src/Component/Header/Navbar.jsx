import { PiUserCircleLight } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <h1 className="text-xl w-1/3 font-bold ">Recipe Calories</h1>
            <ul className="flex gap-8  text-sm text-secondaryTextColor/70">
                <li className="cursor-pointer hover:text-pColor">Home</li>
                <li className="cursor-pointer hover:text-pColor">Recipe</li>
                <li className="cursor-pointer hover:text-pColor">About</li>
                <li className="cursor-pointer hover:text-pColor">Search</li>
            </ul>
             <section className="flex w-1/3 items-center gap-3 justify-end">
                 <input id="searchBar" className="bg-secondaryTextColor/5 placeholder:text-secondaryTextColor/70 bg-search-icon bg-no-repeat bg-bgSize text-secondaryTextColor/70  focus:outline-pColor/40 bg-left indent-2 py-2 px-8 rounded-full" type="text" placeholder="Search" />
                 <button className="bg-pColor w-10 h-10 flex items-center justify-center rounded-full text-3xl text-secondaryTextColor/80"><PiUserCircleLight></PiUserCircleLight></button>
             </section>
        </div>
    );
};

export default Navbar;