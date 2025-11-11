import { useState } from 'react';
import { timelineData } from '../data/timelineData';

export default function Timeline() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <section id="timeline" className="bg-background text-tertiary px-4 py-16 sm:px-6 md:px-20">
            <h2 className="text-primary mb-12 text-center text-3xl font-bold md:mb-16 md:text-4xl">
                My Journey
            </h2>
            <div className="border-tertiary/30 relative mx-auto max-w-4xl border-l">
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        isActive={activeItem === index}
                        onHover={() => setActiveItem(index)}
                        onLeave={() => setActiveItem(null)}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </section>
    );
}

function TimelineItem({ item, isActive, onHover, onLeave, onClick }) {
    const isWorkExperience = item.type === 'work';

    return (
        <div
            className="group mb-8 ml-6 sm:ml-8" // Reduced ml for mobile
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Timeline dot */}
            <div
                className={`border-background absolute -left-[9px] mt-2 h-3 w-3 rounded-full border-2 transition-all duration-300 sm:-left-2 ${isActive ? 'bg-secondary scale-150' : 'bg-primary'} ${isWorkExperience ? 'group-hover:bg-secondary group-hover:scale-125' : ''} `}
            ></div>

            {/* Content card */}
            <div
                className={`relative overflow-hidden rounded-lg border p-4 transition-all duration-300 sm:p-6 ${isActive ? 'border-secondary/30 from-secondary/5 to-primary/5 bg-linear-to-r shadow-lg' : 'border-tertiary/10'} ${isWorkExperience ? 'hover:border-tertiary/30 cursor-pointer active:scale-[0.98]' : ''} `}
                onClick={isWorkExperience ? onClick : undefined}
            >
                {/* Work experience accent bar */}
                {item.type === 'work' && (
                    <div className="from-secondary to-primary absolute top-0 left-0 h-full w-1 rounded-l-lg bg-linear-to-b sm:w-1.5"></div>
                )}

                <div className="ml-3 sm:ml-4">
                    {' '}
                    {/* Reduced ml for mobile */}
                    {/* Header - Stacked on mobile */}
                    <div className="mb-3 flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                        <div className="flex-1">
                            <h3 className="text-secondary text-lg font-semibold sm:text-xl">
                                {item.title}
                            </h3>
                            {item.company && (
                                <p className="text-primary mt-1 text-base font-medium sm:text-lg">
                                    {item.company}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-start space-y-1 sm:items-end">
                            <time className="text-primary text-sm font-medium sm:text-base">
                                {item.date}
                            </time>
                            {item.location && (
                                <span className="text-tertiary/70 text-xs sm:text-sm">
                                    {item.location}
                                </span>
                            )}
                        </div>
                    </div>
                    {/* Description */}
                    <p className="text-tertiary/90 mb-3 leading-relaxed sm:mb-4 sm:text-base">
                        {item.description}
                    </p>
                    {/* Expanded Details for Work Experience */}
                    {isWorkExperience && (
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'} md:group-hover:max-h-[1200px] md:group-hover:opacity-100`}
                        >
                            <div className="border-tertiary/10 space-y-4 border-t pt-4">
                                {/* Technologies Used */}
                                {item.technologies && (
                                    <div>
                                        <h4 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase sm:mb-3">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {item.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-primary/10 text-primary border-primary/20 rounded border px-2 py-1 text-xs font-medium sm:px-3 sm:text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Key Achievements */}
                                {item.achievements && (
                                    <div>
                                        <h4 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase sm:mb-3">
                                            Key Achievements:
                                        </h4>
                                        <ul className="space-y-2">
                                            {item.achievements.map(
                                                (achievement, achievementIndex) => (
                                                    <li
                                                        key={achievementIndex}
                                                        className="flex items-start"
                                                    >
                                                        <span className="text-secondary mt-1 mr-2 shrink-0 text-sm sm:mr-3">
                                                            ●
                                                        </span>
                                                        <span className="text-tertiary/80 flex-1 text-sm leading-relaxed sm:text-base">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {/* Responsibilities */}
                                {item.responsibilities && (
                                    <div>
                                        <h4 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase sm:mb-3">
                                            Responsibilities:
                                        </h4>
                                        <ul className="space-y-2">
                                            {item.responsibilities.map(
                                                (responsibility, respIndex) => (
                                                    <li
                                                        key={respIndex}
                                                        className="flex items-start"
                                                    >
                                                        <span className="text-primary mt-1 mr-2 flex-shrink-0 text-sm sm:mr-3">
                                                            •
                                                        </span>
                                                        <span className="text-tertiary/80 flex-1 text-sm leading-relaxed sm:text-base">
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
                    {/* Interactive Indicators */}
                    {isWorkExperience && (
                        <div
                            className={`flex items-center justify-between transition-all duration-300 ${isActive ? 'mt-4 opacity-100' : 'mt-2 opacity-100'} md:group-hover:opacity-0`}
                        >
                            {/* Mobile touch indicator */}
                            <div className="text-tertiary/60 flex items-center text-xs sm:text-sm md:hidden">
                                <span>{isActive ? 'Tap to collapse' : 'Tap to expand'}</span>
                                <svg
                                    className={`ml-1 h-3 w-3 transition-transform duration-300 sm:h-4 sm:w-4 ${
                                        isActive ? 'rotate-180' : ''
                                    }`}
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
                            </div>

                            {/* Desktop hover indicator */}
                            <div className="text-tertiary/60 hidden items-center text-sm md:flex">
                                {!isActive && (
                                    <>
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
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
