import profile from "../../assets/perfil-portfolio.jfif";
import SocialButtons from "../SocialButtons/SocialButtons";
import TypewriterText from "../RotatingText/TypewriterText";

const Description = () => {
    return (
        <div data-aos="fade-up" className="lg:h-screen  mt-8 lg:mt-0  flex lg:flex-row  flex-col items-center justify-center gap-8 px-4">
            <div className="max-w-[80%] lg:max-w-[800px] md:text-left text-center">
                <h1 className="text-4xl font-bold">Rafael Sousa</h1>
                <TypewriterText />
                <p className="mt-4 text-gray-400 leading-relaxed">
                    I am an Information Technology professional with a background in Systems Analysis and
                    Development and experience as a Quality Analyst. I work in software quality assurance
                    through manual, integration, and automation testing, using
                    tools such as Postman and Playwright. I have experience in agile methodologies (Scrum and BDD),
                    as well as knowledge of relational and NoSQL databases, such as SQL Server and MongoDB.
                    I constantly strive to improve my technical skills and collaborate with multidisciplinary
                    teams, contributing to secure, efficient deliveries focused on the best
                    user experience.
                </p>
                    <SocialButtons />
            </div>
            <div className="relative flex-shrink-0">
                <div className="absolute border-purple-600 inset-0 rounded-full border-4 border-t-gradient-red border-r-transparent border-l-transparent animate-spin opacity-70"></div>
                <img
                    src={profile}
                    alt="Foto de perfil"
                    className="relative w-60 h-60 md:w-100 md:h-100 rounded-full object-cover shadow-2xl p-1 m-3"
                />
            </div>
        </div>
    );
};

export default Description;
