const Experience = () => {
    return (
        <div  data-aos="fade-up"  className="lg:max-w-[1200px] max-w-[90%] mt-10 py-4 m-auto" id="resume">
            <h1 className="text-center text-3xl font-bold">My
                <span className="text-purple-600"> Experiences</span>
            </h1>
            <p className="py-5">
                I'm an Information Technology professional with a degree in Systems Analysis and Development and solid experience in Software Quality. I perform manual, integration, and automation testing using tools such as Postman, Playwright, Cypress, and Selenium, always focusing on ensuring secure, high-quality deliveries.
            </p>
            <p className="pb-5">
                During my time as a Quality Analyst at Fitbank, I gained practical experience in test automation, BDD application, C# and React in functional scenarios, and extensive experience in agile environments with Scrum. I also have expertise in relational and NoSQL databases (SQL Server and MongoDB), Redux integration, messaging with RabbitMQ, and development best practices such as SOLID and Clean Code.
            </p>
            <p className="pb-5">
                Prior to that, I worked in the NOC department at Vexnet Telecom, where I was responsible for proactive network monitoring, log analysis, opening and tracking technical calls, and collaborating on infrastructure deployments and critical incident resolution. This experience provided me with a solid foundation in networking, monitoring, and advanced technical support.
            </p>

            <div data-aos="fade-up" className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-purple-600/30 transition duration-300">
                <span className="text-purple-400 font-bold">2024 - 2025</span>
                <h3 className="font-bold text-2xl text-white mb-4">
                    Quality Analyst | Fitbank Electronic Payments
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li className="hover:text-purple-400 transition duration-200">
                        Execution and documentation of manual and integration tests.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Creation and maintenance of tests for APIs using Postman.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Using C# and React in functional testing scenarios.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Application of BDD to specify system behavior.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Collaboration with development teams in an agile environment with Scrum.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Using Redux to validate state flow behaviors.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Test automation using Playwright, ensuring greater coverage and agility in
validations.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Experience with SǪL Server for data query, manipulation and validation.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Experience with MongoDB, performing tests and verifications on NoSǪL databases. 
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Ability to debug applications to identify and understand the origin of bugs.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Active participation in agile ceremonies, code reviews, and quality assurance in deliveries.
                    </li>
                </ul>
            </div>

            <div data-aos="fade-up" className="bg-gray-700 mt-8 p-5 rounded-lg shadow-lg hover:shadow-purple-600/30 transition duration-300">
                <span className="text-purple-400 font-bold">2019 - 2024</span>
                <h3 className="font-bold text-2xl text-white mb-4">
                    NOC Sector Assistant | Internet Provider Vexnet Telecom
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li className="hover:text-purple-400 transition duration-200">
                        Proactive monitoring of networks and systems using tools such as Zabbix or
Grafana.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Opening, monitoring, and closing technical calls based on established SLAs.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Detailed record of occurrences and failures in the ticket system.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Support in documenting technical procedures and network standards
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Log analysis to identify failures and abnormal behavior in the network. 
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Support in managing critical incidents with escalation to level 2 and 3 support teams.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Participation in scheduled maintenance focused on minimizing impact to users.
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Assistance in implementing new routes, VLANs, ǪoS policies and routing adjustments.  
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Firmware update and configuration backup on network equipment. 
                    </li>
                    <li className="hover:text-purple-400 transition duration-200">
                        Availability and performance testing after infrastructure changes
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Experience