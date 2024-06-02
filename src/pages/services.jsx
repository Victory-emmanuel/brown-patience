import { ArrowRightAlt, DoneAll } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div id="service">
        {/* HERO */}
        <section className=" hero">
          <div className="grid py-40 text-center img px-12 ">
            <h1 className="text-6xl font-extrabold text-white  py-6">
              OUR SERVICES
            </h1>
            <p className="text-2xl w-[75%] mx-auto  text-white  py-6 ">
              Get your message to the people in need of it. Many gifted persons
              have a message for their world, books they've been planning to
              write, a community they long to impact, but they got stuck,
              couldn't find the time to continue, and began to wonder if they'd
              ever share that message. But with a ghostwriter to help write your
              book, your vision stays alive.
            </p>
            <Link>
              <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                CONTACT US
              </button>
            </Link>
          </div>
        </section>
        {/* EDITING */}
        <section className="py-24 grid place-content-center bg-primary">
          <div className="  px-12  m-auto space-y-12 grid  ">
            <div className=" grid justify-center">
              <div className=" inline-block mx-auto">
                <Link to={""}>
                  <button
                    style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)" }}
                    className="relative tracking-wide mb-12 ml-6 px-12 py-4 text-secondary text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                  >
                    EDITING
                  </button>
                </Link>
              </div>

              <p className="text-secondary mt-4 mb-12 inline-block mx-auto w-[75%] text-center text-lg dark:text-gray-300">
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
                className="p-8 py-12 sm:p-12 rounded-3xl dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <Link href="" title="Iconic Panda" className="text-xs">
                    <img
                      src="https://i.postimg.cc/bvvgbxc4/pencil.png"
                      className="w-20 mx-auto"
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
                        className="relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
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
                      className="w-20 mx-auto"
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
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
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
                      className="w-20 mx-auto"
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
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link className="place-self-center grid" to={""}>
              <div className="btn-two-container mt-10">
                <button
                  style={{ borderLeft: "2px solid #ef0909" }}
                  className="text-xl font-extrabold btn-two mt-3 lg:w-[9rem] lg:h-[3rem]"
                >
                  {/* <span className="pr-4">Contact Us</span> <WhatsApp /> */}
                  Contact Us
                </button>
              </div>
            </Link>
          </div>

          <div className="py-16 my-12">
            <div className="container m-auto  bg-accent rounded-lg py-12 text-primary md:px-12 px-12">
              <h2 className="text-3xl text-center mb-16 font-semibold">
                Who Needs A Ghostwriter And Book Editor?
              </h2>
              <div className="mx-auto grid gap-4 md:w-3/4 lg:w-full lg:grid-cols-4">
                <div
                  style={{
                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)",
                  }}
                  className="border rounded-xl  text-accent bg-white dark:bg-white px-8 py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="text-2xl mb-6 font-light">
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
                  className="border rounded-xl  text-accent bg-white dark:bg-white px-8 py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="text-2xl mb-6 font-light">
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
                  className="border rounded-xl  text-accent bg-white dark:bg-white px-8 py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="text-2xl mb-6 font-light">
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
                  className="border rounded-xl  text-accent bg-white dark:bg-white px-8 py-12  sm:px-12 lg:px-8"
                >
                  <div className="mb-12 h-[12rem] space-y-4">
                    <h3 className="text-2xl mb-6 font-light">
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
        {/* Content Writing  */}
        <section className="content-writing">
          <div className="  grid grid-cols-2 gap-4 lg:px-12 bg-white ">
            <div className="bg grid place-content-start">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
            <div className="pb-20   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <div className=" grid place-content-center mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ml-6 px-12 py-4 text-secondary text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      CONTENT WRITING
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Contents shouldn't trouble you. Outsource the writing of the
                    newsletter, the blog, the website content 'including the
                    existing web content you'd like to edit'. Carry on with your
                    key tasks; the content writer will handle the words.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Whether in South Africa or down in London, clients know
                    their readers want to read interesting pieces. So I take the
                    important message you want to get out there and transform it
                    into an interesting piece — the one that keeps the reader
                    reading, the one that clearly communicates the message, the
                    one that gets your reader to where you intended.
                  </p>
                </div>

                <div className="mb-10 grid place-content-start  md:mb-16 lg:mb-12">
                  <Link to={""}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[15rem] lg:h-[4rem]">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-12 mt-12 py-16 mb-12 mx-auto ">
            <div className="mb-12 md:mx-auto sm:text-center">
              <h2 className=" pb-6 font-sans text-3xl font-bold leading-none tracking-tight text-secondary sm:text-4xl md:mx-auto">
                How do I become your content writer?
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-4 sm:grid-cols-2">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold text-white">Step 1</p>
                  <ArrowRightAlt sx={{ color: "#fff" }} />
                </div>
                <p className=" text-white">
                  You send me a message telling me what you want me to write for
                  you. What's the subject? Is it a newsletter? Is it a blog? A
                  landing page? Product description?
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 2</p>
                  <ArrowRightAlt sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  A few questions run in-between. If you have samples of the
                  kind of content you want me to create, I ask for them. We
                  settle on a price. This is mostly based on word count.
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Step 3</p>
                  <ArrowRightAlt sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  I send you the content. You approve the content or point out
                  the changes you need.
                </p>
              </div>
              <div className="bg-extraClr p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Success</p>
                  <DoneAll sx={{ color: "#343434" }} />
                </div>
                <p className="text-secondary">
                  They get done, and we do it again and again.
                </p>
              </div>
            </div>
            <div className="  grid place-content-center  mt-12">
              <Link to={""}>
                <div className="btn-two-container ">
                  <button className="text-xl font-extrabold btn-two mt-3 lg:w-[15rem] lg:h-[4rem]">
                    SEND US A MESSAGE
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Story Writing Coaching */}
        <section className="story-writing-coaching">
          <div className=" lg:py-24 grid lg:grid-cols-2 gap-4 lg:px-24 bg-extraClr ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 lg:text-left ">
                <div className=" grid place-content-center mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ml-6 px-12 py-4 text-secondary text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      STORY WRITING COACHING
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Stories. We love them. We read them. We pay attention to
                    them. And if you can tell a compelling story, you can move
                    us. You can move us to give attention to our families, to
                    protect the environment, to buy a product, to save our own
                    lives. I am a story writing coach who teaches you to tell
                    stories that move.
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    I coach a 4-week course called The Art of Writing Compelling
                    Stories.
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    What do we do in this writing class? Teach you how to
                    communicate effectively—with stories. As Bukola Adewuyi, a
                    gifted student of the course, wisely observed: “I learnt
                    that the basic tactic to present my message is with a STORY.
                    Stories just have a way of keeping people hooked. No wonder
                    I can spend a whole day reading a 428-page Christian fiction
                    book and yet start yawning the moment I pick up a research
                    article.”
                  </p>
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    If you want to tell us something, tell us through a story.
                    You'll get our attention. That's that this writing class,
                    The Art of Writing Compelling Stories, is about.
                  </p>
                  <p className="mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    The writing class has been holding since 2021, and there are
                    more testimonials than I can possibly upload. You'll find a
                    small percentage below.
                  </p>
                </div>

                <div className="  grid place-content-start  mt-12">
                  <Link to={""}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[15rem] lg:h-[4rem]">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg grid place-content-top">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img ml-auto w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <section className="bg-primary dark:bg-secondary px-12">
            <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <div className="mt-4 md:mt-0 text-left">
                <h2 className="mb-12 text-center text-4xl tracking-tight font-extrabold text-accent dark:text-white">
                  How do classes hold?
                </h2>
                <div className="">
                  <p className="mb-6 font-light text-secondary md:text-lg dark:text-secondary">
                    Classes hold entirely online. On a WhatsApp Course Page.
                    Each class is followed by writing submissions (assignments).
                    These submissions can be made over WhatsApp or via email.
                  </p>
                  <h5 className="font-semibold mb-2">
                    Classes hold thrice a week:
                  </h5>
                  <ul class="list-disc mb-6">
                    <li>- Mondays. Wednesdays. Saturdays.</li>
                    <li>- 8 PM to 9 PM each day.</li>
                    <li>- For 4 weeks. </li>
                  </ul>
                  <p className="mb-6 font-light text-secondary md:text-lg dark:text-secondary">
                    They are arranged such that if a student is unable to attend
                    class by 8 PM, he or she can go to the Course Page at a
                    later time, read up, and attempt the submissions. Questions,
                    of course, will be attended to. And where a student needs
                    more clarity, it will be provided.
                  </p>
                  <p className="mb-6 font-light text-secondary md:text-lg dark:text-secondary">
                    After 4 weeks, students who have completed the course work
                    (their writing submissions) will be certified. And
                    mentorship follows from there. Mentorship means that
                    students can continue to relate with the Coach, ask
                    questions, seek her input, and count on her guidance in
                    their writing journey. Want to know when the next edition
                    begins?
                  </p>
                </div>

                <div className="  grid place-content-start  mt-12">
                  <Link to={""}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[15rem] lg:h-[4rem]">
                        SEND US A MESSAGE
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" grid">
                <img
                  className="justify-self-end lg:mr-12 md:mr-0"
                  src="https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg"
                  alt="brown patience"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                  }}
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Services;
