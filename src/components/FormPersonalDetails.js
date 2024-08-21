import { Grid, TextField } from "@material-ui/core";

const FormPersonalDetails = ({ values, handleChange }) => {
  const { occupation, city, bio } = values;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <TextField
          label="Occupation"
          name="occupation"
          value={occupation}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Bio"
          name="bio"
          value={bio}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
    </Grid>
  );
};

export default FormPersonalDetails;
