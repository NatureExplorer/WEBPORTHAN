import React from "react";
import { ChartNoAxesCombined, Workflow , Brain, Users} from 'lucide-react';

const About = ({ hasAnimated }) => {
        const features = [
            {
            icon: <ChartNoAxesCombined className="w-8 h-8 mb-4 text-black" />,
            title: "Data Enthusiast",
            description: "Passionate about turning data into insights."
        },
        {
            icon: <Workflow className="w-8 h-8 mb-4 text-black" />,
            title: "Pipeline Builder",
            description: "Building reliable and automated data workflows."
        },
        {
            icon: <Brain className="w-8 h-8 mb-4 text-black" />,
            title: "Analytical Thinker",
            description: "Solving problems through data-driven analysis."
        },
        {
            icon: <Users className="w-8 h-8 mb-4 text-black" />,
            title: "Team Collaborator",
            description: "Working well with others toward shared goals."
        },
    ];

    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                I am a Data Science graduate from Institut Teknologi Sumatera (ITERA) with a strong focus on Data Analytics and Data Engineering. 
                                I have gained hands-on experience as a data analyst intern, census officer, and practicum teaching assistant.
                                Alongside this, I have worked on projects ranging from building automated ETL pipelines. 
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                I am eager to build a career as a data analyst or data engineer, designing reliable data pipelines and turning raw data into insights that support better decisions. 
                                My core competencies include Python, SQL, R, Apache Airflow, Apache Spark, Docker, Power BI, and Looker Studio, supported by analytical thinking, leadership, teamwork, and project management skills.
                            </p>
                            {/* <div className="flex space-x-4">
                                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                            </div> */}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    {feature.icon}
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;