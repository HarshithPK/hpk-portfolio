const skills = [
    'Angular',
    'React.js',
    'NestJS',
    'Express.js',
    'Node.js',
    'Next.js',
    'Bootstrap',
    'TailwindCSS',
    'AWS',
    'GCP',
    'Git',
    'MongoDB',
    'Postgres',
    'Docker',
];

export default function Skills() {
    return (
        <section id="skills" className="bg-background text-tertiary px-6 py-16 md:px-20">
            <h2 className="text-primary mb-8 text-center text-3xl font-bold">Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="border-tertiary/20 hover:bg-primary/10 rounded-xl border p-3 transition"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
