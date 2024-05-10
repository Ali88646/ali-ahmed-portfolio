import About from "./about/About";
import HeroSection from "./heroSection/HeroSection";
import Navbar from "./navBar/Navbar";

function App() {
  return (
    <main className="w-full bg-bgColor">
      <Navbar />
      <div className="wrapper sm:w-[85%] w-[90%] mx-auto  h-[50vh]">
        <HeroSection />
        <About />
      </div>
    </main>
  );
}

export default App;
