import { myWorks } from "../data";
import { FiArrowRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

function MyWorks() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-div",
        start: "top 70%",
        end: "bottom 70%",
        duration: 0.5,
        // markers: true,
        scrub: true,
      },
    });
    tl.from(".card-div", {
      y: 100,
      // opacity: 0,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="mt-13 flex w-full flex-wrap justify-center gap-5">
      {myWorks.map((work, i) => {
        return (
          <div
            key={i}
            className={`card-div ${(i + 1) % 3 !== 0 ? "w-full sm:w-[40%]" : "h-[30rem] w-full sm:w-[82%]"} group  flex  cursor-pointer flex-col gap-1 rounded-md sm:mb-3 `}
          >
            <div className="img-div  w-full gap-6 overflow-hidden rounded-2xl bg-red-400   shadow-boxShadow ">
              <img
                src={work.img_url[0]}
                alt={work.title}
                className="w-full scale-105 duration-200 hover:scale-110"
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="my-5 flex w-[70%] flex-col ">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p>{work.type}</p>
              </div>
              <div className="flex w-[30%] items-center justify-end ">
                <button
                  className={`group-card-btn flex h-[8vw] hover:border-primaryColor hover:bg-primaryColor sm:h-[3vw]  ${(i + 1) % 3 !== 0 ? "w-[15%] sm:w-[50%]" : "w-[15%] sm:w-[50%]"}  items-center justify-center rounded-full border-2 border-textColor p-2 text-2xl text-textColor duration-200`}
                >
                  <div className="card-btn w-full">
                    <FiArrowRight />
                  </div>
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
