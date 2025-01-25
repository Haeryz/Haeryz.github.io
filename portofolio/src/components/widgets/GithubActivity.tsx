import React from 'react'
import { Box, HStack, Text, Link } from "@chakra-ui/react";
import { BiGitBranch } from "react-icons/bi";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from '../ui/tooltip';

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
    const username = 'Haeryz'; // Replace with your GitHub username

    // Function to get last 6 months of data
    const selectLastSixMonths = (contributions: any) => {
        const currentDate = new Date();
        const sixMonthsAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
        
        return contributions.filter((day: any) => {
            const contributionDate = new Date(day.date);
            return contributionDate >= sixMonthsAgo;
        });
    };

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
            gridColumn={{ base: "1", lg: "1 / span 2" }}  // Make it span 2 columns on large screens
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
                >
                    <GitHubCalendar 
                        username={username}
                        colorScheme='dark'
                        transformData={selectLastSixMonths}
                        hideColorLegend={true}
                        renderBlock={(block, activity) => (
                            <Tooltip 
                                content={renderTooltip(activity)}
                                positioning={{ placement: 'top', }}
                                showArrow
                            >
                                {block}
                            </Tooltip>
                        )}
                        style={{
                            color: style.text,
                            width: '100%',
                            height: '100%',
                            minHeight: '100px'
                        }}
                        theme={{
                            dark: [
                                style.childBg,          // level0
                                `${style.accent}33`,    // level1
                                `${style.accent}66`,    // level2
                                `${style.accent}99`,    // level3
                                style.accent,           // level4
                            ]
                        }}
                    />
                </Box>
            </Link>
        </Box>
    )
}

export default GithubActivity