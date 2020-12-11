import React, {useStyles, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MaterialTable from 'material-table';


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
            City Request
          </Typography>

          <div className={classes.form} noValidate>
            <MaterialTable
      title="Editable Example"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                 this.data = [...prevState.data];
                this.data.push(newData);
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState((prevState) => {
                   this.data = [...prevState.data];
                  this.data[this.data.indexOf(oldData)] = newData;
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                 this.data = [...prevState.data];
                this.data.splice(this.data.indexOf(oldData), 1);
              });
            }, 600);
          }),
      }}
    />
          </div>
        </div>
      </Container>
    );
  }
}
export default withStyles(useStyles)(Request);