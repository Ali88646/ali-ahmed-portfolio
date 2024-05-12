import Button from "../button/Button";
import { navBarData } from "../data";
import { FiArrowRight } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import gsap from "gsap";

// component start ==>
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.to(".sm-nav-items", {
      y: isOpen ? "0rem" : "10rem",
      opacity: isOpen ? 1 : 0,
      duration: 0.3,
      stagger: 0.1,
    });
  }, [isOpen]);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className=" flex h-[6.5rem] w-full items-center justify-between  px-[5%] py-[2%]">
      <div className="logo-name flex h-full w-1/3 items-center gap-2 sm:w-[20%] ">
        <img
          src="src\assets\images\ali-logo.png"
          alt="ali-logo"
          className="w-full sm:w-3/5"
        />
      </div>

      <div className="btn hidden h-full w-[20%] sm:block">
        <Button text={`Let's Talk`} icon={<FiArrowRight />} layer={true} />
      </div>
      <div
        className="menu-btn flex h-full w-[10%] cursor-pointer  items-center text-5xl hover:text-primaryColor sm:hidden"
        onClick={handleIsOpen}
      >
        <MdMenu />
      </div>
      <div
        className={`mobile-nav absolute left-0 rounded-b-lg  ${isOpen ? "top-0" : "top-[-120%]"} ease z-50 h-screen w-screen bg-primaryColor duration-500 sm:hidden`}
      >
        <div
          className="close-icon flex w-full cursor-pointer justify-end p-10 text-5xl text-bgColor hover:text-headingsColor"
          onClick={handleIsOpen}
        >
          <IoClose />
        </div>
        <div className="w-full self-center text-bgColor">
          <ul className="center mt-5 flex w-full flex-col items-center gap-5">
            {navBarData.map((item, i) => (
              <li
                className={
                  " sm-nav-items flex w-full  items-center justify-center   duration-300 hover:text-headingsColor"
                }
                key={i}
                onClick={handleIsOpen}
              >
                <a href="#" className="text-5xl font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
