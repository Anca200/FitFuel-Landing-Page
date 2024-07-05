import React,{ useEffect, useState } from 'react';
import food1 from "../assets/food1.png"
import food2 from "../assets/food2.png"
import food3 from "../assets/food3.png"



const Limited = () => {
    const [time, setTime] = useState(2 * 60 * 60 + 30 * 60 + 60); 
   

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;
  return (
   <>
   <div className='w-full h-[70vh] max-lg:mt-[180px] max-lg:h-screen '>
   <div
   className='w-full h-[300px] bg-bg-limited relative  bg-no-repeat  bg-cover  background drop-shadow-lg  '>
    <h2 className='text-center text-[3rem] text-white font-bold '>Deal Of The Week</h2>

<div className='w-[800px] h-[300px]  limited top-[150px] rounded-[20px] max-lg:w-[95%] border-t-[10px] border-[#1b5e35] shadow-lg bg-white max-lg:h-auto max-lg:mt-[100px] '>
<p className='text-white absolute limited z-10 mt-[-40px] text-[2.5rem] '>
{`${hours}`.padStart(2, '0')}:
      {`${minutes}`.padStart(2, '0')}:
      {`${seconds}`.padStart(2, '0')}
      </p>

      <div className='w-full  flex gap-[80px] items-center text-center m-[80px] max-lg:flex-col max-lg:m-0 max-lg:mt-[30px]'>
      <img src={food1} className='ml-[30px] drop-shadow-2xl floating ' />
      <img src={food2} className=' drop-shadow-2xl floating'/>
      <img src={food3} className=' drop-shadow-2xl floating'/>
      </div>
</div>
{/*Counter*/}

<div className='w-[400px] h-[75px] bg-[#1b5e35] limited top-[110px] rounded-[30px] max-lg:w-[75%] border-[3px] border-green-900 max-lg:mt-[100px] '>

</div>
    </div>
   </div>
   </>
  )
}

export default Limited