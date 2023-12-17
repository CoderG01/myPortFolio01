import { useEffect, useState } from "react";
// import SocialMedia from "./SocialMedia";

const HeroSection = () => {
  const [currentGreet, setCurrentGreet] = useState<number>(0);

  const greet: string[] = ["hello", "howdy", "hola", "salute", "ciao"];

  useEffect(() => {
    const timer: number = setTimeout(() => {
      if (currentGreet < 6) {
        setCurrentGreet((prev: number) => (prev + 1) % greet.length);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [currentGreet, greet.length]);

  return (
    <div className="flex justify-center items-center flex-col w-[88%] xs:w-4/5 md:w-4/5 lg:w-3/5 mx-auto">
      <div className="relative inline-flex">
        <svg
          className="flex-shrink-0 h-5 w-5 fill-black absolute top-0 -right-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"></path>
        </svg>
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-consolata font-bold inline-block text-center">
          {greet[currentGreet]}
        </h1>
      </div>
      <h2 className="leading-[3rem] md:leading-[4rem] lg:leading-[5rem]	text-3xl md:text-4xl lg:text-6xl font-notoSans font-bold my-2">
        I'm Harsh
      </h2>
      <p className="text-[11px] md:text-[14px] lg:text-2xl tracking-[1px] leading-tight text-gray-600 font-notoSans capitalize text-center w-[100%] md:w-[80%] lg:w-[600px] py-3 ">
        A creative Font end developer, with a specialization in Frontend
        Development. Making pretty, useful things for people to use.
      </p>
      {/* <div className="mt-3 block">
          <SocialMedia />
        </div>
        <button className="mt-6 w-[120px] h-[36px] border-[1px] border-black bg-[#f1f1f1] hover:shadow-[4px_4px_0px_black] shadow-[0px_0px_0px_black] rounded-md transition-[4]">
          Se My Projects
        </button> */}
    </div>
  );
};

export default HeroSection;
