import { useState } from "react";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);
  const stepsArray = [1, 2, 3, 4];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    currentStep === stepsArray.length
      ? setComplete(true)
      : setCurrentStep(currentStep + 1);
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  console.log({ currentStep, complete });
  return (
    <div className="w-[90%] sm:w-[80%] h-[200px] mt-10">
      <h1 className="font-serif text-[25px] sm:text-[30px] md:text-[80px] text-center pt-20">
        {/* Build Your dream <br /> project with me */}
        SAY HELLO 👋
      </h1>
      {/* <form
        className="mt-10 w-full p-10"
        action="#"
        onSubmit={(e) => handleSubmit(e)}
      > */}
      {currentStep === 1 ? (
        <InputComponent
          type="text"
          placeHolder="Your Name"
          onsubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : currentStep === 2 ? (
        <InputComponent
          type="email"
          placeHolder="Your Email"
          onsubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : currentStep === 3 ? (
        <InputComponent
          type="phone"
          onsubmit={handleSubmit}
          placeHolder="enter your phone"
          handleChange={handleChange}
        />
      ) : currentStep === 4 ? (
        "your messege has been submitted."
      ) : (
        ""
      )}
      <div className="w-full flex gap-3 m-6 ms-0 justify-end">
        {stepsArray?.map((item: number, index: number) => {
          return index + 1 !== 4 ? (
            <div
              className={`w-[40px] h-[2px] ${
                index + 1 < currentStep ? "bg-[green]" : "bg-black"
              }`}
              key={item}
            ></div>
          ) : (
            ""
          );
        })}
      </div>
      {/* <div className="flex justify-center items-center mt-8 group rounded-full border-[1px] border-solid border-[#2d2302] w-[120px] h-[120px] mx-auto"> */}
      {/* {currentStep === 4 ? (
          <button
            type="submit"
            onClick={() => {
              setComplete(false);
              setCurrentStep(0);
            }}
            className="bg-black text-white w-[100px] h-[100px] rounded-full group-hover:w-[120px] group-hover:h-[120px] transition-[0.3]"
          >
            Fill Again
          </button>
        ) : (
          <button
            type="submit"
            className="bg-black text-white w-[100px] h-[100px] rounded-full group-hover:w-[120px] group-hover:h-[120px] transition-[0.3]"
          >
            Next Step
          </button>
        )} */}
      {/* </div> */}
      {/* </form> */}
    </div>
  );
};

export default ContactForm;
