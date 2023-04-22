import { Layout, Space } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: "10vh",
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "100vh",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  return (
    <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
