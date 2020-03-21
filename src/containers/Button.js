import { connect } from 'react-redux';

import Button from 'src/components/Button';

const mapStateToProps = (state, ownProps) => ({
  count: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onVoteClick: () => {
    dispatch({ type: 'VOTE', name: ownProps.name });
  },
});

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default ButtonContainer;
