import { useEffect, useState } from 'react'
import { Text, VStack, HStack, Icon } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsKeyboard, BsSpeedometer } from 'react-icons/bs'

interface TypingSpeedProps {
    style?: {
        text: string;
        textSecondary: string;
        accent: string;
    };
}

const MotionText = motion(Text);
const MotionHStack = motion(HStack);
const MotionIcon = motion(Icon);

const loadingAnimation = {
    animate: {
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

const opacityAnimation = {
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

const scaleAnimation = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const TypingSpeed = ({ style }: TypingSpeedProps) => {
    const [wpm, setWpm] = useState<number | null>(null);
    const [prevWpm, setPrevWpm] = useState<number | null>(null);

    useEffect(() => {
        const fetchWPM = async () => {
            try {
                const response = await fetch('https://api.monkeytype.com/results/last', {
                    headers: {
                        'Authorization': `ApeKey ${import.meta.env.VITE_MONKEYTYPE_API_KEY}`
                    }
                });
                const data = await response.json();
                if (data.data) {
                    setPrevWpm(wpm);
                    setWpm(Math.round(data.data.wpm));
                }
            } catch (error) {
                console.error('Error fetching WPM:', error);
            }
        };

        fetchWPM();
        // Refresh every 5 minutes
        const interval = setInterval(fetchWPM, 300000);
        return () => clearInterval(interval);
    }, [wpm]);

    if (!wpm) {
        return (
            <VStack gap={2}>
                <MotionIcon
                    as={BsKeyboard}
                    color={style?.accent}
                    boxSize={6}
                    variants={loadingAnimation}
                    initial="initial"
                    animate="animate"
                />
                <MotionText
                    fontSize="lg"
                    color={style?.textSecondary}
                    variants={opacityAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Loading...
                </MotionText>
            </VStack>
        );
    }

    const isIncrease = prevWpm ? wpm > prevWpm : null;

    return (
        <VStack gap={{ base: 2, md: 3 }}>
            <MotionHStack
                variants={scaleAnimation}
                initial="initial"
                animate="animate"
            >
                <Icon as={BsSpeedometer} color={style?.accent} boxSize={{ base: 5, md: 6 }} />
            </MotionHStack>
            
            <AnimatePresence mode="wait">
                <MotionText
                    key={wpm}
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                    color={style?.text}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {wpm}
                    <Text as="span" fontSize={{ base: "lg", md: "xl" }} color={style?.textSecondary}> wpm</Text>
                </MotionText>
            </AnimatePresence>

            {isIncrease !== null && (
                <MotionText
                    fontSize={{ base: "xs", md: "sm" }}
                    color={style?.textSecondary}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {isIncrease ? '↑' : '↓'} from {prevWpm} wpm
                </MotionText>
            )}
        </VStack>
    );
}

export default TypingSpeed