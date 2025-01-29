import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
import { Button } from "./ui/button"
import { Project } from "../types/project"

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card.Root 
            flexDirection={{base: 'column', md: 'row'}}
            overflow="hidden"
            maxW="xl"
            w="100%"
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                shadow: 'lg',
            }}
            borderRadius="xl"
            bg="white"
            shadow="md"
        >
            <Image
                objectFit="cover"
                w={{base: '100%', md: '200px'}}
                h={{base: '200px', md: '100%'}}
                src={project.image}
                alt={`${project.title} screenshot`}
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
            />
            <Box p={6}>
                <Card.Body p={0}>
                    <Card.Title 
                        fontSize="2xl" 
                        fontWeight="bold"
                        mb={3}
                    >
                        {project.title}
                    </Card.Title>
                    <Card.Description
                        color="gray.600"
                        lineHeight="tall"
                        mb={4}
                    >
                        {project.description}
                    </Card.Description>
                    <HStack gap={2} mb={4}>
                        {project.tags.map((tag, index) => (
                            <Badge 
                                key={index}
                                px={3} 
                                py={1} 
                                borderRadius="full" 
                                colorScheme={index % 2 ? "purple" : "teal"}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </HStack>
                </Card.Body>
                <Card.Footer p={0} pt={2}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button 
                            size="lg"
                            w={{base: '100%', sm: 'auto'}}
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
