import { useEffect } from "react";

type ProjectModalProps = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    image: string;
    onClose: () => void;
};

export default function ProjectModal({
    title,
    description,
    tags,
    github,
    image,
    onClose,
}: ProjectModalProps) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-[#1a1a1a]/80 flex items-center justify-center z-50">
            <div className="bg-[#F8FCFA] rounded-lg shadow-lg max-w-3xl w-full h-3/4 overflow-y-auto flex flex-col">
                <img className="w-full h-64 object-cover rounded-t-lg" src={image} alt={title} />

                <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    
                    <p className="text-gray-700 mb-6">{description}</p>
                    
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-auto">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-[#F8FCFA] px-4 py-2 rounded hover:bg-gray-700"
                        >
                            View on GitHub
                        </a>
                        <button
                            onClick={onClose}
                            className="bg-orange-700 text-[#F8FCFA] px-4 py-2 rounded hover:bg-orange-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
