import { TextField } from "@mui/material";
import {
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
}

export default function AppTextInput<T extends FieldValues>(props: Props<T>) {
  const defaultValue = "" as PathValue<T, Path<T>>;
  const { fieldState, field } = useController({ ...props, defaultValue });

  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
}
