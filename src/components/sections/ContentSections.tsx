import { siteContent } from "@/content/site"

export function Technology() {
    return (
        <section id="technology" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
                    {siteContent.technology.title}
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden md:block" />

                    <div className="space-y-16">
                        {siteContent.technology.steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-5/12 ml-auto" /> {/* Spacer */}

                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold mb-4 md:mb-0 relative md:absolute md:left-1/2 md:-translate-x-1/2">
                                    {index + 1}
                                </div>

                                <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Team() {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
                    Meet the Team
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteContent.team.members.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
                                {/* Placeholder for avatar */}
                                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                    <span className="text-3xl font-light">?</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-500 text-sm max-w-xs mx-auto">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
