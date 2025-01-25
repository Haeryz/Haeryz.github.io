import React from "react";
import {
    Box,
    HStack,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import { BiGitBranch } from "react-icons/bi";
import { useTheme } from "../contexts/ThemeContext";
import { BsLightbulb } from 'react-icons/bs';
import LocationWidget from "./LocationWidget";

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
            columns={{ base: 1, md: 2, lg: 3 }} 
            gap={6}
            maxW="1200px" 
            mx="auto"
            p={6}
            color={currentStyle.text}
        >
            <LocationWidget style={currentStyle} />
            
            {/* Featured Work */}
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

            {/* Typing Speed */}
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

            {/* GitHub Activity */}
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
                <HStack align="center" mb={2}>
                    <BiGitBranch size="20px" color={currentStyle.accent} />
                    <Text fontWeight="bold" color={currentStyle.text}>
                        GitHub activity
                    </Text>
                </HStack>
                <Box 
                    bg={currentStyle.childBg}
                    p={4}
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    color={currentStyle.text}
                >
                    <Text color={currentStyle.textSecondary}>
                        1,378 contributions this year
                    </Text>
                    <Box 
                        h="100px" 
                        mt={2} 
                        bg={currentStyle.childBg}
                        border={currentStyle.border}
                    />
                </Box>
            </Box>

            {/* Tech Stack */}
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

            {/* Current Focus - replacing Last Played */}
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
        </SimpleGrid>
    );
};
