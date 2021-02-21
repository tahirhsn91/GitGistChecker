import React, { Component } from "react";
import Table from "../../component/Table";
import { CheckerTableColumn } from "./config";

interface IProps {
  data: Array<any>;
  loading: boolean;
}

export default class extends Component<IProps> {
  render() {
    return (
      <Table
        columns={CheckerTableColumn}
        dataSource={this.props.data}
        loading={this.props.loading}
      />
    );
  }
}
