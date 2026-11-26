import React from "react";
import { skills } from '../data/skills';

const SkillMarquee = ({ skillGroup, index }) => {
    return (
        <div className="bg-white py-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-5 text-center">
                {skillGroup.category}
            </h3>
            <div
                className="skills-marquee overflow-hidden"
                role="region"
                aria-label={`${skillGroup.category} technologies`}
            >
                <div className={`skills-marquee-track ${index % 2 === 1 ? "skills-marquee-track-reverse" : ""}`}>
                    {[false, true].map((isDuplicate) => (
                        <div
                            key={isDuplicate ? "duplicate" : "skills"}
                            className="skills-marquee-set flex shrink-0 gap-4 pr-4"
                            aria-hidden={isDuplicate}
                        >
                            {skillGroup.items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex w-36 shrink-0 flex-col items-center gap-3"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50">
                                        <img
                                            src={skill.icon}
                                            alt=""
                                            loading="lazy"
                                            className="h-10 w-10 object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Skills = ({ hasAnimated }) => {
    return (
        <section id="skills" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-400 ${hasAnimated.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Skills & Technologies
                    </h2>
                    <div className="space-y-6">
                        {skills.map((skillGroup, index) => (
                            <SkillMarquee
                                key={skillGroup.category}
                                skillGroup={skillGroup}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;