import { Box, Text } from "@chakra-ui/react";
import InfiniteLogoSlider from "react-infinite-logo-slider";
import { 
    SiReact, 
    SiTailwindcss, 
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiDocker,
    SiMysql,
    SiMongodb
} from "react-icons/si";

interface StyleProps {
    childBg: string;
    border: string;
    hoverBg: string;
    text: string;
    textSecondary: string;
    iconPrimary: string;
    iconSecondary: string;
    sliderBg: string;
}

interface TechStackProps {
    style: StyleProps;
}

const techStacks = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" }
];

const TechStack = ({ style }: TechStackProps) => {
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
        >
            <Text fontWeight="bold" mb={4} color={style.text} textAlign="center">
                Tech stacks I'm familiar with
            </Text>
            <Box
                bg={style.sliderBg}
                p={4}
                rounded="lg"
                border={style.border}
            >
                <InfiniteLogoSlider
                    width="80px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                >
                    {techStacks.map((tech, index) => (
                        <InfiniteLogoSlider.Slide key={index}>
                            <Box 
                                display="flex" 
                                flexDirection="column" 
                                alignItems="center"
                                transition="all 0.3s ease"
                                p={2}
                                rounded="md"
                                _hover={{
                                    bg: style.hoverBg,
                                    transform: 'translateY(-2px)'
                                }}
                            >
                                <tech.icon 
                                    size={24} 
                                    color={tech.color}
                                    style={{
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <Text 
                                    fontSize="sm" 
                                    color={style.textSecondary}
                                    mt={1}
                                    fontWeight="medium"
                                >
                                    {tech.name}
                                </Text>
                            </Box>
                        </InfiniteLogoSlider.Slide>
                    ))}
                </InfiniteLogoSlider>
                <Box mt={10}>
                <InfiniteLogoSlider
                    width="80px"
                    duration={30}  // Faster duration for second slider
                    pauseOnHover={true}
                    blurBorders={false}
                    toRight={true}
                >
                    {techStacks.map((tech, index) => (
                        <InfiniteLogoSlider.Slide key={index}>
                            <Box 
                                display="flex" 
                                flexDirection="column" 
                                alignItems="center"
                                transition="all 0.3s ease"
                                p={2}
                                rounded="md"
                                _hover={{
                                    bg: style.hoverBg,
                                    transform: 'translateY(-2px)'
                                }}
                            >
                                <tech.icon 
                                    size={24} 
                                    color={tech.color}
                                    style={{
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <Text 
                                    fontSize="sm" 
                                    color={style.textSecondary}
                                    mt={1}
                                    fontWeight="medium"
                                >
                                    {tech.name}
                                </Text>
                            </Box>
                        </InfiniteLogoSlider.Slide>
                    ))}
                </InfiniteLogoSlider>
                </Box>
            </Box>
        </Box>
    );
};

export default TechStack;