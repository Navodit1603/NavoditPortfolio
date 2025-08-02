import github from "./../assets/icons/github.svg";
import gmail from "./../assets/icons/gmail.svg";
import linkedin from "./../assets/icons/linkedin.svg";

export default function Contact() {
    return (
        <div
  id="contact"
  className="text-[#F8FCFA] min-h-screen px-6 py-20 flex flex-col items-center"
  style={{
    backgroundImage: 'linear-gradient(to bottom, #519de0 20%, #101829 100%)'
  }}
>

            {/* Section Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    I&apos;d Love To Connect With You
                </h1>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full max-w-5xl text-center">

                {/* Location */}
                <div className="flex flex-col items-center space-y-4">
                    <img src={github} alt="Location Icon" className="w-30 h-30" />
                    <h4 className="text-[#FF6A00] font-semibold text-3xl">My Github</h4>
                    <a className="text-[#F8FCFA] leading-relaxed hover:text-[#FF6A00]" href="https://github.com/Navodit1603">github.com/Navodit1603</a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center space-y-4">
                    <img src={gmail} alt="Gmail Icon" className="w-30 h-30" />
                    <h4 className="text-[#FF6A00] font-semibold text-3xl">Email Me At</h4>
                    <a className="text-[#F8FCFA] leading-relaxed hover:text-[#FF6A00]" href="mailto:navoditmaheshwari@gmail.com">navoditmaheshwari@gmail.com</a>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center space-y-4">
                    <img src={linkedin} alt="LinkedIn Icon" className="w-30 h-30" />
                    <h4 className="text-[#FF6A00] font-semibold text-3xl">Let's Connect</h4>
                    <a className="text-[#F8FCFA] leading-relaxed hover:text-[#FF6A00]" href="https://www.linkedin.com/in/navodit-maheshwari/">LinkedIn Profile</a>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-36 bg-[#101829] hover:bg-[#e65900] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300"
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>


        </div>
    );
}
