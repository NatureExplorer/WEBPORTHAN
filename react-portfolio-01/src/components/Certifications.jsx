import React from "react";
import { certifications } from "../data/certifications";
import { ZoomableImage } from "./ImageZoom";

const Certifications = ({ hasAnimated }) => {
    return (
        <section id="certifications" className="bg-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className={`transition-all duration-1000 ${hasAnimated.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="mb-12 text-center text-4xl font-bold">Certifications</h2>
                    {certifications.length === 0 ? (
                        <p className="text-center text-gray-600">
                            Add certificates in PNG or JPG format to src/data/certifications.js.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {certifications.map((certificate) => (
                                <article key={certificate.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                                    <ZoomableImage
                                        src={certificate.image}
                                        alt={`Certificate: ${certificate.title}`}
                                        className="w-full bg-gray-100"
                                        imageClassName="aspect-[4/3] w-full object-contain p-3"
                                    />
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold">{certificate.title}</h3>
                                        {certificate.issuer && <p className="mt-1 text-gray-600">{certificate.issuer}</p>}
                                        {certificate.date && <p className="mt-2 text-sm text-gray-500">{certificate.date}</p>}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
