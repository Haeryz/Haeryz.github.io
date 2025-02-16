import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
import { Button } from "./ui/button"
import { Project } from "../types/project"
import { getTagColor } from "../config/tagColors"

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
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
                transform: 'translateY(-8px)',
                shadow: '2xl',
            }}
            borderRadius="2xl"
            position="relative"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        >
            <Box position="relative" h="220px" flexShrink={0} overflow="hidden">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
                    zIndex={1}
                />
                <Image
                    loading="lazy"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    transition="transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: 'scale(1.1) rotate(-2deg)' }}
                />
            </Box>
            <Box 
                p={6} 
                flex="1" 
                display="flex" 
                flexDirection="column"
                bgGradient="linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
            >
                <Card.Body p={0} flex="1">
                    <HStack gap={2} mb={4} flexWrap="wrap">
                        {project.tags.map((tag, index) => {
                            const tagColor = getTagColor(tag);
                            return (
                                <Badge 
                                    key={index}
                                    px={3} 
                                    py={1} 
                                    borderRadius="full"
                                    bg={tagColor.bg}
                                    color={tagColor.text}
                                    fontSize="xs"
                                    fontWeight="medium"
                                    textTransform="lowercase"
                                    letterSpacing="wide"
                                    backdropFilter="blur(4px)"
                                    border="1px solid"
                                    borderColor={tagColor.border}
                                    transition="all 0.2s"
                                    _hover={{
                                        transform: 'translateY(-1px)',
                                        opacity: 0.8
                                    }}
                                >
                                    {tag}
                                </Badge>
                            );
                        })}
                    </HStack>
                    <Card.Title 
                        fontSize="2xl" 
                        fontWeight="bold"
                        mb={3}
                        color="whiteAlpha.900"
                        letterSpacing="tight"
                    >
                        {project.title}
                    </Card.Title>
                    <Card.Description
                        color="whiteAlpha.800"
                        fontSize="sm"
                        lineHeight="1.7"
                        mb={4}
                        opacity={0.9}
                    >
                        {project.description}
                    </Card.Description>
                </Card.Body>
                <Card.Footer p={0} mt="auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                        <Button 
                            size="lg"
                            w="100%"
                            bgGradient="linear(to-r, purple.500, blue.500)"
                            color="white"
                            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            border="none"
                            fontWeight="bold"
                            boxShadow="0 0 10px rgba(147, 51, 234, 0.5),
                                      0 0 20px rgba(147, 51, 234, 0.3)"
                            _hover={{
                                transform: 'translateY(-2px)',
                                bgGradient: "linear(to-r, purple.600, blue.600)",
                                boxShadow: `0 0 15px rgba(147, 51, 234, 0.6),
                                           0 0 30px rgba(147, 51, 234, 0.4),
                                           inset 0 0 15px rgba(147, 51, 234, 0.3)`,
                            }}
                            _active={{
                                transform: 'translateY(0)',
                                bgGradient: "linear(to-r, purple.700, blue.700)",
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
