const projects = [
    {
        title: 'Online Solution for Infected Agro (OSIA)',
        description:
            'Developed a CNN-based system with Python backend to detect crop diseases. Collaborated with a team of four to deploy a working model for farmers.',
        technologies: ['Python', 'TensorFlow', 'CNN', 'React', 'Node.js', 'AWS'],
    },
    // Add more projects here
];

export default function Projects() {
    return (
        <section id="projects" className="bg-background text-tertiary px-6 py-16 md:px-20">
            <h2 className="text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
                Featured Projects
            </h2>
            <div className="mx-auto flex max-w-[500px] justify-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border-tertiary/20 hover:border-secondary/30 group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
                    >
                        <h3 className="text-secondary group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-tertiary/90 mb-4 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* <div className="flex gap-3">
                            <a
                                href={project.github}
                                className="text-tertiary/70 hover:text-secondary transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                className="text-tertiary/70 hover:text-secondary transition-colors"
                            >
                                Live Demo
                            </a>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}
