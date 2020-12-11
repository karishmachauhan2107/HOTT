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

class Request extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      landmark: "",
      cause: "",
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
          Emergency Request
          </Typography>

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="location"
              label="Enter your location"
              name="location"
              autoComplete="location"
              autoFocus
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="landmark"
              label="Enter the landmark"
              id="landmark"
              autoComplete="landmark"
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cause"
              label="Enter the cause"
              id="cause"
              autoComplete="cause"
              onChange={this.handleChangeFields}
            />

            <Button
              onClick={this.handleLogIn}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next{" "}
            </Button>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </Container>
    );
  }
}
export default withStyles(useStyles)(Request);