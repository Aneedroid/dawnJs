import React from 'react';
import PropTypes from 'prop-types';
import './Swapi.css';

import { Card, Button } from 'semantic-ui-react';

class Swapi extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onClickHandler() {
    const { findHero } = this.props;
    findHero();
  }

  renderHeroCard() {
    const { getHero } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header> { getHero.name } </Card.Header>
          <Card.Meta> { getHero.gender } </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
    
  render() {
    const { getHero } = this.props;
    return (
      <div className="overview-container" align="center">
        <Button inverted color="red" onClick={() => this.onClickHandler()}>
          Just another button
        </Button>
        { getHero.name ? this.renderHeroCard() : null }
      </div>
    );
  }
}

Swapi.propTypes = {
  findHero: PropTypes.func,
  getHero: PropTypes.object,
};

export default Swapi;
