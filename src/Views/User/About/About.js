import { Grid } from '@material-ui/core';
import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles =((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(26),
        margin: theme.spacing(1),
      },
    },
  }));

class AccountHandle extends Component
{

    render()
    {
        // eslint-disable-next-line no-unused-vars
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Grid 
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
                xs={12}>

                  <Button 
                  color="secondary"
                  variant="outlined"
                  size="medium"> 
                      FIRE HELP
                  </Button>
                  <br></br>
                  <br></br>

                  <Button 
                  color="secondary"
                  variant="outlined"
                  size="medium"> 
                      MEDICAL HELP
                  </Button>
                  <br></br>
                  <br></br>

                  <Button 
                  color="secondary"
                  variant="outlined"
                  size="medium"> 
                      POLICE HELP
                  </Button>
                  <br></br>
                  <br></br>

                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(AccountHandle);