import { Box, SimpleGrid } from "@chakra-ui/react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <Box w="100%" py={8}>
            <SimpleGrid 
                minChildWidth='320px' 
                gap={6} 
                justifyItems="center"
                alignItems="start"
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default Projects