import { FormControlLabel, Grid, TextField } from "@material-ui/core";

const FormUserDetails = ({ values, handleChange }) => {
  const { firstName, lastName, email } = values;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid item>
        <TextField
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
    </Grid>
  );
};

export default FormUserDetails;
