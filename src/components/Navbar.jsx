import logo from "../assets/aldahirLogoDark_resized.jpeg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className= "mb-5 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            < img src={logo} alt="logo"/>
        </div>
        
        {/* Íconos de redes sociales con hipervínculos */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/aldahir-lascano-58bb88319/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/LascanoAldahir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/aldahirlascano/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          <FaInstagram />
        </a>
      </div>

    </nav>
  )
}

export default Navbar
