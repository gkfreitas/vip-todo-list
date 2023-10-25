import { Checkbox, FormControlLabel } from '@mui/material';
import { orange } from '@mui/material/colors';

type CheckboxProps = {
  textElement: JSX.Element
};

export default function InputCheckboxForm(props: CheckboxProps) {
  const { textElement } = props;

  return (
    <FormControlLabel
      className="self-start"
      label={ textElement }
      control={
        <Checkbox
          defaultChecked
          sx={ {
            '&.Mui-checked': {
              color: orange[400],
            },
          } }
        />
    }
    />
  );
}
