import { FaDatabase, FaServer, FaCode, FaCloud, FaFlask, FaProjectDiagram } from "react-icons/fa";

const skills = [
    {
        title: "Programming Languages",
        icon: <FaCode />,
        items: ["C#", "TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Backend & Frameworks",
        icon: <FaServer />,
        items: [".NET", "NodeJS", "RabbitMQ"],
    },
    {
        title: "Databases",
        icon: <FaDatabase />,
        items: ["SQL Server", "Postgres", "MongoDB"]
    },
    {
        title: "DevOps & Cloud",
        icon: <FaCloud />,
        items: ["Azure DevOps"]
    },
    {
        title: "Testing Tools",
        icon: <FaFlask />,
        items: ["Postman", "Playwright", "Cypress", "Selenium"]
    },
    {
        title: "Methodologies",
        icon: <FaProjectDiagram />,
        items: ["Scrum/Kanban", "Clean Code"]
    },
];

const SkillsGrid = () => {
    return (
        <div  data-aos="fade-up" >
            <h1 id="skills" className="font-bold text-center py-9 text-3xl">
                My  Skills &
                <span className="text-purple-600"> Technologies</span>
            </h1>
            <div className="lg:max-w-[1200px] max-w-[90%]  py-4 grid grid-cols-1 lg:grid-cols-3 gap-6 m-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group p-6 rounded-lg shadow-md flex flex-col space-y-4
                        border hover:border-purple-500 bg-gray-700 text-white transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-2xl group group-hover:text-purple-600">{skill.icon}</span>
                            <span className="p-2 rounded-full bg-gray-700 group-hover:bg-purple-500 cursor-pointer transition">
                                ➔
                            </span>
                        </div>
                        <h3 className="font-bold text-lg transition group-hover:text-purple-600">
                            {skill.title}
                        </h3>
                        <ul className="space-y-1">
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsGrid;
