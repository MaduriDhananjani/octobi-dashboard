import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Box, Text } from '@chakra-ui/react'

const data = [
  { name: 'Students', value: 151 },
  { name: 'Staff', value: 200 },
  { name: 'Other', value: 200 },
]

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

function PieChartBox() {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="md" mt={6}>
      <Text mb={4} fontWeight="bold">Daily Active Users</Text>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default PieChartBox
