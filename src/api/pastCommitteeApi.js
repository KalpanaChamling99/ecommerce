import API from "../utils/axios";
import { ApiEndpoints } from "../constants";

const { PAST_COMMITTEE, PAST_COMMITTEE_CATEGORY } = ApiEndpoints;

export const getPastCommittee = async (params = '') => {
  return await API.get(`${PAST_COMMITTEE}?${params}`);
};

export const getPastCommitteeCategory = async () => {
    return API.get(PAST_COMMITTEE_CATEGORY);
};
