const MenuBar = () => {
  return (
    <>
      <div className="  bg-black text-white mx-auto p-4 flex justify-between items-center fixed w-full top-0">
        <h1 className="text-3xl font-medium">
          <a href="" id="hero">
            AOMM
          </a>
        </h1>
        <nav
          className="hidden sm:block space-x-8 text-xl p-3"
          aria-label="main"
        >
          <a href="http://" className="hover:opacity-90">
            home
          </a>
          <a href="http://" className="hover:opacity-90">
            about
          </a>
          <a href="http://" className="hover:opacity-90">
            services
          </a>
          <a href="http://" className="hover:opacity-90">
            contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MenuBar;
