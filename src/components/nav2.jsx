import { Google, Instagram, Language, WhatsApp } from "@mui/icons-material";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoIcon.png";
import {
  Logo,
  Logo2,
  NavWrapper,
  NavWrapperLink,
  NavWrapperLinkIcon,
  StyledMenuIcon,
  StyledNavBtn,
  StyledNavText,
} from "../styles/index.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const link = [
    { page: "Home", href: "/" },
    { page: "Services", href: "/services" },
    { page: "About", href: "/about" },
    { page: "Blogs", href: "/blog" },
    { page: "Books", href: "/book" },
    { page: "Subcription", href: "/subs" },
    { page: "Community", href: "/community" },
  ];
  return (
    <>
      <NavWrapper id="nav" className="px-12 py-2 drop-shadow-md">
        <div>
          <Logo className="w-[11rem]" src={logo} />
          <Logo2 className="" src={logo2} alt="" />
        </div>
        <StyledMenuIcon
          // sx={{ fontSize: { md: "2.5rem" } }}
          onClick={() => setActive(!active)}
        />

        <NavWrapperLink active={active}>
          {link.map((link) => (
            <StyledNavText
              // activeclassname="active"
              key={link.page}
              to={link.href}
              className={"text-base font-semibold"}
            >
              {link.page}
            </StyledNavText>
          ))}
        </NavWrapperLink>
        <NavWrapperLinkIcon active={active}>
          <Link>
            <StyledNavBtn className="w-[11rem] py-5 px-7 mx-auto md:my-6 sm:w-[13rem] sm:h-[4.5rem]  bg-extraClr h-[2.5rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              CONTACT US
            </StyledNavBtn>
          </Link>
        </NavWrapperLinkIcon>
      </NavWrapper>
    </>
  );
};

export default NavBar;
