import { Box, Container, Heading, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container
            mb={20}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            py={6}
            // bgColor={'red.600'}
            maxW="100vw"
            width="100%"
            paddingInline={0}
        >
            <Box display={'flex'} alignItems={'center'} pl={4}>
                <Heading size={'4xl'}>
                    Hariz
                </Heading>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyItems={'center'} mr={4} gapX={4} fontSize={'2xl'}>
                <IconButton onClick={toggleTheme} variant={'outline'} size={'sm'}>
                    {theme === "galaxy" ? "🌌" : "🍭"}
                </IconButton>
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaXTwitter />
            </Box>
        </Container>
    );
};

export default Navbar;
