import React, { Component } from "react";

class List extends Component {
  render() {
    const { onCliked, itemList, onBadgeCount } = this.props;
    return (
      <nav>
        <ul
          className="list-item"
          style={{
            cursor: "pointer",
            backgroundSize: "absolute"
          }}
        >
          {itemList.map(item => (
            <li
              onClick={() => onCliked(item)}
              className={this.getClassName(item)}
              key={item.id}
            >
              {item.name}
              <span
                className="badge badge-tabs badge-secondary"
                style={{ position: "absolute", right: 10 }}
                color="grey"
              >
                <h6>{onBadgeCount(item)}</h6>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  getClassName = item => {
    const className = "list-group-item  ";
    if (this.props.currentGenre === item.name) return className + "active";
    else return className;
  };
}

export default List;
