import { Layout } from "antd";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderBar from "./components/Header/HeaderBar";
import Body from "./components/Body/Body";
const { Header, Sider, Content } = Layout;

const App = () => {
  const headerStyle = {
    height: "60px",
    lineHeight: "20px",
    backgroundColor: "#FFFFFF",
  };
  const contentStyle = {
    backgroundColor: "#eeeeee",
    overflow:"auto",
  };
  const siderStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 5px 0px #888888",
  };

  return (
    <Layout>
      <Sider style={siderStyle} width={80}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <HeaderBar />
        </Header>
        <Content style={contentStyle}>
          <Body />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
