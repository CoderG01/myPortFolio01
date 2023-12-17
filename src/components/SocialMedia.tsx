import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/Bs";
import { MdEmail } from "react-icons/Md";

const socialMediaData = [
  {
    icon: BsGithub,
    color: "#161b22",
    link: "https://github.com/CoderG01",
  },
  {
    icon: BsInstagram,
    color: "red",
    link: "https://www.instagram.com/coderg5",
  },
  {
    icon: BsLinkedin,
    color: "#0077b5",
    link: "https://www.linkedin.com/in/harsh-goswami-6722b7224",
  },
  {
    icon: MdEmail,
    color: "#595959",
    link: "mailto:codernerd1@gmail.com",
  },
  {
    icon: BsYoutube,
    color: "red",
    link: "https://www.youtube.com/channel/UCLxO2aaQBsKtjc7K4JOQqZA",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-3 xs:gap-5">
      {socialMediaData.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[0.3] all p-3 rounded-full hover:bg-[#c5c5c596] border-[1px] hover:border-gray border-white hover:scale-[1.1]"
        >
          {React.createElement(social.icon, {
            className: "cursor-pointer text-3xl",
            style: { color: social.color },
          })}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
