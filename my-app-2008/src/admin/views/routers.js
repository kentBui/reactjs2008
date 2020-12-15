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
        path: "/user/add",
        icon: "",
        component: <AddUser />, // tao ra instance for component
      },
      {
        name: "List users",
        path: "/user/list",
        icon: "",
        component: <ListUsers />,
      },
      {
        name: "View user",
        path: "/user/:id",
        icon: "",
        component: <h1> View</h1>,
      },
      {
        name: "Update user",
        path: "/user/edit/:id",
        icon: "",
        component: <AddUser />,
        hidden: true,
      },
    ],
  },
];
