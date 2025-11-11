import { useState } from 'react';
import { timelineData } from '../data/timelineData';

export default function Timeline() {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section id="timeline" className="bg-background text-tertiary px-6 py-16 md:px-20">
            <h2 className="text-primary mb-16 text-center text-3xl font-bold md:text-4xl">
                My Journey
            </h2>
            <div className="border-tertiary/30 relative mx-auto max-w-4xl border-l">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="group mb-12 ml-8" // Increased ml for better dot alignment
                        onMouseEnter={() => setActiveItem(index)}
                        onMouseLeave={() => setActiveItem(null)}
                    >
                        {/* Perfectly aligned dot */}
                        <div
                            className={`border-background absolute -left-2 mt-1.5 h-3 w-3 rounded-full border-2 transition-all duration-300 ${activeItem === index ? 'bg-secondary scale-150' : 'bg-primary'} ${item.type === 'work' ? 'group-hover:bg-secondary group-hover:scale-125' : ''} `}
                        ></div>

                        <div
                            className={`relative overflow-hidden rounded-lg border p-6 transition-all duration-300 ${activeItem === index ? 'border-secondary/30 from-secondary/5 to-primary/5 bg-gradient-to-r shadow-lg' : 'border-tertiary/10'} ${item.type === 'work' ? 'hover:border-tertiary/30 cursor-pointer' : ''} `}
                        >
                            {/* Work experience accent bar */}
                            {item.type === 'work' && (
                                <div className="from-secondary to-primary absolute top-0 left-0 h-full w-1 rounded-l-lg bg-gradient-to-b"></div>
                            )}

                            <div className="ml-4">
                                {' '}
                                {/* Added ml for content spacing */}
                                {/* Header */}
                                <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-secondary mb-1 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        {item.company && (
                                            <p className="text-primary text-lg font-medium">
                                                {item.company}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-2 flex flex-col items-start sm:mt-0 sm:items-end">
                                        <time className="text-primary mb-1 block text-sm font-medium">
                                            {item.date}
                                        </time>
                                        {item.location && (
                                            <span className="text-tertiary/70 text-sm">
                                                {item.location}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-tertiary/90 mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                {/* Expanded Details */}
                                {item.type === 'work' && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeItem === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} `}
                                    >
                                        <div className="border-tertiary/10 space-y-4 border-t pt-4">
                                            {/* Technologies */}
                                            {item.technologies && (
                                                <div>
                                                    <h4 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
                                                        Technologies Used:
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map(
                                                            (tech, techIndex) => (
                                                                <span
                                                                    key={techIndex}
                                                                    className="bg-primary/10 text-primary border-primary/20 rounded-md border px-3 py-1 text-xs font-medium"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Achievements - Properly aligned bullets */}
                                            {item.achievements && (
                                                <div>
                                                    <h4 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
                                                        Key Achievements:
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {item.achievements.map(
                                                            (achievement, achievementIndex) => (
                                                                <li
                                                                    key={achievementIndex}
                                                                    className="flex items-start"
                                                                >
                                                                    <span className="text-secondary mt-[-2px] mr-3 flex-shrink-0">
                                                                        ●
                                                                    </span>
                                                                    <span className="text-tertiary/80 flex-1 text-sm leading-relaxed">
                                                                        {achievement}
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Responsibilities - Properly aligned bullets */}
                                            {item.responsibilities && (
                                                <div>
                                                    <h4 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
                                                        Responsibilities:
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {item.responsibilities.map(
                                                            (responsibility, respIndex) => (
                                                                <li
                                                                    key={respIndex}
                                                                    className="flex items-start"
                                                                >
                                                                    <span className="text-primary mt-[-2px] mr-3 flex-shrink-0">
                                                                        •
                                                                    </span>
                                                                    <span className="text-tertiary/80 flex-1 text-sm leading-relaxed">
                                                                        {responsibility}
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {/* Hover Indicator */}
                                {item.type === 'work' && activeItem !== index && (
                                    <div className="text-tertiary/60 mt-3 flex items-center text-sm">
                                        <span>Hover for details</span>
                                        <svg
                                            className="ml-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
