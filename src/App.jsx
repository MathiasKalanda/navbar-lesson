import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import MobileMenu from "./components/MobileMenu";
import CardMain from "./components/CardMain";

const App = () => {
  return (
    <>
      <nav>
        <div className="hidden md:block">
          <MenuBar />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
      <Hero />
    </>
  );
};

export default App;
