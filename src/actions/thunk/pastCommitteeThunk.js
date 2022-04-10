import * as pastCommitteeApi from "../../api/pastCommitteeApi";
import * as pastCommiteeAction from "../pastCommiteeAction";
import {FETCH_PAST_COMMITTEE} from "../types/index";

export const getPastCommittee = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PAST_COMMITTEE,
      });
      const response = await pastCommitteeApi.getPastCommittee();

      let pastCommittee = [];
      if (response?.data?.success) {
        pastCommittee = response?.data?.data;
      }

      return dispatch(pastCommiteeAction.getPastCommittee(pastCommittee));
    } catch (error) {
      console.error("Error in pastCommittee: " + error);
    }
  };
};
