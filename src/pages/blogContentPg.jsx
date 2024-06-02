const BlogContentPg = () => {
  const blogContentData = [
    {
      id: 1,
      title: "Blog 1",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, facilis! Distinctio eum fugit praesentium obcaecati!",
      coverImg: "https://i.postimg.cc/vmW76GpB/20231213-074326.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adquo magnam facere provident vitae cupiditate, eaque voluptates,expedita aliquid facilis quae eligendi quia earum in hic. Fugafacere ab cupiditate excepturi non magnam placeat officiis, ducimus,voluptate quam exercitationem esse assumenda accusantium dictalaudantium. Dolores sapiente assumenda quos vitae. Rem, vitae.Accusantium architecto maxime et excepturi nihil optio delenitiducimus tempore? Ipsum unde error omnis sapiente voluptatemexplicabo labore ut impedit officiis! Nemo quisquam laudantiumdolore error fugit minus cupiditate quas, alias vel deserunt undeimpedit aut quia tenetur voluptatibus architecto ipsa quod quibusdamamet facere repellat doloremque voluptas!",
      authorName: "Brown Patience",
      authorImg: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
      authorDesc: "Ghost Writer / Author",
    },
  ];
  return (
    <>
      <div className="" id="blog-content">
        <div className="w-full text-secondary bg-extraClr py-24">
          <div className="max-w-[1240px] mx-auto">
            {blogContentData.map((item) => (
              <div
                key={item.id}
                className="grid lg:grid-cols-3 sm:grid-cols-1 ss-grid-cols-1   gap-8 px-4 text-secondary"
              >
                <div
                  key={item.id}
                  className="bg-primary rounded-lg col-span-2 overflow-hidden drop-shadow-md "
                >
                  <img
                    className="h-[30rem] w-full object-cover"
                    src={item.coverImg}
                    alt=""
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-accent text-2xl my-1">
                      {item.title}
                    </h3>
                    <h6 className="text-xl my-6">{item.desc}</h6>
                    <p className="">{item.content}</p>
                  </div>
                </div>

                <div className="w-full rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md max-h-[17.625rem] ">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentPg;
