import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <div className="bg-black text-white h-[10dvh] flex justify-between items-center px-4">
        <h1 className="text-3xl font-medium">
          <a href="" id="hero">
            AOMM
          </a>
        </h1>
        <button
          onClick={handleMenu}
          id="Hhamburger-button"
          className="text-3xl cursor-pointer"
        >
          {open ? (
            <span className="text-3xl self-end px-6">&times;</span>
          ) : (
            <span className="text-3xl px-6 cursor-pointer">&#9776;</span>
          )}
        </button>
      </div>
      {open && (
        <div>
          <nav
            className="flex flex-col min-h-screen items-center py-8 bg-black text-white"
            aria-label="mobile"
          >
            <a href="" className="w-full text-center py-6 hover:opacity-90">
              Home
            </a>
            <a href="" className="w-full text-center py-6 hover:opacity-90">
              About
            </a>
            <a href="" className="w-full text-center py-6 hover:opacity-90">
              Service
            </a>
            <a href="" className="w-full text-center py-6 hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
