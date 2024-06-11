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
              <Link to={"/blogContentPg"}>
                <img
                  className="h-56 w-full object-cover"
                  src={blog.coverImg}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                  <h6 className="text-xl my-6">{blog.desc}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogContent;
