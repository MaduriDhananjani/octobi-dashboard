'use client'

import {
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react'
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
    <Flex
      h="100vh"
      w="100vw"
      overflow="hidden"
      maxW="100vw"
    >
      {/* Sidebar */}
      <Box
        w="250px"
        bg="#f5efff"
        p={5}
        position="fixed"
        top={0}
        left={0}
        bottom={0}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6} color="#1a1a1a">
          🐙 BItentacles
        </Text>
        {LinkItems.map((link, index) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            active={index === 0} // make Dashboard active
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Flex>
  )
}

const NavItem = ({ icon, children, active = false }) => (
  <Flex
    align="center"
    p="3"
    mb="2"
    borderRadius="md"
    cursor="pointer"
    bg={active ? '#e7ddff' : 'transparent'}
    color={active ? '#7e5cff' : 'gray.700'}
    fontWeight={active ? 'semibold' : 'normal'}
    _hover={{ bg: '#d9c8ff', color: '#7e5cff' }}
  >
    <Icon as={icon} mr="3" />
    <Text>{children}</Text>
  </Flex>
)

export default Sidebar
