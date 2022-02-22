import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
import React from "react";
import { FormControlLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import "@fontsource/roboto";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
// import { MenuIcon } from "@material-ui/icons";
import Menu from "@material-ui/icons/Menu";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    // border: "1px solid #000",
    borderRadius: "5px",
    color: "white",
    padding: "0 20px",
    margin: "10px",
  },
});
const them = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 16,
    },
    // fontFamily: [
    //   "Roboto",
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    // ].join(","),
  },

  palette: {
    primary: {
      main: green[500],
      // main: "#FF8E53",
      // main: "orange[500]"
    },
    secondary: {
      main: "#FE6B8B",
      // main: red[500],
      // main: "orange[500]",
      // main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.root}
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
  );
}
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          // color="primary"
          // disabled
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
      label="Primary"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={them}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">
                  MUI theming
                  {/* <ButtonStyled /> */}
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Hello World
            </Typography>
            <ButtonStyled />
            <Typography variant="body1" component="div">
              MUI tut
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="Secondary"
              type="time"
              label="The Time "
              value="14:30"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained">
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                href="#"
                // size="large"
                // disabled
                // variant="contained"
                color="primary"
                // style={{
                //   // fontSize: 24,
                //   border: "0 px",
                //   // marginRight: "10px",
                // }}
                // style={{
                //   marginRight: "10px",
                //   background: "#FF8E53",
                // }}
              >
                Save
              </Button>
              <Button
                // variant="contained"
                color="primary"
                endIcon={<DeleteIcon />}
              >
                {/* <SaveIcon /> */}
                Delete
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
            {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
