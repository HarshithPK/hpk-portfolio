export default function Footer() {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/HarshithPK' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harshith-p-k-26a9b01ba/' },
    ];

    return (
        <footer className="bg-background text-tertiary border-tertiary/20 border-t py-8">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} Harshith P K — All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tertiary/70 hover:text-secondary transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
