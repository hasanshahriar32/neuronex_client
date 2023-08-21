const Achievement = () => {
  return (
    <div className=" flex justify-center flex-col-reverse items-center">
      <div className="flex flex-col justify-center gap-2 m-[5%]">
        <h1 className="text-5xl font-bold text-center mt-10">Certificates</h1>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full  pt-15">
            <img
              src="https://i.ibb.co/yhYgXdp/Neuronex.jpg"
              className="w-full"
            />
            <div className="absolute pt-15 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full pt-15">
            <img
              src="https://i.ibb.co/nbs4WhP/Shahriar-Hasan.jpg"
              className="w-full"
            />
            <div className="absolute flex pt-15 justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 z-10">
        <h1 className="text-5xl font-bold text-center md:text-left mb-10">
          Achievement
        </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsjinnovationbangladesh%2Fposts%2F755492423248336&show_text=true&width=500"
          className="w-screen px-[5%] sm:w-[550px] h-[696px] hidden sm:block"
          style={{
            border: "none",
            overflow: "hidden",
            // backgroundColor: "transparent !!important",
          }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsjinnovationbangladesh%2Fposts%2F755492423248336&show_text=true&width=300"
          className=" px-[5%]  w-[389px] rounded-lg h-[565px] block sm:hidden"
          style={{
            border: "none",
            overflow: "hidden",
            // backgroundColor: "transparent !!important",
          }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Achievement;
