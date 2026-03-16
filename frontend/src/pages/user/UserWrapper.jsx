import { Outlet } from "react-router";
import NavbarSimple from "../../components/partials/UserNavBar";
import { useState } from "react";
import { AppShell, Box } from '@mantine/core';
import { SubscriptionProvider } from "../../contexts/SubscriptionContext.jsx";


const UserWrapper = () => {

    const [loading, setLoading] = useState(false);


  return (
    <SubscriptionProvider>
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <Box sx={{ maxWidth: 1400, margin: '0 auto', width: '100%', padding: '0 var(--mantine-spacing-md)' }}>
            <NavbarSimple />
          </Box>
        </AppShell.Header>

        <AppShell.Main>
          <Box sx={{ maxWidth: 1400, margin: '0 auto' }}>
            {loading ? (
              <div>Cargando...</div>
            ) : (
              <>
                <Outlet />
              </>
            )}
          </Box>
        </AppShell.Main>
      </AppShell>
    </SubscriptionProvider>
  );

}


export default UserWrapper;
