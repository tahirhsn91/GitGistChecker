import React, { Component } from "react";
import { GithubOutlined } from "@ant-design/icons";
import Layout from "../../component/Layout";
import Menu from "../../component/Menu";

const { Sider } = Layout;

interface SidePanelProps {
  collapsed: boolean;
}

export default class extends Component<SidePanelProps> {
  constructor(props: SidePanelProps) {
    super(props);
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<GithubOutlined />}>
            Gist Checker
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
