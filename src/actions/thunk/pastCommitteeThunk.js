import * as pastCommitteeApi from "../../api/pastCommitteeApi";
import * as pastCommiteeAction from "../pastCommiteeAction";
import {FETCH_PAST_COMMITTEE} from "../types/index";
import { closeLoader, showLoader } from "../loaderAction";

export const getPastCommittee = (params='') => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PAST_COMMITTEE,
      });
      const response = await pastCommitteeApi.getPastCommittee(params);

      let pastCommittee = {};
      if (response?.data?.success) {
        pastCommittee = { data: response?.data?.data, total: response?.data?.total_records};
      }

      return dispatch(pastCommiteeAction.getPastCommittee(pastCommittee));
    } catch (error) {
      console.error("Error in pastCommittee: " + error);
    }
  };
};

export const getPastCommitteeCategory = () => {
  return async(dispatch) => {
      try {
          dispatch(showLoader());
         const response = await pastCommitteeApi.getPastCommitteeCategory();
      
         let pastCommitteeCategory = [];
         if(response?.data?.success ) {
          pastCommitteeCategory = response?.data?.data
         }
         return dispatch(pastCommiteeAction.getPastCommitteeCategory(pastCommitteeCategory));
      } catch(error) {
          console.error("Error in fetching past committee category: " + error);
      }finally {
          dispatch(closeLoader());
       }
  }
}
