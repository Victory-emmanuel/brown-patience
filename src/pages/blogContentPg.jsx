import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

const BlogContentPg = () => {
  const { id } = useParams();
  const item = blogData.find(item => item.id == id); // Find the specific item by id

  if (!item) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <div className="" id="blog-content">
        <div className="w-full text-secondary bg-extraClr py-24">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 ss-grid-cols-1 gap-8 px-4 text-secondary">
              <div className="bg-primary rounded-lg col-span-2 overflow-hidden drop-shadow-md">
                <img
                  className="h-[30rem] w-full object-cover"
                  src={item.coverImg}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="font-bold text-accent text-2xl my-1">
                    {item.title} {/* Assuming you have a title field */}
                  </h3>
                  <h6 className="text-xl my-6">{item.desc}</h6>
                  <p className="">{item.content}</p>
                </div>
              </div>

              <div className="w-full rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md max-h-[17.625rem]">
                <div className="">
                  <img
                    src={item.authorImg}
                    alt="Author"
                    className="p-2 w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <h1 className="text-center text-2xl font-bold mt-3">
                    {item.authorName}
                  </h1>
                  <p className="text-center p-4 m-4 bg-accent rounded-lg text-primary text-lg font-medium mt-3">
                    {item.authorDesc}
                  </p>
                </div>
              </div>
            </div>

            <Link to={"/blog"}>
              <button className="my-6 ml-4 rounded py-3 px-6 bg-secondary">
                <IoIosArrowRoundBack className="text-xl text-primary" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentPg;
