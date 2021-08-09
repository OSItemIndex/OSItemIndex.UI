import * as React from 'react';
import { Header } from 'src/components/header';
import { Grid } from '@material-ui/core';

export default function App(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
