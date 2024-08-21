import { createTheme, ThemeProvider } from "@material-ui/core";
import UserForm from "./components/UserForm";
import "./styles.css";

const theme = createTheme({});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UserForm />
      </ThemeProvider>
    </div>
  );
}
