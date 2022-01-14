import { ROUTE_CONSTANTS } from "../actionTypes";

export const routeActions = {
  MAINTAIN_ROUTER_HISTORY,
};

function MAINTAIN_ROUTER_HISTORY(route) {
  return (dispatch) => {
    dispatch(request(route));
  };

  function request(route) {
    return { type: ROUTE_CONSTANTS.MAINTAIN_ROUTER_HISTORY, route };
  }
}
