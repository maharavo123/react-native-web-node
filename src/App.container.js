import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = state => ({
  initialSelected: state.tabs.initialSelected,
});

const mapDispatchToProps = (dispatch) => ({
  onTabSelect: (index) => {
    dispatch({
      type: 'SET_TAB',
      index,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
