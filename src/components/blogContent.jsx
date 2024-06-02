import { Link } from "react-router-dom";
import blogData from "../data/blogData";
const BlogContent = () => {
  return (
    <>
      <div className="" id="blog-content">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-secondary">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-primary rounded-lg overflow-hidden drop-shadow-md "
            >
              <img
                className="h-56 w-full object-cover"
                src={blog.coverImg}
                alt=""
              />
              <div className="p-8">
                <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                <h6 className="text-xl my-6">{blog.desc}</h6>
              </div>
            </div>
          ))}
        </div>
        <Link className="mt-12" to="/blogContentPg">
          <button className="relative px-6 py-4 text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
            View blog
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogContent;
