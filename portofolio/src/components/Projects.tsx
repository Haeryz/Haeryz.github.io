import { Box } from "@chakra-ui/react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import { useEffect, useState } from "react"

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState<typeof projects>([]);
    const [page, setPage] = useState(1);
    const projectsPerPage = 6;

    useEffect(() => {
        setVisibleProjects(projects.slice(0, page * projectsPerPage));
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500) {
                if (visibleProjects.length < projects.length) {
                    setPage(prev => prev + 1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleProjects.length]);

    return (
        <Box w="100%" py={4}>
            <Box
                display="grid"
                gridTemplateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                }}
                gap={{ base: 3, sm: 4, md: 5, lg: 6 }}
                px={{ base: 2, sm: 4, md: 6 }}
                mx="auto"
                maxW={{ base: "100%", lg: "1280px" }}
            >
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Box>
        </Box>
    )
}

export default Projects