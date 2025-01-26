import { Box, HStack, Text } from "@chakra-ui/react";
import { BsLightbulb } from 'react-icons/bs';

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
    return (
        <Box
            bg={style.childBg}
            backdropFilter="blur(10px)"
            p={4}
            rounded="md"
            border={style.border}
            transition="all 0.3s ease"
            _hover={{ bg: style.hoverBg }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            color={style.text}
        >
            <HStack>
                <BsLightbulb color={style.accent} />
                <Text color={style.textSecondary}>Current Focus</Text>
            </HStack>
            <Text fontWeight="bold" color={style.text} mt={2}>
                Machine Learning
            </Text>
            <Text fontSize="sm" color={style.textSecondary} textAlign="center">
                Exploring Neural Networks & Deep Learning
            </Text>
            <Box
                w="100%"
                h="2px"
                bg={style.accent}
                mt={3}
                opacity={0.3}
                borderRadius="full"
            >
                <Box
                    w="65%"
                    h="100%"
                    bg={style.accent}
                    borderRadius="full"
                />
            </Box>
        </Box>
    );
};

export default CurrentFocus;