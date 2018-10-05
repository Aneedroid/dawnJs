import { connect } from 'react-redux';
import { putContentToState, getSwapi } from 'client/javascripts/actions';
import { getContentFromState, getSwapiFromState } from 'client/javascripts/utils/redux-selectors';

const mapStateToProps = (state) => {
    return {
        getContent: getContentFromState(state),
        getSwapi: getSwapiFromState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        putContent: ( contentString ) => dispatch(putContentToState(contentString)),
        callSwapi: () => dispatch(getSwapi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps);
