import React from "react";
import {
    Box,
    HStack,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import { useTheme } from "../contexts/ThemeContext";
import { BsLightbulb } from 'react-icons/bs';
import LocationWidget from "./widgets/LocationWidget";
import GithubActivity from "./widgets/GithubActivity";

export const ProfileWidget = () => {
    const { theme } = useTheme();

    const glassStyle = {
        galaxy: {
            bg: 'rgba(138, 43, 226, 0.05)',
            border: '1px solid rgba(138, 43, 226, 0.2)',
            boxShadow: '0 8px 32px rgba(138, 43, 226, 0.1)',
            childBg: 'rgba(138, 43, 226, 0.1)',
            hoverBg: 'rgba(138, 43, 226, 0.15)',
            text: '#FFFFFF',
            textSecondary: 'rgba(255, 255, 255, 0.8)',
            accent: '#8A2BE2'
        },
        'cotton-candy': {
            bg: 'rgba(80, 155, 225, 0.05)',
            border: '1px solid rgba(80, 155, 225, 0.2)',
            boxShadow: '0 8px 32px rgba(80, 155, 225, 0.1)',
            childBg: 'rgba(80, 155, 225, 0.1)',
            hoverBg: 'rgba(80, 155, 225, 0.15)',
            text: '#FFFFFF',
            textSecondary: 'rgba(255, 255, 255, 0.8)',
            accent: '#509be1'
        }
    };

    const currentStyle = glassStyle[theme];

    return (
        <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }}  // Changed to 4 columns
            gap={6}
            maxW="1200px" 
            mx="auto"
            p={6}
            color={currentStyle.text}
        >
            {/* Location - 2 columns */}
            <Box gridColumn={{ base: "1", lg: "1 / span 2" }}>
                <LocationWidget style={currentStyle} />
            </Box>
            
            {/* Featured Work - 2 columns */}
            <Box gridColumn={{ base: "1", lg: "3 / span 2" }}>
                <Box 
                    bg={currentStyle.childBg}
                    backdropFilter="blur(10px)"
                    p={4} 
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    color={currentStyle.text}
                >
                    <Text fontWeight="bold" mb={2} color={currentStyle.text}>Featured work</Text>
                    <Box
                        bg={currentStyle.childBg}
                        p={4}
                        rounded="md"
                        textAlign="center"
                        transition="all 0.3s ease"
                        _hover={{ bg: currentStyle.hoverBg }}
                        border={currentStyle.border}
                        color={currentStyle.text}
                    >
                        <Text fontWeight="semibold" color={currentStyle.text}>Bookmarked</Text>
                        <Text fontSize="sm" color={currentStyle.textSecondary}>
                            Effortlessly save and organize content
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Typing Speed - 1 column */}
            <Box>
                <Box
                    bg={currentStyle.childBg}
                    backdropFilter="blur(10px)"
                    p={4}
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    color={currentStyle.text}
                >
                    <Text color={currentStyle.textSecondary}>Typing speed</Text>
                    <Text fontSize="4xl" fontWeight="bold" color={currentStyle.text}>
                        140 wpm
                    </Text>
                    <Text fontSize="sm" color={currentStyle.textSecondary}>
                        15s | 100% accuracy
                    </Text>
                </Box>
            </Box>

            {/* GitHub Activity - 2 columns */}
            <GithubActivity style={currentStyle} />

            {/* Tech Stack - 2 columns */}
            <Box gridColumn={{ base: "1", lg: "3 / span 2" }}>
                <Box 
                    bg={currentStyle.childBg}
                    backdropFilter="blur(10px)"
                    p={4} 
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    color={currentStyle.text}
                >
                    <Text fontWeight="bold" mb={2} color={currentStyle.text}>
                        Tech stacks I'm familiar with
                    </Text>
                    <HStack gap={4}>
                        {['React', 'Tailwind', 'Puppeteer'].map((tech) => (
                            <Box
                                key={tech}
                                bg={currentStyle.childBg}
                                p={2}
                                rounded="md"
                                border={currentStyle.border}
                                transition="all 0.3s ease"
                                _hover={{ bg: currentStyle.hoverBg }}
                                color={currentStyle.text}
                            >
                                {tech}
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Box>

            {/* Current Focus - 1 column */}
            <Box>
                <Box
                    bg={currentStyle.childBg}
                    backdropFilter="blur(10px)"
                    p={4}
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    color={currentStyle.text}
                >
                    <HStack>
                        <BsLightbulb color={currentStyle.accent} />
                        <Text color={currentStyle.textSecondary}>Current Focus</Text>
                    </HStack>
                    <Text fontWeight="bold" color={currentStyle.text} mt={2}>
                        Machine Learning
                    </Text>
                    <Text fontSize="sm" color={currentStyle.textSecondary} textAlign="center">
                        Exploring Neural Networks & Deep Learning
                    </Text>
                    <Box
                        w="100%"
                        h="2px"
                        bg={currentStyle.accent}
                        mt={3}
                        opacity={0.3}
                        borderRadius="full"
                    >
                        <Box
                            w="65%"
                            h="100%"
                            bg={currentStyle.accent}
                            borderRadius="full"
                        />
                    </Box>
                </Box>
            </Box>
        </SimpleGrid>
    );
};
