import apiClient from "../../config/API/axiosConfig.mjs";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Box,
  Title,
  Card,
  Text,
  Alert,
  Modal,
  Pill,
  Stack,
  Divider
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { getTemplateOptions, getTemplateById } from '../../templates/analysisTemplates.js';
import { usePostHog } from 'posthog-js/react';



export const CreateAnalysisPage = () => {

    const posthog = usePostHog();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingTemplate, setPendingTemplate] = useState(null);
    const [countdown, setCountdown] = useState(5);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();



    const [maxNumberOfParticipants, setmaxNumberOfParticipants] = useState(5);
    const [tasks, setTasks] = useState([{ value: '' }, { value: '' }, { value: '' }]);
    const [scenario, setScenario] = useState('');
    const [errors, setErrors] = useState({});

    const addTask = () => {
        setTasks([...tasks, { value: '' }]);
        if (errors.tasks) {
            setErrors(prev => ({ ...prev, tasks: '' }));
        }
    };

    const removeTask = (index) => {
        if (tasks.length <= 1) {
            setErrors(prev => ({ ...prev, tasks: 'Incluye al menos una tarea' }));
            return;
        }
        
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        
        if (errors.tasks) {
            setErrors(prev => ({ ...prev, tasks: '' }));
        }
    };

    const handleTaskChange = (index, value) => {
        const newTasks = [...tasks];
        newTasks[index].value = value;
        setTasks(newTasks);
        
        if (errors.tasks) {
            setErrors(prev => ({ ...prev, tasks: '' }));
        }
    };

    const hasExistingContent = () => {
        return tasks.some(task => task.value.trim() !== '');
    };

    const handleTemplateSelect = (templateId) => {
        if (!templateId) {
            setSelectedTemplate(null);
            return;
        }

        if (hasExistingContent()) {
            setPendingTemplate(templateId);
            setShowConfirmModal(true);
        } else {
            applyTemplate(templateId);
        }
    };

    const applyTemplate = (templateId) => {
        const template = getTemplateById(templateId);
        if (!template) return;

        setSelectedTemplate(templateId);
        
        const newTasks = template.tasks.map(taskContent => ({
            value: taskContent
        }));
        
        setTasks(newTasks);
        
        if (errors.tasks) {
            setErrors(prev => ({ ...prev, tasks: '' }));
        }

        posthog?.capture('analysisTemplateApplied', {
            templateId: templateId,
        });
    };

    const handleConfirmTemplateApplication = () => {
        if (pendingTemplate) {
            applyTemplate(pendingTemplate);
            setPendingTemplate(null);
        }
        setShowConfirmModal(false);
    };

    const handleCancelTemplateApplication = () => {
        setPendingTemplate(null);
        setShowConfirmModal(false);
        setSelectedTemplate(null);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!name || name.trim() === '') {
            newErrors.name = 'El nombre del análisis es obligatorio';
        }

        if (!url || url.trim() === '') {
            newErrors.url = 'La URL es obligatoria';
        } else if (!/^https?:\/\/(www\.)?([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}.*$/.test(url) &&
                   !/^(www\.)?([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}.*$/.test(url)) {
            newErrors.url = 'Por favor, introduzca una URL válida con una estructura de dominio adecuada';
        }

        if (!maxNumberOfParticipants || maxNumberOfParticipants < 1) {
            newErrors.maxNumberOfParticipants = 'El número de participantes debe ser al menos 1';
        }

        const nonEmptyTasks = tasks.filter(task => task.value.trim() !== '');
        if (nonEmptyTasks.length === 0) {
            newErrors.tasks = 'Se requiere al menos una tarea con contenido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const normalizeUrl = (inputUrl) => {
        if (!inputUrl) return '';

        const trimmedUrl = inputUrl.trim();

        if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
            return trimmedUrl;
        }

        return `https://${trimmedUrl}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const nonEmptyTasks = tasks.filter(task => task.value.trim() !== '');

        const formattedTasks = nonEmptyTasks.map(task => ({
            taskType: "text",
            taskContent: task.value
        }));

        const demographicFilters = null;

        const analysisData = {
            name,
            tasks: formattedTasks,
            generalDetails: {
                device: "computer",
                url: normalizeUrl(url),
                maxNumberOfParticipants,
                scenario,
                recruitmentType: 'userProvided',
            },
            demographicFilters,
        }

        try {
            const response = await apiClient.post('/api/v1/analysis', analysisData);
            setSuccessMessage('¡Análisis creado con éxito!');
            setShowModal(true);
            setCountdown(5);
            const timer = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown <= 1) {
                        clearInterval(timer);
                        setShowModal(false);
                        navigate('/dashboard');
                        return 0;
                    }
                    return prevCountdown - 1;
                });
            }, 1000);
            return response.data;
        } catch (error) {
            console.error("Error creando análisis:", error);
            throw error;
        }
    };

    return (
        <Box sx={{ maxWidth: 700 }} mx="auto" mt="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={2} mb="lg">Crear Nuevo Análisis</Title>
                <form onSubmit={handleSubmit}>
                    <Stack gap="md">
                        <Box>
                            <Title order={4} mb="md">Información Básica</Title>
                            <Stack gap="md">
                                <TextInput
                                    label="Nombre del Análisis"
                                    placeholder="Happy Path - Purchase"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (errors.name) {
                                            setErrors(prev => ({ ...prev, name: '' }));
                                        }
                                    }}
                                    error={errors.name}
                                    required
                                />

                                <Textarea
                                    label="URL a Analizar"
                                    placeholder="https://youtube.com"
                                    value={url}
                                    onChange={(e) => {
                                        setUrl(e.target.value);
                                        if (errors.url) {
                                            setErrors(prev => ({ ...prev, url: '' }));
                                        }
                                    }}
                                    error={errors.url}
                                    required
                                />

                                <Textarea
                                    label="Escenario (Opcional)"
                                    placeholder="Imagina que es el cumpleaños de tu hermano y tienes 250€ para comprar un reloj"
                                    value={scenario}
                                    onChange={(e) => setScenario(e.target.value)}
                                    minRows={3}
                                />
                            </Stack>
                        </Box>

                        <Divider />

                        <Box>
                            <Title order={4} mb="md">Configuración de Reclutamiento</Title>
                            <Stack gap="md">
                                <NumberInput
                                    label="Número de Participantes"
                                    value={maxNumberOfParticipants}
                                    onChange={(value) => {
                                        setmaxNumberOfParticipants(value);
                                        if (errors.maxNumberOfParticipants) {
                                            setErrors(prev => ({ ...prev, maxNumberOfParticipants: '' }));
                                        }
                                    }}
                                    error={errors.maxNumberOfParticipants}
                                    required
                                    min={1}
                                    max={20}
                                />
                                <Text size="sm" color="dimmed">
                                    Para obtener mejores resultados, utiliza entre 5-7 participantes
                                </Text>
                            </Stack>
                        </Box>

                        <Divider />

                        <Box>
                            <Group position="apart" mb="xs">
                                <Title order={4}>Tareas del Análisis</Title>
                                <Button onClick={addTask} variant="outline" size="sm">
                                    Añadir Tarea
                                </Button>
                            </Group>
                            <Text size="sm" color="dimmed" mb="sm">
                                Recuerda que para obtener mejores resultados, la duración debe ser de 15-20 minutos - Aproximadamente 3 minutos por tarea
                            </Text>
                            
                            <Box mb="md">
                                <Text size="sm" weight={500} mb="xs">
                                    Plantillas (Opcional)
                                </Text>
                                <Text size="xs" color="dimmed" mb="sm">
                                    Selecciona una plantilla para autocompletar las tareas
                                </Text>
                                <Group spacing="xs">
                                    {getTemplateOptions().map((template) => (
                                        <Pill
                                            key={template.value}
                                            size="lg"
                                            onClick={() => handleTemplateSelect(template.value)}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: selectedTemplate === template.value
                                                    ? 'var(--mantine-color-blue-filled)'
                                                    : 'var(--mantine-color-gray-1)',
                                                color: selectedTemplate === template.value
                                                    ? 'white'
                                                    : 'var(--mantine-color-gray-7)',
                                            }}
                                        >
                                            {template.label}
                                        </Pill>
                                    ))}
                                </Group>
                            </Box>
                            
                            {errors.tasks && (
                                <Alert icon={<IconAlertCircle size="1rem" />} title="Error de Tarea" color="red" mb="sm">
                                    {errors.tasks}
                                </Alert>
                            )}

                            {tasks.map((task, index) => (
                                <Card key={index} shadow="none" padding="sm" radius="md" withBorder mb="sm">
                                    <Group position="apart" mb="xs">
                                        <Text size="sm" weight={500}>Tarea {index + 1}</Text>
                                        {tasks.length > 1 && (
                                            <Button
                                                onClick={() => removeTask(index)}
                                                variant="subtle"
                                                color="red"
                                                size="xs"
                                            >
                                                Eliminar
                                            </Button>
                                        )}
                                    </Group>
                                    <Textarea
                                        placeholder="Introduzca la descripción de la tarea"
                                        value={task.value}
                                        onChange={(e) => handleTaskChange(index, e.target.value)}
                                        minRows={2}
                                    />
                                </Card>
                            ))}
                        </Box>

                        <Group position="right" mt="md">
                            <Button type="submit">
                                Crear Análisis
                            </Button>
                        </Group>
                    </Stack>
                </form>
                <Modal
                    opened={showModal}
                    onClose={() => setShowModal(false)}
                    title="Éxito"
                    centered
                    size="md"
                    styles={{
                        modal: {
                            backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))',
                            borderRadius: 'var(--mantine-radius-md)',
                            padding: 'var(--mantine-spacing-md)',
                        },
                        title: {
                            fontSize: 'var(--mantine-font-size-lg)',
                            fontWeight: 700,
                            fontFamily: 'Greycliff CF, var(--mantine-font-family)',
                            color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
                        },
                        body: {
                            padding: 'var(--mantine-spacing-md)',
                        },
                    }}
                >
                    <Text size="md" style={{ color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-1))' }}>{successMessage}</Text>
                    <Text size="sm" mt="sm" style={{ color: 'light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2))' }}>Redirigiendo en {countdown} segundos...</Text>
                </Modal>

                <Modal
                    opened={showConfirmModal}
                    onClose={handleCancelTemplateApplication}
                    title="Confirmar aplicación de plantilla"
                    centered
                    size="md"
                >
                    <Text size="md" mb="md">
                        Ya tienes contenido en las tareas. Si aplicas esta plantilla, se eliminará el contenido existente.
                    </Text>
                    <Text size="md" mb="lg" weight={500}>
                        ¿Deseas continuar?
                    </Text>
                    <Group position="right">
                        <Button variant="outline" onClick={handleCancelTemplateApplication}>
                            Cancelar
                        </Button>
                        <Button color="red" onClick={handleConfirmTemplateApplication}>
                            Sí, aplicar plantilla
                        </Button>
                    </Group>
                </Modal>
            </Card>
        </Box>
    );
};

export default CreateAnalysisPage;
