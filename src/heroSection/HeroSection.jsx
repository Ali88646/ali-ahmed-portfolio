import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navBarData } from "../data";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".name-section", {});
  }, []);
  return (
    <div className=" flex w-full  items-center  pt-0  sm:h-[80vh] sm:justify-between sm:pt-10 ">
      {/* left */}
      <div className="name-section mb-10 flex w-full flex-col gap-1 sm:mb-auto sm:w-2/3  sm:px-20">
        <div className="social-icons flex w-full items-center justify-start gap-3 text-xl text-textColor ">
          <div className="cursor-pointer duration-200 hover:text-headingsColor">
            <FaInstagram />
          </div>
          <div className=" duration-200 hover:text-headingsColor">
            <FaFacebookSquare />
          </div>
          <div className="cursor-pointer duration-200 hover:text-headingsColor">
            <FaTwitter />
          </div>
          <div className="cursor-pointer duration-200 hover:text-headingsColor">
            <FaLinkedin />
          </div>
        </div>
        <div className="name relative mt-2 w-full ">
          <h1 className="text-[14vw] font-semibold sm:text-8xl">Hey there,</h1>
          <h1 className="hero-name  text-[14vw] font-semibold sm:text-8xl">
            it's Ali Ahmed
          </h1>

          <h2 className=" mb-2 text-2xl font-semibold text-textColor sm:mb-4 sm:text-4xl">
            Frontend web developer
          </h2>
          <div className="hr-line absolute bottom-0 left-0 h-[2px] w-3/4 bg-primaryColor  text-textColor sm:h-1 "></div>
        </div>
        <p className="text-lg text-textColor sm:w-3/4 sm:text-xl">
          Welcome to my creative corner! I am Ali Ahmed, a passionate frontend
          web developer
        </p>
        <div className="sm:sh-12 mt-[2rem] flex h-10 w-full gap-3 sm:h-12   sm:w-[55%]">
          <Button text={"Say Hello"} icon={<FiArrowRight />} layer={true} />
          <Button
            text={"My Portfolio"}
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
            layer={false}
          />
        </div>
      </div>
      {/* right */}
      <div className=" hidden h-3/4 w-1/4 items-center justify-end  sm:flex">
        <ul className="nav-items hidden h-full w-[10%] flex-col  items-center  sm:flex">
          {navBarData.map((item, i) => {
            return (
              <>
                <li
                  key={i}
                  className="group relative overflow-hidden font-bold text-gray-500  duration-300 hover:text-primaryColor "
                >
                  <a href="#" className="text-sm ">
                    {item}
                  </a>
                  {/* <div className="absolute bottom-0 left-[-100%] h-[1px] w-full bg-headingsColor duration-300 group-hover:left-0"></div> */}
                </li>
                {i < navBarData.length - 1 && (
                  <div className="h-8 w-[2px] bg-gray-300"></div>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
