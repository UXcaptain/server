import { Paper, Box, Container } from '@mantine/core';
import { AnalysisTable } from "./AnalysisTable";
// import NoActiveSubscriptionBanner from "../../components/partials/NoActiveSubscriptionBanner.jsx";

const UserDashboard = () => {
    return (
        <Container size="lg">
            <Box>
                {/* <NoActiveSubscriptionBanner /> */}

                <Paper shadow="xs" p="md" mb="xl" mt="xl">
                    <AnalysisTable />
                </Paper>
            </Box>
        </Container>
    );
};

export default UserDashboard;
