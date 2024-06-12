import BlogContent from "../components/blogContent";
   import useFetch from "../hooks/useFetch";

   const Blog = () => {
     const result = useFetch(
       `https://fuzzy-funicular-x76xpxgx5jpcpr96-1337.app.github.dev/api/blogs?populate=*`
     );

     if (!result) { 
       return <p>Initializing...</p>; // Or a loading spinner
     }

     const { loading, error, data } = result; 

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     console.log(data);

     return (
       <>
         <div id="blog">
           <div className="w-full bg-extraClr py-24">
             <div className="max-w-[1240px] mx-auto">
               <BlogContent data={data} /> {/* Pass data to BlogContent */}
             </div>
           </div>
         </div>
       </>
     );
   };

   export default Blog;