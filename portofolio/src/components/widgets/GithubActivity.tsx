import React, { useState, useEffect } from 'react'
import { Box, HStack, Text, Link } from "@chakra-ui/react";
import { BiGitBranch } from "react-icons/bi";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from '../ui/tooltip';
import { Skeleton } from '../ui/skeleton';

interface GlassStyle {
    bg: string;
    border: string;
    boxShadow: string;
    childBg: string;
    hoverBg: string;
    text: string;
    textSecondary: string;
    accent: string;
}

interface Props {
    style: GlassStyle;
}

const GithubActivity: React.FC<Props> = ({ style }) => {
    const [isLoading, setIsLoading] = useState(true);
    const username = 'Haeryz'; // Replace with your GitHub username

    // Add useEffect to handle loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Assume loading takes about 1.5s

        return () => clearTimeout(timer);
    }, []);

    // Custom tooltip format
    const renderTooltip = (day: any) => {
        const date = new Date(day.date);
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            `${day.count} contributions on ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        );
    };

    return (
        <Box
            bg={style.childBg}
            backdropFilter="blur(10px)"
            p={4}
            rounded="md"
            border={style.border}
            transition="all 0.3s ease"
            _hover={{ bg: style.hoverBg }}
            color={style.text}
            gridColumn={{ base: "1", lg: "1 / span 2" }}  // Make it span 2 columns on large 
        >
            <HStack align="center" mb={2}>
                <BiGitBranch size="20px" color={style.accent} />
                <Text fontWeight="bold" color={style.text}>
                    GitHub activity
                </Text>
            </HStack>
            <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Box
                    bg={style.childBg}
                    p={4}
                    rounded="md"
                    border={style.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: style.hoverBg }}
                    color={style.text}
                    position="relative"
                    minHeight="140px"  // Reduced from 180px
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"  // Added to prevent overflow
                >
                    {isLoading && (
                        <Skeleton
                            height="100%"
                            width="100%"
                        />
                    )}
                    <Box
                        position={isLoading ? "absolute" : "relative"}
                        top="0"
                        left="0"
                        width="100%"
                        height="auto"  // Changed from 100%
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        opacity={isLoading ? 0 : 1}
                        transition="opacity 0.3s ease"
                        p={1}  // Reduced padding
                        overflow="hidden"  // Added to prevent overflow
                    >
                        <GitHubCalendar
                            username={username}
                            colorScheme='dark'
                            hideColorLegend={true}
                            renderBlock={(block, activity) => (
                                <Tooltip
                                    content={renderTooltip(activity)}
                                    positioning={{ placement: 'top' }}
                                    showArrow
                                >
                                    {block}
                                </Tooltip>
                            )}
                            style={{
                                color: style.text,
                                width: '100%',
                                height: 'auto',  // Changed from 100%
                                maxWidth: '100%',  // Added to ensure fitting
                                fontSize: '10px',  // Added to make text smaller
                            }}
                            theme={{
                                dark: [
                                    style.childBg,
                                    `${style.accent}33`,
                                    `${style.accent}66`,
                                    `${style.accent}99`,
                                    style.accent,
                                ]
                            }}
                        />
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default GithubActivity