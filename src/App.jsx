
import './App.css'
import Banner from './Component/Header/Banner'
import Navbar from './Component/Header/Navbar'

function App() {


  return (
    <>
    {/* header ---------------------- */}
    <header className='md:container mx-auto'>
     <Navbar></Navbar>
    <Banner></Banner>
    </header>


    </>
  )
}

export default App
