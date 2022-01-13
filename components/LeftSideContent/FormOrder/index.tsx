import { StyledFormOrder } from "./styled";
import { TextField } from "@mui/material/";
import { useForm } from "react-hook-form";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";

export const FormOrder = ({ model }: any) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledFormOrder onSubmit={methods.handleSubmit(onSubmit)}>
      <FormControl
        variant="standard"
        sx={{
          "& .MuiInputBase-root:before": {
            borderBottomColor: "#FFFFFF90",
          },
        }}
      >
        <InputLabel
          sx={{
            "& .MuiSelect-icon": { fill: "white" },
            color: "#ffffff60",
          }}
        >
          Selected model:
        </InputLabel>
        <Select
          sx={{
            "& .MuiSvgIcon-root": { fill: "transparent" },
          }}
          value={model}
          label={model}
          {...methods.register("selected-model")}
        >
          <MenuItem sx={{ color: "black" }} value={model}>
            {model}
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        variant="standard"
        sx={{
          "& .MuiInputLabel-root": {
            color: "#ffffff60",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF90",
          },
        }}
        fullWidth
        size="medium"
        label="First Name"
        type="text"
        {...(methods.register("first-name"),
        {
          required: true,
          pattern: {
            value: /^[a-zA-Z]+$/,
          },
        })}
      />
      <TextField
        variant="standard"
        sx={{
          "& .MuiInputLabel-root": {
            color: "#ffffff60",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF90",
          },
        }}
        fullWidth
        size="medium"
        label="Last Name"
        type="text"
        {...(methods.register("last-name"),
        {
          required: true,
          pattern: {
            value: /^[a-zA-Z]+$/,
          },
        })}
      />
      <TextField
        variant="standard"
        sx={{
          "& .MuiInputLabel-root": {
            color: "#ffffff60",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF90",
          },
        }}
        fullWidth
        size="medium"
        label="Email"
        type="email"
        {...(methods.register("email"),
        {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          },
        })}
      />
      <TextField
        variant="standard"
        sx={{
          "& .MuiInputLabel-root": {
            color: "#ffffff60",
          },
          "& .MuiInput-root::before": {
            borderBottomColor: "#FFFFFF90",
          },
        }}
        fullWidth
        placeholder="+373 (500) 600-700"
        size="medium"
        label="Phone Number"
        type="tel"
        {...methods.register("phone-number")}
      />
      <p>
        By entering my account details above, I agree to be contacted about
        Tesla products, including through automated calls or texts. This is not
        a condition of purchase.
      </p>

      <Button
        type="submit"
        disabled={!methods.formState.isValid}
        sx={{
          border: "solid #ccc 1px",
          padding: "10px 0px",
        }}
      >
        Place Order
      </Button>
    </StyledFormOrder>
  );
};
