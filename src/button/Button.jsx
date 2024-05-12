function Button({ text, icon, bgColor, layer }) {
  return (
    <button
      className={`group  relative flex items-center justify-between  overflow-hidden rounded-full border-[1px] px-3  sm:h-full sm:w-1/2 ${bgColor} ${
        layer
          ? "border-2 border-primaryColor duration-200 hover:border-bgColor"
          : "border-2 border-bgColor duration-200 hover:border-primaryColor hover:bg-bgColor"
      }`}
    >
      <span
        className={`${
          layer
            ? "text-headingsColor group-hover:z-20 group-hover:text-bgColor"
            : "text-bgColor group-hover:z-20 group-hover:text-headingsColor"
        }`}
      >
        {text}
      </span>
      <div className=" relative text-2xl text-textColor duration-200 group-hover:z-20 group-hover:translate-x-2 group-hover:text-bgColor">
        {icon}
      </div>
      {layer && (
        <div className="absolute left-[-100%] top-0 h-full  w-full rounded-full bg-primaryColor duration-200 ease-out group-hover:left-0 group-hover:z-10"></div>
      )}
    </button>
  );
}

export default Button;
