import { Link } from "react-router-dom";
import Slider from "react-slick";

const MyBook = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="my-book">
        <section className="py-24 bg-primary px-12">
          <div className=" xl:container mx-auto px-6 md:px-12">
            <div className="text-center">
              <h2
                style={{
                  borderBottom: "2px solid #343434",
                  display: "inline-block",
                  paddingBottom: "1rem",
                }}
                className=" mb-12 text-center text-2xl  font-bold text-secondary dark:text-white md:text-4xl"
              >
                Our Book
              </h2>
            </div>

            <div className="my-16 items-center grid grid-cols-2">
              <h4 className=" text-2xl font-bold text-secondary dark:text-white md:text-2xl">
                POPULAR
              </h4>
              <div className="justify-self-end">
                <Link to={""}>
                  <button className="relative ml-6 px-6 py-4 text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    ALL BOOKS
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/X7HmPYNM/IMG-20220917-WA0018.webp"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                    <span className="block text-sm text-white">Writer</span>
                  </div>
                  <p className="mt-8 text-primary dark:text-gray-600">
                    This is a book about porn addiction. About the darkness that
                    persists even after you've stopped viewing it. All based on
                    true experience......
                  </p>
                </div>
              </div>
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/hGS5HP4L/20240207-064730.jpg"
                  alt="Book cover"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                    <span className="block text-sm text-white">Writer</span>
                  </div>
                  <p className="mt-8 text-primary dark:text-gray-600">
                    Born to a man without warmth, Chimamanda is married off
                    early to a man she dreads just as much as her father. But
                    her walls are in place........
                  </p>
                </div>
              </div>
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/HxnPkZyj/20240207-064011.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                    <span className="block text-sm text-white">Writer</span>
                  </div>
                  <p className="mt-8 text-primary dark:text-gray-600">
                    Fantasy is about the sexual mental struggles we face. Those
                    steamy thoughts that feel like you're engaging in a porn
                    video production.......
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mb-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="text-center">
              <h2
                style={{
                  borderBottom: "2px solid #343434",
                  display: "inline-block",
                  paddingBottom: "1rem",
                }}
                className=" mb-24 text-center text-2xl  font-bold text-secondary dark:text-white md:text-4xl"
              >
                Books I've Worked On
              </h2>
            </div>
            <div s className="  slider-container mb-8">
              <Slider {...settings}>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4 overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/LsVsdYDd/20240218-134117.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/kMHgddQ5/20240218-134712.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
                <Link tyle={{ cursor: "grab" }} to="/" aria-label="View Item">
                  <div className="relative mx-4  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://i.postimg.cc/yN0gF4fj/20240304_104847.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-accent bg-opacity-80 opacity-0 hover:opacity-100">
                      <h4 className="mb-6 text-xl font-bold text-gray-100">
                        A Gift To Deborah
                      </h4>
                      <p className="text-sm tracking-wide text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis vitae nihil error, eaque amet ullam
                        laudantium deleniti vero dicta, et deserunt quaerat
                        architecto maiores harum?
                      </p>
                    </div>
                  </div>
                </Link>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyBook;
