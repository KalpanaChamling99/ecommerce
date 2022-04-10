import * as loginAuthApi from "../../api/loginAuthApi";
import * as loginAuthAction from "../loginAuthAction";
import { closeLoader, showLoader } from "../loaderAction";
import { toast } from "react-toastify";

export const loginSuccess = (props) => {
  const email = props.email;
  const password = props.password;
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await loginAuthApi.loginSuccess(email, password);

      let loginInfo = {};
      if (response?.status === 200) {
        loginInfo = response?.data?.user;
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("user", JSON.stringify(loginInfo));
        toast.success("Login Success");
        return dispatch(loginAuthAction.loginSuccess(loginInfo));
      }
    } catch (error) {
      const errorMessage = error;
      let msg = "";
      if (errorMessage.message === "Request failed with status code 400") {
        msg = "Invalid email or password";
      } else {
        msg = "Something went wrong";
      }
      toast.error(msg);
      return dispatch(loginAuthAction.loginFailure(errorMessage));
    } finally {
      dispatch(closeLoader());
    }
  };
};
