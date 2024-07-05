import React from 'react';


const Faq = () => {
  return (
    <section
        data-aos="fade-right"
    id="faq"
    className="  text-[#004d2eb3]  py-32 min-h-screen  relative">

    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">Frequently Asked Questions</h2>
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 relative z-10">

        <details>
          <summary className="py-2 outline-none cursor-pointer text-[1.3rem] ">What is included in a personalized nutrition plan?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>A personalized nutrition plan includes a custom meal plan tailored to your specific dietary needs, preferences, and health goals. It also features weekly recipe suggestions and basic meal preparation tips to help you stay on track with your nutrition goals.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer text-[1.3rem] ">How do the dietary consultations work?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'> Dietary consultations are one-on-one sessions with a certified nutritionist or dietitian. During these consultations, we discuss your health concerns, dietary needs, and goals. Based on this information, we provide practical and effective dietary solutions and ongoing support</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[1.3rem]">Can I change my plan if my needs change?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Yes, our plans are flexible. You can upgrade or downgrade your plan at any time to better suit your changing needs. Just contact our support team to make the adjustments.</p>
          </div>
        </details>


        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[1.3rem]">Are the meal plans suitable for people with food allergies or intolerances?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Absolutely! Our meal plans are personalized to accommodate any food allergies or intolerances you may have. During the initial consultation, you'll have the opportunity to inform us of any specific dietary restrictions.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer text-[1.3rem] "> What kind of support is available if I have questions or need help?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'> We offer multiple support options including email support, access to a private community forum, and priority support for Elite Plan members. Additionally, you can schedule follow-up consultations with your nutritionist as needed.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[1.3rem]">Do you offer plans for specific health conditions, such as diabetes or heart disease?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Yes, we offer specialized plans tailored to specific health conditions. Our certified nutritionists and dietitians are experienced in creating meal plans that address various health concerns, ensuring you receive the best possible dietary guidance for your condition.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer text-[1.3rem] "> How do the corporate wellness programs work?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Our corporate wellness programs are designed to promote healthy lifestyles among employees. They include nutrition workshops, personalized meal plans for staff, and ongoing support. We work closely with your company to customize the program to meet your team's needs and health goals, leading to improved employee morale and productivity.</p>
          </div>
        </details>
        
      </div>
    </div>
  </section>
  
  )
}

export default Faq