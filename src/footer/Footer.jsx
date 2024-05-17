import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className="mt-10 flex h-[5rem] w-full items-center justify-between overflow-hidden bg-headingsColor px-[5%]">
      <div className="h-full w-1/2 bg-green-300">
        <Logo width={"w-1/2"} />
      </div>
      <div className="text-white"></div>
    </div>
  );
}

export default Footer;
