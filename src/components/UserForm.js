import { Grid, makeStyles, Paper, Snackbar } from "@material-ui/core";
import { useState } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import StepButtons from "./StepButtons";
import Success from "./Success";
import TopAppBar from "./TopAppBar";

const useStyles = makeStyles({
  paper: {
    padding: "1.5rem"
  }
});

const UserForm = () => {
  const classes = useStyles(); // styles hook
  const [openMessage, setOpenMessage] = useState(false); // error message open state
  // form state - step + values.
  const [formValues, setFormValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  // proceed to next step
  const nextStep = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = formValues;
    // input validation if empty (step 1 & 2)
    if (step === 1) {
      if (firstName === "" || lastName === "" || email === "")
        return setOpenMessage(true);
    }
    if (step === 2) {
      if (occupation === "" || city === "" || bio === "")
        return setOpenMessage(true);
    }
    // continue if all okay.
    setFormValues((state) => ({ ...state, step: step + 1 }));
  };

  // go back
  const prevStep = () => {
    const { step } = formValues;
    setFormValues((state) => ({ ...state, step: step - 1 }));
  };
  // fake "submit" handlde.
  const submitHandle = () => {
    const { step } = formValues;
    setFormValues((state) => ({ ...state, step: step + 1 }));
  };

  // handle fields change
  const handleChange = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // sets the error message to false. gets triggered by the component itself after 3000ms
  const handleClose = () => setOpenMessage(false);

  return (
    <>
      <TopAppBar step={formValues.step} />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Paper elevation={2} className={classes.paper}>
            {formValues.step === 1 && (
              <FormUserDetails
                values={formValues}
                handleChange={handleChange}
              />
            )}
            {formValues.step === 2 && (
              <FormPersonalDetails
                values={formValues}
                handleChange={handleChange}
              />
            )}
            {formValues.step === 3 && <Confirm values={formValues} />}
            {formValues.step === 4 && (
              <Success values={formValues} handleChange={handleChange} />
            )}
            <br />
            <StepButtons
              nextStep={nextStep}
              prevStep={prevStep}
              submitHandle={submitHandle}
              currentStep={formValues.step}
            />
          </Paper>
        </Grid>
        <Snackbar
          open={openMessage}
          onClose={handleClose}
          autoHideDuration={3000}
          message="Please fill the form"
        />
      </Grid>
    </>
  );
};

export default UserForm;
