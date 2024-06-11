import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoIcon.png";
import {
  Logo,
  Logo2,
  NavWrapper,
  NavWrapperLink,
  NavWrapperLinkIcon,
  StyledNavBtn,
  StyledNavText,
  DropdownMenu,
  DropdownItem,
} from "../styles/index.styled";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subsOpen, setSubsOpen] = useState(false);
  const servicesRef = useRef(null);
  const subsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (subsRef.current && !subsRef.current.contains(event.target)) {
        setSubsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const link = [
    { page: "Home", href: "/" },
    {
      page: "Services",
      href: "#",
      dropdown: [
        { page: "Editing", href: "/editing" },
        { page: "Content Writing", href: "/contentWriting" },
        { page: "Story Writing Coaching", href: "/storyWritingCoaching" },
      ],
    },
    { page: "About", href: "/about" },
    { page: "Blogs", href: "/blog" },
    { page: "Books", href: "/book" },
    {
      page: "Subscription",
      href: "#",
      dropdown: [
        { page: "Guidance For Solopreneur", href: "/guidianceForSolopreneur" },
        { page: "Coaching For Authors", href: "/coachingForAuthors" },
      ],
    },
    { page: "Community", href: "/community" },
  ];

  return (
    <>
      <NavWrapper id="nav" className="px-12 py-2 drop-shadow-md">
        <div>
          <Logo className="w-[11rem]" src={logo} />
          <Logo2 className="" src={logo2} alt="" />
        </div>
        {active ? (
          <IoCloseOutline
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        ) : (
          <CiMenuFries
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        )}

        <NavWrapperLink active={active}>
          {link.map((link) => (
            <div key={link.page} className="relative">
              <StyledNavText
                to={link.href}
                className={"text-base font-semibold"}
                onClick={(e) => {
                  if (link.page === "Services" || link.page === "Subscription") {
                    e.preventDefault();
                    if (link.page === "Services") setServicesOpen(!servicesOpen);
                    if (link.page === "Subscription") setSubsOpen(!subsOpen);
                  }
                }}
              >
                {link.page}
              </StyledNavText>
              {link.dropdown && (
                <DropdownMenu
                  className="absolute top-full left-0"
                  open={
                    (link.page === "Services" && servicesOpen) ||
                    (link.page === "Subscription" && subsOpen)
                  }
                  ref={link.page === "Services" ? servicesRef : subsRef}
                >
                  {link.dropdown.map((dropdownLink) => (
                    <DropdownItem
                      key={dropdownLink.page}
                      to={dropdownLink.href}
                      className="block px-4 py-2 text-sm"
                    >
                      {dropdownLink.page}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </div>
          ))}
        </NavWrapperLink>
        <NavWrapperLinkIcon active={active}>
          <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
            <StyledNavBtn className="w-[11rem] py-5 px-7 mx-auto md:my-6 xx:my-3 sm:w-[13rem] sm:h-[4.5rem] bg-extraClr h-[2.5rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              CONTACT US
            </StyledNavBtn>
          </Link>
        </NavWrapperLinkIcon>
      </NavWrapper>
    </>
  );
};

export default NavBar;
