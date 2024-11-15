import logo from "../assets/aldahirLogoDark_resized.jpeg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className= " mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items center">
            <img src={logo} alt="logo" className="w-[60px] h-[32px]"/>
        </div>
        
        <div className="m-8 flex items-center justify-center gap-4 text-2x1 ">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Navbar
