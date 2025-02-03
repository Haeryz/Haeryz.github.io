import { Box, SimpleGrid } from "@chakra-ui/react"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <Box w="100%" py={8}>
            <SimpleGrid 
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={6}
                justifyItems="center"
                alignItems="stretch"
                mx="auto"
                maxW="1200px"
                px={4}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default Projects