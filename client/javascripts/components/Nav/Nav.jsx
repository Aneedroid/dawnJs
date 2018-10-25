import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = () => {
  return (
    <div>
      <Menu fluid inverted color={'brown'} widths={3}>
        <Menu.Item as={Link} to="/app/swapi">StarWars</Menu.Item>
        <Menu.Item as={Link} to="/app/test">Test Page 2</Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
