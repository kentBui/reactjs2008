import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";

import { routers } from "./routers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    console.log(routers);
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {routers.map((menu) =>
              !menu.children ? (
                <Menu.Item key={menu.path} icon={<PieChartOutlined />}>
                  <Link to={menu.path}>{menu.name}</Link>
                </Menu.Item>
              ) : (
                <SubMenu key={menu.path} icon={<UserOutlined />} title="User">
                  {menu.children.map(
                    (subMenu) =>
                      !subMenu.hidden && (
                        <Menu.Item key={subMenu.path}>
                          <Link to={subMenu.path}>{subMenu.name}</Link>
                        </Menu.Item>
                      )
                  )}
                </SubMenu>
              )
            )}
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/user">User</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">
                <Link to="/user/tom">Tom</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/user/bill">Bill</Link>
              </Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* {routers.map((menu) =>
                !menu.children ? (
                  <Breadcrumb.Item key={menu.name}>{menu.name}</Breadcrumb.Item>
                ) : (
                  <SubMenu key={menu.path} icon={<UserOutlined />} title="User">
                    {menu.children.map((subMenu) => (
                      <Breadcrumb.Item key={subMenu.name}>
                        {subMenu.name}
                      </Breadcrumb.Item>
                    ))}
                  </SubMenu>
                )
              )} */}
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                {routers.map((menu, index) => {
                  return !menu.children ? (
                    <Route key={index} exact path={menu.path}>
                      {menu.component}
                    </Route>
                  ) : (
                    menu.children.map((subMenu, index) => (
                      <Route key={index} exact path={subMenu.path}>
                        {subMenu.component}
                      </Route>
                    ))
                  );
                })}
                {/* <Route exact path="/user">
                  All user
                </Route>
                <Route exact path="/user/tom">
                  Tom
                </Route> */}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; Copyright and design by Kent Bui
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
