const Hero = () => {
  return (
    <>
      <div className=" bg-red-300 w-full h-[60vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-4xl lg:text-5xl xl:text-6xl text-red-900 text-3xl py-4">
            AOMM TECHNOLOGIES
          </h1>
          <p className="mx-7 text-center font-medium">
            ipsum dolor sit amet consectetur, adipisicing elit. Nihil doloremque
            enim deleniti quae ullam nemo.
          </p>
          <div
            className=" my-4 flex flex-col gap-3 sm:inline w-full sm:w-auto
          "
          >
            <button className="p-4 mx-4 font-medium bg-slate-400 rounded-xl ">
              contact us
            </button>
            <button className="p-4 mx-4 font-medium bg-slate-400 rounded-xl ">
              contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
