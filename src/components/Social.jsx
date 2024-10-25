import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaGithub />, link: "https://github.com/Jess-M-Design" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jess_m_design/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jess-marie/" },
  { Social: <FaBehance />, link: "https://www.behance.net/jess_m_design" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
