interface TagColor {
    bg: string;
    text: string;
    border: string;
}

export const tagColors: Record<string, TagColor> = {
    // Frontend
    'React': { bg: 'rgba(97, 218, 251, 0.3)', text: '#ffffff', border: '#61DAFB' },
    'ReactJS': { bg: 'rgba(97, 218, 251, 0.3)', text: '#ffffff', border: '#61DAFB' },
    'JavaScript': { bg: 'rgba(247, 223, 30, 0.3)', text: '#ffffff', border: '#f7df1e' },
    'TypeScript': { bg: 'rgba(49, 120, 198, 0.3)', text: '#ffffff', border: '#3178c6' },
    'ChakraUI': { bg: 'rgba(128, 90, 213, 0.3)', text: '#ffffff', border: '#805AD5' },
    'Zustand': { bg: 'rgba(236, 201, 75, 0.3)', text: '#ffffff', border: '#ECC94B' },
    'Vite': { bg: 'rgba(146, 89, 248, 0.3)', text: '#ffffff', border: '#9259F8' },

    // Backend
    'NodeJS': { bg: 'rgba(104, 160, 99, 0.3)', text: '#ffffff', border: '#68a063' },
    'Python': { bg: 'rgba(55, 118, 171, 0.3)', text: '#ffffff', border: '#3776AB' },
    'Django': { bg: 'rgba(51, 122, 83, 0.3)', text: '#ffffff', border: '#337A53' },
    'Laravel': { bg: 'rgba(255, 45, 32, 0.3)', text: '#ffffff', border: '#FF2D20' },
    'PHP': { bg: 'rgba(119, 123, 179, 0.3)', text: '#ffffff', border: '#777BB3' },
    'Express': { bg: 'rgba(204, 204, 204, 0.3)', text: '#ffffff', border: '#cccccc' },
    'ExpressJS': { bg: 'rgba(204, 204, 204, 0.3)', text: '#ffffff', border: '#cccccc' },

    // Mobile
    'Flutter': { bg: 'rgba(54, 208, 255, 0.3)', text: '#ffffff', border: '#36D0FF' },
    'Dart': { bg: 'rgba(0, 180, 216, 0.3)', text: '#ffffff', border: '#00B4D8' },
    'GetX': { bg: 'rgba(126, 87, 194, 0.3)', text: '#ffffff', border: '#7E57C2' },

    // Database
    'MongoDB': { bg: 'rgba(71, 162, 72, 0.3)', text: '#ffffff', border: '#47A248' },
    'MySQL': { bg: 'rgba(68, 121, 161, 0.3)', text: '#ffffff', border: '#4479A1' },
    'SQLite': { bg: 'rgba(0, 92, 197, 0.3)', text: '#ffffff', border: '#005CC5' },
    'sqlite3': { bg: 'rgba(0, 92, 197, 0.3)', text: '#ffffff', border: '#005CC5' },

    // Game Development
    'Unity': { bg: 'rgba(64, 64, 64, 0.3)', text: '#ffffff', border: '#404040' },
    'C#': { bg: 'rgba(99, 97, 173, 0.3)', text: '#ffffff', border: '#6361AD' },

    // Other
    'API': { bg: 'rgba(104, 160, 99, 0.3)', text: '#ffffff', border: '#68a063' },
    'Firebase': { bg: 'rgba(255, 203, 43, 0.3)', text: '#ffffff', border: '#FFCB2B' },
    'VR': { bg: 'rgba(120, 144, 156, 0.3)', text: '#ffffff', border: '#78909C' },
    'XR': { bg: 'rgba(120, 144, 156, 0.3)', text: '#ffffff', border: '#78909C' },
    'Meta XR': { bg: 'rgba(120, 144, 156, 0.3)', text: '#ffffff', border: '#78909C' },
    'IoT': { bg: 'rgba(3, 155, 229, 0.3)', text: '#ffffff', border: '#039BE5' },
    'Arduino': { bg: 'rgba(0, 151, 157, 0.3)', text: '#ffffff', border: '#00979D' },
    'C': { bg: 'rgba(40, 53, 147, 0.3)', text: '#ffffff', border: '#283593' },
    'Websocket': { bg: 'rgba(255, 171, 64, 0.3)', text: '#ffffff', border: '#FFAB40' },
    'HTML': { bg: 'rgba(227, 79, 38, 0.3)', text: '#ffffff', border: '#E34F26' },
    'CSS': { bg: 'rgba(21, 114, 182, 0.3)', text: '#ffffff', border: '#1572B6' },
    'JS': { bg: 'rgba(247, 223, 30, 0.3)', text: '#ffffff', border: '#f7df1e' },
    'MERN': { bg: 'rgba(0, 180, 216, 0.3)', text: '#ffffff', border: '#00B4D8' },
    'Sanctum': { bg: 'rgba(255, 45, 32, 0.3)', text: '#ffffff', border: '#FF2D20' },
    'Livewire': { bg: 'rgba(252, 185, 0, 0.3)', text: '#ffffff', border: '#FCB900' },
    'Zod': { bg: 'rgba(18, 138, 250, 0.3)', text: '#ffffff', border: '#128AFA' },
};

// Default fallback color
export const getTagColor = (tag: string): TagColor => {
    return tagColors[tag] || { bg: 'rgba(159, 122, 234, 0.3)', text: '#ffffff', border: '#9F7AEA' };
};
