import { Button, Checkbox, Grid, Link } from "@material-ui/core";
import Lock from "../../src/icons/Pages/LockIcon";
import React from "react";
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import transitions from "@material-ui/core/styles/transitions";

export default function BasicExample() {
  return (
    <>
    <Grid container justify='center' style={{marginTop:'64px'}}>
      <Grid item style={{width:'416px'}}>
        <Grid container justify='center'>
        <Grid container item justify='center' alignItems='center' style={{borderRadius:'50%',backgroundColor:'#DC004E',height:'40px',width:'40px'}}>
        <Lock/>
      </Grid>
      <Grid item xs={12} style={{marginTop:'10px'}}>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h5'>
              Sign in
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginTop:'20px'}}>
        <Grid container justify='center'>
          <Grid item>
            <TextField id="outlined-basic" label="Email Address *" variant="outlined" style={{width:'396px'}}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginTop:'20px'}}>
        <Grid container justify='center' style={{paddingTop:'8px'}}>
          <Grid item>
            <TextField id="outlined-basic" label="Password *" variant="outlined" style={{width:'396px'}}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginTop:'10px',width:'456px'}}>
        <Grid container justify='flex-start' alignItems='center'>
          <Grid item>
            <Checkbox defaultChecked style={{color:'#1976D2'}} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
          </Grid>
          <Grid item>
            <Typography>
              Remember me
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center' style={{marginTop:'25px'}}>
          <Grid item>
            <Button variant="contained" color="primary" style={{width:'396px', backgroundColor:'#1976D2',textTransform:'uppercase'}}>
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{width:'396px', marginTop:'10px'}}>
        <Grid container justify='space-between'>
          <Grid item>
          <Link href="#" onClick variant="body2" style={{color:'#1976D2'}}>
            Forgot password?
          </Link>
          </Grid>
          <Grid item>
            <Link href="#" onClick variant="body2" style={{color:'#1976D2'}}>
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} justify='center' alignItems='center' style={{paddingTop:'44px'}}>
            <Grid item>
              <Typography variant="body2" style={{color:'#0000008A',paddingTop:'4px'}}>
                Copyright © 
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" onClick variant="body2" style={{color:'#0000008A'}}>
                Your Website
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{color:'#0000008A',paddingTop:'4px'}}>
                2021.
              </Typography>
            </Grid>
        </Grid>
      </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
