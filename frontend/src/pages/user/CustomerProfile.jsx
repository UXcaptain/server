import { useState, useEffect } from 'react'
import apiClient from '../../config/API/axiosConfig.mjs'

import CustomerCard from '../../components/auth/CustomerCard'
import PasswordUpdateForm from '../../components/auth/PasswordUpdateForm'
import {
  Card,
  Box,
  Title,
  Text,
  Alert,
  Container,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { AccountActionsForm } from './AccountActionsForm'

const CustomerProfile = () => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await apiClient.get(`/api/v1/user`)

                setLoading(false);
                setUser(response.data.user)


            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchUser();
    }, [])

        

    
    if (loading) return (
        <Container size="lg" mt="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Text>Cargando usuario...</Text>
            </Card>
        </Container>
    );

    if (error) return (
        <Container size="lg" mt="xl">
            <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red">
                {error}
            </Alert>
        </Container>
    );

    return (
        <Container size="lg" mt="xl">
            
            {/* <CustomerCard user={user} /> */}
            
            <PasswordUpdateForm />
            
            {/* <AccountActionsForm /> */}
            
        </Container>
    )
}

export default CustomerProfile;