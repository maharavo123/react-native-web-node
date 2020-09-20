import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';
import { App } from './App';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
