import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: '#about', label: 'About' },
    { href: '#work-experience', label: 'Work Experience' },
    { href: '#organization-education', label: 'Organization & Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            setActiveSection(href);
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        closeMobileMenu(); // Close mobile menu after clicking
    };

    useEffect(() => {
        const sections = navItems
            .map(({ href }) => ({ href, element: document.querySelector(href) }))
            .filter(({ element }) => element);
        let frameId = null;

        const updateNavigation = () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50);

                const activationLine = window.innerHeight * 0.3;
                let currentSection = sections[0]?.href ?? null;

                for (const { href, element } of sections) {
                    if (element.getBoundingClientRect().top <= activationLine) {
                        currentSection = href;
                    } else {
                        break;
                    }
                }

                const isAtPageBottom =
                    window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 2;
                if (isAtPageBottom && sections.length > 0) {
                    currentSection = sections[sections.length - 1].href;
                }

                setActiveSection((previousSection) =>
                    previousSection === currentSection ? previousSection : currentSection
                );
            });
        };

        updateNavigation();
        window.addEventListener("scroll", updateNavigation, { passive: true });
        window.addEventListener("resize", updateNavigation);

        return () => {
            window.removeEventListener("scroll", updateNavigation);
            window.removeEventListener("resize", updateNavigation);
            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${isScrolled ? 'text-black' : 'text-black'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        WebPortHan
                    </div>

                    { /* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} className={`rounded-md px-2 py-2 transition-all duration-300 ${activeSection === item.href ? 'bg-gray-200 font-semibold text-black shadow-sm' : `${isScrolled ? 'text-gray-600' : 'text-gray-700'} hover:bg-gray-100 hover:text-black`}`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    { /* Mobile Men Button */}
                    <button onClick={toggleMobileMenu} className={`md:hidden p-2 transition-colors cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-700 hover:text-black'}`}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                { /* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-white border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }} aria-current={activeSection === item.href ? "location" : undefined} className={`block rounded-md px-3 py-2 transition-all duration-300 ${activeSection === item.href ? 'bg-gray-200 font-semibold text-black shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;