import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const AuthMethodCard = () => {
  const methods = [
    { name: 'Microsoft', value: 100 },
    { name: 'Internal', value: 100 },
    { name: 'SAML', value: 100 },
  ]

  return (
    <Box bg="white" borderRadius="md" boxShadow="md" p={5}>
      <Heading size="sm" mb={4} color="gray.700">
        By Authentication Method
      </Heading>

      <SimpleGrid columns={2} spacingY={4}>
        {methods.map((method, index) => (
          <Box key={index}>
            <Text fontSize="sm" color="gray.600">{method.name}</Text>
            <Text fontWeight="bold" fontSize="lg">{method.value}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default AuthMethodCard
