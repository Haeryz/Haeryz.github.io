import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { FaBook, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Button } from './ui/button'
import { TypeAnimation } from 'react-type-animation';

const Nama = () => {
    const { theme } = useTheme();
    
    const styles = {
        galaxy: {
            text: '#FFFFFF',
            accent: '#8A2BE2'
        },
        'cotton-candy': {
            text: '#FFFFFF',
            accent: '#509be1'
        }
    };

    const currentStyle = styles[theme];

    return (
        <Box
            color={currentStyle.text}
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={6}
            position="relative"
            zIndex={1}
        >
            <Box textAlign="center">
                <Text fontSize="sm" color={currentStyle.accent} mb={2}>
                    Available for projects
                </Text>
                <Text fontSize="4xl" fontWeight="bold">
                    Hi, I'm Hariz.
                </Text>
                <Text fontSize="2xl" fontWeight="medium" mt={2} mb={6}>
                    A software engineer.
                </Text>
                <Box fontSize="lg" maxW="500px" mx="auto" mb={8}>
                    <TypeAnimation
                        sequence={[
                            "Mainly working in the JavaScript ecosystem, I'm a dedicated problem-solver who thrives on learning and building.",
                            2000,
                            "Mainly working in the TypeScript ecosystem, I'm a dedicated problem-solver who thrives on learning and building.",
                            2000,
                            "Mainly working in the C++ ecosystem, I'm a dedicated problem-solver who thrives on learning and building.",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </Box>
                <Flex justify="center" gap={4} mb={4}>
                    <IconButton
                        aria-label="GitHub"
                        variant="ghost"
                        as="a"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="whiteAlpha"
                        color={currentStyle.text}
                        _hover={{ color: currentStyle.accent }}
                    >
                        <FaGithub size={20} />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn"
                        variant="ghost"
                        as="a"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="whiteAlpha"
                        color={currentStyle.text}
                        _hover={{ color: currentStyle.accent }}
                    >
                        <FaLinkedin size={20} />
                    </IconButton>
                    <IconButton
                        aria-label="Portfolio"
                        variant="ghost"
                        as="a"
                        href="#portfolio"
                        colorScheme="whiteAlpha"
                        color={currentStyle.text}
                        _hover={{ color: currentStyle.accent }}
                    >
                        <FaBook size={20} />
                    </IconButton>
                    <IconButton
                        aria-label="Email"
                        variant="ghost"
                        as="a"
                        href="mailto:someone@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="whiteAlpha"
                        color={currentStyle.text}
                        _hover={{ color: currentStyle.accent }}
                    >
                        <FaEnvelope size={20} />
                    </IconButton>
                </Flex>
                <Button
                    as="a"
                    href="#explore-more"
                    style={{
                        background: currentStyle.accent,
                        color: currentStyle.text
                    }}
                    _hover={{
                        filter: 'brightness(1.2)'
                    }}
                >
                    Explore More
                </Button>
            </Box>
        </Box>
    )
}

export default Nama