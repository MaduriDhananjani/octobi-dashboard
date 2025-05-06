import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import {
  FiGrid,
  FiActivity,
  FiEdit,
  FiBookOpen,
  FiShoppingBag,
} from 'react-icons/fi'

const LinkItems = [
  { name: 'Dashboard', icon: FiGrid },
  { name: 'Data Lab', icon: FiActivity },
  { name: 'Surveys', icon: FiEdit },
  { name: 'Library', icon: FiBookOpen },
  { name: 'Marketplace', icon: FiShoppingBag },
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
        🐙 Octobi
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
