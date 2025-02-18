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
        <Box w="100%" py={8}>
            <Box
                display="grid"
                gridTemplateColumns={{
                    base: "repeat(2, 1fr)",    // Keep 2 columns but with better spacing
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)"
                }}
                gap={{ base: 4, sm: 5, md: 6 }}    // Increased gap for mobile
                justifyItems="center"
                alignItems="stretch"
                mx="auto"
                maxW={{ base: "100%", sm: "90%", md: "95%", lg: "1200px" }}
                px={{ base: 3, sm: 4, md: 5 }}     // Increased padding
            >
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Box>
        </Box>
    )
}

export default Projects