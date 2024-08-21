import { AppBar, Toolbar, Typography } from "@material-ui/core";

const TopAppBar = ({ step }) => {
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Multi-Step Form Example
        </Typography>
        <Typography variant="button" style={{ textAlign: "right" }}>
          Step: {step}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
