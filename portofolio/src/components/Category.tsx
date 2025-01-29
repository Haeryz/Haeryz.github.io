import { Box, HStack } from "@chakra-ui/react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"

const Category = () => {
    const { themeColors } = useTheme();

    return (
        <Box maxW={"55%"} mx="auto">
            <HStack 
                gapX={4} 
                justify="center" 
                borderRadius="xl" 
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                p={4} 
                mt={10}
            >
                <Button
                    style={{
                        background: themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                >
                    Project
                </Button>
                <Button
                    style={{
                        background: themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                >
                    Work Experience
                </Button>
                <Button
                    style={{
                        background: themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                >
                    Certificate
                </Button>
            </HStack>
        </Box>
    )
}

export default Category