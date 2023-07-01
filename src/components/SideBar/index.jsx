import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../shared/redux/actions/authActions";
import mainRoutes from "../../shared/navigation";
import "./styles.scss";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nombre = `${userData?.user?.nombre} ${userData?.user?.apellido}`;
  const superv =
    userData?.user?.supervisor === 0 ? "No supervisor" : "Supervisor";
  console.log("userData", userData);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Objetivos",
              onClick: () => navigate(mainRoutes.home.objetivos),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Progreso",
              onClick: () => navigate(mainRoutes.home.progreso),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Reuniones",
              disabled: true,
              onClick: () => navigate(mainRoutes.home.reuniones),
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Reunion",
              disabled: true,
              onClick: () => navigate(mainRoutes.home.reunion),
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: "Logout",
              onClick: () => dispatch(logout()),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderColor: "red",
              borderWidth: 5,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Text
              strong
            >{`Hola ${nombre}! || ${userData?.user?.puesto} || ${superv}`}</Text>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
