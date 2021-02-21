import React, { Component } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Layout from "../../component/Layout";

const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  toggle: Function;
}

export default class extends Component<IProps> {
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => this.props.toggle(),
          }
        )}
      </Header>
    );
  }
}
