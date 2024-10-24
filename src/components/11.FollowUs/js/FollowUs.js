import React from "react";
import SliderForFU from "./SliderForFU";
import { useInView } from "react-intersection-observer";

export default function FollowUs() {
  const imgs = [
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-04.png",
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-01.png",
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-02.png",
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-05.jpg",
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-07.png",
    "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-instagram-img-03.png",
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className=" w-full pt-16  pb-5 relative overflow-hidden">
      <div className=" w-full px-5">
        <div
          ref={firstRef}
          className={`animated-component  ${
            firstInView ? "is-visible" : ""
          } px-5 sm:px-0 `}
        >
          <p className=" text-sm  text-center  text-gray-400 md:text-[#5a5a5a] w-full font-medium tracking-widest">
            Follow Us @birch.home
          </p>
          <p className="  w-full text-center   text-[#000000]  my-4 font-semibold text-4xl">
            Instagram Views
          </p>
          <p className=" border-b-[3px] mx-auto border-black w-20 my-5"></p>
        </div>
        <div
          ref={secondRef}
          className={`animated-component  ${
            secondInView ? "is-visible" : ""
          } w-full `}
        >
          <SliderForFU data={imgs} />
        </div>
      </div>
    </div>
  );
}
