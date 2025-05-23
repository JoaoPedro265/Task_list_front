import "./styles/RegisterField.css";
//Ui Kit
import { Container, Box, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

const RegisterField = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setpassword,
  alert,
  registerUser,
  loading,
}) => {
  return (
    <Container className="container">
      <form onSubmit={registerUser}>
        <Box className="Register-Box">
          {alert ? (
            <Alert variant="outlined" severity="warning">
              incorrect data or user already exists.
            </Alert>
          ) : (
            ""
          )}
          <h1>Register</h1>
          <TextField
            fullWidth
            required
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            required
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            required
            label="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></TextField>
          {loading ? (
            <Button variant="contained" disabled>
              Loading...
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default RegisterField;
