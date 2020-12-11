import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      st: false,
    };
  }
  
  render() {
    const { classes } = this.props;
    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            My Profile
          </Typography>

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter your name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Enter your phone number"
              id="phone"
              onChange={this.handleChangeFields}
            />

            <Button
              onClick={this.handleLogIn}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              UPDATE{" "}
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
export default withStyles(useStyles)(Profile);