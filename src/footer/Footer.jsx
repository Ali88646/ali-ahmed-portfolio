import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className="mt-[5rem] flex h-[5rem] w-full items-center justify-between overflow-hidden rounded-3xl bg-gray-900 px-[5%]">
      <div className="g-green-300 h-full w-1/2">
        <Logo width={"sm:w-[30%]"} />
      </div>
      <div className="text-white"></div>
    </div>
  );
}

export default Footer;
