import { useState } from "react";
import Email from "./email";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded  sm:dark:border-white sm:dark:border-solid sm:px-6 xx:py-8 shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full sm:gap-1 xx:gap-2 sm:p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className=" lg:text-left sm:text-center xx:text-left  dark:text-primary sm:font-bold xx:text-lg ss:text-xl">{title}</h6>
        <div className="flex ss:items-center xx:items-end dark:text-primary justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-secondary dark:text-primary transition-transform duration-200 ${
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
        <div className="p-4 bg-accent dark:bg-[#111]  pt-0">
          <p className="text-primary py-6">{children}</p>
        </div>
      )}
    </div>
  );
};

const SubsFaq = () => {
  return (
    <>
      <div id="faq">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 ss:pl-12 ss:pr-20  xx:px-6 gap-4 ss:px-4 py-16 mr-auto  md:px-12 lg:px-8 lg:py-20">
          <div className="">
            <div className="flex flex-col mb-16 lg:text-start sm:text-center">
              <div className=" lg:text-start sm:text-center ">
                <h2 className="text-accent 
                 mb-6 font-sans lg:mx-0 text-3xl dark:text-primary font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                  Frequently Asked Questions
                </h2>
                <p className="dark:text-primary">
                  <b>Guidiance for solopreneur</b>
                </p>
              </div>
            </div>
            <div className="space-y-4  ss:border-solid ss:border-primary  ">
              <Item title="Is there a limit to the number of write-ups I can send? ">
                You can send up to 20 write-ups in a month (blog posts,
                newsletters, articles, social media content,
                fictional/non-fictional stories). If you need to have me edit
                more than 20 write-ups, you will be charged a slight premium.
              </Item>
              <Item title="Can I get a refund of my monthly subscription? ">
                No you can't
              </Item>
              <Item title="What if I want you to ghostwrite for me? ">
                We'd need to discuss it outside this package.-
              </Item>
              <Item title=" Can a friend use this service based on my subscription? ">
                No. Once a month is gone, the subscription for that month
                expires, and the unused slots also expire.
              </Item>
              <Item title="This package is only for Christian writers? ">
                Yes. This very one is a faith-based package.
              </Item>
              <Item title=" Can you post my write-ups for me after editing them?  ">
                No. This Guidance package doesn't include social media, blog,
                website, or newsletter management. It focuses on ensuring your
                write-up is clean, sharp, and ready to run. You or someone else
                will handle the posting or uploads.
              </Item>
              <Item title=" Do I gain extra points for referring someone? ">
                Yes. You get 5 extra write-up slots (in a month) for every
                person you refer.
              </Item>
              <Item title=" Is there a discount on the monthly subscription?">
                Yes. You get a 20% discount if you take out an annual
                subscription at once. This is obtainable from July 1st, 2024,
                where instead of paying 15,000 naira a month for a year's
                subscription, you pay 12,000 naira a month instead.
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
export default SubsFaq;
