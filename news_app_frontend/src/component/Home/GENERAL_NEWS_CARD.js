import React, { Component } from "react";

export default class GENERAL_NEWS_CARD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
    };
  }

  render() {
    return (
      <div>
        <div
          onClick={this.props.closeEventListener}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "120px",
            bottom: 0,
            backgroundColor: "#b1c3d7b5",
            zIndex: 1000,
          }}
        >
          <iframe
            onClick={this.clickListener}
            src={this.state.info[0]}
            title="Iframe Example"
            style={{
              position: "fixed",
              top: "15%",
              left: "10%",
              right: "10%",
              bottom: "5%",
              zIndex: 1000,
              overflow: "hidden",
            }}
            height="70%"
            width="80%"
          ></iframe>
        </div>

        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "120px",
            bottom: 0,
            backgroundColor: "#b1c3d7b5",
            zIndex: 999,
          }}
          backdrop-filter="blur(10px)"
        ></div>
      </div>
    );
  }
}
