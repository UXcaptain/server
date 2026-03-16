import { useNavigate } from "react-router";
import { Button } from '@mantine/core';

export const CreateNewAnalysisButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/analysis/create');
  };

  return (
    <Button onClick={handleClick}>
      Crear nuevo análisis
    </Button>
  );
};
