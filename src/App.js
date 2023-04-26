import { Layout, Space } from "antd";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderBar from "./components/Header/HeaderBar";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const headerStyle = {
    height: "45px",
    lineHeight: "20px",
    backgroundColor: "#FFFFFF",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#eeeeee",
  };
  const siderStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 5px 0px #888888",
  };

  return (
    <Layout>
      <Sider style={siderStyle} width={70}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <HeaderBar />
        </Header>
        <Content style={contentStyle}></Content>
      </Layout>
    </Layout>
  );
};

export default App;
