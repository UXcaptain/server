import { Paper, Box } from '@mantine/core';
import { AnalysisTable } from "./AnalysisTable";
import NoActiveSubscriptionBanner from "../../components/partials/NoActiveSubscriptionBanner.jsx";

const UserDashboard = () => {
    return (
        <Box>
            <NoActiveSubscriptionBanner />
            
            <Paper shadow="xs" p="md" mb="xl" mt="xl">
                <AnalysisTable />
            </Paper>
        </Box>
    );
};

export default UserDashboard;
