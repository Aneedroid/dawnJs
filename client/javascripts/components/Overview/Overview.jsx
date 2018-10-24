import React from 'react';
import PropTypes from 'prop-types';
import './Overview.css';

import { Header, Segment, Card, Button } from 'semantic-ui-react';

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
    const { title, getSubTitle, getHero } = this.props;
    return (
      <div className="overview-container" align="center">
        <Header as="h1" color="orange" block inverted> { title }
        </Header>
        <Segment>
          { getSubTitle }
        </Segment>
        <Button inverted color="red" onClick={() => this.onClickHandler()}>
          Just another button
        </Button>
        { getHero.name ? this.renderHeroCard() : null }
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
