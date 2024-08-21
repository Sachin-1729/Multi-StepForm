import { Typography } from "@material-ui/core";

const Success = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        <span role="img" aria-label="party emoji">
          🥳
        </span>
      </Typography>
      <Typography>Thank you for submitting this fake form!</Typography>
    </>
  );
};

export default Success;
