import { func } from "prop-types";


export default function HeaderComponent(){
    return(
        <header   style={{
            backgroundImage: `url(/chalkboard.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}className=" text-sky-400 h-1/5 text-8xl font-bold text-center items-center flex ">FPL TRACKER</header>

    )
}