import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button/Button";

function HeroSection() {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-3 gap-7 sm:p-10 p-3 h-[80vh]">
      {/* left */}
      <div className="sm:w-1/2 w-full flex flex-col gap-3">
        <div className="social-icons w-full flex items-center justify-start gap-3 text-2xl">
          <FaInstagram />
          <FaFacebookSquare />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <div className="name w-full relative sm:mt-6 mt-3">
          <h1 className="text-5xl font-semibold">Hey There,</h1>
          <h1 className="text-5xl font-semibold my-4">it's Ali Ahmed</h1>
          <div className="absolute bottom-0 left-0 w-full sm:w-1/2 h-1 bg-primaryColor "></div>
        </div>
        <p className="text-lg text-textColor sm:w-3/4">
          Welcome to my creative corner! I am Ali Ahmed, a passionate frontend
          web developer
        </p>
        <div className="sm:w-1/2 w-3/4 gap-3 flex h-12 mt-[2rem]">
          <Button text={"Say Hello"} icon={<FiArrowRight />} bgLayer={true} />
          <Button
            text={"My Portfolio"}
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
            bgLayer={false}
          />
        </div>
      </div>
      {/* right */}
      <div className="sm:w-1/2 w-full hidden sm:block  bg-green-300">
        {/* <img src="#" alt="profile-img" /> */}
        image here
      </div>
    </div>
  );
}

export default HeroSection;
