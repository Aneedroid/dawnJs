import React from 'react';
import PropTypes from 'prop-types';
import './ReduxComponent.css'
import Button from '@material-ui/core/Button';

class ReduxComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { putContent } = this.props;
        putContent('Redux works too! :D :D');
    }

    onClickHandler(){
        const { callSwapi } = this.props;
        callSwapi(); 
    }
    
    render() {
        const { chummaNonStateContent, getContent, getSwapi } = this.props;
        const content = getContent;
        const swapiName = getSwapi.name;
        return (
            <div className='container' align="center">
                {chummaNonStateContent ? <p> React works! :D </p> : <p> React does not work :'O </p>}
                {getContent ? <p>{content}</p> : null}
                <Button variant="contained" color="primary" onClick={() => this.onClickHandler()}>
                    Click me to fetch data from SWAPI using Sagas!
                </Button>
                { swapiName ? <p>{swapiName}</p> : null }
            </div>
        );
    }
}

ReduxComponent.propTypes = {
    chummaNonStateContent: PropTypes.string,
    getContent: PropTypes.string,
    putContent: PropTypes.func,
    callSwapi: PropTypes.func,
    getSwapi: PropTypes.object
};

export default ReduxComponent;
