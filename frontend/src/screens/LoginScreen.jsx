import { Box, Button, FormControl, TextField } from "@mui/material";
import Wrapper from "../styles/LoginScreen.style";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomTextField = styled(TextField)`
  width: 100%;
  margin: 10px auto;

  .MuiInputBase-input {
    color: var(--grey-300);
  }
`;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Wrapper>
      <div className="container">
        <Box sx={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
          <h1>Login</h1>
          <FormControl
            fullWidth={true}
            component="form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <CustomTextField
              id="email"
              label="Email"
              variant="filled"
              type="email"
              required={true}
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              required={true}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="text"
              type="submit"
              sx={{ margin: "10px auto" }}
              fullWidth={true}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </div>
    </Wrapper>
  );
};
export default LoginScreen;
