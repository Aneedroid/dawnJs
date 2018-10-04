import React from 'react';
import PropTypes from 'prop-types';
import './ReduxComponent.css'
import Button from '@material-ui/core/Button';

const renderReduxContent = (content) => {
  return (
        <p>{content}</p>
  );
};

const ReduxComponent = ( { chummaNonStateContent, getContent, putContent } ) => {
    putContent('Redux works too! :D :D');
    const content = getContent;
    return (
        <div className='container' align="center">
            {chummaNonStateContent ? <p> React works! :D </p> : <p> React does not work :'O </p>}
            {getContent ? renderReduxContent(content) : null}
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
};

ReduxComponent.propTypes = {
    chummaNonStateContent: PropTypes.string,
    getContent: PropTypes.string,
    putContent: PropTypes.func
};

export default ReduxComponent;
