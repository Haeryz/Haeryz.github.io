import { Box, HStack, Text, IconButton, Circle } from "@chakra-ui/react";
import { BsLightbulb, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { SiTensorflow, SiReact, SiFigma } from 'react-icons/si';
import { useState } from 'react';

interface FocusItem {
    title: string;
    description: string;
    progress: number;
}

interface CurrentFocusProps {
    style: {
        childBg: string;
        border: string;
        hoverBg: string;
        text: string;
        textSecondary: string;
        accent: string;
    };
}

const CurrentFocus = ({ style }: CurrentFocusProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const focusItems: (FocusItem & { icon: JSX.Element })[] = [
        {
            title: "Machine Learning",
            description: "Exploring Neural Networks & Deep Learning",
            progress: 65,
            icon: <SiTensorflow size={24} />
        },
        {
            title: "Web Development",
            description: "React and Next.js Applications",
            progress: 80,
            icon: <SiReact size={24} />
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive user experiences",
            progress: 45,
            icon: <SiFigma size={24} />
        }
    ];

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % focusItems.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + focusItems.length) % focusItems.length);
    };

    return (
        <Box
            bg={style.childBg}
            backdropFilter="blur(20px)"
            p={4}
            rounded="md"
            border={style.border}
            transition="all 0.3s ease"
            _hover={{ bg: style.hoverBg }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            color={style.text}
            h="280px"
        >
            <HStack mb={2}>
                <BsLightbulb color={style.accent} />
                <Text color={style.textSecondary}>Current Focus</Text>
            </HStack>

            <Box position="relative" w="100%" h="180px" overflow="hidden">
                {focusItems.map((item, index) => {
                    const isActive = index === currentIndex;
                    const isPrev = index === ((currentIndex - 1 + focusItems.length) % focusItems.length);
                    const isNext = index === ((currentIndex + 1) % focusItems.length);

                    return (
                        <Box
                            key={index}
                            position="absolute"
                            w="100%"
                            top="50%"
                            left="0"
                            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                            opacity={isActive ? 1 : isPrev || isNext ? 0.3 : 0}
                            transform={
                                isActive ? 'translate(0, -50%) scale(1)' :
                                isPrev ? 'translate(0, -120%) scale(0.85)' :
                                isNext ? 'translate(0, 20%) scale(0.85)' :
                                'translate(0, -50%) scale(0.8)'
                            }
                            pointerEvents={isActive ? 'auto' : 'none'}
                            bg={`linear-gradient(135deg, ${style.childBg}90, ${style.childBg}40)`}
                            p={5}
                            rounded="xl"
                            border={style.border}
                            boxShadow={isActive ? `0 8px 32px -8px ${style.accent}40` : 'none'}
                            _hover={isActive ? {
                                transform: 'translate(0, -52%) scale(1.02)',
                                boxShadow: `0 12px 36px -8px ${style.accent}60`
                            } : {}}
                            maxW="95%"
                            mx="auto"
                        >
                            <HStack gap={3} mb={2}>
                                <Circle
                                    size="36px"
                                    bg={`${style.accent}20`}
                                    color={style.accent}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {item.icon}
                                </Circle>
                                <Box>
                                    <Text fontWeight="bold" color={style.text} fontSize="md">
                                        {item.title}
                                    </Text>
                                    <Text fontSize="xs" color={style.textSecondary}>
                                        {item.description}
                                    </Text>
                                </Box>
                            </HStack>
                            <Box
                                w="100%"
                                h="4px"
                                bg={`${style.accent}20`}
                                rounded="full"
                                overflow="hidden"
                                mt={3}
                            >
                                <Box
                                    w={`${item.progress}%`}
                                    h="100%"
                                    bg={`linear-gradient(90deg, ${style.accent}, ${style.accent}90)`}
                                    rounded="full"
                                    transition="width 0.4s ease"
                                />
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            <HStack mt={2} gap={4} justify="center">
                <IconButton
                    aria-label="Previous card"
                    onClick={prevCard}
                    size="sm"
                    variant="ghost"
                    color={style.accent}
                    _hover={{
                        bg: `${style.accent}20`,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.2s"
                >
                    <BsChevronUp />
                </IconButton>
                <IconButton
                    aria-label="Next card"
                    onClick={nextCard}
                    size="sm"
                    variant="ghost"
                    color={style.accent}
                    _hover={{
                        bg: `${style.accent}20`,
                        transform: 'translateY(2px)'
                    }}
                    transition="all 0.2s"
                >
                    <BsChevronDown />
                </IconButton>
            </HStack>
        </Box>
    );
};

export default CurrentFocus;