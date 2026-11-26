import React, { useState } from "react";
import { ExternalLink } from 'lucide-react';
import { ZoomableImage } from "./ImageZoom";

const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {project.image && !imageError ? (
                    <ZoomableImage
                        src={project.image}
                        alt={`Preview ${project.title}`}
                        className="h-full w-full"
                        imageClassName="h-full w-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="text-6xl font-bold text-gray-300">{project.title.charAt(0)}</div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a href={project.github} className="flex items-center text-gray-600 hover:text-black transition-colors text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Detail Project
                    </a>
                    {/* <a href={project.demo} className="flex items-center text-gray-600 hover:text-black transition-colors text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;