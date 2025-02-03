import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
import { Button } from "./ui/button"
import { Project } from "../types/project"

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card.Root 
            flexDirection="column"
            overflow="hidden"
            w="100%"
            h="100%"
            maxW="380px"
            minH="500px"
            display="flex"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-8px)',
                shadow: '2xl',
            }}
            borderRadius="2xl"
            bg="white"
            shadow="sm"
        >
            <Box position="relative" h="200px" flexShrink={0}>
                <Image
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    transition="transform 0.5s ease"
                    _hover={{ transform: 'scale(1.1)' }}
                />
            </Box>
            <Box p={5} flex="1" display="flex" flexDirection="column">
                <Card.Body p={0} flex="1">
                    <HStack gap={2} mb={3} flexWrap="wrap">
                        {project.tags.map((tag, index) => (
                            <Badge 
                                key={index}
                                px={2} 
                                py={1} 
                                borderRadius="md" 
                                colorScheme={index % 2 ? "purple" : "teal"}
                                fontSize="xs"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </HStack>
                    <Card.Title 
                        fontSize="xl" 
                        fontWeight="bold"
                        mb={2}
                        color="gray.800"
                    >
                        {project.title}
                    </Card.Title>
                    <Card.Description
                        color="gray.600"
                        fontSize="sm"
                        lineHeight="1.6"
                        mb={4}
                    >
                        {project.description}
                    </Card.Description>
                </Card.Body>
                <Card.Footer p={0} mt="auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                        <Button 
                            size="md"
                            w="100%"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'translateY(-2px)',
                                shadow: 'md',
                            }}
                        >
                            View Project
                        </Button>
                    </a>
                </Card.Footer>
            </Box>
        </Card.Root>
    )
}

export default ProjectCard
