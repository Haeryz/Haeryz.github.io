import { Flex, HStack, IconButton } from '@chakra-ui/react'
import { MdOutlineWavingHand } from 'react-icons/md'
import { useTheme } from '../contexts/ThemeContext'
import { Tooltip } from './ui/tooltip'

const BottomNav = () => {
    const { theme } = useTheme();
    
    const styles = {
        galaxy: {
            text: '#FFFFFF',
            accent: '#8A2BE2'
        },
        'cotton-candy': {
            text: '#FFFFFF',
            accent: '#509be1'
        }
    };

    const currentStyle = styles[theme];

    const tooltipStyles = {
        galaxy: {
            bg: 'rgba(138, 43, 226, 0.2)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            boxShadow: '0 4px 12px rgba(138, 43, 226, 0.15)'
        },
        'cotton-candy': {
            bg: 'rgba(80, 155, 225, 0.2)',
            border: '1px solid rgba(80, 155, 225, 0.3)',
            boxShadow: '0 4px 12px rgba(80, 155, 225, 0.15)'
        }
    };

    const currentTooltipStyle = tooltipStyles[theme];

    const navItems = [
        { icon: <MdOutlineWavingHand />, label: 'Wave' },
        { icon: <MdOutlineWavingHand />, label: 'Hello' },
        { icon: <MdOutlineWavingHand />, label: 'Hi' },
        { icon: <MdOutlineWavingHand />, label: 'Hey' },
        { icon: <MdOutlineWavingHand />, label: 'Welcome' }
    ];

    return (
        <Flex 
            justify="center" 
            position="fixed" 
            bottom={4} 
            left={0} 
            right={0} 
            zIndex={999}  // Increased z-index
        >
            <HStack 
                gapX={4} 
                justify="center"
                bg="rgba(0, 0, 0, 0.4)"  // Increased background opacity
                backdropFilter="blur(12px)"  // Increased blur effect
                px={4}
                py={2}
                borderRadius="full"
                display="inline-flex"
                border="1px solid rgba(255, 255, 255, 0.1)"
            >
                {navItems.map((item, index) => (
                    <Tooltip
                        key={index}
                        content={item.label}
                        positioning={{placement: 'top'}}
                        openDelay={0}
                        closeDelay={0}
                        contentProps={{
                            bg: currentTooltipStyle.bg,
                            color: currentStyle.text,
                            px: 4,
                            py: 2,
                            borderRadius: 'xl',
                            border: currentTooltipStyle.border,
                            backdropFilter: 'blur(8px)',
                            boxShadow: currentTooltipStyle.boxShadow,
                            fontSize: 'sm',
                            fontWeight: 'medium',
                            transition: 'all 0.2s ease',
                            _hover: {
                                transform: 'translateY(-1px)',
                                boxShadow: currentTooltipStyle.boxShadow.replace('0.15', '0.25')
                            }
                        }}
                    >
                        <IconButton
                            aria-label={item.label}
                            variant="ghost"
                            color={currentStyle.text}
                            _hover={{ 
                                color: currentStyle.accent,
                                transform: 'translateY(-2px)'
                            }}
                            transition="all 0.3s ease"
                        >
                            {item.icon}
                        </IconButton>
                    </Tooltip>
                ))}
            </HStack>
        </Flex>
    )
}

export default BottomNav