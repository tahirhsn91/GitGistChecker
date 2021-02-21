import axios from "axios";
import React, { Component } from "react";
import Col from "../../component/Col";
import Input from "../../component/Input";
import Row from "../../component/Row";
import { getGistDataByUserNameURL } from "./config";
import GistInfo from "./gistInfo";

const { Search } = Input;

export default class shell extends Component {
  state = {
    loading: false,
    data: [],
  };

  getGistData = async (userName: string) => {
    this.setState({ loading: true });

    const gitData = await axios.get(getGistDataByUserNameURL(userName));

    this.setState({ loading: false, data: gitData.data });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Search
            placeholder="Input UserName"
            enterButton="Search"
            size="large"
            loading={this.state.loading}
            onSearch={(text) => this.getGistData(text)}
          />
        </Row>
        <Row>
          <Col span={24}>
            <GistInfo data={this.state.data} loading={this.state.loading} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
