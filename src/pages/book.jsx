import { Link } from "react-router-dom";
import MyBook from "../components/mybook";

const Book = () => {
  return (
    <>
      <div id="book">
         {/* HERO */}
         <section className="hero">
          <div className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ">
            <h1 className="sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6">
              OUR BOOKS
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
        {/* Best Sellers */}
        <MyBook />
        {/* Book body */}
        <section id="book-body" className="">
          <div className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Fantasy</strong>
                </h2>
                <div className="bg xx:grid place-content-center sm:hidden">
                  <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img1  ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                  ></div>
               </div>
                <div className="">
                  <p className="mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center">
                    Fantasy is about the sexual mental struggles we face. Those
                    steamy thoughts that feel like you're engaging in a porn
                    video production. Fantasy is for the young woman who'd like
                    her thoughts to honor God, who'd like to bring her thoughts
                    under the Holy Spirit's control.
                  </p>
                  <p className="mb-12 xx:text-base font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    It won't just be that you're not having premarital sex, but
                    were we to play the content of your mind on a screen, you'd
                    have no cause to be ashamed. That is the “why” of this book.
                    Written by a girl to another girl.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/FANTASY"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg sm:grid place-content-end xx:hidden">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img1  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-12 sm:px-12 bg-white dark:bg-secondary ">
            <div className="bg sm:grid xx:hidden place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img2  sm:w-[24rem] sm:h-[32rem]   lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
            <div className="   md:px-0  grid   place-self-center">
              <div className="mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Chimamanda</strong>
                </h2>
                <div className="bg sm:hidden xx:grid place-content-center">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img2 ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0  rounded-lg"
              ></div>
            </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Born to a man without warmth, Chimamanda is married off
                    early to a man she dreads just as much as her father. But
                    her walls are in place; she is safe — as long as she stays
                    strong.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    She would have been content living as she had always lived.
                    But God has His way of squeezing out what life you thought
                    you had so He can give you true life. So He can heal and
                    make you free.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/chimamanda_BPM"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-[#111]  ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Choose your Thoughts</strong>
                </h2>
                <div className="bg sm:hidden xx:grid place-content-center">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img3   ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
              ></div>
            </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    What you do with your mind will turn and do you. I should
                    know. If you brood and ruminate on depressing thoughts,
                    you'll be depressed. I should know. Because on Tuesday,
                    April 5, 2023, I was contemplating suicide. Thoughts,
                    thoughts led me there.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    I do an awful lot of cooking—mental cooking. You do too.
                    Now, here's a chance to be sure you're cooking the right
                    things. If you change your mind, it will change your life.
                    As literally as you'll see in this book.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/ChooseYourThoughts"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg xx:hidden sm:grid place-content-end">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img3  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-12 sm:px-12 bg-white dark:bg-secondary ">
            <div className="bg sm:grid xx:hidden place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img4  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>So He Taught Me 'No' </strong>
                </h2>
                <div className="bg sm:hidden xx:grid place-content-center">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img4   ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
              ></div>
            </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    This is a book about porn addiction. About the darkness that
                    persists even after you've stopped viewing it. All based on
                    true experience. It's a book about mind renewal. A book
                    about how the Holy Spirit teaches you to say “No” to
                    ungodliness — no matter how strong the mental stronghold.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    It shows you that addictions are not stronger than the God
                    who sets free.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/SHTM-NO"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Priye</strong>
                </h2>
                <div className="bg sm:hidden xx:grid place-content-center">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img5    ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
              ></div>
            </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center">
                    Priye is another bright high school student. Never had it
                    been heard that students so young and privileged could be
                    involved in such vices. But they weren't just involved, they
                    were drowning.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary dark:text-primary  lg:text-left md:text-lg md:text-center">
                    This is a tale of the burdens words cannot describe, the one
                    that feels like it's crushing your chest. It's a tale about
                    the rest that is found in surrender. The rest Jesus gives.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/Priye"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg sm:grid xx:hidden place-content-end">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img5  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Book;
