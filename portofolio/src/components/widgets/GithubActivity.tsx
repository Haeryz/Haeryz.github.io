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
    const renderTooltip = (day: { date: string; count: number }) => {
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
            height="100%"
            width="100%"
        >
            <HStack align="center" mb={2}>
                <BiGitBranch size="20px" color={style.accent} />
                <Text fontWeight="bold" color={style.text}>
                    GitHub activity
                </Text>
            </HStack>
            <Link 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                width="100%"
                display="block"
            >
                <Box
                    bg={style.childBg}
                    p={2}
                    rounded="md"
                    border={style.border}
                    transition="all 0.3s ease"
                    _hover={{ bg: style.hoverBg }}
                    width="100%"
                    height="100%"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {isLoading && (
                        <Skeleton height="100%" width="100%" />
                    )}
                    <Box
                        position={isLoading ? "absolute" : "relative"}
                        width="100%"
                        opacity={isLoading ? 0 : 1}
                        transition="opacity 0.3s ease"
                        css={{
                            '.react-github-calendar': {
                                width: '100% !important',
                            },
                            '.react-github-calendar > div': {
                                width: '100% !important',
                                display: 'flex !important',
                                justifyContent: 'center',
                            },
                            '.react-github-calendar svg': {
                                width: '100% !important',
                                height: 'auto !important',
                                maxHeight: '100%',
                                aspectRatio: '4/1',
                            },
                            '@media (max-width: 768px)': {
                                '.react-github-calendar svg': {
                                    transform: 'scale(0.8)',
                                    transformOrigin: 'center center',
                                }
                            },
                            '@media (max-width: 480px)': {
                                '.react-github-calendar svg': {
                                    transform: 'scale(0.6)',
                                }
                            },
                            '.react-github-calendar rect': {
                                stroke: `${style.childBg}`,
                                strokeWidth: '1.5px', // Increased stroke width
                            }
                        }}
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
                            blockSize={12} // Increased from 10
                            fontSize={12}
                            theme={{
                                dark: [
                                    style.childBg,                    // Level 0 (empty)
                                    `${style.accent}66`,             // Level 1 (40% opacity)
                                    `${style.accent}99`,             // Level 2 (60% opacity)
                                    `${style.accent}CC`,             // Level 3 (80% opacity)
                                    `${style.accent}FF`,             // Level 4 (100% opacity)
                                ]
                            }}
                            style={{
                                color: style.text, // Changed from textSecondary for better contrast
                                margin: '0 auto',
                                fontWeight: '500', // Added font weight
                            }}
                        />
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default GithubActivity