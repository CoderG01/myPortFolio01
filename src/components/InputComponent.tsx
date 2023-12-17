const InputComponent = ({
  type,
  placeHolder,
  handleChange,
  onsubmit,
}: InputComponentType) => {
  return (
    <form
      className="mt-10 w-full p-10"
      action="#"
      onSubmit={(e) => onsubmit(e)}
    >
      <div className="flex flex-col w-full">
        <input
          type={type}
          className="w-full px-3 h-[60px] text-center text-[16px] border-y-[1px] border-black placeholder-gray-800 placeholder-opacity-75 formInput font-consolata"
          placeholder={placeHolder}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center items-center mt-8 group rounded-full border-[1px] border-solid border-[#2d2302] w-[120px] h-[120px] mx-auto">
        <button
          type="submit"
          className="bg-black text-white w-[100px] h-[100px] rounded-full group-hover:w-[120px] group-hover:h-[120px] transition-[0.3]"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default InputComponent;
