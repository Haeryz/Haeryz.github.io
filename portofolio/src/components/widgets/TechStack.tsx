import { Box, HStack, Text } from "@chakra-ui/react";
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
    SiMongodb,
    SiExpress,
    SiCplusplus,
    SiC,
    SiChakraui,
    SiKubernetes,
    SiFigma,
    SiAdobexd,
    SiDart,
    SiFlutter,
    SiFirebase,
    SiPhp,
    SiLaravel,
    SiArduino
} from "react-icons/si";
import { AiFillStar } from 'react-icons/ai';
import { IconType } from "react-icons";

interface StyleProps {
    childBg: string;
    border: string;
    hoverBg: string;
    text: string;
    textSecondary: string;
    iconPrimary: string;
    iconSecondary: string;
    sliderBg: string;
    accent: string;  // Added missing accent property
}

interface TechStackProps {
    style: StyleProps;
}

interface TechLevel {
    name: string;
    level: number;  // 1 to 5
}

interface TechStack {
    icon: IconType;  // Add this type
    name: string;
    color: string;
}

const techStacks: TechStack[] = [
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiExpress, name: "ExpressJS", color: "#000000" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiCplusplus, name: "C++", color: "#00599C" },
    { icon: SiC, name: "C", color: "#A8B9CC" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiPhp, name: "PHP", color: "#777BB4" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiChakraui, name: "Chakra UI", color: "#319795" },  // Fixed capitalization
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiAdobexd, name: "Adobe XD", color: "#FF26BE" },
    { icon: SiArduino, name: "Arduino", color: "#00979D" },
];

const techLevels: TechLevel[] = [
    { name: "Frontend", level: 4 },
    { name: "Backend", level: 3 },
    { name: "Database", level: 4 },
    { name: "DevOps", level: 3 },
];

const TechStack = ({ style }: TechStackProps) => {
    const repeatedTechStacks = [...techStacks, ...techStacks, ...techStacks, ...techStacks];
    
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
                {/* First slider - Left to Right */}
                <InfiniteLogoSlider
                    width="100px"          // Increased from 80px
                    duration={120}
                    pauseOnHover={true}
                    blurBorders={false}
                    toRight={false}
                >
                    {repeatedTechStacks.map((tech, index) => (
                        <InfiniteLogoSlider.Slide 
                            key={`first-${index}`}
                        >
                            <Box 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100px',
                                    padding: '0 10px'
                                }}
                            >
                                <Box 
                                    display="flex" 
                                    flexDirection="column" 
                                    alignItems="center"
                                    justifyContent="center"
                                    width="100%"
                                    height="100%"
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
                            </Box>
                        </InfiniteLogoSlider.Slide>
                    ))}
                </InfiniteLogoSlider>

                {/* New Feature: Tech Level Indicators */}
                <Box 
                    mt={10} 
                    display="grid"
                    gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                    gap={4}
                >
                    {techLevels.map((tech, index) => (
                        <Box
                            key={index}
                            bg={`${style.accent}10`}
                            p={3}
                            rounded="md"
                            border={style.border}
                        >
                            <Text 
                                fontSize="sm" 
                                color={style.textSecondary}
                                mb={2}
                            >
                                {tech.name}
                            </Text>
                            <HStack gap={1}>
                                {[...Array(5)].map((_, i) => (
                                    <AiFillStar
                                        key={i}
                                        size={16}
                                        color={i < tech.level ? style.accent : `${style.accent}30`}
                                    />
                                ))}
                            </HStack>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TechStack;