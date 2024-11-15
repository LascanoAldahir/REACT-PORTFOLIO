import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/aldahirProfile.jpeg"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 px-14 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Aldahir Lascano
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4x1 tracking-tight text-transparent">Full Stack Developer
                    </span> 
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter" >{HERO_CONTENT}                        
                    </p>
                </div>
            </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="felx justify-center">
                <img src={profilePic} alt="Aldahir Lascano"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
