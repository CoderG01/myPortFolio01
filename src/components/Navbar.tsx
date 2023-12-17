import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaInfoCircle, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Importing FontAwesome icons from react-icons

const Navbar = () => {
  const navigate = useNavigate();
  // const [isLogoHovered, setIsLogoHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuList: MenuListTypes[] = [
    {
      id: 1,
      name: "about",
      path: "me",
      // icon: FaInfoCircle,
    },
    // {
    //   id: 2,
    //   name: "projects",
    //   path: "projects",
    //   icon: FaProjectDiagram,
    // },
    {
      id: 3,
      name: "contact",
      path: "contact",
      // icon: FaEnvelope,
    },
  ];

  return (
    <nav className="w-5/6 py-6 mx-auto font-consolata flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2">
      <div
        onClick={() => {
          navigate("/"), window.location.reload();
        }}
        className="cursor-pointer group"
      >
        <h1 className="flex items-center justify-center">
          <div className="w-[50px] h-[50px] bg-black rounded-full">
            <img
              src="./avatar.png"
              alt="avatar image"
              className="w-[85%] rounded-full group-hover:w-full transition-[0.5]"
            />
          </div>
          {/* <div>
            <span className="font-consolata text-6xl font-bold me-1">G</span>
            <span className="font-consolata text-3xl font-bold">H.</span>
          </div> */}
        </h1>
      </div>

      <ul className="flex items-center justify-center gap-10">
        {menuList?.map((item: MenuListTypes) => (
          <li
            className="text-2xl font-bold font-notoSans cursor-pointer flex justify-center items-center gap-2 menuItem group capitalize"
            key={item.id}
            onClick={() => navigate(`/${item.path}`)}
          >
            {/* <span className="text-lg group-hover:mb-2  transition-[4]">
              <item.icon />
            </span> */}
            {item.name}
          </li>
        ))}
      </ul>
      <div
        className={`flex md:hidden cursor-pointer items-center justify-center flex-col w-[35px] h-[35px] gap-[4px] transition-all duration-400 menuToggle ${
          isOpen ? "closeMenu" : ""
        }`}
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        <span className="menuToggleSpan"></span>
        <span className="menuToggleSpan"></span>
      </div>
    </nav>
  );
};

export default Navbar;
