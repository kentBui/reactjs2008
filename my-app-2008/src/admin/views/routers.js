import AddUser from "./AddUser";
import ListUsers from "./ListUsers";

export const routers = [
  {
    name: "Avatar",
    path: "/avatar",
    icon: "",
    component: "Avatar",
  },
  {
    name: "Users",
    path: "/users",
    icon: "",
    component: "",
    children: [
      {
        name: "Add user",
        path: "/users/add",
        icon: "",
        component: <AddUser />, // tao ra instance for component
      },
      {
        name: "List users",
        path: "/user/list",
        icon: "",
        component: <ListUsers />,
      },
    ],
  },
];
