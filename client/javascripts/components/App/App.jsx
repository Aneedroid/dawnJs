import React from 'react';
import Overview from 'client/javascripts/components/Overview/Overview';
import Nav from 'client/javascripts/components/Nav/Nav';
import ContentArea from 'client/javascripts/components/ContentArea/ContentArea';

import './App.css';

const App = () => {
  return (
    <div>
      <Overview title={'dawnJs'} subTitle={'A minimal Node-React-Redux-Saga boilerplate'}/>
      <Nav/>
      <ContentArea/>
    </div>
  );
};

export default App;
