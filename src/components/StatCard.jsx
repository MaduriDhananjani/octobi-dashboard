import { Box, Text, Heading } from '@chakra-ui/react'

function StatCard({ title, value, date }) {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="md">
      <Text fontSize="sm" color="gray.500">{title}</Text>
      <Heading fontSize="2xl">{value}</Heading>
      <Text fontSize="xs" color="gray.400">{date}</Text>
    </Box>
  )
}

export default StatCard
