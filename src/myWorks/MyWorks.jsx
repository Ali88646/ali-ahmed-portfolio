import { myWorks } from "../data";
import { FiArrowRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ScrollTrigger } from "gsap/all";

function MyWorks() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counterTimer = setInterval(() => {
      setCounter((counter) => (counter < 1 ? counter + 1 : 0));
    }, 3000);
    return () => clearInterval(counterTimer);
  }, []);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".card-div");
    elements.forEach((elem) => {
      gsap.from(elem, {
        y: 100,
        opacity: 0,
        scale: 0.75,
        duration: 0.75,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom 90%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div className="mt-13 flex w-full flex-wrap justify-center gap-5">
      {myWorks.map((work, i) => {
        return (
          <div
            key={i + 1}
            className={`card-div ${(i + 1) % 3 !== 0 ? "w-full sm:w-[40%]" : "h-[30rem] w-full sm:w-[82%]"} group  flex  cursor-pointer flex-col gap-1 rounded-md sm:mb-3 `}
          >
            <div className="img-div  w-full gap-6 overflow-hidden rounded-2xl shadow-boxShadow">
              <img
                src={i < 2 ? work.img_url[counter] : work.img_url[0]}
                alt={work.title}
                className={`${i < 2 && "work-img"}  w-full scale-105 duration-200 hover:scale-110 sm:h-[18rem]`}
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="my-5 flex w-[70%] flex-col ">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p>{work.type}</p>
              </div>
              <div className="flex w-[30%] items-center justify-end ">
                <button
                  className={`group-card-btn flex h-[8vw] hover:border-primaryColor hover:bg-primaryColor sm:h-[3vw]  ${(i + 1) % 3 !== 0 ? "w-1/2  sm:w-[50%]" : "w-1/2 sm:w-[25%]"}  items-center justify-center rounded-full border-2 border-textColor p-2 text-2xl text-textColor duration-200`}
                >
                  <a href={work.link} target="_blank" className="w-full">
                    <div className="card-btn w-full">
                      <FiArrowRight />
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyWorks;
