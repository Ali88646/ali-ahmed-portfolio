import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";
function ConnectWithMe() {
  return (
    <div className="bord mt-10 flex w-full justify-center">
      <div className="flex w-[50%] flex-col items-center justify-center">
        <div className="get-to-work flex flex-col justify-center">
          <h2 className="leading-20 text-center text-6xl font-semibold">
            Have a project in
          </h2>
          <h2 className="leading-20 text-center text-6xl font-semibold">
            mind? Let's get to
          </h2>
          <h2 className="leading-20 text-center text-6xl font-semibold">
            Work
          </h2>
        </div>
        <div className="connect-me-btn mt-10 flex h-[3rem] w-4/6 gap-5">
          <Button text={"Say Hello"} icon={<FiArrowRight />} layer={true} />
          <Button
            text={"My Resume"}
            bgColor={"bg-primaryColor"}
            textColor={"text-white"}
          />
        </div>
      </div>
    </div>
  );
}

export default ConnectWithMe;
