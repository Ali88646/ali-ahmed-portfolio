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
    gsap.from(".name-section", {
      y: 150,
      duration: 0.75,
    });
    const elements = gsap.utils.toArray(".hero-name");
    elements.forEach((elem, i) => {
      gsap.from(elem, {
        y: 100,
        opacity: 0,
        duration: 0.7 * i + 0.45,
        ease: "elastic.out(1,1)",
      });
    });
  }, []);
  return (
    <div className=" flex w-full  items-center  pt-0  sm:h-[65vh] sm:justify-between sm:pt-10 ">
      {/* left */}
      <div className="name-section mb-10 flex w-full flex-col justify-center gap-1 sm:h-screen   sm:w-2/3  sm:px-20">
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
          <h1 className="hero-name text-[12vw] font-semibold sm:text-8xl">
            Hey there,
          </h1>
          <h1 className="hero-name  text-[12vw] font-semibold sm:text-8xl">
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
            text={"My Resume"}
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
              <div key={i} className="flex flex-col items-center ">
                <li className="group relative  font-bold text-gray-500 duration-300 hover:text-primaryColor">
                  <a
                    href="#"
                    className="relative text-2xl duration-100  hover:text-4xl hover:text-primaryColor"
                  >
                    {<item.icon />}
                  </a>
                  <p className="group-hover:opacity-1 absolute -left-24 top-1  rounded-full bg-primaryColor px-4 text-[14px]  font-light text-bgColor opacity-0">
                    {item.title}
                  </p>
                </li>
                {i < navBarData.length - 1 && (
                  <div className="h-8 w-[2px] bg-gray-300"></div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
