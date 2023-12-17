import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ContactHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="ContactUsHeader w-[90%] bg-red-400 pt-[50px] md:pt-[80px] lg:pt-[90px] pb-[50px] md:pb-[70px] lg:pb-[80px] flex items-center justify-center flex-col rounded-xl bg-[41%] sm:bg-[50%]">
      <p
        className="font-consolata text-[12px] capitalize flex gap-4 items-center cursor-pointer font-bold"
        onClick={() => navigate("/")}
      >
        <HiArrowLongLeft />
        back to home
      </p>
      <h1 className="font-consolata text-[25px] sm:text-[30px] md:text-[34px] capitalize mt-4 font-bold">
        contact me
      </h1>
    </div>
  );
};

export default ContactHeader;
