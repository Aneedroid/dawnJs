import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './ReduxComponent.css'

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
        const { title, getContent, getSwapi } = this.props;
        const content = getContent;
        const swapiName = getSwapi.name;
        return (
            <div className='container' align='center'>
                { title ? <h1> { title } </h1> : <h1> Oops! Something went wrong! </h1> }
                { getContent ? <p>{ content }</p> : null }
                <Button variant='contained' color='primary' onClick={() => this.onClickHandler()}>
                    Click me to fetch data from SWAPI using Sagas!
                </Button>
                { swapiName ? <p>{ swapiName }</p> : null }
            </div>
        );
    }
}

ReduxComponent.propTypes = {
    title: PropTypes.string,
    getContent: PropTypes.string,
    putContent: PropTypes.func,
    callSwapi: PropTypes.func,
    getSwapi: PropTypes.object
};

export default ReduxComponent;
