// src/components/ActivityLog.jsx

import { Box, Flex, Text, Icon, VStack } from '@chakra-ui/react';
import { FiClock } from 'react-icons/fi';

const activities = [
  {
    message: 'User name here Permissions changed to admin by admin123',
    time: '2 hrs ago',
  },
  {
    message: 'User name Successfully logged in',
    time: '2 hrs ago',
  },
  {
    message: 'User name here Permissions changed to admin by admin123',
    time: '2 hrs ago',
  },
  {
    message: 'User name Successfully logged in',
    time: '2 days ago',
  },
];

const ActivityLog = () => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Activity Log
      </Text>
      <VStack spacing={4} align="stretch">
        {activities.map((activity, index) => (
          <Flex key={index} align="start">
            <Icon as={FiClock} mt={1} mr={4} color="gray.500" />
            <Box>
              <Text fontSize="sm">{activity.message}</Text>
              <Text fontSize="xs" color="gray.500">
                {activity.time}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityLog;
