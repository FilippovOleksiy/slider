import { connect } from "react-redux";

import { setSelectedUser, setSliderVisible } from "../../app/actions";
import UsersList from "./UsersList.js";

const mapStateToProps = (state) => ({ usersList: state.usersList });
const mapDispatchToProps = (dispatch) => ({
  onUserClick: (id) => {
    dispatch(setSelectedUser(id));
    dispatch(setSliderVisible(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
