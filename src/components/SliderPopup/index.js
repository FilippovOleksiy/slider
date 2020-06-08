import { connect } from "react-redux";
import SliderPopup from "./SliderPopup.js";
import { setSliderVisible } from "../../app/actions";

const mapStateToProps = (state) => ({
  selectedUser: state.selectedUser,
  usersList: state.usersList,
  sliderVisible: state.sliderVisible,
});
const mapDispatchToProps = (dispatch) => ({
  sliderHide: () => {
    dispatch(setSliderVisible(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderPopup);
