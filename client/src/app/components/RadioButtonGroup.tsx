import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface Props {
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
}

export default function RadioButtonGroup(props: Props) {
  const { options, onChange, selectedValue } = props;

  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
