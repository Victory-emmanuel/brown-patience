/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { ArrowRightAlt, DoneAll } from "@mui/icons-material";

const ContentWriting = () => {
  return (
    <>
      <div id="service">
        {/* HERO */}
        <section className=" hero">
          <div
            style={{
              background: `url("https://i.postimg.cc/K8XNPK0r/Untitled-design-21.jpg") no-repeat center center/cover;`,
            }}
            className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 "
          >
            <h1 className="sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6">
              OUR SERVICES
            </h1>
            <p className="sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ">
              Get your message to the people in need of it. Many gifted persons
              have a message for their world, books they've been planning to
              write, a community they long to impact, but they got stuck,
              couldn't find the time to continue, and began to wonder if they'd
              ever share that message. But with a ghostwriter to help write your
              book, your vision stays alive.
            </p>
            <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
              <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                CONTACT US
              </button>
            </Link>
          </div>
        </section>
        {/* Content Writing  */}
        <section className="content-writing">
          <div className="  grid sm:grid-cols-2 xx:grid-cols-1 gap-4 xx:px-6 ss:px-12 dark:py-12 bg-white dark:bg-[#111]">
            <div className="bg  grid ss:place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img lg:w-[32rem] lg:h-[40rem] sm:w-[24rem]  xx:h-[32rem] xx:w-full xx:mb-6 sm:mb-0  rounded-lg"
              ></div>
            </div>
            <div className="pb-20   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <div className=" grid place-content-center mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide xx:mx-auto mb-12 ml-6 xx:px-6 ss:px-12 py-4 text-secondary dar text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      CONTENT WRITING
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Contents shouldn't trouble you. Outsource the writing of the
                    newsletter, the blog, the website content 'including the
                    existing web content you'd like to edit'. Carry on with your
                    key tasks; the content writer will handle the words.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Whether in South Africa or down in London, clients know
                    their readers want to read interesting pieces. So I take the
                    important message you want to get out there and transform it
                    into an interesting piece — the one that keeps the reader
                    reading, the one that clearly communicates the message, the
                    one that gets your reader to where you intended.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[15rem] h-[4rem] ">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ss:px-12 xx:px-6 mt-12 py-16 mb-12 mx-auto ">
            <div className="mb-12 md:mx-auto text-center">
              <h2 className=" pb-6  ss:text-3xl xx:text-2xl font-bold leading-none tracking-tight text-secondary dark:text-primary md:mx-auto">
                How do I become your content writer?
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-4 sm:grid-cols-2">
              <div className="bg-secondary dark:bg-accent p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold text-white">Step 1</p>
                  <ArrowRightAlt sx={{ color: "#fff" }} />
                </div>
                <p className=" text-white">
                  You send me a message telling me what you want me to write for
                  you. What's the subject? Is it a newsletter? Is it a blog? A
                  landing page? Product description?
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 2</p>
                  <ArrowRightAlt sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  A few questions run in-between. If you have samples of the
                  kind of content you want me to create, I ask for them. We
                  settle on a price. This is mostly based on word count.
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 3</p>
                  <ArrowRightAlt sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  I send you the content. You approve the content or point out
                  the changes you need.
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Success</p>
                  <DoneAll sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  They get done, and we do it again and again.
                </p>
              </div>
            </div>
            <div className="  grid place-content-center  ss:mt-12 xx:mt-6">
              <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                <div className="btn-two-container ">
                  <button className="text-xl xx:text-lg font-extrabold btn-two mt-3 w-[15rem] h-[4rem]">
                    SEND US A MESSAGE
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentWriting;
