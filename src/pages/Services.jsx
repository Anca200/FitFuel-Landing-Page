import React from 'react';
import serv1 from "../assets/serv1.png"
import serv2 from "../assets/serv2.png"
import serv3 from "../assets/serv3.png"
import serv4 from "../assets/serv4.png"
import serv5 from "../assets/serv5.png"
import serv6 from "../assets/serv6.png"


const Services = () => {
  return (
<>
<div
id="services"
className='w-full h-auto bg-[#004d2eb3] mt-[150px] items-center max-lg:h-auto text-center'>
  <h2 
        data-aos="fade-up"
  className='text-center font-bold text-[3rem] mt-[10px] text-[white]'>Our Service</h2>
<div
      data-aos="fade-up"
className='grid grid-cols-3 text-center]  gap-y-[100px] mt-[50px] ml-[100px] max-lg:grid-cols-1 max-lg:ml-[20px]  pb-[10px]'>

<div className='w-[400px] h-[300px] bg-white flex flex-col rounded-[20px] shadow-xl text-[#1B5E20] max-lg:w-[95%] '>
 <h2 className='font-semibold text-[1.4rem] mt-[40px] mb-[30px] '>Personalized Nutrition Plans</h2>
 <p className='leading-7 w-[300px] m-auto '>Custom meal plans tailored to individual dietary needs, preferences, and health goals.
 </p>
 <img src={serv1}
 className='w-[70px] m-auto'
 />
</div>

<div className='w-[400px] h-[300px] bg-white  rounded-[20px] shadow-xl text-[#1B5E20] max-lg:w-[95%]'>
 <h2 className='font-semibold text-[1.4rem] mt-[40px] mb-[30px] '>Weight Management
 </h2>
 <p className='leading-7 w-[300px] m-auto'>Programs focused on helping clients lose, gain, or maintain weight through balanced nutrition.
 </p>
 <img src={serv2}
 className='w-[70px] m-auto mt-[40px]'
 />
</div>

<div className='w-[400px] h-[300px] bg-white rounded-[20px] shadow-xl text-[#1B5E20] max-lg:w-[95%]'>
 <h2 className='font-semibold text-[1.4rem] mt-[40px] mb-[30px] '>Sports Nutrition
 </h2>
 <p className='leading-7 w-[300px] m-auto'>Specialized guidance for athletes and active individuals to optimize performance and recovery.</p>
 <img src={serv3}
 className='w-[70px] m-auto mt-[45px]'
 />
</div>

<div className='w-[400px] h-[300px] bg-white rounded-[20px] shadow-xl text-[#1B5E20] max-lg:w-[95%]'>
 <h2 className='font-semibold text-[1.4rem] mt-[40px] mb-[30px] '>Dietary Consultations </h2>
 <p className='leading-7 w-[300px] m-auto'>One-on-one consultations with certified nutritionists or dietitians to address specific health concerns or dietary needs.</p>
 <img src={serv4}
 className='w-[55px] m-auto mt-[30px]'
 />
</div>

<div className='w-[400px] h-[300px] bg-white rounded-[20px] shadow-xl text-[#1B5E20] max-lg:w-[95%]'>
 <h2 className='font-semibold text-[1.4rem] mt-[40px] mb-[30px] '>Corporate Wellness Programs
 </h2>
 <p className='leading-7 w-[300px] m-auto'>Nutrition and wellness programs designed for companies to promote healthy lifestyles among employees.
 </p>
 <img src={serv5}
 className='w-[60px] m-auto mt-[30px]'
 />
</div>

<div className='w-[400px] h-[300px] bg-white rounded-[20px] shadow-xl text-[#1B5E20]  max-lg:w-[95%] max-lg:mb-[20px]'>
 <h2 className='font-semibold text-[1.4rem] mt-[40px]'> Meal Planning and Preparation Guidance
 </h2>
 <p className='leading-7 w-[300px] m-auto'>Advice on how to plan and prepare healthy meals, including recipes and cooking tips.</p>
 <img src={serv6}
 className='w-[60px] m-auto mt-[30px]'
 />
</div>
</div>
</div>
</>
  )
}

export default Services