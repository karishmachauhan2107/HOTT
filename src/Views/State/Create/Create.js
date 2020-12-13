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

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      phone: "",
      adhar: "",
      city: "",
      state: "",
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
          Create
          </Typography>

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
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
              name="age"
              label="age"
              id="age"
              autoComplete="age"
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone no."
              label="phone no."
              id="phone"
              autoComplete="phone no."
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="adhar no."
              label="adhar no."
              id="adhar"
              autoComplete="adhar no."
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label="city"
              id="city"
              autoComplete="city"
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="state"
              label="state"
              id="state"
              autoComplete="state"
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
          </div>
        </div>
      </Container>
    );
  }
}
=======
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

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      phone: "",
      adhar: "",
      city: "",
      state: "",
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
          Create
          </Typography>

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
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
              name="age"
              label="age"
              id="age"
              autoComplete="age"
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone no."
              label="phone no."
              id="phone"
              autoComplete="phone no."
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="adhar no."
              label="adhar no."
              id="adhar"
              autoComplete="adhar no."
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label="city"
              id="city"
              autoComplete="city"
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="state"
              label="state"
              id="state"
              autoComplete="state"
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
          </div>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Create);