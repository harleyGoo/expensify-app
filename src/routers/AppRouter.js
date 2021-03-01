import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/Portfolio';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/portfolio/:id" component={PortfolioItemPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />  
    </Switch>
  </BrowserRouter>
);

export default AppRouter;