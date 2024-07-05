import React from "react";
import { InfiniteMovingCards } from "../ui/animatedTestimonials";
import Person1 from "../../assets/Person1.jpg";
import Person2 from "../../assets/Person2.jpg";
import Person3 from "../../assets/Person3.jpg";
import Person4 from "../../assets/Person4.jpg";
import Person5 from "../../assets/Person5.jpg";
import { FaStar } from "react-icons/fa";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div
        data-aos="fade-up"
    id="testimonials"
    className="h-auto rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-[100px] ">
      <h2 className="font-bold text-[3rem] mb-[100px] text-[#004d2eb3]">Success stories</h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    img: Person1,
    quote:
"The personalized nutrition plan I received completely transformed my eating habits. Not only did it cater to my dietary restrictions, but it also helped me achieve my health goals seamlessly. The meals are delicious, and I never feel deprived. Highly recommend!",
    name: "James Turner",
    rating: <FaStar />
  },
  {
    img: Person2,
    quote:
   "I've struggled with weight management for years, but the tailored program provided by this service has been a game-changer. The balanced nutrition advice and support have helped me lose weight in a healthy way. The results are sustainable, and I feel better than ever!",
   name: "David K.",
   rating: <FaStar />
  },
  {
    img: Person3,
    quote: "As a competitive athlete, I needed a nutrition plan that could keep up with my intense training schedule. The sports nutrition guidance I received was top-notch, helping me optimize my performance and recovery. I've never felt stronger or more energized.",
    name: "Sarah J.",
    rating: <FaStar />
  },
  {
    img: Person4,
    quote:
     "The one-on-one consultations with a certified nutritionist have been invaluable. They took the time to understand my specific health concerns and provided practical, effective dietary solutions. I feel confident in my food choices and have seen significant improvements in my overall well-being.",
    name: "Olivia Brown",
    rating: <FaStar />
  },
  {
    img: Person5,
    quote:
    "Our employees have greatly benefited from the corporate wellness program offered by this service. The nutrition workshops and personalized plans have promoted healthier lifestyles across the company. We've noticed a boost in employee morale and productivity. It's been a fantastic investment in our team's health",
    name: "Ethan Wilson",
    rating: <FaStar />
  },
];

export default InfiniteMovingCardsDemo;