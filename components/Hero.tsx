/** @format */
"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const discover = document.getElementById("discover");
    const options = discover?.getBoundingClientRect();
    if (!options?.top || !options?.left) return;
    scrollTo({
      top: options?.top + window.scrollY,
      left: options?.left,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Найди, забронируй или арендуй машину - легко и быстро
        </h1>
        <p className="hero__subtitle">
          Прокачай свой опыт проката машины с нашей системой бронирования
        </p>
        <CustomButton
          title="Посмотреть машины"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};
export default Hero;
