import ContactForm from "../components/ContactForm";
import ReactHookForm from "../components/ReactHookForm";

const Contact = () => {
  return (
    // <div className="w-full min-h-screen flex justify-start items-center flex-col pt-[12rem]">
    <div className="w-full min-h-screen flex justify-start items-center flex-col pt-[4rem]">
      {/* <ContactHeader /> */}
      <ContactForm />
      {/* <ReactHookForm /> */}
    </div>
  );
};

export default Contact;
