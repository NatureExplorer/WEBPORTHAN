import React from "react";

const OrganizationEducation = ({
    organizationalExperiences,
    educations,
    hasAnimated
}) => (
    <section id="organization-education" className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
            <div className={`transition-all duration-1000 ${hasAnimated["organization-education"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <h2 className="mb-12 text-center text-4xl font-bold">
                    Education & Organization
                </h2>
                <div className="grid gap-8 md:grid-cols-2 md:gap-0">
                    <div className="md:flex md:flex-col md:pr-8">
                        <h3 className="mb-6 text-2xl font-semibold">Education</h3>
                        <div className="space-y-5">
                            {educations.length > 0 ? educations.map((entry, index) => (
                                <article
                                    key={`education-${entry.institution}-${index}`}
                                    className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                                >   
                                    {entry.logo && (
                                                <img
                                                    src={entry.logo}
                                                    alt={`${entry.institution} logo`}
                                                    loading="lazy"
                                                    className="h-16 w-16 shrink-0 rounded-lg border border-gray-100 bg-white object-contain p-1"
                                                />
                                    )}
                                    <h4 className="text-xl font-bold text-black-00">{entry.institution}</h4>
                                    <p className="mt-2 text-gray-700">{entry.degree}</p>
                        
                                    {entry.gpa && (
                                        <p className="mt-1 text-gray-700">
                                            GPA: {entry.gpa}
                                        </p>
                                    )}
                                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                                        {entry.period && (
                                            <p className="font-medium text-blue-700">{entry.period}</p>
                                        )}
                                        {entry.location && (
                                            <p className="text-gray-500">{entry.location}</p>
                                        )}
                                    </div>
                                    {entry.thesis && (
                                        <p className="mt-5 text-gray-700">
                                            <span className="font-semibold">Thesis: </span>
                                            {entry.thesis}
                                        </p>
                                    )}
                                    {entry.coursework?.length > 0 && (
                                        <p className="mt-4 text-gray-700">
                                            <span className="font-semibold">Relevant Coursework: </span>
                                            {entry.coursework.join(", ")}.
                                        </p>
                                    )}
                                    {entry.publication && (
                                        <p className="mt-4 text-gray-700">
                                            <span className="font-semibold">Publication: </span>
                                            {entry.publication}
                                        </p>
                                    )}
                                    {entry.Achievement && (
                                        <p className="mt-4 text-gray-700">
                                            <span className="font-semibold">Achievement: </span>
                                            {entry.Achievement}
                                        </p>
                                    )}
                                </article>
                            )) : (
                                <p className="text-gray-600">
                                    Add education entries to src/data/education.js.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="md:border-l md:border-gray-300 md:pl-8">
                        <h3 className="mb-6 text-2xl font-semibold">Organization</h3>
                        {organizationalExperiences.length > 0 ? (
                            <div className="space-y-5">
                                {organizationalExperiences.map((entry, index) => (
                                    <article
                                        key={`organization-${entry.organization}-${entry.role}-${index}`}
                                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                                    >
                                        <div className="flex items-start gap-4">
                                            {entry.logo ? (
                                                <img
                                                    src={entry.logo}
                                                    alt={`${entry.organization} logo`}
                                                    loading="lazy"
                                                    className="h-16 w-16 shrink-0 rounded-lg border border-gray-100 bg-white object-contain p-1"
                                                />
                                            ) : (
                                                <div
                                                    aria-hidden="true"
                                                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl font-bold text-gray-500"
                                                >
                                                    {entry.organization?.charAt(0) || "?"}
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-xl font-semibold">{entry.role}</h4>
                                                <p className="mt-1 text-gray-700">{entry.organization}</p>
                                                {entry.period && (
                                                    <p className="mt-2 text-sm font-medium text-blue-700">
                                                        {entry.period}
                                                    </p>
                                                )}
                                                {entry.location && (
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {entry.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {entry.description && (
                                            <p className="mt-4 text-gray-700">{entry.description}</p>
                                        )}
                                        {entry.points?.length > 0 && (
                                            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                                                {entry.points.map((point, pointIndex) => (
                                                    <li key={`${entry.role}-point-${pointIndex}`}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">
                                Add organization entries to src/data/organizationalExperience.js.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default OrganizationEducation;
