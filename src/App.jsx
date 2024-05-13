import About from "./about/About";
import HeroSection from "./heroSection/HeroSection";
import MyWorks from "./myWorks/MyWorks";
import Navbar from "./navBar/Navbar";

function App() {
  return (
    <main className="w-full bg-bgColor ">
      <Navbar />
      <div className="wrapper mx-auto  w-[90%] sm:w-[80%]">
        <HeroSection />
        <About />
        <MyWorks />
      </div>
    </main>
  );
}

export default App;
