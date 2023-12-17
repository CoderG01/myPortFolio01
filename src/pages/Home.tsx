import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen flex gap-24 items-center justify-between">
          <HeroSection />
          <div className="absolute -bottom-[12rem] left-1/2 -translate-x-1/2 -translate-y-0 flex flex-col justify-center items-center gap-6">
            <p className="text-[#999999] text-xl font-consolata mt-4">
              You do!? Scroll down...
            </p>
            <div className="w-[1px] h-[200px] bg-black "></div>
          </div>
        </div>

        <div className="h-screen w-full border-t-[1px] border-solid border-black grid place-content-center">
          <div className="border-2 border-solid border-black p-6">
            section 2
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
