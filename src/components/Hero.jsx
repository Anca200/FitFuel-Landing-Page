import React from 'react';
import hero_img from "../assets/hero_img2.png";
import leaf3 from "../assets/leaf3.png"
import leaf2 from "../assets/leaf2.png"

const Hero = () => {
  return (
   <>
   <div className='flex justify-between h-[95vh] w-full relative max-lg:flex-col '>
    <div className=' w-[60%] bg-[white] max-sm:w-full max-sm:h-screen max-xl:w-full max-lg:h-screen text-[#1B5E20] border-b-[10px] border-[#004d2eb3]'>
    <div className='w-[500px]  mt-[150px] ml-[100px] max-lg:ml-0 max-lg:p-[20px] max-lg:w-full max-lg:text-center max-sm:mt-[100px] max-xl:w-full max-xl:mt-[100px] '>
      <h2 className='text-center text-[2rem] mb-[10px] font-semibold'>Discover Your Path to Wellness</h2>
      <h3 className='text-center text-[1.3rem] mb-[20px] text-[#2cd838] '>Personalized Nutrition Plans <br></br>Tailored Just for You</h3>
      <p className='leading-7 text-center'>
        Unlock the secrets to a healthier, happier you with our expert-guided nutrition plans. Whether you're looking to boost energy, manage weight, or improve overall wellness, our tailored approach ensures you get the right nutrients for your unique lifestyle. Start your journey today and transform your health one meal at a time.
        </p>
      <a href="#prices"><button className=' w-[180px] h-[40px] rounded-[20px] mt-[50px] ml-[200px] border-2 border-[#36c23f] max-lg:ml-0 text-[1.1rem] font-semibold'>Explore Plan</button></a>
    </div>
    </div>

    <div className='bg-[#004d2eb3] w-[40%] relative max-lg:m-auto max-sm:w-full  max-xl:w-full '>
        <img src={hero_img}
        className='absolute top-[20px] left-[-200px] object-cover drop-shadow-2xl floating max-lg:static max-lg:m-auto max-lg:w-[200px] max-xl:static max-xl:m-auto max-xl:w-[200px] '
        />
        <img src={leaf3} 
        className='absolute right-[150px] w-[100px] max-sm:hidden max-xl:hidden'
        />
        <img src={leaf2}
        className='absolute w-[80px] right-[150px] bottom-[120px] max-lg:hidden max-xl:hidden'
        />
    </div>


   </div>
   </>
  )
}

export default Hero