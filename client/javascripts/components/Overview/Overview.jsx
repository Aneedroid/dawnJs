import React from 'react';
import PropTypes from 'prop-types';
import './Overview.css';

import { Button } from 'semantic-ui-react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setSubTitle } = this.props;
    setSubTitle('A minimal Express-React-Redux-Saga boilerplate!');
  }

  onClickHandler() {
    const { findHero } = this.props;
    findHero();
  }
    
  render() {
    const { title, getSubTitle, getHero } = this.props;
    const content = getSubTitle;
    const heroName = getHero.name;
    return (
      <div className="container" align="center">
        { title ? <h1> { title } </h1> : <h1> Oops! Something went wrong! </h1> }
        { getSubTitle ? <p> { content } </p> : null }
        <Button onClick={() => this.onClickHandler()}>
          Click me to fetch data from SWAPI using Sagas!
        </Button>
        { heroName ? <p> { heroName } </p> : null }
      </div>
    );
  }
}

Overview.propTypes = {
  title: PropTypes.string,
  getSubTitle: PropTypes.string,
  setSubTitle: PropTypes.func,
  findHero: PropTypes.func,
  getHero: PropTypes.object,
};

export default Overview;
