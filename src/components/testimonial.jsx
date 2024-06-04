import Slider from "react-slick";

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div id="testimonial">
        <section className="py-16 bg-extraClr px-12">
          <div className=" m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                What Our Customers Have To Say
              </h2>
            </div>
            {/* <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 h-full">
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      Timilehin Oshinowo
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Writer
                    </p>
                  </div>
                </div>
                <p className="mt-8">
                  “Working with Brown Patience on the book "Peace by the Flute"
                  was a seamless exercise because Patience made it easy, and her
                  ability to expand on ideas and make the story come alive is
                  really incredible. I'm glad I worked with her. I'm glad we
                  were able to successfully write the book. She did so well
                  putting her talents to valuable use on the book. She made it
                  come alive and I really appreciate her work. I appreciate her
                  efforts. I appreciate everything she does. She's amazing!”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      Oyindamola Alabi
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Author
                    </p>
                  </div>
                </div>
                <p className="mt-8">
                  “Thank you so much for the excellent, amazing, wonderful work.
                  I still read Envision sometimes and it feels new. It's like
                  the Bible. You know, when you read the Bible, you get a new
                  perspective. The last time I read it, which was about two
                  weeks ago, it still felt new to me like "Am I the one that
                  wrote this book?"" I don,t know how to explain it but thank
                  you for your divine touch on Envision. Thank you for making it
                  such a beautiful book to read. Thank you for the flow.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      Oyindamola Alabi
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Author
                    </p>
                  </div>
                </div>
                <p className="mt-8">
                  “Working with Brown BOYYYY Patience was such a seamless
                  journey. Thank you for taking me through the process. It was
                  evidently shown in my book Envision. Your keen attention to
                  details, all the questions you asked me during the
                  consultation phase were so apt. It made me reflect on how
                  excellent my book turned out. Like I always refer to you as
                  the "Queen of Editing". Thank you for your amazing work.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      Oyindamola Alabi
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Mobile dev
                    </p>
                  </div>
                </div>
                <p className="mt-8">
                  “It wasn't like you were just taking the job; you were
                  passionate, intentional about it; you wanted to know exactly
                  what was in my mind and that was how Envision could come out
                  looking perfect in its way. So, thank you so much, Patience,
                  my Queen of Editing. Keep on doing the good work.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>
                <p className="mt-8">
                  “If you have an assignment that has to do with destiny, just
                  ensure the people who work closest with you are those who
                  know, understand, and are familiar with your Source, the well
                  you drink from and the Originator of the idea. I'd never even
                  thought I'd work with Brown Patience and what I can say is
                  phew! She understands. I don't even have to explain too much.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-md text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  “I literally went to sleep the moment Patience started working
                  on my book. She understood the assignment. She didn't just
                  edit my book, she found the words that were hanging in my mind
                  and gave them life. With my experience with Patience, I can
                  say there is editing and there is editing that introduces
                  life.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-md text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  “I literally went to sleep the moment Patience started working
                  on my book. She understood the assignment. She didn't just
                  edit my book, she found the words that were hanging in my mind
                  and gave them life. With my experience with Patience, I can
                  say there is editing and there is editing that introduces
                  life.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-md text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  “I literally went to sleep the moment Patience started working
                  on my book. She understood the assignment. She didn't just
                  edit my book, she found the words that were hanging in my mind
                  and gave them life. With my experience with Patience, I can
                  say there is editing and there is editing that introduces
                  life.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-md text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  “I literally went to sleep the moment Patience started working
                  on my book. She understood the assignment. She didn't just
                  edit my book, she found the words that were hanging in my mind
                  and gave them life. With my experience with Patience, I can
                  say there is editing and there is editing that introduces
                  life.”
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-md text-gray-700 dark:text-white">
                      Olamide Aholu
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Writer
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  “I literally went to sleep the moment Patience started working
                  on my book. She understood the assignment. She didn't just
                  edit my book, she found the words that were hanging in my mind
                  and gave them life. With my experience with Patience, I can
                  say there is editing and there is editing that introduces
                  life.”
                </p>
              </div>
            </div> */}
            <div className=" slider-container">
              <Slider {...settings}>
                <div className="aspect-auto p-8 border h-[25rem] border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/cJ3tbP4S/2151100226-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Oluwakemi O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “I read 'Love, the Way to Victory' by Kenneth E. Hagin and
                    it taught me what love really means. I learnt that Love is a
                    person and I can become that person. It changed my
                    perspective on how I see people. It taught me that there's a
                    better way to dispense love to people—including people who
                    have hurt me.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Brown P.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Content Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “It took reading 'Created to be His Helpmeet' by Debi Pearl
                    for me to see and understand God's instruction on the role
                    of wives in marriage. It's a big book; it sent me to the
                    Bible. And through that book, God prepared me for the next
                    phase of my life—which I didn't even know was around the
                    corner!”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/hv7m702S/2151100149-1-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Omodolapo L.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Author
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “In reading 'Atomic Habits' by James Clear, I was able to
                    learn about bad behaviors and principle steps to adopting
                    good ones. I got to understand why small habits can make a
                    big difference. I got to learn the importance of habit
                    tracking and how to build healthy habits. I also learnt the
                    importance of accountability. This particular one was an
                    amazing reminder for me.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Timilehin Oshinowo
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “One of the books I really love is Francine Rivers' 'The
                    Scarlet Thread'. It's a combination of two stories that are
                    somehow linked but I only read one. I learned how to let go.
                    Ah! I'm still learning it, but that's where l started the
                    learning process from. The woman had to let her cheating
                    husband go for God to fix her and fix their marriage. She
                    really grew, as she went through God's dealings with her. I
                    think about her sometimes when it's difficult for me to let
                    something go. If Sierra 'that's her name' can do it, I can.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
