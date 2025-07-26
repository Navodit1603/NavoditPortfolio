type CardProps = {
    title: string;
    description: string;
    onClick?: () => void; // Optional function
};

export default function Card({ title, description, onClick }: CardProps) {
    return (
        <button
            onClick={onClick}
            className="relative overflow-hidden bg-[#fde68a] w-full max-w-sm rounded-lg shadow-lg p-6 md:p-10 flex flex-col items-center justify-center text-left transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 group"
        >
            {/* Expanding circle */}
            <span className="absolute inset-0 m-auto h-0 w-0 rounded-full bg-orange-500 opacity-30 transition-all duration-500 ease-out group-hover:h-[300px] group-hover:w-[300px] group-hover:scale-150"></span>

            {/* Content layered above circle */}
            <div className="relative z-10">
                <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    {title}
                </h1>
                <p className="text-black font-medium mt-4 text-base sm:text-lg md:text-xl">
                    {description}
                </p>
            </div>
        </button>

    );
}