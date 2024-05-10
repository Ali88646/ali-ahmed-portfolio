import Button from "../button/Button";
import { navBarData } from "../data";
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full  flex h-[7rem] justify-between px-[5%] py-[2%]  items-center">
      <div className="logo-name w-20% flex h-full items-center gap-2">
        <span className="text-3xl font-bold text-headingsColor">Ali</span>
        <span className="text-3xl font-bold text-textColor"> Ahmed</span>
      </div>
      <ul className="nav-items w-30% sm:flex hidden gap-5 h-full items-center">
        {navBarData.map((item, i) => {
          return (
            <li
              key={i}
              className="text-headingsColor hover:text-primaryColor font-bold duration-300 relative group overflow-hidden"
            >
              <a href="#">{item}</a>
              <div className="absolute bottom-0 left-[-100%] w-full h-[1px] bg-headingsColor group-hover:left-0 duration-300"></div>
            </li>
          );
        })}
      </ul>
      <div className="btn w-[10%] h-full hidden sm:block">
        <Button text={"Lets Talk"} icon={<FiArrowRight />} bgLayer={true} />
      </div>
    </nav>
  );
};

export default Navbar;
