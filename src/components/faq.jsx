import { useState } from "react";
import Email from "./email";
import { Link } from "react-router-dom";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded px-6 shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className=" lg:text-left md:text-center  font-bold lg:font-xl">
          {title}
        </h6>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-secondary transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-secondary py-6">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <div id="faq">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pl-12 pr-20  gap-4 px-4 py-16 mr-auto  md:px-12 lg:px-8 lg:py-20">
          <div className=" ">
            <div className="flex flex-col mb-16 md:mb-12 lg:text-start sm:text-center">
              <div className=" lg:text-start md:text-center ">
                <h2
                  className=" text-accent 
                 mb-6 font-sans lg:mx-0 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto"
                >
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="space-y-4 ">
              <Item title="For your subscription packages where a client makes a submission of their content or a chapter of their book and expects your feedback, what's your response time? ">
                My clients and I discuss how soon responses should be expected
                from me, and how soon I can expect responses from them. Then we
                stick to the agreed schedule.
              </Item>
              <Item title="Do you market your client's books, blogs, or other projects? ">
                No.
              </Item>
              <Item title="Do you expect your book editing, ghostwriting, or transcription clients to include your name in the acknowledgment section of their books? ">
                No. It's totally up to them.
              </Item>
              <Item title="What's your payment structure?">
                80% upfront, 20% before you get the last instalment of your
                work. With the exception of the subscription packages where 100%
                of the monthly subscription must be made at the beginning of a
                new month.
              </Item>
              <Item title="When is the next writing class (The Art of Writing Compelling Stories)?">
                Send a message here
                <Link
                  style={{
                    color: "#ef0909",
                    fontWeight: 500,
                    marginLeft: " 5px",
                    marginRight: " 5px",
                  }}
                  to={"https://wa.me/2348140170221"}
                >
                  https://wa.me/2348140170221
                </Link>
                and you'll get a date.
              </Item>
            </div>
          </div>
          <div className="">
            <Email />
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
