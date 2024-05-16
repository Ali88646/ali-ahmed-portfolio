import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
function Skills() {
  const textAnimRef = useRef(null);
  useGSAP(() => {
    const scrollingText = textAnimRef.current;
    gsap.set(scrollingText, { xPercent: 0 });
    const animation = gsap.to(scrollingText, {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
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
    <div className=" w-full overflow-x-hidden sm:text-[10vw] ">
      <div ref={textAnimRef} className="skills-box flex w-full gap-6">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Javascript</span>
        <span>React.js</span>
        <span>gSAP</span>
        <span>Tailwind</span>
      </div>
    </div>
  );
}

export default Skills;
