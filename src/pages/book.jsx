import { Link } from "react-router-dom";
import MyBook from "../components/mybook";

const Book = () => {
  return (
    <>
      <div id="book">
        {/* Book hero section */}
        <section className="relative mb-24 lg:pl-12 py-16 flex flex-col-reverse  lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl  mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://i.postimg.cc/j5TFChPP/5924.jpg"
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h2 className="mb-12 font-sans lg:text-5xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none">
                Popular Books
              </h2>
              <p className="pr-5 mb-12 text-base text-secondary md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <div className="flex items-center">
                <Link to={"https://selar.co/m/BrownPatience "}>
                  <button className="relative px-6 py-4 text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    GET YOUR COPY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Best Sellers */}
        <MyBook />
        {/* Book body */}
        <section id="book-body" className="">
          <div className=" lg:py-20 grid lg:grid-cols-2 gap-4 lg:px-24 bg-extraClr ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Fantasy</strong>
                </h2>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Fantasy is about the sexual mental struggles we face. Those
                    steamy thoughts that feel like you're engaging in a porn
                    video production. Fantasy is for the young woman who'd like
                    her thoughts to honor God, who'd like to bring her thoughts
                    under the Holy Spirit's control.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    It won't just be that you're not having premarital sex, but
                    were we to play the content of your mind on a screen, you'd
                    have no cause to be ashamed. That is the “why” of this book.
                    Written by a girl to another girl.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/FANTASY"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[11rem] lg:h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg grid place-content-end">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img1  w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" lg:py-20 grid grid-cols-2 gap-4 lg:px-12 bg-white ">
            <div className="bg grid place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img2  w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Chimamanda</strong>
                </h2>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Born to a man without warmth, Chimamanda is married off
                    early to a man she dreads just as much as her father. But
                    her walls are in place; she is safe — as long as she stays
                    strong.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    She would have been content living as she had always lived.
                    But God has His way of squeezing out what life you thought
                    you had so He can give you true life. So He can heal and
                    make you free.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/chimamanda_BPM"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[11rem] lg:h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:py-20 grid lg:grid-cols-2 gap-4 lg:px-24 bg-extraClr ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Choose your Thoughts</strong>
                </h2>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    What you do with your mind will turn and do you. I should
                    know. If you brood and ruminate on depressing thoughts,
                    you'll be depressed. I should know. Because on Tuesday,
                    April 5, 2023, I was contemplating suicide. Thoughts,
                    thoughts led me there.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    I do an awful lot of cooking—mental cooking. You do too.
                    Now, here's a chance to be sure you're cooking the right
                    things. If you change your mind, it will change your life.
                    As literally as you'll see in this book.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/ChooseYourThoughts"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[11rem] lg:h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg grid place-content-end">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img3  w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" lg:py-20 grid grid-cols-2 gap-4 lg:px-12 bg-white ">
            <div className="bg grid place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img4  w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>So He Taught Me 'No' </strong>
                </h2>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
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
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[11rem] lg:h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:py-20 grid lg:grid-cols-2 gap-4 lg:px-24 bg-extraClr ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <h2 className="mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center">
                  <strong>Priye</strong>
                </h2>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Priye is another bright high school student. Never had it
                    been heard that students so young and privileged could be
                    involved in such vices. But they weren't just involved, they
                    were drowning.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    This is a tale of the burdens words cannot describe, the one
                    that feels like it's crushing your chest. It's a tale about
                    the rest that is found in surrender. The rest Jesus gives.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={"https://selar.co/Priye"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[11rem] lg:h-[4rem]">
                        GET YOUR COPY
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg grid place-content-end">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img5  w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Book;
