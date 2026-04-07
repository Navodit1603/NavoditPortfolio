import Timeline from "./Timeline";

const workExperience = [
    {
        role: "Graduate Researcher – LLM Steering & Alignment",
        date: "Feburary 2026 - Present",
        company: "Lab of Chenguang Wang, UCSC",
        description:
            "Identified activation entanglement in single-layer DIM steering vectors, leading to consistent out-of-distribution degradation across multiple LLM families, and analyzed representation quality using GemmaScope and SAELens with metrics like reconstruction error, sparsity, and entropy. Developed a multi-layer steering approach that redistributes high-magnitude activations across transformer layers, improving safety and reducing unintended side effects, and validated its effectiveness across 17 datasets on Gemma 3 4B, Llama 3.1 8B, and Qwen 3 4B.",
    },
    {
        role: "Baskin Class Grader and Tutor",
        date: "September 2024 - Present",
        company: "Baskin Engineering School, UCSC",
        description:
            "Worked with professors and TAs to grade assignments and exams for various engineering classes. Provided feedback to students on their work and helped clarify concepts.",
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
        date: "Sepember 2025 - December 2026",
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
            <h1 className="text-[#F8FCFA] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 py-16">
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
