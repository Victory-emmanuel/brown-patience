import { Link } from "react-router-dom";

const MyStory = () => {
  return (
    <>
      <div id="my-store ">
        <section className="ss:bg-extraClr xs:bg-[rgba(0,0,0,0.61)] dark:bg-secondary relative xs:px-6 px-12">
          <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="m-auto grid">
              <img
                className="xs:absolute ss:relative xs:top-0 xs:left-0 xs:w-full xs:-z-10  justify-self-start lg:mr-12 md:mr-0"
                src="https://i.postimg.cc/YSMKgSpT/untitled-1082-01-jpeg.jpg"
                alt="brown patience"
                style={{
                  borderRadius: "10px",
                  boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                }}
              />
            </div>

            <div className="mt-4 md:mt-0 text-center">
              <h4
                // style={{
                //   borderBottom: "3px solid #343434 ",
                //   paddingBottom: "1rem",
                //   display: "inline-block",
                // }}
                className="ss:mb-24 xs:mb:12 xs:text-primary ss:text-secondary+ border-b-4  font-light"
              >
                My Story
              </h4>
              <h2 className="mb-12 text-4xl tracking-tight font-extrabold ss:text-accent xs:text-primary dark:text-white">
                Meet Brown Patience
              </h2>

              <p className="mb-6 font-light  xs:text-primary ss:text-secondary xs:text-base md:text-lg dark:text-secondary">
                A writer who knows the power of well-aimed words. Brown has done
                most of her learning within books. It's why she knows—on a
                personal level—that words can heal, provoke, redirect and
                transform a person. Words have always drawn her. It's why she's
                s ghostwriter—to give your words the impact she knows words can
                have, to author soul-feeding salvation, one sentence after the
                other. It's why she encourages you to write the book you know
                you should, to share the message within you. An author,
                copywriter, story writing coach, ghostwriter, and editor, Brown
                lives within the realm of words. Books can save lives is an
                initiative born out of the passion to help people see just how
                impactful words have been in the lives of others. An initiative
                that encourages the reader to read, and the writer to write.
              </p>
              <Link to={""}>
                <div className="btn-two-container">
                  <button className="text-xl font-extrabold btn-two mt-3  w-[9.375rem] h-[3.125rem]">
                    READ MORE
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

export default MyStory;
