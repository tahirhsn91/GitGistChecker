import React, { Component } from "react";
import Layout from "../../component/Layout";
import Checker from "../checker";
import Header from "./header";
import SidePanel from "./sidePanel";

const { Content } = Layout;

export default class extends Component {
  state = { collapsed: false };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <SidePanel collapsed={this.state.collapsed}>Sider</SidePanel>
        <Layout className="site-layout">
          <Header collapsed={this.state.collapsed} toggle={this.toggle}>
            Header
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 100,
            }}
          >
            <Checker />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
