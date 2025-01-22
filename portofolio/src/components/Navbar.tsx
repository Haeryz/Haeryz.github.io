import { Box, Container, Heading, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        galaxy: {
            text: '#FFFFFF',
            accent: '#8A2BE2',
            background: 'rgba(15, 12, 41, 0.3)'
        },
        'cotton-candy': {
            text: '#FFFFFF',
            accent: '#509be1',
            background: 'rgba(255, 113, 178, 0.2)'
        }
    };

    const currentStyle = styles[theme];

    return (
        <Container
            mb={2}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            py={6}
            maxW="100vw"
            width="100%"
            paddingInline={0}
            backdropFilter={isScrolled ? "blur(10px)" : "none"}
            bg={isScrolled ? currentStyle.background : 'transparent'}
            borderBottom={isScrolled ? "1px solid" : "none"}
            borderColor="rgba(255, 255, 255, 0.1)"
            position="fixed"
            top={0}
            zIndex={100}
            transition="all 0.3s ease"
        >
            <Box display={'flex'} alignItems={'center'} pl={4}>
                <Heading size={'4xl'} color={currentStyle.text}>
                    Hariz
                </Heading>
            </Box>
            <Box 
                display={'flex'} 
                alignItems={'center'} 
                gap={6}
                mr={4} 
                color={currentStyle.text}
            >
                <IconButton 
                    onClick={toggleTheme} 
                    variant={'ghost'} 
                    size={'lg'}
                    color={currentStyle.text}
                    _hover={{
                        bg: 'rgba(255, 255, 255, 0.1)',
                        color: currentStyle.accent
                    }}
                >
                    {theme === "galaxy" ? "🌌" : "🍭"}
                </IconButton>
                <Box 
                    display="flex" 
                    gap={6} 
                    fontSize={'xl'}
                    alignItems="center"
                >
                    <Box as="span" cursor="pointer" _hover={{ color: currentStyle.accent }}>
                        <FaLinkedin />
                    </Box>
                    <Box as="span" cursor="pointer" _hover={{ color: currentStyle.accent }}>
                        <FaGithub />
                    </Box>
                    <Box as="span" cursor="pointer" _hover={{ color: currentStyle.accent }}>
                        <FaInstagram />
                    </Box>
                    <Box as="span" cursor="pointer" _hover={{ color: currentStyle.accent }}>
                        <FaXTwitter />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Navbar;
