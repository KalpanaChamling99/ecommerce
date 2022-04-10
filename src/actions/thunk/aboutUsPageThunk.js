import * as aboutUsPageApi from "../../api/aboutUsPageApi";
import * as aboutUsPageAction from "../aboutUsPageAction";

export const getTeams = () => {
  return async (dispatch) => {
    try {
      const response = await aboutUsPageApi.getTeams();

      let teams = [];
      if (response?.data?.success) {
        teams = response?.data?.data;
      }

      return dispatch(aboutUsPageAction.getTeams(teams));
    } catch (error) {
      console.error("Error in getTeams: " + error);
    }
  };
};
