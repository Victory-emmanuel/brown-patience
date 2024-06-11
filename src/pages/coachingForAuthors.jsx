/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Testimonial, Step } from "../components/components";
const CoachingForAuthors = () => {
  return (
    <>
      <div id="subs">
        {/* HERO */}
        <div className="relative grid gap-8 lg:py-24 xx:py-12 lg:px-12 xx:p-6 lg:pt-0 ss:grid-cols-2 lg:pb-0">
          <div className="flex flex-col items-start w-full ss:px-0 sm:px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 xx:my-auto lg:max-w-lg lg:pr-5">
              <div className="lg:max-w-xl  lg:mb-6 xx:my-auto">
                <h2 className="max-w-lg  mb-6 font-sans lg:text-5xl font-bold tracking-tight text-accent ss:text-left xx:text-center ss:text-3xl sm:text-4xl sm:leading-none">
                  Our Subscription
                </h2>
                <p className="sm:text-base ss:text-sm mt-8 text-secondary dark:text-primary md:text-lg  ss:text-left xx:text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
                <div className=" grid ss:place-content-start xx:place-content-center">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <button className="w-[11rem] py-5 px-7   ss:mt-6 xx:mt-8 bg-white h-[4rem] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl  ss:px-0 sm:px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-full xl:px-0">
            <img
              className="object-cover w-[32rem]  rounded  lg:rounded-none lg:shadow-none sm:h-[24rem] lg:h-full"
              src="https://i.postimg.cc/FHzfL9r3/Blog-post-bro.png"
              alt=""
            />
          </div>
        </div>
        {/*COACHING FOR AUTHORS */}
        <section className="authors">
          <div className=" lg:py-12 grid lg:grid-cols-2 gap-4 xx:p-6 sm:px-12 lg:px-24 bg-extraClr ">
            <div className="   md:px-0  grid  place-self-center">
              <div className="mb-0 lg:pr-8 xl:pr-6 text-left ">
                <div className=" grid place-content-center mx-auto">
                  <Link to={""}>
                    <button
                      style={{
                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)",
                      }}
                      className="relative tracking-wide mb-12 ss:ml-6 ss:px-12 xx:px-6 py-4 text-secondary ss:text-xl xx:text-lg font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      COACHING FOR AUTHORS
                    </button>
                  </Link>
                </div>
                <div className="">
                  <h4 className="ss:text-2xl xx:text-xl">What's this about?</h4>
                  <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                    This package is where I get to coach you stage by stage on
                    how to write your book. You'll be gaining two things: you'll
                    be learning to write better while authoring your book at the
                    same time. I'm an author, ghostwriter, editor, and a writing
                    coach. These mean I know how to write. I know how to write
                    for people. I know how to enrich what people have written.
                    And I sure know how to help you write (by yourself!) what
                    you need to write.
                  </p>
                  <h4 className="ss:text-2xl xx:text-xl">Where do we begin?</h4>
                  <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
                    Every book on the earth has a purpose. Yours does too. And
                    that's where we'll begin — by defining your book's purpose,
                    zeroing in on its audience, and answering the big question:
                    Why? Why are you writing this book? What do you want your
                    reader to take away from it?
                    <ul className="m-4 list-disc">
                      <li className=" mb-2 text-base">
                        Then we brainstorm on the chapters.
                      </li>
                      <li className=" mb-2 text-base">
                        What will Chapter One say?
                      </li>
                      <li className=" mb-2 text-base">
                        What will Chapter Two contain?
                      </li>
                      <li className=" mb-2 text-base">
                        Should the book be broken into parts or sections?
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg grid lg:place-content-top xx:place-content-center">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img lg:ml-auto lg:w-[32rem] lg:h-[40rem] lg:my-0 xx:my-6 md:w-[40rem] md:h-[48rem] ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" bg-extraClr py-12 sm:px-12 xx:px-6 lg:px-24">
            <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
              That, you see, is what this Coaching for Authors package is about.
              I'll be the person that helps you share your message, the one that
              helps you tell your story — so your readers will hear precisely
              what you've been wanting them to hear, the message that's been
              burning in your heart. I got this vision from an author named
              Luke. The guy was a meticulous physician who brought that very
              care to his writing. Right from the start of the book, he stated
              its purpose. His reader was named Theophilus. And this author
              wanted Theophilus to know the truth. So he wrote chapter after
              chapter, explaining in gripping detail, employing the kind of
              storytelling that renders you immersed. Everything drove towards
              that goal — so Theophilus would know the truth. Centuries later,
              we're also learning the truth from the book Luke wrote.
            </p>
            <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
              That's what books do; they embody truth. In the kind of format
              that lasts forever. Long after the author has breathed their last,
              the truth lives on. Do you know why you're so drawn to write this
              book? Because people need this truth—the very one beating in your
              chest; the one making you interested in this package. It's also
              why I'll help you. You're Luke, writing to your Theophilus. I'll
              be your helpmeet. I'll be the one who ensures Theophilus hears
              precisely what Luke wants to say.
            </p>
            <h4 className="ss:text-2xl xx:text-xl">
              What's the modality of this coaching? How do we do it?
            </h4>
            <p className="my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base">
              <ol className="list-decimal">
                <li className="ml-6 mb-4">
                  We start by talking about the Big W's? Why are you writing
                  this book? Where did the drive to write it come from? Who are
                  you writing to? What do you want your reader to take away from
                  it? We could do this over a call, emails, or via chats. <br />
                  There are H questions too: How far have you gone with the book
                  or the planning of the book? How best do you think I can help
                  you through this writing phase?
                </li>
                <li className="ml-6 mb-4">
                  After I've understood your passion for the book, you and I
                  will draw out an outline that works with your schedule (to be
                  frank, you might need to make your schedule work with the
                  outline or you may never find the time).
                </li>
                <li className="ml-6 mb-4">
                  You begin writing. And you send a chapter (or more) a week.
                </li>
                <li className="ml-6 mb-4">
                  As you send me the chapters, we talk about it. I tell you what
                  I noticed, if it's all good or how much better it can get, how
                  you can modify things, how to stick to appropriate tenses,
                  punctuations, where a subtopic is necessary, where an
                  illustration would aid understanding, and the repeated things
                  that must be cut out. <br /> As your editor, I would have done
                  these for you, but this Coaching package ensures you learn to
                  do them yourself, so you can grow more confident in your
                  writing and attack your subsequent writing or books with
                  experience and more knowledge.
                </li>
                <li className="ml-6 mb-4">
                  Bit by bit, as sure as the dawn, you'll complete your book.
                </li>
              </ol>
            </p>
            <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center"></p>
            <div className="grid gap-8 row-gap-5 ss:grid-cols-2 lg:grid-cols-3">
              <div className="relative bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold text-accent leading-5 mb-6">
                      WARNING!!!
                    </h6>
                  </div>
                  <p className="mb-2 text-base text-secondary">
                    As you write, you may find your book taking a different,
                    deeper turn. You may find a certain point becoming so
                    important that you keep expanding on it. Thing is: When you
                    'start' writing, beautiful things happen. And I'll fan the
                    flame; I'll encourage you to ease up on the outline and
                    allow yourself just write. Thoughts, when they're given
                    expression, grow. You'll be amazed at the things flowing out
                    of you.
                  </p>
                  <p className="mb-2 text-base text-secondary">
                    But no, we won't allow wordiness dilute the message.
                    Unnecessary things will be mercilessly shown the door. There
                    is a time to use a comma; there is a time to put a full
                    stop. I'll be your guide.
                  </p>
                </div>
              </div>
              <div className="relative  bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 text-accent leading-5">
                      What's payment like?
                    </h6>
                  </div>
                  <p className="mb-2 text-base  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Payment is on a monthly basis.
                      </li>
                      <li className=" mb-4 text-base">
                        25,000 naira a month is the coaching fee.
                      </li>
                    </ul>
                    No limit on chapters. You may send in a chapter a week, or
                    send in three chapters a week and get my feedback. But once
                    a month is over, you'll have to renew your subscription for
                    the new month. <br />
                    It's like this because I want you to be encouraged to start
                    and not slow down. If you know your monthly subscription is
                    counting, it should motivate you to get on with the book.
                    Why let it take ten months when it could have taken three?
                  </p>
                </div>
              </div>
              <div className="relative bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold text-accent leading-5 mb-6">
                      Can we start right now?
                    </h6>
                  </div>
                  <p className="mb-2 text-base text-secondary">
                    Of course. Send a message to subscribe. Then we can start
                    with those W questions: Why? Why is this book necessary?
                    What will it say?
                  </p>
                </div>
              </div>
            </div>

            <div className="  grid ss:place-content-center xx:place-content-start  mt-12">
              <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                <div className="btn-two-container ">
                  <button className="text-xl font-extrabold btn-two mt-3 w-[10rem] h-[3.5rem]">
                    SUBSCRIBE
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <Step />
          <Testimonial />
        </section>
      </div>
    </>
  );
};

export default CoachingForAuthors;
