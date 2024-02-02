import {Login} from "./pages/Login.jsx";
import {Resources} from "./pages/Resources.jsx";
import {ResourceDetails} from "./pages/ResourceDetails.jsx";

export const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/resources",
        component: Resources
    },
    {
        path: "/resources/:eventUid",
        component: ResourceDetails
    },

]