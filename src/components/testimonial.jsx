import Slider from "react-slick";
import tstmData from "../data/tstmData";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div  style={{cursor:"grab"}} id="testimonial">
        <section className="py-16 bg-extraClr dark:bg-secondary xx:px-0 md:px-12">
          <div className=" m-auto  text-secondary dark:text-gray-300 xx:px-6 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                What Our Customers Have To Say
              </h2>
            </div>
            
            <div className=" slider-container">
              <Slider {...settings}>
                {tstmData.map((items)=>(
                  <div key={items.id}  className="aspect-auto p-8 border h-[25rem] border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                    <div  className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={items.img}
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        {items.name}
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                       {items.title}
                      </p>
                    </div>
                    </div>
                    <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                     {items.content}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
