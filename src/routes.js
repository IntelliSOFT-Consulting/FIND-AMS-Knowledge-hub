import {Resources} from "./pages/Resources.jsx";
import {ResourceDetails} from "./pages/ResourceDetails.jsx";

export const routes = [

    {
        path: "/",
        component: Resources
    },
    {
        path: "/:eventUid",
        component: ResourceDetails
    },

]