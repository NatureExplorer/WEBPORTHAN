import React from "react";
import { ZoomableImage } from "./ImageZoom";

const ExperienceSection = ({ id, title, entries, hasAnimated, emptyMessage }) => {
    return (
        <section id={id} className="bg-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 ${hasAnimated[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
                    {entries.length === 0 ? (
                        <p className="text-center text-gray-600">{emptyMessage}</p>
                    ) : (
                        <ol className="relative space-y-8 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-gray-300 md:space-y-12 md:before:left-1/2 md:before:-translate-x-1/2">
                            {entries.map((entry, index) => {
                                const isReversed = index % 2 === 1;
                                const logoSrc = entry.logo
                                    ? `${import.meta.env.BASE_URL}${entry.logo.replace(/^\/+/, "")}`
                                    : null;

                                return (
                                    <li
                                        key={`${entry.organization}-${entry.role}-${index}`}
                                        className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-x-6"
                                    >
                                        <span className="z-10 mt-7 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow md:col-start-2 md:row-start-1 md:justify-self-center">
                                            <span className="h-2 w-2 rounded-full bg-white" />
                                        </span>
                                        <article className={`col-start-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:row-start-1 md:p-7 ${isReversed ? 'md:col-start-3' : 'md:col-start-1 md:text-right'}`}>
                                            <div className={`mb-4 flex items-center gap-4 ${!isReversed ? 'md:flex-row-reverse' : ''}`}>
                                                {logoSrc ? (
                                                    <img
                                                        src={logoSrc}
                                                        alt={`${entry.organization} logo`}
                                                        loading="lazy"
                                                        className="h-12 w-12 shrink-0 rounded-lg border border-gray-100 bg-white object-contain p-1"
                                                    />
                                                ) : (
                                                    <div
                                                        aria-hidden="true"
                                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-500"
                                                    >
                                                        {entry.organization?.charAt(0) || "?"}
                                                    </div>
                                                )}
                                                <div className={!isReversed ? 'md:text-right' : ''}>
                                                    <h3 className="text-xl font-semibold md:text-2xl">{entry.role}</h3>
                                                    <p className="mt-1 text-gray-700">{entry.organization}</p>
                                                </div>
                                            </div>
                                            <p className={`text-sm font-medium text-blue-700 ${!isReversed ? 'md:text-right' : ''}`}>{entry.period}</p>
                                            {entry.location && <p className="mt-1 text-sm text-gray-500">{entry.location}</p>}

                                            {entry.points?.length > 0 && (
                                                <ul className={`mt-5 list-disc space-y-2 pl-5 text-left text-gray-700 ${!isReversed ? 'md:pl-0 md:pr-5 md:text-right' : ''}`}>
                                                    {entry.points.map((point, pointIndex) => (
                                                        <li key={pointIndex} className={!isReversed ? 'md:list-none' : ''}>
                                                            {!isReversed && <span className="hidden md:inline" aria-hidden="true">• </span>}
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {entry.tools?.length > 0 && (
                                                <div className={`mt-5 flex flex-wrap gap-2 ${!isReversed ? 'md:justify-end' : ''}`} aria-label="Tools">
                                                    {entry.tools.map((tool) => (
                                                        <span key={tool} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{tool}</span>
                                                    ))}
                                                </div>
                                            )}

                                            {entry.images?.length > 0 && (
                                                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                                    {entry.images.map((image) => {
                                                        const imageSrc = `${import.meta.env.BASE_URL}${image.src.replace(/^\/+/, "")}`;
                                                        return (
                                                            <ZoomableImage
                                                                key={image.src}
                                                                src={imageSrc}
                                                                alt={image.alt}
                                                                className="relative rounded-lg"
                                                                imageClassName="h-32 w-full rounded-lg border border-gray-200 object-cover transition-transform duration-300 group-hover:scale-105"
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </article>
                                    </li>
                                );
                            })}
                        </ol>
                    )}
                </div>
            </div>

        </section>
    );
};

export default ExperienceSection;