import Home from "../home";
import Login from "../login";

const routes = {
  web: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/d",
      component: Home,
    },
  ],
};

export default routes;
