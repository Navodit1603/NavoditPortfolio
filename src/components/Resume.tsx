import Timeline from "./Timeline";

const workExperience = [
    {
        role: "Computer Architecture Class Grader",
        date: "March 2025 - June 2025",
        company: "Baskin Engineering School, UCSC",
        description:
            "Worked with professors and TAs to grade assignments and exams for the Computer Architecture class. Provided feedback to students on their work and helped clarify concepts.",
    },
    {
        role: "Computer Architecture Class Grader",
        date: "September 2024 - June 2025",
        company: "Baskin Engineering School, UCSC",
        description:
            "Tutored students in computer architecture topics such as CPU design, memory hierarchy, pipelining, and ISA, while leading discussions on performance trade-offs. Provided feedback on assembly code and collaborated with faculty to support over 30 students across multiple sections.",
    },
    {
        role: "Coding Instructor",
        date: "June 2024 – August 2024",
        company: "Coding4Youth Inc.",
        description:
            "Taught programming fundamentals in Python, HTML, Roblox Lua, and Scratch to students aged 7–17 through personalized one-on-one and group lessons. Designed custom projects, provided hands-on debugging support, and fostered problem-solving skills and coding confidence.",
    },
];


const education = [
    {
        role: "Master's Degree",
        date: "Starting Sepember 2025",
        company: "University of California, Santa Cruz",
        description: "Pursuing a Master's in Natural Language Processing at the Silicon Valley extension campus, focusing on advanced NLP techniques and applications.",
    },
    {
        role: "Bachelor's Degree",
        date: "September 2022 - June 2025",
        company: "University of California, Santa Cruz",
        description: "Graduated with a Bachelor of Science in Computer Science. Relevant coursework includes Artificial Intelligence, Intro to Natural Language Processing, Machine Learning, Principles of Computer Systems Design, Computer Architecture. Competed in multiple CruzHacks hackathons, winning 2nd place in January 2024.",
    },
    {
        role: "High School Diploma",
        date: "October 2018 - June 2022",
        company: "Del Norte High School, San Diego, CA",
        description: "Focused on strengthening foundational knowledge in STEM, with an emphasis on AP Calculus and AP Computer Science Principles and A. Volunteered to help tutor elementary and middle school children in Math.",
    },
]

export default function Resume() {
    return (
        <div className="bg-[#101829] min-h-screen" id="resume">
            <h1 className="text-[#F8FCFA] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 py-12">
                    Work Experiences and Education
                </h1>
            <div className="relative max-w-4xl mx-auto px-4 pt-4 pb-4">
                

                <h3 className="text-2xl font-bold text-[#d95a00] mb-10 text-center">Work Experience</h3>
                <Timeline items={workExperience} />

                <h3 className="text-2xl font-bold text-[#d95a00] mb-10 text-center">Education</h3>
                <Timeline items={education} />
            </div>
        </div>
    );
}
