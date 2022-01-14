import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
    GTM_HELPER,
    HELPER,
    ROUTES
} from "../utils";
import {
    routeActions,
} from "../store/actions";

function usePageViews() {
    let location = useLocation()

    let dispatch = useDispatch();
    const { route } = useSelector(state => state.redirect);
    const [newRoute, setNewRoute] = useState(route.to);

    useEffect(() => {
        setNewRoute(route.to)
        // setNewRoute((prev)=>  route.to)
        let path = ROUTES.find(route => {
            return route.path === location?.pathname
        })
        if (path !== -1 && path !== undefined) {
            GTM_HELPER._setPageView(path.view);
        } else {
            GTM_HELPER._setPageView(window.location.pathname);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);

    useEffect(() => {
        if( !HELPER.isEmpty(newRoute) && !HELPER.isEmpty(location.pathname)) {
        // if(newRoute !== route.to && !HELPER.isEmpty(newRoute)){
            dispatch(routeActions.MAINTAIN_ROUTER_HISTORY({to: location.pathname, from: newRoute}));
        // }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newRoute]);

}
export default usePageViews;