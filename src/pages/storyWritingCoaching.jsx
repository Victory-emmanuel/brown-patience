/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const StoryWritingCoaching = () => {
  return (
    <>
      <div id="service">
        {/* HERO */}
        <section className=" hero">
          <div className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ">
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
        {/* Story Writing Coaching */}
        <section className="story-writing-coaching ">
          <div className=" py-24 grid sm:grid-cols-2 xx:grid-cols-1 xx:px-6  gap-4 sm:px-12 lg:px-24 bg-extraClr ">
            {/* small screen image */}
            <div className="bg grid xx:block sm:hidden">
              <div className="  place-content-center xx:grid sm:hidden ">
                <Link to={""}>
                  <button
                    style={{
                      boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                    }}
                    className="relative tracking-wide mb-12  xs:px-12 xx:px-6  py-4 text-secondary text-lg  font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                  >
                    STORY WRITING COACHING
                  </button>
                </Link>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img mx-auto  sm:w-[0] sm:h-[0] xx:w-full xx:h-[32rem] mb-12 rounded-lg"
              ></div>
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <div className=" grid place-content-center  xx:hidden sm:block mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ml-6 lg:px-12 sm:px-8 py-4 text-secondary lg:text-xl sm:text-lg font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      STORY WRITING COACHING
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    Stories. We love them. We read them. We pay attention to
                    them. And if you can tell a compelling story, you can move
                    us. You can move us to give attention to our families, to
                    protect the environment, to buy a product, to save our own
                    lives. I am a story writing coach who teaches you to tell
                    stories that move.
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    I coach a 4-week course called The Art of Writing Compelling
                    Stories.
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    What do we do in this writing class? Teach you how to
                    communicate effectively—with stories. As Bukola Adewuyi, a
                    gifted student of the course, wisely observed: “I learnt
                    that the basic tactic to present my message is with a STORY.
                    Stories just have a way of keeping people hooked. No wonder
                    I can spend a whole day reading a 428-page Christian fiction
                    book and yet start yawning the moment I pick up a research
                    article.”
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    If you want to tell us something, tell us through a story.
                    You'll get our attention. That's that this writing class,
                    The Art of Writing Compelling Stories, is about.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left sm:text-base md:text-center">
                    The writing class has been holding since 2021, and there are
                    more testimonials than I can possibly upload. You'll find a
                    small percentage below.
                  </p>
                </div>

                <div className="  grid place-content-start  mt-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[15rem] h-[4rem]">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* big screen image */}
            <div className="bg grid place-content-top">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img ml-auto lg:w-[32rem] lg:h-[40rem] sm:w-[24rem] sm:h-[32rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className="bg-primary dark:bg-secondary xx:px-6 ss:px-12">
            <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <div className="mt-4 md:mt-0 text-left">
                <h2 className="mb-12 text-center text-4xl tracking-tight font-extrabold text-accent dark:text-primary">
                  How do classes hold?
                </h2>
                <div className=" dark:text-primary">
                  <p className="mb-6 font-light text-secondary md:text-lg dark:text-primary">
                    Classes hold entirely online. On a WhatsApp Course Page.
                    Each class is followed by writing submissions (assignments).
                    These submissions can be made over WhatsApp or via email.
                  </p>
                  <h5 className="font-semibold mb-2">
                    Classes hold thrice a week:
                  </h5>
                  <ul className="list-disc mb-6">
                    <li>- Mondays. Wednesdays. Saturdays.</li>
                    <li>- 8 PM to 9 PM each day.</li>
                    <li>- For 4 weeks. </li>
                  </ul>
                  <p className="mb-6 font-light text-secondary md:text-lg  dark:text-primary">
                    They are arranged such that if a student is unable to attend
                    class by 8 PM, he or she can go to the Course Page at a
                    later time, read up, and attempt the submissions. Questions,
                    of course, will be attended to. And where a student needs
                    more clarity, it will be provided.
                  </p>
                  <p className="mb-6 font-light text-secondary md:text-lg  dark:text-primary">
                    After 4 weeks, students who have completed the course work
                    (their writing submissions) will be certified. And
                    mentorship follows from there. Mentorship means that
                    students can continue to relate with the Coach, ask
                    questions, seek her input, and count on her guidance in
                    their writing journey. Want to know when the next edition
                    begins?
                  </p>
                </div>

                <div className="  grid place-content-start  xx:my-6 ss:mt-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[15rem] h-[4rem]">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" grid">
                <img
                  className="lg:justify-self-end md:justify-self-center  lg:mr-12 md:mr-0"
                  src="https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg"
                  alt="brown patience"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StoryWritingCoaching;
