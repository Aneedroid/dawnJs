import React from 'react';
import PropTypes from 'prop-types';
import './ReduxComponent.css'

const renderReduxContent = (content) => {
  return (
        <p>{content}</p>
  );
};

const ReduxComponent = ( { chummaNonStateContent, getContent, putContent } ) => {
    putContent('Redux works too! :D :D');
    const content = getContent;
    return (
        <div className='container'>
            {chummaNonStateContent ? <p> React works! :D </p> : <p> React does not work :'O </p>}
            {getContent ? renderReduxContent(content) : null}
        </div>
    );
};

ReduxComponent.propTypes = {
    chummaNonStateContent: PropTypes.string,
    getContent: PropTypes.string,
    putContent: PropTypes.func
};

export default ReduxComponent;
