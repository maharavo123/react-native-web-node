const mapStateToProps = (state) => ({
  crud: state.crud,
  users: state.users,
  rib: state.rib,
  comptes: state.comptes,
  initialSelected: state.tabs.initialSelected,
});

export default mapStateToProps;
