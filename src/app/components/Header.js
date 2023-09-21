import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(/tacticsboardsmall.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-row justify-between"
    >
      <header className="  text-white text-lg h-8 font-extrabold items-center flex md:text-4xl md:h-20 lg:text-5xl ">
        FPL <span className="text-blue-500 ml-2">TRACKER</span>
      </header>
      <ThemeButton/>
    </div>
  );
}

/*
 style={{
            backgroundImage: `url(/tacticsboardsmall.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}

*/
