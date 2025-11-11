export default function Hero() {

    return (
        <section
            id="home"
            className="bg-background text-tertiary flex min-h-[90vh] flex-col items-center justify-center px-4 text-center"
        >
            <div className="mx-auto max-w-6xl">
                {/* Main Introduction */}
                <div className="mb-8">
                    <h1 className="text-tertiary mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
                        Hi, I'm <span className="text-primary">Harshith P K</span>
                    </h1>
                    <div className="mx-auto max-w-3xl">
                        <p className="mb-6 text-lg md:text-xl lg:text-2xl">
                            <span className="text-secondary font-semibold">
                                Fullstack Developer
                            </span>{' '}
                            with 3.5+ years of experience
                        </p>
                        <p className="text-tertiary/80 mb-8 text-base leading-relaxed md:text-lg">
                            Crafting seamless digital experiences with{' '}
                            <span className="text-primary font-medium">Angular</span>,{' '}
                            <span className="text-primary font-medium">React</span>, and{' '}
                            <span className="text-primary font-medium">Node.js</span>. Currently
                            building fintech solutions at{' '}
                            <span className="text-secondary">IBIND Systems</span>.
                        </p>
                    </div>
                </div>

                {/* Quick Stats */}
                {/* <div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="bg-tertiary/5 rounded-lg p-4">
                        <div className="text-secondary text-xl font-bold md:text-2xl">3.5+</div>
                        <div className="text-tertiary/70 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-tertiary/5 rounded-lg p-4">
                        <div className="text-secondary text-xl font-bold md:text-2xl">20+</div>
                        <div className="text-tertiary/70 text-sm">Projects Delivered</div>
                    </div>
                    <div className="bg-tertiary/5 rounded-lg p-4">
                        <div className="text-secondary text-xl font-bold md:text-2xl">Fintech</div>
                        <div className="text-tertiary/70 text-sm">Domain Expert</div>
                    </div>
                    <div className="bg-tertiary/5 rounded-lg p-4">
                        <div className="text-secondary text-xl font-bold md:text-2xl">MERN/MEAN</div>
                        <div className="text-tertiary/70 text-sm">Stack</div>
                    </div>
                </div> */}

                {/* Core Expertise */}
                {/* <div className="mb-8">
                    <h3 className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
                        Core Expertise
                    </h3>
                    <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
                        {[
                            'Angular',
                            'React.js',
                            'Node.js',
                            'NestJS',
                            'TypeScript',
                            'MongoDB',
                            'Microservices',
                            'Fintech',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div> */}

                {/* Call to Action Buttons */}
                {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                        onClick={scrollToProjects}
                        className="bg-secondary hover:bg-secondary/90 text-background flex transform items-center gap-2 rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <span>View My Projects</span>
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="border-secondary text-secondary hover:bg-secondary/10 flex items-center gap-2 rounded-lg border px-8 py-3 font-semibold transition-all duration-300"
                    >
                        <span>Get In Touch</span>
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </button>
                </div> */}

                {/* Current Role Highlight */}
                <div className="from-primary/10 to-secondary/10 border-tertiary/10 mt-12 rounded-lg border bg-gradient-to-r p-4">
                    <p className="text-tertiary/70 text-sm">
                        🚀 Currently building banking onboarding experiences at{' '}
                        <span className="text-primary font-medium">IBIND Systems</span> | Ex-{' '}
                        <span className="text-primary font-medium">Iraitech Innovations</span> |
                        Open to new opportunities
                    </p>
                </div>
            </div>
        </section>
    );
}
