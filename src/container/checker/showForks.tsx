import axios from "axios";
import React, { Component } from "react";
import { getGistDataURL } from "./config";
import GistInfo from "./gistInfo";

interface IProps {
  id: string;
}

export default class extends Component<IProps> {
  state = {
    loading: true,
    data: [],
  };

  async componentDidMount() {
    const gitData = await axios.get(getGistDataURL(this.props.id));

    this.setState({ loading: false, data: gitData.data });
  }

  render() {
    return <GistInfo data={this.state.data} loading={this.state.loading} />;
  }
}
