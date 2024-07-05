import React from 'react';
import ramen from "../assets/ramen.png";
import polenta from "../assets/polenta.png";
import pizza from "../assets/pizza.png";

import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import recipes_img from  "../assets/vegetables.png";

const Recipes = () => {
  return (
   <>
   <div
   id="recipes"
   className='w-full h-auto mt-[200px] items-center text-[#004d2eb3]'>
    <h2 className='text-center text-[3rem] font-bold'>Recipes</h2>

    <div className='flex justify-center gap-[50px] mt-[100px] max-lg:flex-col max-lg:m-auto'>
        <div className='w-[300px] h-auto bg-white relative text-center rounded-[20px] p-[20px] shadow-lg max-lg:m-auto '>
         <h2 className='font-semibold text-[1.3rem] mt-[20px] mb-[20px]'>Healthy Veggie <br></br> Ramen</h2>
         <ul className='leading-8 w-[250px] m-auto'>
          <li>2 cups vegetable broth</li>
          <li>1 cup water</li>
          <li>1 package whole wheat ramen noodles</li>
          <li>1 cup sliced mushrooms</li>
          <li>1 cup baby spinach</li>
          <li>1/2 cup shredded carrots</li>
          <li>1/2 cup sliced bell pepper</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tbsp soy sauce</li>
          <li>1 tsp sesame oil</li>
          <li>1/2 tsp ginger, grated</li>
          <li>1 green onion, chopped</li>
         </ul>
         <div className='absolute w-[120px] h-[100px] rounded-[50px] right-[-40px] top-[-40px] items-center'>
         <img src={ramen}
         className='object-cover drop-shadow-lg '
         />
         </div>
        </div>

       

        <div className='w-[300px] h-auto bg-white relative text-center rounded-[20px] p-[20px] shadow-lg max-lg:m-auto'>
         <h2 className='font-semibold text-[1.3rem] mt-[20px] mb-[20px]'>
         Healthy Veggie Polenta <br></br></h2>
         <ul className='leading-8 w-[250px] m-auto'>
          <li>4 cups vegetable broth</li>
          <li> 1 cup cornmeal (polenta)</li>
          <li>1 tbsp olive oil</li>
          <li>1 cup sliced mushrooms</li>
          <li>1 cup baby spinach</li>
          <li>1/2 cup shredded carrots</li>
          <li>1/2 cup corn kernels </li>
          <li>1/2 cup sliced bell pepper</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tsp soy sauce</li>
          <li>1/2 tsp black pepper</li>
          <li>1 green onion, chopped</li>
         </ul>
         <div className='absolute w-[120px] h-[100px] rounded-[50px] right-[-40px] top-[-40px]'>
        <img src={polenta} 
        className='object-cover drop-shadow-lg'/>
         </div>
        </div>

        <div className='w-[300px] h-auto bg-white relative text-center rounded-[20px] p-[20px] shadow-lg max-lg:m-auto'>
         <h2 className='font-semibold text-[1.3rem] mt-[20px] mb-[20px]'>Healthy Veggie <br></br> Ramen</h2>
         <ul className='leading-8 w-[250px] m-auto'>
          <li>2 cups vegetable broth</li>
          <li>1 cup water</li>
          <li>1 package whole wheat ramen noodles</li>
          <li>1 cup sliced mushrooms</li>
          <li>1 cup baby spinach</li>
          <li>1/2 cup shredded carrots</li>
          <li>1/2 cup sliced bell pepper</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tbsp soy sauce (low sodium)</li>
          <li>1 tsp sesame oil</li>
          <li>1/2 tsp ginger, grated</li>
          <li>1 green onion, chopped</li>
         </ul>
         <div className='absolute w-[130px] h-[100px] rounded-[50px] right-[-40px] top-[-40px]'>
         <img src={pizza} 
        className='object-cover drop-shadow-lg'/>
         </div>
        </div>
    </div>


    <div className='w-full h-[500px] bg-[#004d2eb3] mt-[200px] flex gap-[20px] justify-between items-center relative background2 max-lg:h-auto max-lg:flex-col'>
 <div>
 <h2 className='text-[3.5rem] ml-[20px] mt-[50px] text-white drop-shadow-2xl max-lg:text-center '><span className='font-bold'>Fresh & Healthy </span></h2>

<div className='w-[400px] h-[400px] relative max-lg:w-[95%]'>
  <img src={recipes_img}
  className='rounded-[10px] drop-shadow-2xl absolute  top-[-50px]'
  />
</div>
 </div>

<div className='grid grid-cols-3 mr-[150px] gap-y-[100px] gap-x-[55px] text-[black] max-lg:grid-cols-1 max-lg:m-auto'>

 {/* item 1*/}
<div className='w-[150px] h-[150px] bg-yellow-200 rotate-[-6deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in '>
  <img src={dish1} 
  className='absolute w-[150px] top-[-50px] drop-shadow-lg'/>
  <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]  '>Spicy Mango Quinoa Salad</h2>
</div>

 {/* item 2*/}
<div className='w-[150px] h-[150px] bg-green-200 rotate-[4deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in '>
  <img src={dish2} 
  className='absolute w-[130px] limited top-[-50px] drop-shadow-lg'/>
    <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]'>Lemon Herb Grilled Chicken</h2>
</div>

 {/* item 3*/}
<div className='w-[150px] h-[150px] bg-blue-200 rotate-[-3deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in '>
  <img src={dish3} 
  className='absolute w-[110px] top-[-50px] limited drop-shadow-lg'/>
    <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]'>Mediterranean Chickpea Stew</h2>
</div>

 {/* item 4*/}
<div className='w-[150px] h-[150px] bg-purple-200 rotate-[10deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in '>
  <img src={dish4} 
  className='absolute w-[130px] top-[-50px] limited drop-shadow-lg'/>
    <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]'>Garlic Parmesan Zucchini Noodles</h2>
</div>

 {/* item 5*/}
<div className='w-[150px] h-[150px] bg-red-200 rotate-[-5deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in '>
  <img src={food2} 
  className='absolute w-[100px] top-[-50px] limited drop-shadow-lg'/>
    <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]'>Honey Glazed Salmon with Asparagus</h2>
</div>

 {/* item 6*/}
<div className='w-[150px] h-[150px] bg-amber-200 rotate-[8deg] drop-shadow-2xl rounded-[10px] relative hover:scale-[1.25] transition duration-150 ease-in max-lg:mb-[20px]'>
  <img src={food3} 
  className='absolute w-[120px] top-[-50px] limited drop-shadow-lg'/>
    <h2 className='text-center mt-[80px] font-recipes text-[1.3rem]'>Thai Coconut Curry Soup</h2>
</div>
</div>

</div>
   </div>
   </>
  )
}

export default Recipes