import { Box, HStack } from "@chakra-ui/react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useCategory } from "../contexts/CategoryContext"

const Category = () => {
    const { themeColors } = useTheme();
    const { activeCategory, setActiveCategory } = useCategory();

    const handleCategoryClick = (category: 'project' | 'experience' | 'certificate') => {
        setActiveCategory(activeCategory === category ? null : category);
    };

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
                        background: activeCategory === 'project' ? themeColors.iconSecondary : themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                    onClick={() => handleCategoryClick('project')}
                >
                    Project
                </Button>
                <Button
                    style={{
                        background: activeCategory === 'experience' ? themeColors.iconSecondary : themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                    onClick={() => handleCategoryClick('experience')}
                >
                    Work Experience
                </Button>
                <Button
                    style={{
                        background: activeCategory === 'certificate' ? themeColors.iconSecondary : themeColors.iconPrimary,
                        color: 'white'
                    }}
                    _hover={{
                        background: themeColors.iconSecondary,
                        transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s ease"
                    onClick={() => handleCategoryClick('certificate')}
                >
                    Certificate
                </Button>
            </HStack>
        </Box>
    )
}

export default Category