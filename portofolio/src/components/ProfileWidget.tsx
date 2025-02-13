import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useTheme } from "../contexts/ThemeContext";
import LocationWidget from "./widgets/LocationWidget";
import GithubActivity from "./widgets/GithubActivity";
import TechStack from "./widgets/TechStack";
import TypingSpeed from "./widgets/TypingSpeed";
import CurrentFocus from "./widgets/CurrentFocus";
import FeaturedWork from "./widgets/FeaturedWork";

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
            accent: '#8A2BE2',
            iconPrimary: '#8A2BE2',
            iconSecondary: '#6B24B2',
            sliderBg: 'rgba(138, 43, 226, 0.1)'
        },
        'cotton-candy': {
            bg: 'rgba(80, 155, 225, 0.05)',
            border: '1px solid rgba(80, 155, 225, 0.2)',
            boxShadow: '0 8px 32px rgba(80, 155, 225, 0.1)',
            childBg: 'rgba(80, 155, 225, 0.1)',
            hoverBg: 'rgba(80, 155, 225, 0.15)',
            text: '#FFFFFF',
            textSecondary: 'rgba(255, 255, 255, 0.8)',
            accent: '#509be1',
            iconPrimary: '#509be1',
            iconSecondary: '#3d7ab0',
            sliderBg: 'rgba(80, 155, 225, 0.1)'
        }
    };

    const currentStyle = glassStyle[theme];

    return (
        <Box 
            width="100%" 
            maxWidth="100%"        // Changed from 100vw
            px={{ base: 1, md: 3, lg: 4 }}
            mx="auto"
            overflow="hidden"
        >
            <Grid 
                templateColumns={{
                    base: "minmax(0, 1fr)",  // Forces children to stay within container
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)"
                }}
                gap={{ base: 2, md: 4 }}
                maxW={{ base: "100%", lg: "1200px" }}
                mx="auto"
                color={currentStyle.text}
                width="100%"
            >
                {/* Featured Work */}
                <GridItem 
                    colSpan={{ base: 1, md: 2 }}
                    minH={{ base: "auto", md: "350px" }}
                    width="100%"           // Added width control
                >
                    <Box width="100%" height="100%">
                        <FeaturedWork style={currentStyle} />
                    </Box>
                </GridItem>

                {/* Location */}
                <GridItem 
                    colSpan={{ base: 1, md: 2 }}
                    minH={{ base: "200px", md: "300px" }}
                    width="100%"
                >
                    <Box width="100%" height="100%">
                        <LocationWidget style={currentStyle} />
                    </Box>
                </GridItem>

                {/* Typing Speed */}
                <GridItem 
                    colSpan={{ base: 1, md: 1 }}
                    minH={{ base: "100px", md: "120px" }}
                    width="100%"
                >
                    <Box
                        bg={currentStyle.childBg}
                        p={{ base: 3, md: 4 }}
                        rounded="md"
                        border={currentStyle.border}
                        height="100%"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        maxWidth="100%"
                    >
                        <TypingSpeed style={currentStyle} />
                    </Box>
                </GridItem>

                {/* GitHub Activity */}
                <GridItem 
                    colSpan={{ base: 1, md: 3 }}
                    minH={{ base: "120px", md: "120px" }}
                    width="100%"
                >
                    <Box width="100%" height="100%">
                        <GithubActivity style={currentStyle} />
                    </Box>
                </GridItem>

                {/* Current Focus */}
                <GridItem 
                    colSpan={{ base: 1, md: 2 }}
                    minH={{ base: "280px", md: "280px" }}
                    width="100%"
                >
                    <Box width="100%" height="100%">
                        <CurrentFocus style={currentStyle} />
                    </Box>
                </GridItem>

                {/* Tech Stack */}
                <GridItem 
                    colSpan={{ base: 1, md: 2 }}
                    minH={{ base: "280px", md: "280px" }}
                    width="100%"
                >
                    <Box width="100%" height="100%">
                        <TechStack style={currentStyle} />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};
