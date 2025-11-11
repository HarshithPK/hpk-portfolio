import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'timeline', 'skills', 'projects'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const navItems = [
        { id: 'timeline', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/95 border-tertiary/10 border-b shadow-lg backdrop-blur-md'
                    : 'bg-background'
            }`}
        >
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="group flex items-center space-x-2"
                    >
                        <h1 className="text-primary group-hover:text-secondary text-2xl font-bold transition-all duration-300">
                            Harshith P K
                        </h1>
                        <div className="bg-secondary h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center space-x-8 md:flex">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`hover:text-primary relative text-sm font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'text-secondary'
                                            : 'text-tertiary'
                                    }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span className="bg-secondary absolute -bottom-2 left-0 h-0.5 w-full"></span>
                                    )}
                                </button>
                            </li>
                        ))}
                        {/* Contact CTA */}
                        <li>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="bg-secondary hover:bg-secondary/90 text-background transform rounded-lg px-6 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Get In Touch
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <MobileMenu navItems={navItems} scrollToSection={scrollToSection} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Mobile Menu Component
function MobileMenu({ navItems, scrollToSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                className="text-tertiary hover:text-primary p-2 transition-colors duration-300"
                aria-label="Toggle menu"
            >
                <div className="flex h-6 w-6 flex-col justify-center space-y-1">
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            isOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            isOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                    ></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="bg-background/95 border-tertiary/10 absolute top-full right-0 left-0 border-b shadow-lg backdrop-blur-md">
                    <div className="space-y-4 px-6 py-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="text-tertiary hover:text-primary block w-full py-2 text-left font-medium transition-colors duration-300"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('projects')}
                            className="bg-secondary hover:bg-secondary/90 text-background w-full rounded-lg px-6 py-3 text-center font-semibold transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
