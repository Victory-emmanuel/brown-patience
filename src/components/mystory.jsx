import { Link } from "react-router-dom";

const MyStory = () => {
  return (
    <>
      <div id="my-store ">
        <section className="bg-extraClr  dark:bg-[rgba(0,0,0,0.61)]  xx:px-6  xs:px-6 px-12">
          <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <h4
                style={{
               
                  paddingBottom: "1rem",
                
                }}
                className="ss:mb-24 xs:mb:12 xx:mb-12 text-secondary xs:inline-block  xx:inline-block ss:hidden dark:text-primary  border-b-4 border-solid border-b-secondary dark:border-b-primary   font-light"
              >
                My Story
              </h4>
            <div className="m-auto py-6 grid place-content-center">
              <img
                className=" justify-self-start lg:mr-12 md:mr-0"
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
                style={{
               
                  paddingBottom: "1rem",
                
                }}
                className="ss:my-12 xs:mb:12 text-secondary xs:hidden  xx:hidden ss:inline-block dark:text-primary  ss:text-secondary border-b-4 border-solid border-b-secondary dark:border-b-primary   font-light"
              >
                My Story
              </h4>
              <h2 className="mb-12 xx:my-12 ss:text-4xl ss:text-center xx:text-2xl xx:text-left tracking-tight font-extrabold text-accent  dark:text-white">
                Meet Brown Patience
              </h2>

              <p className="mb-6 font-light xx:text-left ss:text-center text-secondary xs:text-base md:text-lg dark:text-primary">
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
              <div className="xx:grid xx:place-content-start"> 
                <Link to={""}>
                  <div className="btn-two-container ">
                    <button className="text-xl font-extrabold btn-two mt-3  w-[9.375rem] h-[3.125rem]">
                     READ MORE
                   </button>
                  </div>
                </Link>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyStory;
