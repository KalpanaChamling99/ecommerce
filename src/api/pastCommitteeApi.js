import API from "../utils/axios";
import { ApiEndpoints } from "../constants";

const { PAST_COMMITTEE } = ApiEndpoints;

export const getPastCommittee = async () => {
  return await API.get(PAST_COMMITTEE);
};
