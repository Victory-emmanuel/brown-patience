import BlogContent from "../components/blogContent";
const Blog = () => {
  return (
    <>
      <div id="blog">
        <div className="w-full bg-extraClr py-24">
          <div className="max-w-[1240px] mx-auto">
            <BlogContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
