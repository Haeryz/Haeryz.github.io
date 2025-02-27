import { Box, Flex, IconButton, Text, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FaBook, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Button } from './ui/button'
import { TypeAnimation } from 'react-type-animation';
import pfp from '../assets/pfp.jpg';

const Avatar = () => {
    return (
        <div
            style={{
                width: '156px', // Slightly larger to accommodate gradient border
                height: '156px',
                borderRadius: '50%',
                margin: '0 auto',
                position: 'relative',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                padding: '3px', // This creates the border effect
            }}
        >
            <div
                style={{
                    background: '#000', // This matches your dark background
                    borderRadius: '50%',
                    padding: '2px', // Small gap between image and gradient
                    height: '100%',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={pfp}
                        alt="Profile Picture"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: '50% 10%'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const AnimatedLetter = ({ letter, accentColor }: { letter: string; accentColor: string }) => {
    return (
        <motion.span
            style={{ 
                display: 'inline-block', 
                whiteSpace: 'pre',
                position: 'relative'
            }}
            whileHover={{ 
                scale: 1.1, // Reduced scale for subtler effect
                color: accentColor,
                transition: {
                    duration: 0.2,
                    ease: "easeOut"
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            {letter}
            <motion.span
                style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'currentColor',
                    opacity: 0
                }}
                initial={{ width: '0%', left: '50%' }}
                whileHover={{
                    opacity: 1,
                    width: '100%',
                    left: '0%',
                    transition: { duration: 0.2 }
                }}
            />
        </motion.span>
    )
}

const AnimatedText = ({ text, accentColor }: { text: string; accentColor: string }) => {
    return (
        <span style={{ display: 'inline-block' }}>
            {text.split('').map((letter, index) => (
                <AnimatedLetter 
                    key={index} 
                    letter={letter === ' ' ? '\u00A0' : letter}
                    accentColor={accentColor}
                />
            ))}
        </span>
    )
}

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
                    mb={4} // Increased margin bottom
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

                {/* Add Avatar here */}
                <Box mb={6}>
                    <Avatar />
                </Box>

                <Text fontSize="4xl" fontWeight="bold">
                    <AnimatedText text="Hi, I'm Hariz." accentColor={currentStyle.accent} />
                </Text>
                <Text fontSize="2xl" fontWeight="medium" mt={2} mb={6}>
                    <AnimatedText text="A software engineer." accentColor={currentStyle.accent} />
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
                    <Link href="https://github.com/Haeryz" target="_blank" rel="noopener noreferrer">
                        <IconButton
                            aria-label="GitHub"
                            variant="ghost"
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
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <IconButton
                            aria-label="LinkedIn"
                            variant="ghost"
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
                    </Link>
                    <Link href="#portfolio">
                        <IconButton
                            aria-label="Portfolio"
                            variant="ghost"
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
                    </Link>
                    <Link href="mailto:haeriz42069@gmail.com" target="_blank" rel="noopener noreferrer">
                        <IconButton
                            aria-label="Email"
                            variant="ghost"
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
                    </Link>
                </Flex>
                <Link href="#explore-more" style={{ textDecoration: 'none' }}>
                    <Button
                        style={{
                            background: currentStyle.accent,
                            color: currentStyle.text
                        }}
                        _hover={{
                            filter: 'brightness(1.2)'
                        }}
                        w={40}
                        borderRadius={'lg'}
                    >
                        Explore More
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Nama