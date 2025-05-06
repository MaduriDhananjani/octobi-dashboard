import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Box, Text } from '@chakra-ui/react'

const data = [
  { date: '1 Sep', active: 400, new: 100 },
  { date: '2 Sep', active: 500, new: 300 },
  { date: '3 Sep', active: 450, new: 200 },
  { date: '4 Sep', active: 800, new: 100 },
  { date: '5 Sep', active: 350, new: 600 },
  { date: '6 Sep', active: 700, new: 750 },
  { date: '7 Sep', active: 300, new: 500 },
]

function UserActivityChart() {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="md" mt={6}>
      <Text mb={4} fontWeight="bold">User Activity</Text>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="active" stroke="#8884d8" />
          <Line type="monotone" dataKey="new" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default UserActivityChart
