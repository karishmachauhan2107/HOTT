//LogIn Page

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      ema: "",
      pass: "",
      st: false,
    };
  }
  // yoo =() =>{
  //   toast("welcome");
  // };
  // yo =() =>{
  //   toast("not registered");
  // };
  // handleLogIn = () => {
  //   if (this.state.ema == "abc" && this.state.pass == "xyz") {
  //     this.yoo();
  //     //  alert("HELLO")
  //     this.setState({ st: true });
  //   } else {
  //     this.yo();
  //     console.log("not registered");
  //   }
  // };

  // handleChangeFields = (event) => {
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  render() {
    const { classes } = this.props;
    return (
      // <div>
      //   <Box color="text.primary" clone>
      //     {this.state.st ? (
      //       <div> Welcome to this page

      //       </div>
      //     ) : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <center> <img src="logo.png" width="160" height="150"/></center> */}
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>

          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ema"
              label="Email Address"
              name="ema"
              autoComplete="ema"
              autoFocus
              onChange={this.handleChangeFields}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="pass"
              id="pass"
              autoComplete="current-password"
              onChange={this.handleChangeFields}
            />

            <Button
              onClick={this.handleLogIn}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              LogIn{" "}
            </Button>
            {/* <ToastContainer /> */}

            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2" to="/SignUp">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      // )
      // }
      // </Box>
      // </div>
    );
  }
}
export default withStyles(useStyles)(Login);
