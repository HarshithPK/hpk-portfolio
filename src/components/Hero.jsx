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

                {/* Current Role Highlight */}
                <div className="from-primary/10 to-secondary/10 border-tertiary/10 mt-12 rounded-lg border bg-linear-to-r p-4">
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
