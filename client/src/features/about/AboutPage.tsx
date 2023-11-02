import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

const catchError = (error: unknown) => console.log(error);

const errors: { title: string; onClick: () => void }[] = [
  {
    title: "Test 400 error",
    onClick: () => agent.TestErrors.get400Error().catch(catchError),
  },
  {
    title: "Test 401 error",
    onClick: () => agent.TestErrors.get401Error().catch(catchError),
  },
  {
    title: "Test 404 error",
    onClick: () => agent.TestErrors.get404Error().catch(catchError),
  },
  {
    title: "Test 500 error",
    onClick: () => agent.TestErrors.get500Error().catch(catchError),
  },
];

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationError = async () => {
    try {
      await agent.TestErrors.getValidationError();
    } catch (error) {
      setValidationErrors(error as string[]);
    }
  };

  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        {errors.map((error) => (
          <Button key={error.title} variant="contained" onClick={error.onClick}>
            {error.title}
          </Button>
        ))}
        <Button variant="contained" onClick={getValidationError}>
          Test validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
