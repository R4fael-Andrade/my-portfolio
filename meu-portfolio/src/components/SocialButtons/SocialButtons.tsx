import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import cvFile from "../../assets/curriculo.pdf";

const SocialButtons = () => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-4 mt-5">
      <a
        href={cvFile}
        download="Rafael_Sousa_CV.pdf"
        className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-500 transition-colors duration-300"
      >
        Download CV
      </a>

      <a
        href="https://github.com/R4fael-Andrade"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/rafael-andrade-48b4a9293/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:rafael.sousadrd@gmail.com"
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default SocialButtons;
