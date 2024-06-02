const Step = () => {
  return (
    <>
      <div id="step">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="text-center mb-12">
            <h2>Steps To Get Your Voice Heard</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
              <div className="rounded-lg lg:p-5 transition duration-300 bg-accent">
                <div className="flex items-center mb-1">
                  <span className="flex items-center bg-white p-2  justify-center w-4 h-4 mr-2 text-xs font-medium text-accent rounded bg-deep-purple-accent-400">
                    1
                  </span>
                  <p className="text-lg font-semibold text-white sm:text-base">
                    Meeting You & the Vision:
                  </p>
                </div>
                <p className="text-sm text-white">
                  This is the very first interaction where you and I get to
                  talk. You send me your draft, or explain what you want to
                  write.
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-extraClr">
                <div className="flex items-center mb-1">
                  <span className="flex items-center p-2 bg-accent justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded ">
                    2
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Finding Clarity:
                  </p>
                </div>
                <p className="text-sm text-secondary">
                  I'll ask questions as we talk so we can clearly articulate
                  your message, define your audience, and see if there is a need
                  to return to the drawing board.
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-extraClr">
                <div className="flex items-center mb-1">
                  <span className="flex items-center p-2 bg-accent justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded ">
                    3
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Writing & Editing:
                  </p>
                </div>
                <p className="text-sm text-secondary">
                  This phase, depending on the <b> kind of client</b> you are,
                  is where the actual writing takes place. You get to approve
                  the work as we go. If you like how I's going, we carry on.
                </p>
              </div>
              <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-extraClr">
                <div className="flex items-center mb-1">
                  <span className="flex items-center p-2 bg-accent justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded ">
                    4
                  </span>
                  <p className="text-lg font-semibold sm:text-base">
                    Completion & Approval:
                  </p>
                </div>
                <p className="text-sm text-secondary">
                  When the work is completed and approved, your book, or any
                  other written project, is fully yours. You and I will
                  collaborate again—
                  <span className="font-thin text-sm">
                    on your next project!
                  </span>
                </p>
              </div>
            </div>
            <div className="relative md:col-span-2 lg:col-span-2">
              <img
                className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
                src="https://i.postimg.cc/KjPCGYqG/2147982612.webp"
                alt=""
                style={{
                  borderRadius: "10px",
                  boxShadow: " 5px 7px 15px 4px rgba(0,0,0,0.30)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
