import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <>
      <div className="pb-24 " id="nav">
        <header className="relative">
          <nav className="fixed z-40 w-full top-0  px-12 py-4 bg-primary dark:bg-secondary md:absolute ">
            <div className=" m-auto md:px-12 lg:px-7">
              <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <input
                  type="checkbox"
                  name=""
                  id="toggleNav"
                  className="peer hidden"
                />
                <label
                  htmlFor="toggleNav"
                  className="fixed left-0 top-0 transition-all md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 peer-checked:opacity-75 peer-checked:block w-full h-screen bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80"
                ></label>
                <div className="relative z-40">
                  <NavLink to={""} aria-label="logo">
                    <img src={logo} className="w-[12rem]" alt="" />
                  </NavLink>
                </div>

                <div
                  id="navlinks"
                  className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-primary dark:bg-secondary md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max"
                >
                  <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
                    <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                      <li className="max-w-max">
                        <NavLink to={"/"} className="block md:px-3">
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-white before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition group-hover:text-accent dark:group-hover:text-secondary">
                              Home
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink
                          to={"/services"}
                          className="block md:px-3 group"
                        >
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-white before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition  group-hover:text-accent dark:group-hover:text-secondary">
                              Services
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink to={"/about"} className="block md:px-3 group">
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-white before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition group-hover:text-accent dark:group-hover:text-white">
                              About
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink to={"/blog"} className="block md:px-3 group">
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-white before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition  group-hover:text-accent dark:group-hover:text-secondary">
                              Blog
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink to={"/book"} className="block md:px-3 group">
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-white before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition  group-hover:text-accent dark:group-hover:text-white">
                              Books
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink to={"/subs"} className="block md:px-3 group">
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-secondary before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition group-hover:text-accent dark:group-hover:text-white">
                              Subscription
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="max-w-max">
                        <NavLink
                          to={"/community"}
                          className="block md:px-3 group"
                        >
                          <div className="relative text-secondary dark:text-primary before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-accent dark:before:bg-secondary before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="transition group-hover:text-accent dark:group-hover:text-white">
                              Community
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                    <div className="icons flex ss:hidden  pt-4 w-full">
                      <Box
                        sx={{
                          display: { md: "flex", lg: "flex" },
                          gap: "1rem",
                          textAlign: "center",
                        }}
                      >
                        <NavLink to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                          <WhatsApp sx={{ color: "#343434" }} />
                        </NavLink>
                        <NavLink
                          to={
                            "https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                          }
                        >
                          <Instagram sx={{ color: "#343434" }} />
                        </NavLink>
                        <NavLink
                          to={
                            "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                          }
                        >
                          <Facebook sx={{ color: "#343434" }} />
                        </NavLink>
                        <NavLink
                          to={"https://twitter.com/ContentsbyBrown?s=09"}
                        >
                          <X sx={{ color: "#343434" }} />
                        </NavLink>
                        <NavLink
                          to={
                            "https://www.linkedin.com/in/patience-brown-3430ba17a"
                          }
                        >
                          <LinkedIn sx={{ color: "#343434" }} />
                        </NavLink>
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="block-endnav icons w-max flex items-center gap-4">
                  <Box
                    sx={{
                      display: { md: "none", xl: "flex" },
                      gap: "1rem",
                    }}
                  >
                    <NavLink to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                      <WhatsApp sx={{ color: "#343434" }} />
                    </NavLink>
                    <NavLink
                      to={
                        "https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                      }
                    >
                      <Instagram sx={{ color: "#343434" }} />
                    </NavLink>
                    <NavLink
                      to={
                        "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                      }
                    >
                      <Facebook sx={{ color: "#343434" }} />
                    </NavLink>
                    <NavLink to={"https://twitter.com/ContentsbyBrown?s=09"}>
                      <X sx={{ color: "#343434" }} />
                    </NavLink>
                    <NavLink
                      to={
                        "https://www.linkedin.com/in/patience-brown-3430ba17a"
                      }
                    >
                      <LinkedIn sx={{ color: "#343434" }} />
                    </NavLink>
                  </Box>
                  <div className="flex items-center md:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggleNav"
                      aria-label="humburger"
                      id="hamburger"
                      className="relative p-6 -mr-6 peer"
                    >
                      <div
                        id="line"
                        className="m-auto h-0.5 w-6 rounded bg-secondary dark:bg-white transition duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                      ></div>
                      <div
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-secondary dark:bg-white transition duration-300 origin-left translate-y-[0.45rem] peer-checked:hidden"
                      ></div>
                      <div
                        id="line3"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-secondary dark:bg-white transition duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Nav;
