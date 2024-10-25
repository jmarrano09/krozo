import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaGithub />, link: "https://github.com/Jess-M-Design" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jess_m_design/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jess-marie/" },
  { Social: <FaBehance />, link: "https://www.behance.net/jess_m_design" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
       
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
         
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          {/* <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            all right reserved
          </p> */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
