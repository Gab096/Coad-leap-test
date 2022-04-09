import { produce } from "immer";
import Types from "./types";

const INITIAL_STATE = {
  data: [],
  loading: false,
};

function User(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.REQUEST_API_DATA: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    case Types.CREATE_POST_SUCCESS: {
      return produce(state, (draft) => {
        draft.data = [actions.data, ...draft.data];
      });
    }

    case Types.SET_API_DATA: {
      return produce(state, (draft) => {
        draft.data = actions.data;
        draft.loading = false;
      });
    }

    case Types.ON_SUCCESS_DELETE_POST: {
      return produce(state, (draft) => {
        draft.data = [...draft.data.filter((elemt) => elemt.id !== actions.id)];
      });
    }

    default:
      return state;
  }
}
export default User;
