//SignUp Page

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
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
    margin: theme.spacing(1, 0, 0),
  },
});
// fun = () => {
//   alert("this.First_Name");
// };

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: "",
      Last_Name: "",
      Phone_no: "",
      Email: "",
      Password: "",
      st: false,
    };
  }
//   fun = () => {
//     toast(this.state.First_Name);
//   };
//   yeCall = () => {
//     toast(this.state.Last_Name);
//   };
//   kalu = () => {
//     toast(this.state.Phone_no);
//   };
//   bhalu = () => {
//     toast(this.state.Email);
//   };
//   yoyo = () => {
//     toast(this.state.Password);
//   };

//   handleSignUp = () => {
//     this.fun();
//     console.log(this.state.First_Name);
//     this.yeCall();
//     console.log(this.state.Last_Name);
//     this.kalu();
//     console.log(this.state.Phone_no);
//     this.bhalu();
//     console.log(this.state.Email);
//     this.yoyo();
//     console.log(this.state.Password);
//   };

//   handleChangeFields = (event) => {
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value,
//     });
//   };
//   handleChange = (event) => {
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value,
//     });
//   };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box color="text.primary" clone>
          {this.state.st ? (
            <div>Successful</div>
          ) : (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <center>
                  {" "}
                  {/* <img src="logo.png" width="160" height="150" /> */}
                </center>
                <Typography component="h1" variant="h4">
                  SignUp
                </Typography>

                <div className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Your First Name"
                    name="First_Name"
                    autoFocus
                    onChange={this.handleChangeFields}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Your Last name"
                    name="Last_Name"
                    autoComplete="Last_Name"
                    autoFocus
                    onChange={this.handleChangeFields}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Mobile Number"
                    name="Phone_no"
                    type="number"
                    onChange={this.handleChangeFields}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Your Email"
                    name="Email"
                    autoFocus
                    onChange={this.handleChangeFields}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    name="Password"
                    type="Password"
                    id="Password"
                    autoComplete="current-password"
                    onChange={this.handleChangeFields}
                  />

                  <Button
                    onClick={this.handleSignUp}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    SIGN UP
                  </Button>
                  {/* <ToastContainer /> */}
                </div>
              </div>
            </Container>
          )}
        </Box>
      </div>
    );
  }
}
export default withStyles(useStyles)(SignUp);
