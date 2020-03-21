import { connect } from 'react-redux';

import Counter from 'src/components/Counter';

const mapStateToProps = (state) => ({
  total: state.oui + state.non,
});

const mapDispatchToProps = () => ({});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
