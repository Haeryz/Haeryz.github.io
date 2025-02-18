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
            maxW={{ base: "100%", sm: "100%", md: "100%" }}
            minH={{ base: "280px", sm: "300px", md: "340px" }}
            display="flex"
            transition="all 0.3s ease"
            _hover={{
                transform: { base: 'none', md: 'translateY(-4px)' },
                shadow: { base: 'md', md: 'xl' }
            }}
            borderRadius={{ base: "xl", md: "2xl" }}
            position="relative"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        >
            <Box 
                position="relative" 
                h={{ base: "120px", sm: "130px", md: "150px" }}
                flexShrink={0} 
                overflow="hidden"
            >
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
                p={{ base: 2.5, sm: 3, md: 4 }}
                flex="1" 
                display="flex" 
                flexDirection="column"
                bgGradient="linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
            >
                <Card.Body p={0} flex="1">
                    <HStack 
                        gap={{ base: 1, sm: 2 }}
                        mb={{ base: 1.5, md: 2 }}
                        flexWrap="wrap"
                    >
                        {project.tags.map((tag, index) => {
                            const tagColor = getTagColor(tag);
                            return (
                                <Badge 
                                    key={index}
                                    px={{ base: 1.5, md: 2 }}
                                    py={{ base: 0.5, md: 1 }}
                                    borderRadius="full"
                                    bg={tagColor.bg}
                                    color={tagColor.text}
                                    fontSize={{ base: "2xs", sm: "xs" }}
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
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        fontWeight="bold"
                        mb={{ base: 2, sm: 2, md: 2 }}
                        color="whiteAlpha.900"
                        letterSpacing="tight"
                    >
                        {project.title}
                    </Card.Title>
                    <Card.Description
                        color="whiteAlpha.800"
                        fontSize={{ base: "xs", sm: "xs", md: "sm" }}
                        lineHeight={{ base: 1.4, sm: 1.5 }}
                        mb={{ base: 2, sm: 2, md: 3 }}
                        opacity={0.9}
                    >
                        {project.description}
                    </Card.Description>
                </Card.Body>
                <Card.Footer p={0} mt="auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                        <Button 
                            size={{ base: "sm", md: "md" }}
                            w="100%"
                            bgGradient="linear(to-r, purple.500, blue.500)"
                            color="white"
                            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            border="none"
                            fontWeight="bold"
                            boxShadow="0 0 10px rgba(147, 51, 234, 0.5),
                                      0 0 20px rgba(147, 51, 234, 0.3)"
                            _hover={{
                                transform: { base: 'none', md: 'translateY(-2px)' },
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
