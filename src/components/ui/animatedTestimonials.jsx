import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { FaStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]")}>
        {items.map((item, idx) => (
          <li
            className=" max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] bg-[#004d2eb3] shadow-xl max-sm:w-[400px]  "
            key={idx} >
            <div>
               <img src={ item.img} 
               className="w-[110px] h-[110px] rounded-[50%] m-auto object-cover mb-[20px] shadow-xl"/>
            </div>
            <blockquote>
            <div className="relative z-20 mt-6 flex flex-row items-center mb-[20px]">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-semibold text-white text-[1.5rem]">
                    {item.name}
                    <div className="flex gap-[10px] mt-[5px] ">
                    <FaStar  size={20} className="text-yellow-500"/>
                    <FaStar  size={20}  className="text-yellow-500"/>
                    <FaStar  size={20}  className="text-yellow-500"/>
                    <FaStar  size={20}  className="text-yellow-500"/>
                    <FaStar  size={20}  className="text-yellow-500"/>
                    </div>
                    
                  </span>
                </span>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>
              <span className="relative z-20 text-[1.1rem] leading-[1.6] text-[white] font-normal ">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};