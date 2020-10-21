import React, { Component } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

class Like extends Component {
  render() {
    return <div>{this.getLikedInfo(this.props.counter)}</div>;
  }

  getLikedInfo = counter => {
    if (counter.liked)
      return (
        <BsHeartFill
          onClick={this.props.onLiked}
          style={{ cursor: "pointer" }}
          color="red"
        />
      );
    else
      return (
        <BsHeart onClick={this.props.onLiked} style={{ cursor: "pointer" }} />
      );
  };
}

export default Like;
