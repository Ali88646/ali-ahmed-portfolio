import { FiArrowRight } from "react-icons/fi";
import Button from "../button/Button";

function About() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-7">
      <div className="sm:w-1/2 w-full bg-green-400">image here</div>
      <div className="sm:w-1/2 w-full flex flex-col gap-3">
        <h2 className="text-4xl font-semibold sm:w-3/4  text-headingsColor">
          Digital Experiences with Passion
        </h2>
        <p className="text-textColor sm:w-3/4 text-lg">
          Ever since I was young, I have been fascinated by the intersection of
          design and technology this curiosity led me to learn development.
        </p>
        <p className="text-textColor sm:w-3/4 text-lg">
          As I was attatched with digital things, I found myself for this job
        </p>
        <div className="sm:w-1/2 w-3/4 gap-3 flex h-12 mt-[2rem]">
          <Button text={"Lets Talk"} icon={<FiArrowRight />} bgLayer={true} />
          <Button
            text={"Our Services"}
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
            bgLayer={false}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
