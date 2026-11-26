import React, { createContext, useContext, useEffect, useState } from "react";

const ImageZoomContext = createContext(null);

export const ImageZoomProvider = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setSelectedImage(null);
        };
        const previousOverflow = document.body.style.overflow;
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedImage]);

    return (
        <ImageZoomContext.Provider value={setSelectedImage}>
            {children}
            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.alt || "Gambar diperbesar"}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 sm:p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Tutup"
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        onClick={(event) => event.stopPropagation()}
                        className="h-[92vh] w-[96vw] max-w-[1600px] rounded-lg object-contain shadow-2xl"
                    />
                </div>
            )}
        </ImageZoomContext.Provider>
    );
};

export const ZoomableImage = ({
    src,
    alt,
    className = "",
    imageClassName = "",
    loading = "lazy",
    onError
}) => {
    const setSelectedImage = useContext(ImageZoomContext);

    if (!setSelectedImage) {
        throw new Error("ZoomableImage must be rendered inside ImageZoomProvider.");
    }

    return (
        <button
            type="button"
            onClick={() => setSelectedImage({ src, alt })}
            aria-label={alt ? `Perbesar gambar: ${alt}` : "Perbesar gambar"}
            className={`group block cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${className}`}
        >
            <img
                src={src}
                alt={alt}
                loading={loading}
                onError={onError}
                className={imageClassName}
            />
        </button>
    );
};
