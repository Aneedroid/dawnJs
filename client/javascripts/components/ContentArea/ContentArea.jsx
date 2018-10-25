import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestComponent from 'client/javascripts/components/TestComponent/TestComponent';
import Swapi from 'client/javascripts/components/Swapi/';

const ContentArea = () => {
  return (
    <div>
      <Switch>
        <Route path={'/app/swapi'} component={Swapi} />
        <Route path={'/app/test'} component={TestComponent} />
      </Switch>
    </div>
  );
};

export default ContentArea;
