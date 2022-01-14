import {
  Home,
  Error,
} from "../components";
import { ROUTE_CONSTANTS } from "../utils";

const ROUTES = [
  {
    path: ROUTE_CONSTANTS["BASE"],
    exact: true,
    component: Home,
    protected: true,
    default: false,
    view: "Base",
    allowBack: false
  },
  {
    path: ROUTE_CONSTANTS["ANY"],
    exact: false,
    component: Error,
    protected: true,
    default: false,
    view: "*",
    allowBack: false
  },
];
export default ROUTES;
