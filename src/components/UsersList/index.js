import { connect } from "react-redux";

import { setSelectedUser } from "../../app/actions";
import UsersList from "./UsersList.js";

const mapStateToProps = (state) => ({ usersList: state.usersList });
const mapDispatchToProps = (dispatch) => ({
  onUserClick: (id) => dispatch(setSelectedUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
