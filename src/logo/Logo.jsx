function Logo({ width }) {
  return (
    <div
      className={`logo-name flex h-full ${width} items-center gap-2 sm:w-[20%]  `}
    >
      <img
        src="src\assets\images\ali-logo.png"
        alt="ali-logo"
        className="w-full sm:w-3/5"
      />
    </div>
  );
}

export default Logo;
