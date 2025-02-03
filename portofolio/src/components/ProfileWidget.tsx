import {
    Box,
    Text,
    Grid,
    GridItem,
} from "@chakra-ui/react";
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
        <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={4}
            maxW="1200px" 
            mx="auto"
            p={4}
            color={currentStyle.text}
        >
            {/* Row 1 */}
            <GridItem 
                colSpan={{ base: 1, lg: 2 }} 
                height={{ base: "250px", md: "300px", lg: "350px" }}
            >
                <Box height="100%">
                    <LocationWidget style={currentStyle} />
                </Box>
            </GridItem>

            <GridItem 
                colSpan={{ base: 1, lg: 2 }}
                height={{ base: "350px", md: "300px", lg: "350px" }}
            >
                <Box height="100%">
                    <FeaturedWork style={currentStyle} />
                </Box>
            </GridItem>

            {/* Row 2 */}
            <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
                <Box
                    bg={currentStyle.childBg}
                    backdropFilter="blur(10px)"
                    p={4}
                    rounded="md"
                    border={currentStyle.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: currentStyle.hoverBg }}
                    height="100%"
                    minH="200px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text color={currentStyle.textSecondary} mb={3}>Typing speed</Text>
                    <TypingSpeed style={currentStyle} />
                </Box>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 2, lg: 3 }}>
                <GithubActivity style={currentStyle} />
            </GridItem>

            {/* Row 3 */}
            <GridItem colSpan={{ base: 1, lg: 2 }}>
                <CurrentFocus style={currentStyle} />
            </GridItem>

            <GridItem colSpan={{ base: 1, lg: 2 }}>
                <TechStack style={currentStyle} />
            </GridItem>
        </Grid>
    );
};
