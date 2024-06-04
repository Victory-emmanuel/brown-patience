import { Link } from "react-router-dom";

const Servicesect = () => {
  return (
    <>
      <div id="service-sect">
        <section className="py-24 xx:py-12 xx:px-6 xs:py-16 xs:px-8 px-12 grid place-content-center bg-primary">
          <div className="  m-auto space-y-12 grid  ">
            <div className="text-center">
              <h2
                style={{
                  borderBottom: "2px solid #343434",
                  display: "inline-block",
                  paddingBottom: "1rem",
                }}
                className=" mb-12 xs:mb-8 text-center text-2xl xs:text-2xl  font-bold text-secondary dark:text-white md:text-4xl"
              >
                What We Offer
              </h2>
            </div>
            <div className="mt-16 grid  place-self-center  gap-8 sm:w-2/3  md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:shadow-none"
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
                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                      Ghost Writing
                    </h3>
                    <p className="text-secondary dark:text-gray-300">
                      You've got the gist of what to write, but it's likely just
                      a skeletal framework at this point. Whether it's jotted
                      down in notebooks or scattered across your laptop, I step
                      in to grasp your vision and pen it down precisely as you
                      envision.
                    </p>
                    <Link
                      to={""}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
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
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl"
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
                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                      Collaboration
                    </h3>
                    <p className="text-secondary dark:text-gray-300">
                      A paragraph might be redone or deleted. A better
                      introduction could replace it, with repetitions removed
                      and the message clarified. Collaboration means enriching
                      your message together—it's a partnership.
                    </p>
                    <Link
                      to={""}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
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
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-8 py-12 sm:p-12 rounded-3xl dark:shadow-none"
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
                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                      Transcription
                    </h3>
                    <p className="text-secondary dark:text-gray-300">
                      You have a recording—audio or video—that you want turned
                      into a book. I transcribe it, then craft it into a book.
                      This service caters to individuals preferring to vocalize
                      their thoughts or messages rather than type them out.
                    </p>
                    <Link
                      to={""}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
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

            <div className="  grid place-content-center  mt-12">
              <Link to={"/services"}>
                <div className="btn-two-container ">
                  <button className="text-xl font-extrabold btn-two mt-3 w-[9rem] h-[3rem]">
                    SEE MORE
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

export default Servicesect;
