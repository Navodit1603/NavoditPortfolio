import { useState } from "react";
import Card from "./Card";
import ProjectModal from "./ProjectModal";

type ProjectData = {
    title: string;
    description: string;
    tags: string[];
    github: string;
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const openModal = (project: ProjectData) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <div className="bg-[#D9AB88] min-h-screen px-4 py-12 flex flex-col items-center">
                <h1 className="text-[#F8FCFA] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center">
                    <Card
                        title="Project 1"
                        description="Click to view modal"
                        onClick={() =>
                            openModal({
                                title: "Project 1",
                                description: "This is a description for project 1.",
                                tags: ["React", "TypeScript"],
                                github: "https://github.com/user/project1"
                            })
                        }
                    />
                    <Card
                        title="Project 2"
                        description="Click to view modal"
                        onClick={() =>
                            openModal({
                                title: "Project 2",
                                description: "Project 2 is focused on AI and automation.",
                                tags: ["Python", "TensorFlow"],
                                github: "https://github.com/user/project2"
                            })
                        }
                    />
                    <Card 
                        title="Project 3" 
                        description="No modal here"
                        onClick={() =>
                            openModal({
                                title: "Project 3",
                                description: "This is a description for project 3.",
                                tags: ["Java", "Spring Boot"],
                                github: "link"
                            })
                        }
                    />
                    <Card 
                        title="Project 4" 
                        description="No modal here" 
                        onClick={() =>
                            openModal({
                                title: "Project 4",
                                description: "This is a description for project 4.",
                                tags: ["Node.js", "Express"],
                                github: "link"
                            })
                        }
                    />
                    <Card 
                        title="Project 5" 
                        description="No modal here"
                        onClick={() =>
                            openModal({
                                title: "Project 5",
                                description: "This is a description for project 5.",
                                tags: ["Flutter", "Dart"],
                                github: "link"
                            })
                        }
                    />
                    <Card 
                        title="Project 6" 
                        description="No modal here"
                        onClick={() =>
                            openModal({
                                title: "Project 6",
                                description: "This is a description for project 6.",
                                tags: ["Go", "Gin"],
                                github: "link"
                            })
                        }
                    />
                </div>

                {selectedProject && (
                    <ProjectModal
                        title={selectedProject.title}
                        description={selectedProject.description}
                        tags={selectedProject.tags}
                        github={selectedProject.github}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
}
