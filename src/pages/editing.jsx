/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Editing = () => {
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
        {/* EDITING */}
        <section className="ss:py-24 xx:py-16 grid place-content-center bg-primary dark:bg-secondary">
          <div className="  ss:px-12 xx:px-6  m-auto space-y-12 grid  ">
            <div className=" grid justify-center">
              <div className=" inline-block mx-auto">
                <Link to={""}>
                  <button
                    style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)" }}
                    className="relative tracking-wide mb-12 ss:ml-6 px-12 py-4 text-secondary  text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                  >
                    EDITING
                  </button>
                </Link>
              </div>

              <p className="text-secondary mt-4 mb-12 inline-block mx-auto ss:w-[75%] xx:w-full text-center text-lg dark:text-primary">
                When we're clear on precisely what you want to say, writing will
                commence. Using an outline we designed, your book or any other
                project will come together seamlessly, with you reserving the
                right to monitor each milestone, ensuring it captures your voice
                and your “Why?” Editing is the polishing phase. No, we cant
                afford to let a comma be in the wrong place.
              </p>
            </div>
            <div className="mt-16 grid  place-self-center  gap-8 sm:w-2/3  md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <Link href="" title="Iconic Panda" className="text-xs">
                    <img
                      src="https://i.postimg.cc/bvvgbxc4/pencil.png"
                      className="w-20  xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Pencil"
                    />
                  </Link>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Ghost Writing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      You've got the gist of what to write, but it's likely just
                      a skeletal framework at this point. Whether it's jotted
                      down in notebooks or scattered across your laptop, I step
                      in to grasp your vision and pen it down precisely as you
                      envision.
                    </p>
                    <Link
                      to={"/services"}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl  dark:bg-secondary"
              >
                <div className="space-y-12 text-center">
                  <Link
                    href="https://www.flaticon.com/authors/iconic-panda"
                    title="Iconic Panda"
                    className="text-xs"
                  >
                    <img
                      src="https://i.postimg.cc/PqGfv4w5/collaborate-1.png"
                      className="w-20  xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Collaboration"
                    />
                  </Link>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold  text-secondary transition dark:text-white">
                      Collaboration
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      A paragraph might be redone or deleted. A better
                      introduction could replace it, with repetitions removed
                      and the message clarified. Collaboration means enriching
                      your message together—it's a partnership.
                    </p>
                    <Link
                      to={""}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <Link
                    href="https://www.freepik.com"
                    title="Freepik"
                    className="text-xs"
                  >
                    <img
                      src="https://i.postimg.cc/ZRwhHFC3/transcription.png"
                      className="w-20  xx:w-16 xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Content writer"
                    />
                  </Link>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Transcription
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      You have a recording—audio or video—that you want turned
                      into a book. I transcribe it, then craft it into a book.
                      This service caters to individuals preferring to vocalize
                      their thoughts or messages rather than type them out.
                    </p>
                    <Link
                      to={"/services"}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="place-self-center grid"
              to={"https://wa.me/message/DOCQNYXAEPVDH1"}
            >
              <div className="btn-two-container mt-10">
                <button
                  style={{ borderLeft: "2px solid #ef0909" }}
                  className="text-xl font-extrabold btn-two mt-3 w-[9rem] h-[3rem]"
                >
                  Contact Us
                </button>
              </div>
            </Link>
          </div>

          <div className="py-16 my-12">
            <div className=" m-auto  bg-accent rounded-lg py-12 text-primary md:px-12 xx:px-12">
              <h2 className="ss:text-3xl xx:text-xl text-center mb-16 font-semibold">
                Who Needs A Ghostwriter And Book Editor?
              </h2>
              <div className="mx-auto grid gap-4 md:w-3/4 lg:w-full ss:grid-cols-2 lg:grid-cols-4">
                <div
                  style={{
                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                  }}
                  className="border rounded-xl  text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                      Experienced Professional & Speaker
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Make your powerful speeches and wealth of experience into
                      life-changing books that further testify of your authority
                      in your field, reaching even more people.
                    </p>
                  </div>
                  <img
                    src="https://i.postimg.cc/L4N4dSjf/2150951395-1.jpg"
                    className="mx-auto w-full"
                    alt="illustration"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                    }}
                  />
                </div>
                <div
                  style={{
                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                  }}
                  className="border rounded-xl  text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                      Visionaries & Change Agents
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Turn your burning message into a compelling call to
                      action. Sell your great vision to those who will be
                      willing to run with it. Get support for your cause.
                    </p>
                  </div>
                  <img
                    src="https://i.postimg.cc/63V34G71/2150697440-1.jpg"
                    className="mx-auto w-full"
                    alt="illustration"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                    }}
                  />
                </div>
                <div
                  style={{
                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                  }}
                  className="border rounded-xl  text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                      Empaths & Survivors
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Share your experience with those who are currently where
                      you've been. Show them how you got through it all. Show
                      them how to get through it too.
                    </p>
                  </div>
                  <img
                    src="https://i.postimg.cc/Hx1nLtLy/2151438401-1.jpg"
                    className="mx-auto w-full"
                    alt="illustration"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                    }}
                  />
                </div>
                <div
                  style={{
                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                  }}
                  className="border rounded-xl  text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="sm:text-2xl xx:text-xl mb-6 font-light">
                      Authors Who Need Assistance
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      You've been writing for a while but it's been feeling
                      flat. Inject the necessary impact into your voice; rebrand
                      your writing; make your subsequent books sharp and
                      provoking, as they should be.
                    </p>
                  </div>
                  <img
                    src="https://i.postimg.cc/0QCkyR3T/2151186173-1.jpg"
                    className="mx-auto w-full"
                    alt="illustration"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Editing;
