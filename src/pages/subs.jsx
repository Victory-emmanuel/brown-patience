import { Link } from "react-router-dom";
import { Testimonial, Step, SubsFaq } from "../components/components";

const Subs = () => {
  return (
    <>
      <div id="subs">
        {/* Hero */}
        <div className="relative flex flex-col py-24 px-12 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="flex  flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40   lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans lg:text-5xl font-bold tracking-tight text-secondary sm:text-4xl sm:leading-none">
                  Our Subscription
                </h2>
                <p className="text-base mt-8 text-secondary md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src="https://i.postimg.cc/FHzfL9r3/Blog-post-bro.png"
              alt=""
            />
          </div>
        </div>
        {/* Guidiance for solopreneur */}
        <section className="solopreneur">
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
                      Guidance for Writing Solopreneurs
                    </button>
                  </Link>
                </div>
                <div className="">
                  <p className="mb-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Are you a follower of Jesus with something to say? Has the
                    Holy Spirit been prompting you? Are you holding back due to
                    uncertainty in your writing skills? Do you need an editor,
                    coach, or encourager? Brown Patience offers help from
                    writing to publishing with the Guidance for Writing
                    Solopreneurs package.
                  </p>
                  <h4>Who is a Writing Solopreneur?</h4>
                  <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Writing solopreneurs wield influence with their pens,
                    impacting culture through faith-based writing, including
                    blogs, newsletters, articles, social media, and stories.
                    They have a burning message for the world and know how to
                    scatter their seeds to attract those in need.
                  </p>
                  <h4>Who is this Guidance for?</h4>
                  <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    Guidance for Writing Solopreneurs is for budding and
                    experienced writers needing expert help to refine their
                    work. It offers someone who understands compelling writing
                    to provide opinions, editing, and fine-tuning, ensuring your
                    story is clear, correct, and polished enough to be told.
                  </p>
                </div>

                <div className="  grid place-content-start  mt-12">
                  <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                    <div className="btn-two-container ">
                      <button className="text-xl font-extrabold btn-two mt-3 lg:w-[10rem] lg:h-[3.5rem]">
                        SUBSCRIBE
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
          <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-20">
            <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
              <div className="relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      What does this Guidance entail?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        <b> Editing:</b> Making it relatable and practical to
                        your readers.
                      </li>
                      <li className=" mb-4 text-base">
                        <b>Posting Guidance: </b> How do you package it? Social
                        media? A blog? Newsletters? Where's your audience? Do
                        they prefer long or short-form content?
                      </li>
                      <li className=" mb-4 text-base">
                        <b>Critical Feeback On Your Writing </b> So you'll know
                        what to do better and where you're already doing great.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      What categories of content does the Guidance cover?
                    </h6>
                  </div>
                  <p className="mb-2 text-base text-secondary">
                    With this subscription, you get proofreading, editing, and
                    necessary revisions to:
                  </p>
                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">Your blog posts</li>
                      <li className=" mb-4 text-base">Your articles</li>
                      <li className=" mb-4 text-base">Your newsletters</li>
                      <li className=" mb-4 text-base">
                        Your social media content
                      </li>
                      <li className=" mb-4 text-base">
                        Your fictional/non-fictional stories.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 my-12 row-gap-5 lg:grid-cols-4">
              <div className="relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold mb-6 leading-5">
                      Am I still in control?
                    </h6>
                  </div>
                  <p className="mb-2 text-sm text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        Yes. How much revision your write-up undergoes is up to
                        you. I make the suggestions; you reserve the right to
                        approve or reject them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How do we communicate?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        We communicate using collaborative technologies such as
                        Google docs and Dropbox. And if WhatsApp will be easier
                        for you, it works perfectly for me. Through these
                        technologies, you can track my suggestions and changes
                        and get to approve them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How much is the subscription?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        15,000 naira per month.
                      </li>
                      <li className=" mb-4 text-base">
                        12,000 naira per month when you pay a full year's
                        subscription at once.
                      </li>
                      <li className=" mb-4 text-base">
                        Lunch Discount: This Guidance launches in April 2024,
                        and from April 1st to June 30th, 2024, subscriptions are
                        10,000 per month only.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative p-5 rounded-sm">
                  <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <h6 className="font-semibold leading-5 mb-6">
                      How do we communicate?
                    </h6>
                  </div>

                  <p className="mb-2  text-secondary">
                    <ul className="ml-4 list-disc">
                      <li className=" mb-4 text-base">
                        We communicate using collaborative technologies such as
                        Google docs and Dropbox. And if WhatsApp will be easier
                        for you, it works perfectly for me. Through these
                        technologies, you can track my suggestions and changes
                        and get to approve them.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* FREQUENTLY ASKED QUESTION */}
          <SubsFaq />
        </section>
        {/*COACHING FOR AUTHORS 
r */}
        <section className="authors">
          <div className=" lg:py-12 grid lg:grid-cols-2 gap-4 lg:px-24 bg-extraClr ">
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
                      COACHING FOR AUTHORS
                    </button>
                  </Link>
                </div>
                <div className="">
                  <h4 className="">What's this about?</h4>
                  <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
                    This package is where I get to coach you stage by stage on
                    how to write your book. You'll be gaining two things: you'll
                    be learning to write better while authoring your book at the
                    same time. I'm an author, ghostwriter, editor, and a writing
                    coach. These mean I know how to write. I know how to write
                    for people. I know how to enrich what people have written.
                    And I sure know how to help you write (by yourself!) what
                    you need to write.
                  </p>
                  <h4>Where do we begin?</h4>
                  <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
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
            <div className="bg grid place-content-top">
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)" }}
                className="img ml-auto w-[32rem] h-[40rem] rounded-lg"
              ></div>
            </div>
          </div>
          <div className=" bg-extraClr py-12 lg:px-24">
            <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
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
            <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
              That's what books do; they embody truth. In the kind of format
              that lasts forever. Long after the author has breathed their last,
              the truth lives on. Do you know why you're so drawn to write this
              book? Because people need this truth—the very one beating in your
              chest; the one making you interested in this package. It's also
              why I'll help you. You're Luke, writing to your Theophilus. I'll
              be your helpmeet. I'll be the one who ensures Theophilus hears
              precisely what Luke wants to say.
            </p>
            <h4 className="">
              What's the modality of this coaching? How do we do it?
            </h4>
            <p className="my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center">
              <ol class="list-decimal">
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
            <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
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

            <div className="  grid place-content-center  mt-12">
              <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                <div className="btn-two-container ">
                  <button className="text-xl font-extrabold btn-two mt-3 lg:w-[10rem] lg:h-[3.5rem]">
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

export default Subs;
