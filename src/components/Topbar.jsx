import { Box, Flex, Input, InputGroup, InputLeftElement, Avatar, Text } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

function Topbar() {
  return (
    <Flex justify="space-between" align="center" mb={4}>
      <InputGroup maxW="400px">
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input placeholder="Search" bg="white" />
      </InputGroup>
      <Flex align="center" gap={2}>
        <Avatar size="sm" />
        <Text fontWeight="medium">Admin</Text>
      </Flex>
    </Flex>
  )
}

export default Topbar
