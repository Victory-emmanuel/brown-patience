import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div className="lg:pb-32 xs:pb-12 ss:pb-16 ss:px-0  lg:px-12 bg-extraClr dark:bg-secondary ">
          <div className=" m-auto px-6 xx:pt-8 pt-24 ss:py-12 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-12 px-2 md:px-0">
              <div className="col-span-1">
                <div className="relative w-full">
                  <img
                    src="https://i.postimg.cc/5NYfvdcd/20240511-232249.jpg"
                    alt="shoes"
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " -12px 7px 31px 8px rgba(0,0,0,0.45)",
                    }}
                    className="sm:m-auto ss:m-auto"
                  />
                </div>
              </div>

              <div className="lg:text-left xx:mt-8  xs:mt-6 sm:text-center sm:mt-12 place-self-center lg:col-span-1">
                <h1 className="max-w-2xl  mb-8 font-extrabold tracking-tight leading-none md:text-4xl ss:text-3xl xs:text-2xl  xx:text-3l sm:text-4xl xl:text-5xl dark:text-white">
                  Create an Honest Book That Reflects Your Voice
                </h1>
                <p className="max-w-2xl mb-6 font-light text-secondary lg:mb-8 md:text-lg lg:text-xl dark:text-primary">
                  Together, we will embark on a collaborative journey to write
                  your book, working at a pace that feels natural and
                  comfortable for you, while ensuring the highest quality of
                  content.
                </p>
                <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                  <button className="btn-one ss:mt-6 inline-flex  items-center xx:mb-6  justify-center xx:px-5 xx:py-3 xx:mr-0  px-6 py-4 mr-3 xs:text-sm xx:text-xs text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    MESSAGE US
                  </button>
                </Link>
                <Link to={"/book"}>
                  <button className="relative ss:mt-6 ml-6 xx:hidden xs:inline-block px-6 py-4 text-secondary xs:text-xs text-base font-bold nded-full overflow-hidden bg-white rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    ALL BOOKS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
