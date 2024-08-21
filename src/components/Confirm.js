import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const Confirm = ({ values }) => {
  const formValues = Object.values(values).slice(1);
  const formLabels = [
    "First Name",
    "Last Name",
    "Email",
    "Occupation",
    "City",
    "Bio"
  ];

  return (
    <List>
      {formValues.map((value, index) => (
        <ListItem key={index}>
          <ListItemText primary={value} secondary={formLabels[index]} />
        </ListItem>
      ))}
    </List>
  );
};

export default Confirm;
