import { Text } from '@chakra-ui/react'

interface TypingSpeedProps {
    style?: {
        text: string;
        textSecondary: string;
        accent: string;
    };
}


const TypingSpeed = ({ style }: TypingSpeedProps) => {
    return (
        <>
            <Text 
                color={style?.textSecondary} 
                mb={1} 
                fontSize={{ base: "xs", md: "sm" }}
                textAlign="center"
            >
                Typing speed
            </Text>
            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color={style?.text}
            >
                85 <Text as="span" fontSize={{ base: "sm", md: "md" }}>wpm</Text>
            </Text>
        </>
    );
};

export default TypingSpeed