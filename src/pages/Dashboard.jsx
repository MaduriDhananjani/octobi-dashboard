import { Box, Grid, GridItem } from '@chakra-ui/react'
import Topbar from '../components/Topbar'
import StatCard from '../components/StatCard'
import UserActivityChart from '../components/UserActivityChart'
import PieChartBox from '../components/PieChartBox'
import ActivityLog from '../components/ActivityLog'
import AuthMethodCard from '../components/AuthMethodCard'

function Dashboard() {
  return (
    <Box
      ml="250px"
      p={6}
      bg="#f5efff"
      minH="100vh"
      w="calc(100vw - 250px)" 
      overflowX="hidden"
    >
      <Topbar />

      <Grid templateColumns="repeat(12, 1fr)" gap={6} mb={6}>
        <GridItem colSpan={[12, 6, 4]}>
          <StatCard title="Daily Active Users" value="1,051" date="18 Mar 2020" />
        </GridItem>
        <GridItem colSpan={[12, 6, 4]}>
          <StatCard title="Monthly Active User" value="1051" date="18 Mar 2020" />
        </GridItem>
        <GridItem colSpan={[12, 6, 4]}>
          <StatCard title="Daily Time Per Active Users" value="1051" date="18 Mar 2020" />
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(12, 1fr)" gap={6} mb={6}>
        <GridItem colSpan={[12, 12, 8]}>
          <UserActivityChart />
        </GridItem>
        <GridItem colSpan={[12, 12, 4]}>
          <Grid gap={6}>
            <PieChartBox />
          </Grid>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} mb={6}>

        <GridItem colSpan={[12, 12, 8]}>
          <Grid gap={6}>
          <AuthMethodCard />
          </Grid>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={12}>
          <ActivityLog />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Dashboard
