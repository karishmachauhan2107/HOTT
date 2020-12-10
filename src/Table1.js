// Editable Table
import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { withStyles } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = ((theme) => ({}));

class Tb extends Component{
    constructor(){
    super();
    this.state={
        s:false,
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
};}
    render() {
        // const {classes}=this.props;
        // const data;
//   const [state, setState] = React.useState({
   
//   });

  return (
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
                // return { ...prevState, data };
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
                  // return { ...prevState, data };
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
                // return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}}
export default withStyles(useStyles)(Tb);