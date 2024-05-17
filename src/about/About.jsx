import { FiArrowRight } from "react-icons/fi";

import Button from "../button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function About() {
  useGSAP(() => {
    gsap.from(".about-section", {
      y: 250,
      x: -250,

      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        scroller: "body",
        start: "top 85%",
        end: "70% 85%",
        // markers: true,
        scrub: 2,
        duration: 1,
      },
    });
  }, []);
  return (
    <div className="about-section  sm:mt-10  flex w-full flex-col gap-7  overflow-hidden  rounded-3xl sm:flex-row sm:items-center sm:justify-center">
      <div className="flex w-full items-center justify-center sm:w-1/2 ">
        <img
          src="src\assets\images\Creative-thinking-amico.png"
          alt="about-img"
          className="w-3/4"
        />
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-1/2">
        <h2 className=" px-3 text-3xl font-semibold text-headingsColor  sm:w-3/4 sm:text-4xl">
          Digital Experiences with Passion
        </h2>
        <p className="px-3 text-lg text-textColor sm:w-3/4 sm:text-xl">
          Ever since I was young, I have been fascinated by the intersection of
          design and technology this curiosity led me to learn development.
        </p>
        <p className="text:lg px-3 text-textColor sm:w-3/4 sm:text-xl">
          As I was attatched with digital things, I found myself for this job
        </p>
        <div className="mt-5 flex h-10 w-full gap-3 px-3 sm:h-12   sm:w-3/4">
          <Button text={"Lets Talk"} icon={<FiArrowRight />} layer={true} />
          <Button
            text={"Our Services"}
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
            layer={false}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
