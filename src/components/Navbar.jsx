import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  {/*for nav menu*/}
  const [nav,setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav)
  }
  
  const toggleClick = () => {
    setNav(false)
  }
  return (
    <>
    <div className='flex justify-evenly '>
    <nav className='flex gap-[50px] p-[1rem] text-[#1B5E20] relative  max-lg:w-full bg-[white] w-[60%]'>
      <div>
        <h2 className='font-bold text-[1.3rem]'>Fit<span className='font-semibold text-[#45af4c]'>Fuel</span></h2>
      </div>

      <div className={  nav
            ? 'ease-in-out fixed  left-0 top-0 w-full h-screen bg-[#f1ede3]  text-[#5C4033] px-4 py-7 z-[10] items-center text-center  '
            : 'max-lg:hidden'}>
      <ul 
      onClick={toggleClick}
      className={ nav ? "flex flex-col gap-[20px] mt-[100px] text-[#1B5E20] font-bold text-[1.4rem]": "flex gap-[25px] text-[1.1rem] font-semibold  max-lg:hidden"}>
        <a href="#services"><li>Services</li></a>
        <a href="#calculator"><li>Calculator</li></a>
        <a href="#recipes"><li>Recipes</li></a>
        <a href="#gallery"><li>Gallery</li></a>
        <a href="#contact"><li>Contact</li></a>
        <a href="#testimonials"><li>Success Stories</li></a>
        <a href="#prices"><li>Prices</li></a>
        <a href="#faq"><li>Faq</li></a>
      </ul>
      </div>
      {/*nav menu*/}
      <button onClick={handleNav} className=" hidden max-lg:block z-30 mr-[20px] absolute right-0 top-[10px]">
        <FaBars className='text-[#1B5E20] ' size={30}/>
    </button>
    </nav>
    <div className='w-[40%] bg-[#004d2eb3] max-sm:hidden max-xl:hidden'>

    </div>
    </div> 
    </>
  )
}

export default Navbar