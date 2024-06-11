import { Link } from "react-router-dom";

const Servicesect = () => {
  return (
    <>
      <div id="service-sect">
        <section className="py-24 xx:py-12 xx:px-6 xs:py-16 xs:px-8 px-12 grid place-content-center dark:bg-[#111] bg-primary">
          <div className="  m-auto space-y-12 grid  ">
            <div className="text-center">
              <h2
                style={{
                 
                  display: "inline-block",
                  paddingBottom: "1rem",
                }}
                className=" border-b-4 border-solid border-b-secondary dark:border-b-primary mb-12 xs:mb-8 text-center text-2xl xs:text-2xl  font-bold text-secondary dark:text-primary md:text-4xl"
              >
                What We Offer
              </h2>
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
                     Editing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                    Here, you have the writing ready. But you just need another pair of eyes to
                    tell you, “This is good to go.” In my experience, proofreading and editing is
                    more than dotting I’s and crossing T’s. There have been cases where the
                        client saw reason to upturn the work. Isn’t that the good thing about
                    getting professional service? Things get better.
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
                      Content Writing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                     You tell me you need content and I ask, “Which kind?” Social media
                      content? Web copies? Newsletters? Blog posts? If you can just tell me
                    what you need, you’ll get it, and even more than that, as the following
                    project descriptions will show.
                    </p>
                    <Link
                      to={"/services"}
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
                    Coaching For Story Writers
                    </h3>
                    <p className="text-secondary dark:text-primary">
                    If you want to train your team of content writers on how to sell with
                    stories or you want to learn the art of compelling writing for yourself, it will
                    take only 4 weeks to make that magic happen.
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
