import { connect } from 'react-redux';
import { App } from './App';

import mapStateToProps from '../services/redux/mapStateToProps';
import mapDispatchToProps from '../services/redux/mapDispatchToProps';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
