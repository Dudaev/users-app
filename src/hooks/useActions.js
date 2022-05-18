import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersActionCreators from "../redux/actionCreators/usersActionCreators";
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(usersActionCreators, dispatch);
};
