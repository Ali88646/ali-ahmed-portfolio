function Button({ text, icon, bgColor, textColor, bgLayer }) {
  return (
    <button
      className={`w-full h-full  flex items-center rounded-full px-4  border-headingsColor border-[1px] gap-2 group  duration-200 hover:scale-95 relative overflow-hidden ${bgColor} ${
        bgLayer ? "" : "hover:bg-bgColor"
      }`}
    >
      <span
        className={`${
          bgLayer
            ? "group-hover:text-bgColor"
            : "group-hover:text-headingsColor text-bgColor"
        }`}
      >
        {text}
      </span>
      <div className=" text-2xl text-textColor group-hover:translate-x-2 group-hover:text-bgColor duration-200">
        {icon}
      </div>
      {bgLayer && (
        <div className="w-full h-full absolute top-0 z-[-2] left-[-100%] duration-300 rounded-full bg-primaryColor group-hover:left-0"></div>
      )}
    </button>
  );
}

export default Button;
