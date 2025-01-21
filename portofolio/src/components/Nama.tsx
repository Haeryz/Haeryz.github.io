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
                <Flex 
                    display="inline-flex"
                    alignItems="center"
                    bg="rgba(0, 0, 0, 0.2)"
                    px={3}
                    py={1}
                    borderRadius="full"
                    mb={2}
                >
                    <Box
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg="#22c55e"
                        mr={2}
                    />
                    <Text 
                        fontSize="sm" 
                        color="rgba(255, 255, 255, 0.9)"
                        fontWeight="medium"
                    >
                        Available for projects
                    </Text>
                </Flex>
                <Text fontSize="4xl" fontWeight="bold">
                    Hi, I'm Hariz.
                </Text>
                <Text fontSize="2xl" fontWeight="medium" mt={2} mb={6}>
                    A software engineer.
                </Text>
                <Box 
                    fontSize="lg" 
                    maxW="500px" 
                    mx="auto" 
                    mb={8}
                    height="80px"  // Fixed height to prevent layout shifts
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
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
                        style={{ 
                            display: 'inline-block',
                            minHeight: '60px',  // Minimum height for the text
                            textAlign: 'center'
                        }}
                    />
                </Box>
                <Flex 
                    justify="center" 
                    gap={6} 
                    mb={6}
                    bg="rgba(255, 255, 255, 0.05)"
                    backdropFilter="blur(10px)"
                    borderRadius="xl"
                    p={4}
                    maxW="fit-content"
                    mx="auto"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                >
                    <IconButton
                        aria-label="GitHub"
                        variant="ghost"
                        as="a"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        color={currentStyle.text}
                        _hover={{ 
                            color: currentStyle.accent,
                            transform: 'translateY(-2px)',
                            bg: 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    >
                        <FaGithub size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn"
                        variant="ghost"
                        as="a"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        color={currentStyle.text}
                        _hover={{ 
                            color: currentStyle.accent,
                            transform: 'translateY(-2px)',
                            bg: 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    >
                        <FaLinkedin size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Portfolio"
                        variant="ghost"
                        as="a"
                        href="#portfolio"
                        color={currentStyle.text}
                        _hover={{ 
                            color: currentStyle.accent,
                            transform: 'translateY(-2px)',
                            bg: 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    >
                        <FaBook size={24} />
                    </IconButton>
                    <IconButton
                        aria-label="Email"
                        variant="ghost"
                        as="a"
                        href="mailto:someone@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        color={currentStyle.text}
                        _hover={{ 
                            color: currentStyle.accent,
                            transform: 'translateY(-2px)',
                            bg: 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition="all 0.3s ease"
                        size="lg"
                    >
                        <FaEnvelope size={24} />
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