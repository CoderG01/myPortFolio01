import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="mt-32">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          placeholder="enter your name"
          {...register("firstname")}
          className="border-[1px] border-solid border-black p-2"
        />
        <input
          type="number"
          placeholder="enter number"
          className="border-[1px] border-solid border-black p-2"
        />
        <input
          type="email"
          placeholder="enter email"
          className="border-[1px] border-solid border-black p-2"
        />
        <input
          type="submit"
          value="submit"
          className="border-[1px] border-black bg-gray-200"
        />
      </form>
    </div>
  );
};

export default ReactHookForm;
