import React from 'react'

const Prices = () => {
  return (
  <>
  <div 
  id="prices"
  className="pt-5 bg-[#004d2eb3] mt-[300px] mb-[200px]" >
  <div
        data-aos="fade-up"
  className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div
         
    className ="mx-auto max-w-4xl text-center">   
    <h1 className="text-base font-semibold leading-7 text-white">Pricing</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Invest in Your Health Today: Affordable Plans for Every Lifestyle!</p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the product that works best</p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 bg-white text-[#1B5E20]">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 ">Basic Nutrition Plan</h2>
        </div>
        <p className="mt-4 text-sm leading-6 ">Essential Guidance for Healthy Eating</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight t">$49/month</span><span className="text-sm font-semibold leading-6 t"></span>
        </p>
        <a href="/order" aria-describedby="product1"
          className=" border-2 border-[#1B5E20]  mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Buy Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Personalized meal plan tailored to dietary needs</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>One dietary consultation per month</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Weekly recipe suggestions</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Basic meal preparation tips</li>
        </ul>
      </div>


      <div className=" bg-white text-[#1B5E20]  ring-2 ring-green-500 rounded-3xl p-8 xl:p-10">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" className="text-lg font-semibold leading-8">Advanced Nutrition Plan</h2>
        </div>
        <p className="mt-4 text-sm leading-6">Comprehensive Support for Optimal Health</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight"> $99/month</span><span className="text-sm font-semibold leading-6"></span>
        </p>
        <a href="/order" aria-describedby="product2"
          className=" border-2 border-[#1B5E20] shadow-sm mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Buy Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10">
        <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Custom meal plans with detailed nutritional breakdown</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Two dietary consultations per month</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Bi-weekly recipe collections</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Advanced meal preparation and cooking guidance</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Access to a private community forum for support and tips</li>
        </ul>
      </div>

   
     
      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 bg-white text-[#1B5E20]">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 ">Elite Nutrition Plan</h2>
        </div>
        <p className="mt-4 text-sm leading-6 ">ltimate Nutrition and Wellness Experience</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight t">$149/month</span><span className="text-sm font-semibold leading-6 t"></span>
        </p>
        <a href="/order" aria-describedby="product1"
          className=" border-2 border-[#1B5E20]  mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Buy Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fully customized meal plans with ongoing adjustments</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Weekly dietary consultations with a certified nutritionist</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Personalized sports nutrition guidance</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Exclusive recipes and meal preparation videos</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Priority support and direct access to experts</li>
            <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none ">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Quarterly wellness workshops and webinars</li>
        </ul>
      </div>

    </div>
  </div>
</div>
  </>
  )
}

export default Prices