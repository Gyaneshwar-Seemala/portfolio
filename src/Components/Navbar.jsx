import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="font-Inter text-5xl font-bold text-white mx-2 w-10">GS</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/gyaneshwar-seemala-492b3b252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Gyaneshwar-Seemala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:Johnnyseemala04@gmail.com">
          <IoMdMailOpen />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
