import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="md:py-4">
        <section className="grid py-24 text-center img ss:px-12 xx:px-6 ">
          <h1 className="sm:text-6xl xx:text-4xl font-extrabold text-white  py-6">About Me</h1>
          <p className="text-2xl md:w-[50%] ss:w-[75%] xx:w-full mx-auto text-white  py-6 ">
            “...I'll run the course you lay out for me if you'll just show me
            how. God, teach me lessons for living so I can stay the course. Give
            me insight so I can do what you tell me—my whole life one long,
            obedient response...” ( Psalms 119:32-34, MSG ).
          </p>
        </section>
        <section className=" dark:bg-secondary py-16 xx:px-6 ss:px-12">
          <div className="bg-primary dark:bg-secondary gap-8 items-center ss:py-24 xx:py-12 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0 text-left">
              <h4 className="lg:mb-6 font-light dark:text-accent">Where It Began For</h4>
              <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-accent dark:text-white">
                Brown Patience
              </h2>
             
              <p className="mb-6 font-light text-secondary md:text-lg dark:text-primary">
                In 2014, during secondary school, I cherished a notebook filled
                with my stories until it went missing, leaving me with a
                lingering sense of loss. Despite this setback, I triumphed in a
                national essay competition, surprising many as a public school
                student. Even as a teenager, I found solace in writing, often
                escaping into imaginary worlds through letters to fictional
                relatives.
                <br className="mb-6" />
                Although these experiences hinted at my writing prowess, I
                initially pursued accounting in college, convinced it was my
                path. During my undergraduate years, I excelled in accounting
                but felt a subtle disconnect. The turning point came during the
                pandemic-induced hiatus in 2020, when I had the time to
                introspect, read, and write. It was then that I realized my true
                calling lay in writing.
                <br className="mb-6" />
                This revelation, coupled with divine guidance, led me to embrace
                writing wholeheartedly. As a Christian, my faith is the
                cornerstone of my journey. Psalm 119:32-35 encapsulates my
                desire to align with God's plan for my life.
                <br className="mb-6" />
                Writing, to me, is a transformative art that can inspire change.
                It allows us to share and glean wisdom, shaping lives in
                profound ways. Thus, I founded The Brown Patience Company to
                empower others to share their messages effectively through
                writing. Reflecting on my journey, I see God's hand guiding me
                from my early years in Apapa, Lagos, where my passion for
                writing first blossomed.
                <br className="mb-6" />
                Now, I am committed to fulfilling my purpose and bringing glory
                to God by using my writing talent to impact lives positively.
                Just as Jesus declared in John 17:4, I aim to complete the work
                assigned to me on earth, knowing that every word written has the
                potential to sow seeds of change and harvest lives transformed.
              </p>
            </div>
            <div className="grid">
              <img
                className="justify-self-end lg:mr-12 md:mr-0 md:w-[32rem] md:h-[40rem] w-0"
                src="https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp"
                alt="brown patience"
                style={{
                  borderRadius: "10px",
                  boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                }}
              />
            </div>
          </div>
          <section className="bg-white dark:bg-secondary gap-8 items-center ss:py-24 xx:py-12 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="m-auto grid place-content-start">
              <img
                className="justify-self-start mb-6 lg:mr-12 md:mr-0  "
                src="https://i.postimg.cc/ncz1xMZ4/untitled-1082-01-jpeg.jpg"
                alt="brown patience"
                style={{
                  borderRadius: "10px",
                  boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                }}
              />
            </div>

            <div className="mt-4 md:mt-0 text-left">
              <h4 className="lg:mb-6 font-light dark:text-accent">The Story Of</h4>
              <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-accent dark:text-white">
                Brown Patience
              </h2>

              <p className="mb-6 font-light text-secondary md:text-lg dark:text-primary">
                Brown has done most of her learning within books. It's why she
                knows—on a personal level—that words can heal, provoke, redirect
                and transform a person. Words have always drawn her. It's why
                she's s ghostwriter—to give your words the impact she knows
                words can have, to author soul-feeding salvation, one sentence
                after the other. It's why she encourages you to write the book
                you know you should, to share the message within you. An author,
                copywriter, story writing coach, ghostwriter, and editor, Brown
                lives within the realm of words. Books can save lives is an
                initiative born out of the passion to help people see just how
                impactful words have been in the lives of others. An initiative
                that encourages the reader to read, and the writer to write.
              </p>
              <div
                style={{
                  
                  display: "inline-block",
                }}
                className="py-6  mt-12 border-solid border-t-2 border-t-accent border-b-accent  dark:border-t-primary border-b-2 dark:border-b-primary "
              >
                <div
                  
                  className=" inline-block border-solid border-r-2 border-r-secondary dark:border-r-2 dark:border-r-primary "
                >
                  <h2 className="inline-block ss:text-7xl xx:text-5xl text-accent  ">05</h2>
                  <p className="inline-block pl-6 xs:pr-12 xx:pr-6 xs:text-base xx:text-xs dark:text-primary ">
                    Books <br />
                    Published
                  </p>
                </div>
                <div className="inline-block  ">
                  <h2 className="inline-block xs:pl-12 xx:pl-6 pr-6 ss:text-7xl xx:text-5xl text-accent ">
                    03
                  </h2>
                  <p className="inline-block xs:text-base xx:text-xs dark:text-primary  ">
                    Best <br />
                    Selling
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default About;
