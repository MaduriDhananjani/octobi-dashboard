import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings
} from 'react-icons/fi'

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings }
]

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      w="250px"
      h="100vh"
      bg="purple.50"
      borderRight="1px solid #e2e8f0"
      overflow="hidden"
      zIndex="1"
    >
      <Text fontSize="2xl" fontWeight="bold" p={6}>
        🐙 Bltentacles
      </Text>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children }) => (
  <Flex
    align="center"
    p={4}
    mx={4}
    borderRadius="md"
    cursor="pointer"
    _hover={{ bg: 'purple.100', color: 'purple.800' }}
  >
    <Icon as={icon} mr="3" />
    <Text>{children}</Text>
  </Flex>
)

export default Sidebar
