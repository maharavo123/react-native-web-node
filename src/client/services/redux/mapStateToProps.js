const mapStateToProps = (state) => ({
  crud: state.crud,
  users: state.users,
  folders: state.folders,
  comptes: state.comptes,
  initialSelected: state.tabs.initialSelected,
});

export default mapStateToProps;
