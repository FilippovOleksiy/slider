import { connect } from "react-redux";
import SliderPopup from "./SliderPopup.js";
const mapStateToProps = (state) => ({ selectedUser: state.selectedUser });

export default connect(mapStateToProps)(SliderPopup);
