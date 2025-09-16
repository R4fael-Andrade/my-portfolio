import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
    return (
        <section data-aos="fade-up"  id="contact" className="bg-gray-800 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Conctact
                    <span className="text-purple-600"> Me</span>
                </h2>
                <p className="text-gray-300 mb-10">
                    I'm open to new opportunities and projects. Feel free to contact me!
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="flex items-center bg-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-purple-500/30 transition">
                        <Mail className="text-purple-400 w-8 h-8 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg text-white">Email</h3>
                            <p className="text-gray-300">rafael.sousadrd@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-purple-500/30 transition">
                        <Github className="text-purple-400 w-8 h-8 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg text-white">GitHub</h3>
                            <a
                                href="https://github.com/R4fael-Andrade/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline"
                            >
                                Meu GitHub
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center bg-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-purple-500/30 transition">
                        <Linkedin className="text-purple-400 w-8 h-8 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg text-white">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/rafael-andrade-48b4a9293/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline"
                            >
                                Rafael Andrade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
