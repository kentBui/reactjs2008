import Signin from "./Signin";
import Signup from "./Signup";

export const routers = [
  {
    name: "Avatar",
    path: "/avatar",
    icon: "",
    component: "Avatar",
  },
  {
    name: "User",
    path: "/user",
    icon: "",
    component: "",
    children: [
      {
        name: "Tom",
        path: "/user/tom",
        icon: "",
        component: <h2>Hello from Tom</h2>,
      },
      {
        name: "Bill",
        path: "/user/bill",
        icon: "",
        component: <h2>Hello from Bill</h2>,
      },
    ],
  },
];
