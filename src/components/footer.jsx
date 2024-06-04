import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <footer className="w-full bg-extraClr dark:bg-gray-900 xx:py-12 py-24 xx:px-0 px-12 ">
          <div className="md:px-12 xx:px-6 lg:px-28">
            <div className=" m-auto space-y-6 text-gray-600 dark:text-gray-300">
              <div className="relative z-1 mb-12">
                <Link to={"/"} aria-label="logo">
                  <h3 className="text-accent text-center xx:font-xl font-2xl ">
                    The Brown Patience Company
                  </h3>
                </Link>
                <p className="text-md xx:text-base text-center pt-6 text-secondary">
                  Get your message to the people in need of it. Many gifted
                  persons have a message for their world, books they've been
                  planning to write, a community they long to impact, but they
                  got stuck, couldn't find the time to continue, and began to
                  wonder if they'd ever share that message. But with a
                  ghostwriter to help write your book, your vision stays alive.
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8">
                <li>
                  <Link
                    to={"/"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/boo"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/subs"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/community"}
                    className="hover:text-accent font-bold font-xl"
                  >
                    Community
                  </Link>
                </li>
              </ul>

              <Box className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                <Link to="tel:+243996660436" aria-label="call">
                  <Phone />
                </Link>
                <Link to="mailto:hello@mail.com" aria-label="send mail">
                  <WhatsApp />
                </Link>
                <Link
                  to={"#"}
                  title="facebook"
                  target="blank"
                  aria-label="facebook"
                >
                  <Facebook />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/victory-emmanuel-54a090234/"
                  title="linkedin"
                  aria-label="linkedin"
                >
                  <LinkedIn />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/victory-emmanuel-54a090234/"
                  title="linkedin"
                  aria-label="linkedin"
                >
                  <Instagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/victory-emmanuel-54a090234/"
                  title="linkedin"
                  aria-label="linkedin"
                >
                  <Twitter />
                </Link>
              </Box>

              <div className="text-center">
                <span className=" text-sm tracking-wide">
                  Copyright © emmanuel <span id="year"></span> | All right
                  reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
