import { UploadFile } from "@mui/icons-material";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

export default function AppDropzone<T extends FieldValues>(props: Props<T>) {
  const defaultValue = null as PathValue<T, Path<T>>;
  const { fieldState, field } = useController({ ...props, defaultValue });

  const dzStyles = {
    display: "flex",
    border: "dashed 3px #eee",
    borderColor: "#eee",
    borderRadius: "5px",
    paddingTop: "30px",
    alignItems: "center",
    height: 200,
    width: 500,
  };

  const dzActive = {
    borderColor: "green",
  };

  const onDrop = useCallback(
    (acceptedFiles: Blob[] | MediaSource[]) => {
      acceptedFiles[0] = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      field.onChange(acceptedFiles[0]);
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <FormControl
        style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
      >
        <input {...getInputProps()} />
        <UploadFile sx={{ fontSize: "100px" }} />
        <Typography variant="h4">Drop image here</Typography>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}
