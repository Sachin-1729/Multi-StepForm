import { Button, Grid } from "@material-ui/core";

// Buttons Components for more organized code.
const StepButtons = ({ nextStep, prevStep, submitHandle, currentStep }) => {
  const gridStyle = {
    width: currentStep === 1 && "100%"
  };

  return (
    <Grid container spacing={2} justifyContent="space-between">
      {currentStep > 1 && currentStep < 4 && (
        <Grid item>
          <Button color="secondary" variant="contained" onClick={prevStep}>
            Prev
          </Button>
        </Grid>
      )}
      {currentStep < 3 && (
        <Grid item style={gridStyle}>
          <Button
            style={gridStyle}
            color="primary"
            variant="contained"
            onClick={nextStep}
          >
            Next
          </Button>
        </Grid>
      )}

      {currentStep === 3 && (
        <Grid item>
          <Button color="primary" variant="contained" onClick={submitHandle}>
            Submit
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default StepButtons;
