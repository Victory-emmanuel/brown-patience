import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import {  SocialsMain } from "../styles/index.styled";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <SocialsMain id="socials">
        <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
          <FaWhatsapp className="ss:text-base xx:text-sm text-primary" />
        </Link>
        <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
          <FaXTwitter  className="ss:text-base xx:text-sm text-primary"/>
        </Link>
        <Link to={"https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"}>
          <FaInstagram  className="ss:text-base xx:text-sm text-primary"/>
        </Link>
        <Link to={"https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"}>
          <FaFacebook  className="ss:text-base xx:text-sm text-primary "/>
        </Link>
      </SocialsMain>
    </>
  );
};

export default Socials;
