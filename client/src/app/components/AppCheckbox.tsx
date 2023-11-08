import { Checkbox, FormControlLabel } from "@mui/material";
import {
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  disabled?: boolean;
}

export default function AppCheckbox<T extends FieldValues>(props: Props<T>) {
  const { disabled = false } = props;
  const defaultValue = false as PathValue<T, Path<T>>;
  const { field } = useController({ ...props, defaultValue });

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          checked={field.value}
          color="secondary"
          disabled={disabled}
        />
      }
      label={props.label}
    />
  );
}
