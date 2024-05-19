function Logo({ width }) {
  return (
    <div className={`logo-name flex ${width} h-full w-1/3 items-center gap-2`}>
      <img
        src="\images\ali-logo.png"
        alt="ali-logo"
        className="w-full sm:w-3/5"
      />
    </div>
  );
}

export default Logo;
