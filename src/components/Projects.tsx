import { useState } from "react";
import Card from "./Card";
import ProjectModal from "./ProjectModal";

import banana from "../assets/ProjectThumbnails/banana.png";
import toad from "../assets/ProjectThumbnails/toad.png";
import madlib from "../assets/ProjectThumbnails/madlib.png";
import portfolio from "../assets/ProjectThumbnails/website.png";
import ngrams from "../assets/ProjectThumbnails/n-grams.png";
import sentiment from "../assets/ProjectThumbnails/sentiment.webp";
import teacherRating from "../assets/ProjectThumbnails/teacherRating.png";

type ProjectData = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    image: string;
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const openModal = (project: ProjectData) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div>
            <div className="bg-[#519de0] min-h-screen px-4 py-12 flex flex-col items-center">
                <h1 className="text-[#F8FCFA] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center">
                    <Card
                        title="TOAD"
                        description="Collaborative Trip Planner"
                        image={toad}
                        onClick={() =>
                            openModal({
                                title: "TOAD (To Outline A Destination)",
                                description: "TOAD is a user-friendly React web app designed for collaborative trip planning. It features real-time updates via Firestore, an intuitive drag-and-drop interface for itinerary management, and built-in polling for group decision-making. The app also enhances collaboration through user invitations and location suggestions.",
                                tags: ["React", "TypeScript", "Cloud Firestore", "Tailwind CSS", "Figma", "HTML", "Vite"],
                                github: "https://github.com/fjordimm/toad",
                                image: toad,
                            })
                        }
                    />
                    <Card
                        title="Madlib Generator"
                        description="Probabilistic MadLibs"
                        image={madlib}
                        onClick={() =>
                            openModal({
                                title: "Madlib Generator",
                                description: "Collaborated with a team of four to develop an interactive Mad Libs application in Python. This application would take a short story, remove words and present the user with a Madlib, prompting for input. This involved creating a custom Part-of-Speech (POS) tagger using HMM and Viterbi algorithms, achieving 94% accuracy for grammatically correct prompts, and integrating sentiment analysis to filter impactful words. The application enhances user experience with guided prompts based on specific part-of-speech details.",
                                tags: ["Python", "Natural Language Processing"],
                                github: "https://github.com/Navodit1603/cse143-FinalProject",
                                image: madlib,
                            })
                        }
                    />
                    <Card
                        title="Portfolio"
                        description="Personal Portfolio Website"
                        image={portfolio}
                        onClick={() =>
                            openModal({
                                title: "Portfolio",
                                description: "This portfolio website showcases my projects and skills, built with React, TypeScript, and Tailwind CSS. It features a responsive design, smooth animations, and a user-friendly interface to highlight my work effectively.",
                                tags: ["React", "TypeScript", "Tailwind CSS", "HTML"],
                                github: "https://github.com/Navodit1603/NavoditPortfolio",
                                image: portfolio,
                            })
                        }
                    />
                    <Card
                        title="N-Grams"
                        description="Language Model Analysis"
                        image={ngrams}
                        onClick={() =>
                            openModal({
                                title: "N-Grams",
                                description: "Developed an n-gram language model trained on 10,000 sentences to analyze and generate text, investigating how n-gram order affects text fluency. The project specifically implemented and compared unigram, bigram, and trigram models, demonstrating that higher-order n-grams improve the coherence and fluency of generated text.",
                                tags: ["Python", "Natural Language Processing"],
                                github: "https://github.com/fjordimm/cse143-a2",
                                image: ngrams,
                            })
                        }
                    />
                    <Card
                        title="Sentiment Analysis"
                        description="Movie Sentiment Analysis"
                        image={sentiment}
                        onClick={() =>
                            openModal({
                                title: "Sentiment Analysis",
                                description: "Developed a sentiment analysis model trained on 10,000 movie reviews to classify positive and negative sentiments. The project compared Naive Bayes, Logistic Regression, and Naive Bayes with TF-IDF, achieving 87% accuracy with the TF-IDF Naive Bayes model. TF-IDF vectorization significantly enhanced feature representation, leading to a 5% improvement in classification accuracy.",
                                tags: ["Python", "Natural Language Processing", "Sentiment Analysis", "Machine Learning"],
                                github: "https://github.com/fjordimm/cse143-a1",
                                image: sentiment,
                            })
                        }
                    />
                    <Card
                        title="Banana Bulletin"
                        description="Multi-Perspective News"
                        image={banana}
                        onClick={() =>
                            openModal({
                                title: "Banana Bulletin",
                                description: "Banana Bulletin a web extension developed using HTML and JavaScript, secured second place at the CruzHacks hackathon in January 2024. This tool scans news article titles and recommends similar articles from diverse publications, providing users with multiple perspectives on a given topic.",
                                tags: ["HTML", "CSS", "JavaScript", "Web Extension", "Node.js"],
                                github: "https://github.com/JMack21/cruzhacks24",
                                image: banana,
                            })
                        }
                    />
                    <Card
                        title="Teacher Rating"
                        description="Teacher Rating Website"
                        image={teacherRating}
                        onClick={() =>
                            openModal({
                                title: "Teacher Rating",
                                description: "This platform used Python, HTML, CSS, and SQL to manage student accounts, teacher names, and ratings, with JavaScript implementing the teacher listing and star rating system. I also served as Scrum Master, overseeing project ceremonies and attracting over 300 accounts to the database.",
                                tags: ["HTML", "CSS", "JavaScript", "Flask", "SQL", "Python"],
                                github: "https://github.com/LordRoop/P4-Ducks",
                                image: teacherRating,
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
                        image={selectedProject.image}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
}
