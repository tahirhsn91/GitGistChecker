import React, { Component } from "react";
import Table from "../../component/Table";

export const columns = [
  {
    title: "Filename",
    dataIndex: "filename",
    key: "filename",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Language",
    dataIndex: "language",
    key: "language",
  },
  {
    title: "File Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "url",
    dataIndex: "raw_url",
    key: "raw_url",
    render: (text: string) => <a>{text}</a>,
  },
];

interface IProps {
  data: Array<any>;
  loading: boolean;
}

export default class extends Component<IProps> {
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        loading={this.props.loading}
      />
    );
  }
}
