import { Box, Text, Heading, List, HStack } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

interface WorkExperience {
    company: string;
    role: string;
    period: string;
    achievements: string[];
}

const workExperiences: WorkExperience[] = [
    {
        company: "CV Indo Azka",
        role: "Full Stack Intern",
        period: "December 2024 - March 2025",
        achievements: [
            "Developed a full-stack e-commerce platform with React/TypeScript frontend and Node.js backend",
            "Implemented real-time order tracking and chat functionality using Socket.IO",
            "Optimized state management with Zustand for a smoother user experience",
            "Designed authentication system with OTP verification, JWT tokens, and role-based access control",
            "Built an admin dashboard with real-time order management, analytics, and Excel export functionality"
        ]
    },
    {
        company: "Jatim Park 3",
        role: "Contract Project",
        period: "August 2024 - January 2025",
        achievements: [
            "Led development of the Fruit-Ninja game using C#, ShaderLab, and HLSL",
            "Researched and implemented graphical techniques for improved gameplay visuals",
            "Presented technical design and performance optimizations to a global audience"
        ]
    }
];

interface FeaturedWorkProps {
    style: {
        childBg: string;
        border: string;
        hoverBg: string;
        text: string;
        textSecondary: string;
        accent: string;
    };
}

const FeaturedWork = ({ style }: FeaturedWorkProps) => {
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
            display="flex"
            flexDirection="column"
            maxW="100%"
        >
            <Text 
                fontWeight="bold" 
                mb={{ base: 2, md: 4 }} 
                color={style.text}
            >
                Professional Experience
            </Text>
            <Box
                overflowX="auto"
                overflowY="hidden"
                flex="1"
                maxW="100%"
                css={{
                    '&::-webkit-scrollbar': {
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: style.childBg,
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: style.accent,
                        borderRadius: '4px',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '-webkit-overflow-scrolling': 'touch',
                }}
            >
                <HStack 
                    gap={{ base: 2, sm: 3, md: 4 }} 
                    pb={2} 
                    height="calc(100% - 8px)"
                >
                    {workExperiences.map((exp, index) => (
                        <Box
                            key={index}
                            bg={style.childBg}
                            p={{ base: 3, md: 4 }}
                            rounded="md"
                            border={style.border}
                            minW={{ base: "85vw", sm: "280px", md: "300px", lg: "350px" }}
                            maxW={{ base: "85vw", sm: "300px", md: "350px", lg: "400px" }}
                            height="100%"
                            flex="0 0 auto"
                            display="flex"
                            flexDirection="column"
                            overflowY="auto"
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                '&:hover::-webkit-scrollbar': {
                                    display: 'block',
                                    width: '4px',
                                },
                                '&:hover::-webkit-scrollbar-track': {
                                    background: style.childBg,
                                },
                                '&:hover::-webkit-scrollbar-thumb': {
                                    background: style.accent,
                                    borderRadius: '4px',
                                },
                            }}
                        >
                            <Heading 
                                size={{ base: "xs", md: "sm" }} 
                                color={style.accent} 
                                mb={1}
                            >
                                {exp.company} - {exp.role}
                            </Heading>
                            <Text 
                                fontSize={{ base: "xs", md: "sm" }} 
                                color={style.textSecondary} 
                                mb={2}
                            >
                                {exp.period}
                            </Text>
                            <List.Root 
                                gap={2} 
                                flex="1" 
                                overflowY="auto"
                                css={{
                                    '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                            >
                                {exp.achievements.map((achievement, idx) => (
                                    <List.Item 
                                        key={idx} 
                                        fontSize={{ base: "xs", md: "sm" }}
                                        color={style.textSecondary}
                                        display="flex"
                                        alignItems="flex-start"
                                        gap={2}
                                    >
                                        <Box 
                                            as={MdChevronRight} 
                                            color={style.accent}
                                            fontSize="1.1em"
                                            mt={1}
                                        />
                                        {achievement}
                                    </List.Item>
                                ))}
                            </List.Root>
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Box>
    );
};

export default FeaturedWork;
