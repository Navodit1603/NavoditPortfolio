// import bg2 from "../assets/bg2.png";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpeg";

export default function About() {
    return (
        <div>
            <div className="min-h-screen px-4 py-12 bg-[#101829] flex flex-col items-center">
                {/* Title */}
                <h1 className="text-[#D9AB88] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
                    About Me
                </h1>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-12">

                    {/* Left: Image */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <img
                            src={profile}
                            alt="Your Photo"
                            className="w-64 h-64 object-cover rounded-full shadow-lg"
                        />
                        <h3 className="text-white pt-4 text-lg font-semibold">Navodit Maheshwari</h3>
                    </div>

                    {/* Right: Text */}
                    <div className="text-white font-semibold text-left space-y-4 text-base sm:text-lg md:text-xl">
                        <p>I'm a software developer with a strong passion for machine learning
                            and natural language processing. I enjoy building intelligent,
                            user-focused applications that improve how we interact with technology.
                            With experience in Python, Java, and JavaScript, I’ve contributed to collaborative
                            software projects across both academic and team environments. I recently completed my
                            Computer Science degree at UC Santa Cruz and will be starting a Master's in NLP at the Silicon Valley
                            extention campus in Fall 2025. I'm always eager to learn, grow, and build with others.</p>

                    </div>
                </div>

                {/* Contact + Skills Section */}
                <div className="flex flex-col lg:flex-row justify-center gap-6 mt-12 w-full max-w-6xl">

                    {/* Contact */}
                    <div className="flex flex-col items-center lg:items-start text-white w-full lg:w-1/4 px-4 text-center lg:text-left">
                        <div className="pb-4">
                            <p className="text-xl font-semibold">Email me:</p>
                            <p className="text-gray-300 hover:text-amber-600">
                                <a href="mailto:navoditmaheshwari@gmail.com">navoditmaheshwari@gmail.com</a>
                            </p>
                        </div>
                        <div className="pb-4">
                            <p className="text-xl font-semibold">LinkedIn</p>
                            <p className="text-gray-300 hover:text-amber-600">
                                <a href="https://www.linkedin.com/in/navodit-maheshwari/">navodit-maheshwari</a>
                            </p>
                        </div>
                        <div className="pb-4">
                            <p className="text-xl font-semibold">Resume</p>
                            <p className="text-gray-300 hover:text-amber-600">
                                <a href={resume}>Download</a>
                            </p>
                        </div>
                    </div>


                    {/* Skills */}
                    <div className="w-full lg:w-3/4 px-4 flex flex-col items-start">
                        <h3 className="text-white text-3xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Skills
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Python</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Java</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">C, C++</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">JavaScript, TypeScript</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">HTML, CSS</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">React, Flask, Spring Boot</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Git</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Docker</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Firebase</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Vim</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">Firestore, MySQL</span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow">English (fluent), Hindi (fluent)</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
