import React, { Component } from "react";

class ItemDetail extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <p>
          Movies Details here from ID - {this.props.match.params.id}-
          {this.props.location.search}
        </p>
      </div>
    );
  }
}

export default ItemDetail;
