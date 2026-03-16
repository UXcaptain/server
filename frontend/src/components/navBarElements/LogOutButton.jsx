import { useNavigate } from "react-router";
import apiClient from "../../config/API/axiosConfig.mjs";
import { usePostHog } from 'posthog-js/react'
import { IconLogout } from '@tabler/icons-react';
import { Text, Group } from '@mantine/core';

const LogOutButton = () => {

    const posthog = usePostHog()
    const navigate = useNavigate();

    const handleLogout = async () => {
    try {
         
     await apiClient.post(`/api/v1/auth/logout`)
         
        // Reset PostHog to clear user session and prevent tracking continuity
        posthog.reset();
        
        navigate('/')

    } catch (error) {
        console.error('Logout failed:', error);
    }
    
    }

    return (
        <Group onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <IconLogout size={18} stroke={1.5} />
            <Text size="sm">Cerrar sesión</Text>
        </Group>
    );

};

export default LogOutButton;
