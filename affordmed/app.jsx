import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Top N Products</Typography>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route path="/" exact component={AllProducts} />
              <Route path="/product/:id" component={ProductDetails} />
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;