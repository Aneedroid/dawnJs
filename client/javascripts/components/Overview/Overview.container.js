import { connect } from 'react-redux';
import { putContentToState, getSwapi } from 'client/javascripts/actions';
import { getContentFromState, getSwapiFromState } from 'client/javascripts/utils/redux-selectors';

const mapStateToProps = (state) => {
    return {
        getSubTitle: getContentFromState(state),
        getHero: getSwapiFromState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSubTitle: ( contentString ) => dispatch(putContentToState(contentString)),
        findHero: () => dispatch(getSwapi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps);
