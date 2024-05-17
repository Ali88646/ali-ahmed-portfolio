import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
function Skills() {
  const textAnimRef = useRef(null);
  useGSAP(() => {
    const scrollingText = textAnimRef.current;
    gsap.set(scrollingText, { xPercent: 0 });
    const animation = gsap.to(scrollingText, {
      xPercent: -218,
      repeat: -1,
      duration: 15,
      ease: "none",
    });
    return () => {
      animation.kill();
    };
    // gsap.to(scrollingText, {
    //   xPercent: -100,
    //   repeat: -1,
    //   duration: 5,
    //   ease: "linear",
    // });
  }, []);
  return (
    <div className=" my-10 w-full overflow-x-hidden text-[15.5vw] sm:mt-0 sm:text-[10vw] ">
      <div ref={textAnimRef} className="skills-box flex w-full gap-3">
        <p className=" skills-text text-nowrap">
          HTML5 CSS3 Javascript React.js gSAP Tailwind
        </p>
        <p className="skills-text text-nowrap">
          HTML5 CSS3 Javascript React.js gSAP Tailwind
        </p>
      </div>
    </div>
  );
}

export default Skills;
