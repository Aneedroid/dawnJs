import { connect } from 'react-redux';
import { putContentToState } from 'client/javascripts/actions';
import { getContentFromState } from 'client/javascripts/utils/redux-selectors';

const mapStateToProps = (state) => {
    return {
        getContent: getContentFromState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        putContent: ( contentString ) => dispatch(putContentToState(contentString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps);
