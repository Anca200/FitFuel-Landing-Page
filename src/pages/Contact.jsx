import React from 'react';
import dish from "../assets/dish2.png";
import salad from "../assets/salad.jpg";
import avocado from "../assets/avocado.png";
import orange from "../assets/orange.png";
import kiwi from "../assets/kiwi.png";
import lettuce from "../assets/lettuce.png";

const Contact = () => {
  return (
 <>
 <div 
 id="contact"
 className='w-full h-[200px] bg-bg-contact mt-[200px] bg-no-repeat bg-cover bg-fixed relative max-lg:h-auto  '>

<div className='flex  relative max-lg:text-center'>
<div>
<h2 className='text-white text-[4rem] font-semibold mt-[30px]'>Summer Menu</h2>
<p className='text-white text-[2rem] ml-[20px]'>Give Us a Call: <br></br> 123-456-789</p>
</div>

    <div className='w-[350px] top-[-50px] absolute limited  max-lg:top-[-100px] max-lg:w-[200px]'>
    <img src={dish} className='object-cover drop-shadow-lg'/>
    </div>
</div>
<img src={avocado}
className='absolute top-[400px] left-[50px] rotate-[60deg] max-lg:hidden'
/>
<img src={orange}
className='absolute top-[500px] w-[70px] left-[300px] max-lg:hidden'
/>
<img src={kiwi}
className='absolute right-[50px] top-[400px] max-lg:hidden'
/>
<img src={lettuce}
 className='absolute right-[200px] top-[330px] w-[120px] rotate-[-30deg] max-lg:hidden'
 />
 </div>

 <img src={salad}
 className='mt-[100px] w-[700px] object-cover m-auto max-lg:w-[95%]'
 />

 </>
  )
}

export default Contact