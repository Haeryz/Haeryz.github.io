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
}

interface TechStackProps {
    style: StyleProps;
}

const techStacks = [
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiGit, name: "Git" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" }
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
                        >
                            <tech.icon size={24} color={style.text} />
                            <Text fontSize="sm" color={style.textSecondary}>
                                {tech.name}
                            </Text>
                        </Box>
                    </InfiniteLogoSlider.Slide>
                ))}
            </InfiniteLogoSlider>
        </Box>
    );
};

export default TechStack;