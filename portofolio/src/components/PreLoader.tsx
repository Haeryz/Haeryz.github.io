import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const PreLoader = () => {
    const [progress, setProgress] = useState(0);
    const { themeColors } = useTheme();

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 2; // Increased increment for faster loading
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            background={themeColors.background}
            zIndex="9999"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    color={themeColors.iconPrimary}
                    mb={4}
                >
                    Loading...
                </Text>
            </motion.div>
            <Box
                w="200px"
                h="2px"
                bg={themeColors.sliderBg}
                position="relative"
                overflow="hidden"
                borderRadius="full"
            >
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    style={{
                        position: "absolute",
                        height: "100%",
                        backgroundColor: themeColors.iconPrimary,
                        borderRadius: "full",
                    }}
                />
            </Box>
            <Text
                color={themeColors.star}
                mt={2}
                fontSize="sm"
            >
                {progress}%
            </Text>
        </Box>
    );
};

export default PreLoader;
